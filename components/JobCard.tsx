import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  Stack,
  List,
} from '@mantine/core';
import type { Job } from '../src/data/mockjobs';


interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card 
      withBorder 
      radius="md" 
      p="lg" 
      style={{ 
        height: '100%',
        backgroundColor: '#ffffff',
        border: '1px solid #e5e7eb'
      }}
    >
      <Stack gap="md">
        <Group justify="space-between" align="flex-start">
          <div style={{ 
            width: 48, 
            height: 48, 
            borderRadius: 8, 
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Image 
              src={job.logo} 
              alt={job.companyName} 
              h={32} 
              w={32} 
              fit="contain" 
            />
          </div>
          <Badge
            variant="light"
            color="blue"
            size="sm"
            style={{ 
              backgroundColor: '#eff6ff', 
              color: '#1d4ed8',
              fontWeight: 500,
              border: 'none'
            }}
          >
            {job.postedAgo}
          </Badge>
        </Group>

        <div>
          <Text fw={600} fz="lg" c="#111827" mb={4}>
            {job.title}
          </Text>
          <Text fz="sm" c="#6b7280" mb={8}>
            {job.companyName}
          </Text>
        </div>

        <div>
          <Group gap="xs" mb={8}>
            <Text fz="sm" c="#374151">
              {job.experience}
            </Text>
            <Text fz="sm" c="#d1d5db">•</Text>
            <Text fz="sm" c="#374151">
              {job.type}
            </Text>
            <Text fz="sm" c="#d1d5db">•</Text>
            <Text fz="sm" c="#374151">
              {job.salary}
            </Text>
          </Group>
          
          <Group gap="xs">
            <Text fz="sm" c="#6b7280">
              📍 {job.location}
            </Text>
          </Group>
        </div>

        <List
          spacing="xs"
          size="sm"
          c="#6b7280"
          icon={
            <div style={{ 
              width: 4, 
              height: 4, 
              borderRadius: '50%', 
              backgroundColor: '#9ca3af',
              marginTop: 8
            }} />
          }
        >
          <List.Item>Design user interfaces and optimize user experience</List.Item>
          <List.Item>Collaborate with cross-functional teams and stakeholders</List.Item>
          <List.Item>Create wireframes, prototypes, and design documentation</List.Item>
        </List>

        <Button 
          fullWidth 
          mt="auto"
          radius="md"
          size="md"
          style={{
            backgroundColor: '#3b82f6',
            '&:hover': {
              backgroundColor: '#2563eb'
            }
          }}
        >
          Apply Now
        </Button>
      </Stack>
    </Card>
  );
}