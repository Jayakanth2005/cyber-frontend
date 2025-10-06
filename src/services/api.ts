import axios from 'axios';

// Base URL for the backend API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Types matching the backend
export interface BackendJob {
  id: string;
  title: string;
  companyName: string;
  location: string;
  jobType: string;
  salaryRange?: string;
  description: string;
  requirements: string;
  responsibilities: string;
  applicationDeadline: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateJobRequest {
  title: string;
  companyName: string;
  location: string;
  jobType: string;
  salaryRange?: string;
  description: string;
  requirements: string;
  responsibilities: string;
  applicationDeadline: string;
}

export interface JobFilters {
  title?: string;
  location?: string;
  jobType?: string;
  minSalary?: number;
  maxSalary?: number;
  page?: number;
  limit?: number;
}

// API functions
export const jobsApi = {
  // Get all jobs with optional filters
  getAllJobs: async (filters: JobFilters = {}) => {
    const response = await api.get<BackendJob[]>('/jobs', { params: filters });
    return response.data;
  },

  // Get single job by ID
  getJobById: async (id: string) => {
    const response = await api.get<BackendJob>(`/jobs/${id}`);
    return response.data;
  },

  // Create new job
  createJob: async (jobData: CreateJobRequest) => {
    const response = await api.post<BackendJob>('/jobs', jobData);
    return response.data;
  },

  // Update job
  updateJob: async (id: string, jobData: Partial<CreateJobRequest>) => {
    const response = await api.put<BackendJob>(`/jobs/${id}`, jobData);
    return response.data;
  },

  // Delete job
  deleteJob: async (id: string) => {
    await api.delete(`/jobs/${id}`);
  },
};

export default api;