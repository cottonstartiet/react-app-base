import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { QueryClient, QueryClientProvider, } from 'react-query'
import Routes from './Routes';
import theme from './theme';

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        {/* <ThemeProvider theme={theme}> */}
        <Routes />
        {/* </ThemeProvider> */}
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

export default App;
