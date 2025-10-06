import { Key } from "react";

export interface Job {
  location: string;
  id: Key | null | undefined;
  logo: string;
  title: string;
  companyName: string;
  experience: string;
  type: string;
  salary: string;
  postedAgo: string;
}

export const mockJobs: Job[] = [
  {
    location: 'Bangalore',
    id: '1',
    logo: 'https://ui-avatars.com/api/?name=Amazon&background=ff9900&color=fff',
    title: 'Full Stack Developer',
    companyName: 'Amazon',
    experience: '1-3 yr Exp',
    type: 'Full-time',
    salary: '12LPA',
    postedAgo: '24h Ago',
  },
  {
    location: 'Mumbai',
    id: '2',
    logo: 'https://ui-avatars.com/api/?name=Tesla&background=e31937&color=fff',
    title: 'Node.js Developer',
    companyName: 'Tesla',
    experience: '2-4 yr Exp',
    type: 'Full-time',
    salary: '15LPA',
    postedAgo: '1d Ago',
  },
  {
    location: 'Chennai',
    id: '3',
    logo: 'https://ui-avatars.com/api/?name=Zoho&background=1F7ED6&color=fff',
    title: 'UX/UI Designer',
    companyName: 'Zoho',
    experience: '1-3 yr Exp',
    type: 'Full-time',
    salary: '10LPA',
    postedAgo: '2d Ago',
  },
  {
    location: 'Remote',  
    id: '4',
    logo: 'https://ui-avatars.com/api/?name=Google&background=4285f4&color=fff',
    title: 'Frontend Developer',
    companyName: 'Google',
    experience: '2-5 yr Exp',
    type: 'Full-time',
    salary: '25LPA',
    postedAgo: '3d Ago',
  },
  {
    location: 'Bangalore',
    id: '5',
    logo: 'https://ui-avatars.com/api/?name=Microsoft&background=00BCF2&color=fff',
    title: 'Software Engineer',
    companyName: 'Microsoft',
    experience: '3-6 yr Exp',
    type: 'Full-time',
    salary: '22LPA',
    postedAgo: '4d Ago',
  },
  {
    location: 'Mumbai',
    id: '6',
    logo: 'https://ui-avatars.com/api/?name=Apple&background=000000&color=fff',
    title: 'iOS Developer',
    companyName: 'Apple',
    experience: '2-4 yr Exp',
    type: 'Full-time',
    salary: '20LPA',
    postedAgo: '5d Ago',
  },
  {
    location: 'Chennai',
    id: '7',
    logo: 'https://ui-avatars.com/api/?name=Meta&background=1877f2&color=fff',
    title: 'React Developer',
    companyName: 'Meta',
    experience: '1-3 yr Exp',
    type: 'Full-time',
    salary: '18LPA',
    postedAgo: '1w Ago',
  },
  {
    location: 'Remote',
    id: '8',
    logo: 'https://ui-avatars.com/api/?name=Netflix&background=E50914&color=fff',
    title: 'DevOps Engineer',
    companyName: 'Netflix',
    experience: '3-5 yr Exp',
    type: 'Full-time',
    salary: '24LPA',
    postedAgo: '1w Ago',
  },
];