const express = require('express');
const cors = require('cors');

// Simple UUID generator function
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const app = express();
const PORT = 4000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Mock data
let jobs = [
  {
    id: generateUUID(),
    title: 'Full Stack Developer',
    companyName: 'Amazon',
    location: 'Bangalore',
    jobType: 'Full-time',
    salaryRange: '12LPA',
    description: 'We are looking for a skilled Full Stack Developer to join our team.',
    requirements: 'Experience with React, Node.js, and databases',
    responsibilities: 'Develop and maintain web applications, collaborate with team members',
    applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: generateUUID(),
    title: 'Node.js Developer',
    companyName: 'Tesla',
    location: 'Mumbai',
    jobType: 'Full-time',
    salaryRange: '15LPA',
    description: 'Join our backend development team to build scalable applications.',
    requirements: 'Strong experience with Node.js, Express, and MongoDB',
    responsibilities: 'Design and implement backend services, optimize performance',
    applicationDeadline: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: generateUUID(),
    title: 'UX/UI Designer',
    companyName: 'Zoho',
    location: 'Chennai',
    jobType: 'Full-time',
    salaryRange: '10LPA',
    description: 'Create amazing user experiences and intuitive designs.',
    requirements: 'Experience with Figma, Adobe Creative Suite, user research',
    responsibilities: 'Design user interfaces, conduct user research, create prototypes',
    applicationDeadline: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: generateUUID(),
    title: 'Frontend Developer',
    companyName: 'Google',
    location: 'Remote',
    jobType: 'Full-time',
    salaryRange: '25LPA',
    description: 'Build modern web applications with cutting-edge technologies.',
    requirements: 'Expert in React, TypeScript, and modern web technologies',
    responsibilities: 'Develop frontend applications, optimize performance, mentor juniors',
    applicationDeadline: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// Routes
app.get('/jobs', (req, res) => {
  console.log('GET /jobs request received with query:', req.query);
  const { title, location, jobType, minSalary, maxSalary, page = 1, limit = 10 } = req.query;
  
  let filteredJobs = [...jobs];

  // Apply filters
  if (title) {
    filteredJobs = filteredJobs.filter(job => 
      job.title.toLowerCase().includes(title.toString().toLowerCase()) ||
      job.companyName.toLowerCase().includes(title.toString().toLowerCase())
    );
  }

  if (location) {
    filteredJobs = filteredJobs.filter(job => 
      job.location.toLowerCase() === location.toString().toLowerCase()
    );
  }

  if (jobType) {
    filteredJobs = filteredJobs.filter(job => 
      job.jobType.toLowerCase() === jobType.toString().toLowerCase()
    );
  }

  // Sort by creation date (newest first)
  filteredJobs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  console.log(`Returning ${filteredJobs.length} jobs`);
  res.json(filteredJobs);
});

app.get('/jobs/:id', (req, res) => {
  const job = jobs.find(j => j.id === req.params.id);
  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }
  res.json(job);
});

app.post('/jobs', (req, res) => {
  console.log('POST /jobs request received with body:', req.body);
  const newJob = {
    id: generateUUID(),
    ...req.body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  jobs.unshift(newJob); // Add to beginning
  res.status(201).json(newJob);
});

app.put('/jobs/:id', (req, res) => {
  const jobIndex = jobs.findIndex(j => j.id === req.params.id);
  if (jobIndex === -1) {
    return res.status(404).json({ message: 'Job not found' });
  }
  
  jobs[jobIndex] = {
    ...jobs[jobIndex],
    ...req.body,
    updatedAt: new Date().toISOString(),
  };
  
  res.json(jobs[jobIndex]);
});

app.delete('/jobs/:id', (req, res) => {
  const jobIndex = jobs.findIndex(j => j.id === req.params.id);
  if (jobIndex === -1) {
    return res.status(404).json({ message: 'Job not found' });
  }
  
  jobs.splice(jobIndex, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Mock backend server running on http://localhost:${PORT}`);
});

module.exports = app;