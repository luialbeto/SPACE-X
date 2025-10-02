'use client';

import { useState, useEffect, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ErrorBoundary({ children }: Props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('ErrorBoundary caught an error:', error.error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <h1 className="text-red-500 text-center p-8">Something went wrong.</h1>;
  }

  return <>{children}</>;
}