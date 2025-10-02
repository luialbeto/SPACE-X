'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type LaunchesContextType = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
};

const LaunchesContext = createContext<LaunchesContextType | undefined>(undefined);

export function LaunchesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <LaunchesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </LaunchesContext.Provider>
  );
}

export function useLaunches() {
  const context = useContext(LaunchesContext);
  if (undefined === context) {
    throw new Error('useLaunches must be used within LaunchesProvider');
  }
  return context;
}