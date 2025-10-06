# Job Application Frontend - React.js

This is the frontend application for the Job Application platform, now converted from Next.js to React.js using Vite.

## Tech Stack

- **React 18.2** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Mantine UI** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **React Query** - Data fetching and caching

## Features

- Job listing and filtering
- Create new job postings
- Responsive design with Mantine components
- Modern React patterns with hooks
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
├── index.css         # Global styles
├── types.ts          # TypeScript type definitions
├── data/
│   └── mockjobs.ts   # Mock job data
└── components/       # Shared components moved to root level

components/
├── JobCard.tsx       # Job display component
├── JobFilter.tsx     # Job filtering component
├── CreateJobModal.tsx # Job creation modal
├── FloatingHeader.tsx # Application header
└── Layout.tsx        # Layout wrapper
```

## Key Changes from Next.js

1. **Routing**: Removed Next.js file-based routing (single page app for now)
2. **Build System**: Switched from Next.js to Vite
3. **Entry Point**: Added `main.tsx` as the React app entry point
4. **HTML Template**: Added `index.html` for Vite
5. **Configuration**: Updated configs for Vite, ESLint, and TypeScript
6. **Components**: Moved all components to root-level `components/` directory
7. **Data Structure**: Reorganized data and types under `src/`

## Development Notes

- The app currently runs as a single-page application
- All job data is mocked (stored in `src/data/mockjobs.ts`)
- Components use Mantine UI for consistent styling
- Form handling is done with React Hook Form
- All TypeScript types are defined in `src/types.ts`

## Future Enhancements

- Add React Router for multiple pages
- Connect to the backend API
- Add authentication
- Implement real-time job updates
- Add job application functionality
