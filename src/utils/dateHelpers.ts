import type { Project } from '../types';

/**
 * Extract unique years from projects, sorted in descending order
 */
export function getUniqueYears(projects: Project[]): string[] {
  const years = projects.map(p => {
    const date = new Date(p.date);
    return date.getFullYear().toString();
  });

  // Remove duplicates and sort descending
  return [...new Set(years)].sort((a, b) => parseInt(b) - parseInt(a));
}

/**
 * Format date string to Korean format
 * Example: "2024-03-15" => "2024년 3월"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return `${year}년 ${month}월`;
}

/**
 * Sort projects by date in descending order (newest first)
 */
export function sortByDate(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Group projects by year
 */
export function groupByYear(projects: Project[]): Record<string, Project[]> {
  return projects.reduce((acc, project) => {
    const year = new Date(project.date).getFullYear().toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(project);
    return acc;
  }, {} as Record<string, Project[]>);
}
