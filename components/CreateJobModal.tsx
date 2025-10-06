import { useState } from 'react';
import { Modal, TextInput, Textarea, Button, Select, SimpleGrid, Group } from '@mantine/core';
import type { Job } from '../src/types';

interface CreateJobModalProps {
  opened: boolean;
  onClose: () => void;
  onJobPublished: (newJob: Omit<Job, 'id' | 'postedAgo'>) => void;
}

export function CreateJobModal({ opened, onClose, onJobPublished }: CreateJobModalProps) {
  const [title, setTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState<string | null>(null);
  const [jobType, setJobType] = useState<string | null>(null);
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState<Date | null>(null);

  const handlePublish = () => {
    if (!title || !companyName || !location || !jobType) {
      alert('Please fill all required fields.');
      return;
    }

    onJobPublished({
      title,
      companyName,
      location,
      type: jobType,
      salary,
      logo: 'https://ui-avatars.com/api/?name=' + companyName + '&background=3b82f6&color=fff',
      experience: '1-3 yr Exp',
      description,
      responsibilities: description,
      applicationDeadline: applicationDeadline ? applicationDeadline.toISOString() : '',
    });

    // Reset form
    setTitle('');
    setCompanyName('');
    setLocation(null);
    setJobType(null);
    setSalary('');
    setDescription('');
    setApplicationDeadline(null);

    onClose();
  };

  return (
    <Modal 
      opened={opened} 
      onClose={onClose} 
      title="Create Job Opening" 
      size="lg" 
      centered
      styles={{
        title: {
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#111827'
        }
      }}
    >
      <SimpleGrid cols={2} spacing="md">
        <TextInput 
          label="Job Title" 
          placeholder="Full Stack Developer" 
          value={title} 
          onChange={(e) => setTitle(e.currentTarget.value)} 
          required 
          styles={{
            label: { color: '#374151', fontWeight: 500, marginBottom: 8 },
            input: { border: '1px solid #d1d5db', '&:focus': { borderColor: '#3b82f6' } }
          }}
        />
        <Select 
          label="Company" 
          placeholder="Amazon" 
          data={['Amazon', 'Tesla', 'Google', 'Microsoft', 'Apple', 'Meta']} 
          value={companyName} 
          onChange={(val) => setCompanyName(val || '')} 
          required 
          searchable
          styles={{
            label: { color: '#374151', fontWeight: 500, marginBottom: 8 },
            input: { border: '1px solid #d1d5db', '&:focus': { borderColor: '#3b82f6' } }
          }}
        />
        <Select 
          label="Location" 
          placeholder="Chennai" 
          data={['Chennai', 'Mumbai', 'Bangalore', 'Remote', 'Delhi', 'Hyderabad']} 
          value={location} 
          onChange={setLocation} 
          required 
          styles={{
            label: { color: '#374151', fontWeight: 500, marginBottom: 8 },
            input: { border: '1px solid #d1d5db', '&:focus': { borderColor: '#3b82f6' } }
          }}
        />
        <Select 
          label="Job Type" 
          placeholder="FullTime" 
          data={['Full-time', 'Part-time', 'Contract', 'Internship']} 
          value={jobType} 
          onChange={setJobType} 
          required 
          styles={{
            label: { color: '#374151', fontWeight: 500, marginBottom: 8 },
            input: { border: '1px solid #d1d5db', '&:focus': { borderColor: '#3b82f6' } }
          }}
        />
        <TextInput 
          label="Salary Range" 
          placeholder="12LPA" 
          value={salary} 
          onChange={(e) => setSalary(e.currentTarget.value)} 
          styles={{
            label: { color: '#374151', fontWeight: 500, marginBottom: 8 },
            input: { border: '1px solid #d1d5db', '&:focus': { borderColor: '#3b82f6' } }
          }}
        />
        <TextInput 
          label="Application Deadline" 
          placeholder="YYYY-MM-DD" 
          value={applicationDeadline ? applicationDeadline.toISOString().split('T')[0] : ''} 
          onChange={(e) => {
            const value = e.currentTarget.value;
            setApplicationDeadline(value ? new Date(value) : null);
          }}
          type="date"
          styles={{
            label: { color: '#374151', fontWeight: 500, marginBottom: 8 },
            input: { border: '1px solid #d1d5db', '&:focus': { borderColor: '#3b82f6' } }
          }}
        />
      </SimpleGrid>

      <Textarea 
        mt="md" 
        label="Job Description" 
        placeholder="Describe the role, responsibilities, and requirements..." 
        minRows={4} 
        value={description} 
        onChange={(e) => setDescription(e.currentTarget.value)} 
        styles={{
          label: { color: '#374151', fontWeight: 500, marginBottom: 8 },
          input: { border: '1px solid #d1d5db', '&:focus': { borderColor: '#3b82f6' } }
        }}
      />

      <Group justify="space-between" mt="xl">
        <Button 
          variant="outline" 
          onClick={onClose}
          style={{
            borderColor: '#d1d5db',
            color: '#374151'
          }}
        >
          Save Draft
        </Button>
        <Button 
          onClick={handlePublish}
          style={{
            backgroundColor: '#3b82f6',
            '&:hover': { backgroundColor: '#2563eb' }
          }}
        >
          Publish
        </Button>
      </Group>
    </Modal>
  );
}