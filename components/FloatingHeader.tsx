import { Button, Flex, Paper, Text } from '@mantine/core';

const links = ['Home', 'Find Jobs', 'Find Talents', 'About us', 'Testimonials'];

interface FloatingHeaderProps {
  onCreateJobClick: () => void;
}

export function FloatingHeader({ onCreateJobClick }: FloatingHeaderProps) {
  return (
    <Paper
      component="header"
      radius="xl"
      shadow="sm"
      p="lg"
      withBorder
      style={{
        position: 'sticky',
        top: 20,
        zIndex: 1000,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        margin: '20px auto',
        maxWidth: '1200px',
        border: '1px solid rgba(229, 231, 235, 0.5)'
      }}
    >
      <Flex align="center" justify="space-between" wrap="nowrap">
        <Flex align="center" gap="xl" wrap="nowrap" style={{ flexGrow: 1 }}>
          <Flex align="center" gap="sm">
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              backgroundColor: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 600,
              fontSize: '14px'
            }}>
              J
            </div>
            <Text fw={600} size="lg" c="#111827">
              JobPortal
            </Text>
          </Flex>
          
          <Flex gap="lg" wrap="nowrap" style={{ 
            '@media (max-width: 768px)': { display: 'none' }
          }}>
            {links.map((link) => (
              <Text
                key={link}
                component="a"
                href="#"
                fw={500}
                c="#6b7280"
                size="sm"
                style={{
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#374151'
                  }
                }}
              >
                {link}
              </Text>
            ))}
          </Flex>
        </Flex>

        <Button
          radius="lg"
          size="sm"
          style={{
            backgroundColor: '#3b82f6',
            '&:hover': {
              backgroundColor: '#2563eb'
            }
          }}
          onClick={onCreateJobClick}
        >
          Create Job
        </Button>
      </Flex>
    </Paper>
  );
}
