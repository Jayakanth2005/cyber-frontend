import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        primaryColor: 'blue',
        fontFamily: 'Inter, sans-serif',
        defaultRadius: 'md',
        colors: {
          blue: [
            '#E3F2FF', '#B3DAFF', '#80C1FF', '#4DA8FF', '#1A8EFF',
            '#0077E6', '#005BB5', '#004083', '#002952', '#001421',
          ],
        },
        white: '#ffffff',
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
)