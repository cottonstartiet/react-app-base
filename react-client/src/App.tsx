import React from 'react';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider, } from 'react-query'
import Routes from './Routes';
import theme from './theme';

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
