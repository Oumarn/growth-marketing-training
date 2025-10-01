'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface ProgressState {
  completedModules: string[];
  completedAteliers: string[];
}

interface ProgressContextType extends ProgressState {
  markModuleComplete: (slug: string) => void;
  markAtelierComplete: (slug: string) => void;
  isModuleComplete: (slug: string) => boolean;
  isAtelierComplete: (slug: string) => boolean;
  getNextIncompleteModule: () => string | null;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'growth-marketing-progress';

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>({
    completedModules: [],
    completedAteliers: []
  });

  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setProgress(parsed);
        } catch (error) {
          console.error('Failed to parse stored progress:', error);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  const markModuleComplete = (slug: string) => {
    setProgress(prev => ({
      ...prev,
      completedModules: prev.completedModules.includes(slug) 
        ? prev.completedModules 
        : [...prev.completedModules, slug]
    }));
  };

  const markAtelierComplete = (slug: string) => {
    setProgress(prev => ({
      ...prev,
      completedAteliers: prev.completedAteliers.includes(slug)
        ? prev.completedAteliers
        : [...prev.completedAteliers, slug]
    }));
  };

  const isModuleComplete = (slug: string) => {
    return progress.completedModules.includes(slug);
  };

  const isAtelierComplete = (slug: string) => {
    return progress.completedAteliers.includes(slug);
  };

  const getNextIncompleteModule = () => {
    const moduleOrder = ['1-intro', '2-aaarr', '3-cas-pratiques', '4-kpis-automation', '5-experimentation', '6-no-code', '7-ai-par-canal'];
    return moduleOrder.find((slug: string) => !progress.completedModules.includes(slug)) || null;
  };

  const resetProgress = () => {
    setProgress({
      completedModules: [],
      completedAteliers: []
    });
  };

  const value: ProgressContextType = {
    ...progress,
    markModuleComplete,
    markAtelierComplete,
    isModuleComplete,
    isAtelierComplete,
    getNextIncompleteModule,
    resetProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
