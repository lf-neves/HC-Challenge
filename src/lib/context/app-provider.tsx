import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode, StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import theme from '@/theme';
const queryClient = new QueryClient();

function AppProviders({ children }: { children: ReactNode }) {
  return (
    <StrictMode>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ChakraProvider>
    </StrictMode>
  );
}

export { AppProviders };
