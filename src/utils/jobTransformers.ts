import { Job } from '../data/mockjobs';
import { BackendJob, CreateJobRequest } from '../services/api';

// Transform backend job to frontend job format
export const transformBackendJobToFrontend = (backendJob: BackendJob): Job => {
  return {
    id: backendJob.id,
    title: backendJob.title,
    companyName: backendJob.companyName,
    location: backendJob.location,
    type: backendJob.jobType,
    experience: '1-3 yr Exp', // Default value since backend doesn't have this field
    salary: backendJob.salaryRange || 'Not specified',
    logo: `https://ui-avatars.com/api/?name=${encodeURIComponent(backendJob.companyName)}&background=3b82f6&color=fff`,
    postedAgo: calculateTimeAgo(backendJob.createdAt),
    description: backendJob.description,
    responsibilities: backendJob.responsibilities,
    applicationDeadline: backendJob.applicationDeadline,
  };
};

// Transform frontend job data to backend format for creation
export const transformFrontendJobToBackend = (frontendJob: Omit<Job, 'id' | 'postedAgo'>): CreateJobRequest => {
  return {
    title: frontendJob.title,
    companyName: frontendJob.companyName,
    location: frontendJob.location,
    jobType: frontendJob.type,
    salaryRange: frontendJob.salary,
    description: frontendJob.description || '',
    requirements: frontendJob.description || '', // Using description as requirements for now
    responsibilities: frontendJob.responsibilities || frontendJob.description || '',
    applicationDeadline: frontendJob.applicationDeadline || new Date().toISOString(),
  };
};

// Calculate time ago from date string
const calculateTimeAgo = (dateString: string): string => {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'Just now';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h ago`;
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d ago`;
  } else {
    const weeks = Math.floor(diffInSeconds / 604800);
    return `${weeks}w ago`;
  }
};