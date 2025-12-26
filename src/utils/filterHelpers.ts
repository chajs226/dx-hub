import type { Project } from '../types';

/**
 * Extract unique categories from all projects
 */
export function getUniqueCategories(projects: Project[]): string[] {
  const categories = projects.flatMap(p => p.categories);
  const uniqueCategories = [...new Set(categories)];

  // Return with "전체" as first option
  return ['전체', ...uniqueCategories.filter(c => c !== '전체')];
}

/**
 * Filter projects by category and year
 */
export function filterProjects(
  projects: Project[],
  category: string,
  year: string | null
): Project[] {
  return projects.filter(project => {
    // Category filter
    const matchCategory = category === '전체' ||
                         project.categories.includes(category) ||
                         // Handle NLP alias
                         (category === '자연어처리' && project.categories.includes('NLP')) ||
                         (category === 'NLP' && project.categories.includes('자연어처리'));

    // Year filter
    const matchYear = !year ||
                     year === '전체' ||
                     new Date(project.date).getFullYear().toString() === year;

    return matchCategory && matchYear;
  });
}

/**
 * Search projects by title or content
 */
export function searchProjects(projects: Project[], query: string): Project[] {
  if (!query.trim()) {
    return projects;
  }

  const lowerQuery = query.toLowerCase();

  return projects.filter(project => {
    // Search in title
    if (project.title.toLowerCase().includes(lowerQuery)) {
      return true;
    }

    // Search in subtitle
    if (project.subtitle.toLowerCase().includes(lowerQuery)) {
      return true;
    }

    // Search in content blocks
    return project.content_blocks.some(block => {
      if (block.type === 'text') {
        return block.value.toLowerCase().includes(lowerQuery);
      }
      return false;
    });
  });
}

/**
 * Group projects by category
 */
export function groupByCategory(projects: Project[]): Record<string, Project[]> {
  const grouped: Record<string, Project[]> = {};

  projects.forEach(project => {
    project.categories.forEach(category => {
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(project);
    });
  });

  // Sort projects within each category by date (newest first)
  Object.keys(grouped).forEach(category => {
    grouped[category].sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  });

  return grouped;
}
