'use client';

import { ApolloProvider } from '@apollo/client/react';
import { client } from '@/lib/apollo-client';
import { LaunchesProvider } from '@/lib/context/launches-context';
import ErrorBoundary from '@/components/organisms/error-boundary';
import { Toaster } from '@/components/ui/toaster';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <LaunchesProvider>
        <ErrorBoundary>
          {children}
          <Toaster />
        </ErrorBoundary>
      </LaunchesProvider>
    </ApolloProvider>
  );
}