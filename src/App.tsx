import { useState, useEffect } from 'react';
import { Container, SimpleGrid, Box, Text, Loader, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FloatingHeader } from '../components/FloatingHeader';
import { JobCard } from '../components/JobCard';
import { Job } from './data/mockjobs';
import { JobFilter } from '../components/JobFilter';
import { CreateJobModal } from '../components/CreateJobModal';
import { jobsApi } from './services/api';
import { transformBackendJobToFrontend, transformFrontendJobToBackend } from './utils/jobTransformers';

function App() {
  const [opened, { open, close }] = useDisclosure(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState<string | null>(null);
  const [jobType, setJobType] = useState<string | null>(null);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 200000]);

  // Fetch jobs from backend
  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching jobs from backend...');
      const backendJobs = await jobsApi.getAllJobs({
        title: searchTerm || undefined,
        location: location || undefined,
        jobType: jobType || undefined,
        minSalary: salaryRange[0],
        maxSalary: salaryRange[1],
      });
      console.log('Received jobs from backend:', backendJobs);
      const transformedJobs = backendJobs.map(transformBackendJobToFrontend);
      console.log('Transformed jobs:', transformedJobs);
      setJobs(transformedJobs);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setError('Failed to load jobs. Please make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  // Load jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  // Refetch jobs when filters change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchJobs();
    }, 500); // Debounce API calls

    return () => clearTimeout(timeoutId);
  }, [searchTerm, location, jobType, salaryRange]);

  const handleCreateJob = async (newJobData: Omit<Job, 'id' | 'postedAgo'>) => {
    try {
      console.log('Creating job:', newJobData);
      const backendJobData = transformFrontendJobToBackend(newJobData);
      console.log('Backend job data:', backendJobData);
      const createdJob = await jobsApi.createJob(backendJobData);
      console.log('Job created successfully:', createdJob);
      // Refresh the job list
      await fetchJobs();
    } catch (err) {
      console.error('Error creating job:', err);
      setError('Failed to create job. Please try again.');
    }
  };

  // Since we're filtering on the backend, we can display all jobs
  const filteredJobs = jobs;

  return (
    <Box bg="#f9fafb" mih="100vh">
      <FloatingHeader onCreateJobClick={open} />
      <JobFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        location={location}
        setLocation={setLocation}
        jobType={jobType}
        setJobType={setJobType}
        salaryRange={salaryRange}
        setSalaryRange={setSalaryRange}
      />
      <Container size="xl" py="xl">
        {error && (
          <Text ta="center" c="red" mt="xl" size="lg">
            {error}
          </Text>
        )}
        
        {loading ? (
          <Center mt="xl">
            <Loader size="lg" />
          </Center>
        ) : filteredJobs.length > 0 ? (
          <SimpleGrid 
            cols={{ base: 1, xs: 1, sm: 2, md: 3, lg: 4 }} 
            spacing="lg" 
            verticalSpacing="lg"
          >
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </SimpleGrid>
        ) : !error ? (
          <Text ta="center" c="dimmed" mt="xl" size="lg">
            No jobs found matching your criteria.
          </Text>
        ) : null}
      </Container>
      <CreateJobModal opened={opened} onClose={close} onJobPublished={handleCreateJob} />
    </Box>
  );
}

export default App;