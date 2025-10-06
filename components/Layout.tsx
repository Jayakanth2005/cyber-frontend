import { AppShell, Box, ScrollArea, Text } from '@mantine/core';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppShell padding="md">
      {/* Header */}
      <AppShell.Header>
        <Box
  style={{
    height: 60,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16,
    borderBottom: '1px solid #e0e0e0',
  }}
>
  <Text fw={700} fz="xl">
    Jobs Dashboard
  </Text>
</Box>

      </AppShell.Header>

      {/* Navbar */}
      <AppShell.Navbar>
        <Box
  style={{
    width: 220,
    height: '100%',
    padding: 16,
    borderRight: '1px solid #e0e0e0',
  }}
>
  <ScrollArea style={{ height: '100%' }}>
    <Text fw={700} mb="md">
      Job Management
    </Text>
  </ScrollArea>
</Box>

      </AppShell.Navbar>

      {/* Main content */}
      <AppShell.Main>
        <ScrollArea style={{ height: 'calc(100vh - 60px)' }}>{children}</ScrollArea>
      </AppShell.Main>
    </AppShell>
  );
}
