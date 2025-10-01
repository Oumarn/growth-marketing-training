import { Module, MODULE_STATUSES } from '@/types/modules';

// Import des données de modules
import module1Data from './module-1.json';
import module2Data from './module-2.json';
import module3Data from './module-3.json';
import module4Data from './module-4.json';
import module5Data from './module-5.json';
import module6Data from './module-6.json';
import module7Data from './module-7.json';

// Validation et typage des données
const validateModule = (data: any): Module => {
  return {
    ...data,
    status: data.status as Module['status']
  };
};

// Liste de tous les modules
export const ALL_MODULES: Module[] = [
  validateModule(module1Data),
  validateModule(module2Data),
  validateModule(module3Data),
  validateModule(module4Data),
  validateModule(module5Data),
  validateModule(module6Data),
  validateModule(module7Data),
].sort((a, b) => a.order - b.order);

// Map des modules par slug pour accès rapide
export const MODULES_BY_SLUG: Record<string, Module> = ALL_MODULES.reduce(
  (acc, module) => {
    acc[module.slug] = module;
    return acc;
  },
  {} as Record<string, Module>
);

// Fonctions utilitaires
export const getModuleBySlug = (slug: string): Module | null => {
  return MODULES_BY_SLUG[slug] || null;
};

export const getModuleStatus = (status: Module['status']) => {
  return MODULE_STATUSES[status];
};

export const getModuleNavigation = (currentSlug: string) => {
  const currentModule = getModuleBySlug(currentSlug);
  if (!currentModule) return null;

  return {
    currentModule,
    prevModule: currentModule.prev ? getModuleBySlug(currentModule.prev) : null,
    nextModule: currentModule.next ? getModuleBySlug(currentModule.next) : null,
  };
};

export const getAllModuleSlugs = (): string[] => {
  return ALL_MODULES.map(module => module.slug);
};

export const getModulesWithDownloadCTA = (): string[] => {
  return ALL_MODULES
    .filter(module => module.showDownloadCTA)
    .map(module => module.slug);
};
