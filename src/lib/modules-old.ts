import modulesData from '@/data/modules.json';

export interface Atelier {
  slug: string;
  title: string;
  duration: string;
  description: string;
}

export interface Module {
  order: number;
  slug: string;
  title: string;
  day: number;
  status: 'unchanged' | 'updated' | 'new';
  duration: string;
  description: string;
  ateliers?: Atelier[];
}

export function getModules(): Module[] {
  return modulesData as Module[];
}

export function getModuleBySlug(slug: string): Module | undefined {
  return getModules().find(module => module.slug === slug);
}

export function getNextModule(currentSlug: string): Module | undefined {
  const modules = getModules();
  const currentIndex = modules.findIndex(m => m.slug === currentSlug);
  return currentIndex >= 0 && currentIndex < modules.length - 1 
    ? modules[currentIndex + 1] 
    : undefined;
}

export function getPreviousModule(currentSlug: string): Module | undefined {
  const modules = getModules();
  const currentIndex = modules.findIndex(m => m.slug === currentSlug);
  return currentIndex > 0 
    ? modules[currentIndex - 1] 
    : undefined;
}

export function getModulesByDay(day: number): Module[] {
  return getModules().filter(module => module.day === day);
}
