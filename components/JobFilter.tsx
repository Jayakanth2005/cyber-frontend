import {
  Container,
  TextInput,
  Select,
  RangeSlider,
  Text,
  Group,
} from '@mantine/core';
import { IconSearch, IconMapPin, IconBriefcase } from '@tabler/icons-react';

// Define the types for the props this component will receive
interface JobFilterProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  location: string | null;
  setLocation: (value: string | null) => void;
  jobType: string | null;
  setJobType: (value: string | null) => void;
  salaryRange: [number, number];
  setSalaryRange: (value: [number, number]) => void;
}

export function JobFilter({
  searchTerm,
  setSearchTerm,
  location,
  setLocation,
  jobType,
  setJobType,
  salaryRange,
  setSalaryRange,
}: JobFilterProps) {
  const formatSalary = (value: number) => {
    return `₹${Math.round(value / 1000)}k`;
  };

  return (
    <Container size="lg" py="md">
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          border: '1px solid #e5e7eb'
        }}
      >
        <Group grow align="flex-start" gap="lg">
          <div>
            <Text size="sm" fw={500} c="#374151" mb={8}>Search Jobs</Text>
            <TextInput
              placeholder="Search by job title, role"
              leftSection={<IconSearch size={18} stroke={1.5} color="#9ca3af" />}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.currentTarget.value)}
              styles={{
                input: { 
                  border: 'none', 
                  backgroundColor: '#f9fafb',
                  '&:focus': { backgroundColor: '#f3f4f6' }
                }
              }}
            />
          </div>
          
          <div>
            <Text size="sm" fw={500} c="#374151" mb={8}>Location</Text>
            <Select
              placeholder="Preferred Location"
              leftSection={<IconMapPin size={18} stroke={1.5} color="#9ca3af" />}
              data={['Chennai', 'Mumbai', 'Bangalore', 'Remote']}
              value={location}
              onChange={setLocation}
              clearable
              styles={{
                input: { 
                  border: 'none', 
                  backgroundColor: '#f9fafb',
                  '&:focus': { backgroundColor: '#f3f4f6' }
                }
              }}
            />
          </div>
          
          <div>
            <Text size="sm" fw={500} c="#374151" mb={8}>Job Type</Text>
            <Select
              placeholder="Job type"
              leftSection={<IconBriefcase size={18} stroke={1.5} color="#9ca3af" />}
              data={['Full-time', 'Part-time', 'Contract', 'Internship']}
              value={jobType}
              onChange={setJobType}
              clearable
              styles={{
                input: { 
                  border: 'none', 
                  backgroundColor: '#f9fafb',
                  '&:focus': { backgroundColor: '#f3f4f6' }
                }
              }}
            />
          </div>
          
          <div>
            <Group justify="space-between" mb={8}>
              <Text size="sm" fw={500} c="#374151">
                Salary Range
              </Text>
              <Text size="sm" fw={500} c="#6b7280">
                {formatSalary(salaryRange[0])} - {formatSalary(salaryRange[1])}
              </Text>
            </Group>
            <div style={{ padding: '12px 16px', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
              <RangeSlider
                min={0}
                max={200000}
                step={1000}
                value={salaryRange}
                onChange={setSalaryRange}
                styles={{
                  bar: { backgroundColor: '#3b82f6' },
                  thumb: { 
                    borderWidth: '2px', 
                    borderColor: '#3b82f6',
                    backgroundColor: 'white'
                  }
                }}
              />
            </div>
          </div>
        </Group>
      </div>
    </Container>
  );
}