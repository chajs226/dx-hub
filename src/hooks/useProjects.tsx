import { useState, useEffect } from 'react';
import type { Project } from '../types';

/**
 * Custom hook to load projects from JSON file
 */
export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        // Load from data/projects_data.json
        const response = await fetch('/data/projects_data.json');

        if (!response.ok) {
          throw new Error(`Failed to load projects: ${response.statusText}`);
        }

        const data = await response.json();
        setProjects(data);
        setError(null);
      } catch (err) {
        console.error('Error loading projects:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return { projects, loading, error };
}
