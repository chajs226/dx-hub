import React, { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react';
import type { Project, AppState, ExpandedMedia } from '../types';
import { useProjects } from '../hooks/useProjects';
import { getUniqueYears, sortByDate } from '../utils/dateHelpers';
import { getUniqueCategories, filterProjects } from '../utils/filterHelpers';

interface AppContextType extends AppState {
  setSelectedCategory: (category: string) => void;
  setSelectedYear: (year: string | null) => void;
  setSelectedProjectId: (id: string | null) => void;
  setExpandedMedia: (media: ExpandedMedia | null) => void;
  filteredProjects: Project[];
  availableYears: string[];
  availableCategories: string[];
  loading: boolean;
  error: Error | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  // Load projects data
  const { projects: loadedProjects, loading, error } = useProjects();

  // State
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [expandedMedia, setExpandedMedia] = useState<ExpandedMedia | null>(null);

  // Update projects when loaded
  useEffect(() => {
    if (loadedProjects.length > 0) {
      const sorted = sortByDate(loadedProjects);
      setProjects(sorted);

      // Auto-select first project
      if (!selectedProjectId && sorted.length > 0) {
        setSelectedProjectId(sorted[0].id);
      }
    }
  }, [loadedProjects]);

  // Computed values with memoization
  const filteredProjects = useMemo(() => {
    return filterProjects(projects, selectedCategory, selectedYear);
  }, [projects, selectedCategory, selectedYear]);

  const availableYears = useMemo(() => {
    return getUniqueYears(projects);
  }, [projects]);

  const availableCategories = useMemo(() => {
    return getUniqueCategories(projects);
  }, [projects]);

  const value: AppContextType = {
    projects,
    selectedCategory,
    selectedYear,
    selectedProjectId,
    expandedMedia,
    setSelectedCategory,
    setSelectedYear,
    setSelectedProjectId,
    setExpandedMedia,
    filteredProjects,
    availableYears,
    availableCategories,
    loading,
    error,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
