export interface ModuleObjective {
  text: string;
  icon?: string;
}

export interface ModuleStatus {
  type: 'nouveau' | 'mis-a-jour' | 'unchanged' | 'updated';
  label: string;
  color: string;
}

export interface Atelier {
  slug: string;
  title: string;
  duration: string;
  description: string;
}

export interface Module {
  slug: string;
  order: number;
  title: string;
  duration: string;
  status: ModuleStatus['type'];
  description: string;
  objectives: string[];
  prev: string | null;
  next: string | null;
  hasCustomComponent: boolean;
  showDownloadCTA: boolean;
  ateliers?: Atelier[];
  content?: string;
}

export interface ModuleNavigation {
  currentSlug: string;
  prevModule: Module | null;
  nextModule: Module | null;
}

export interface ModulePageProps {
  params: Promise<{ slug: string }>;
}

export const MODULE_STATUSES: Record<ModuleStatus['type'], ModuleStatus> = {
  'nouveau': { type: 'nouveau', label: 'Nouveau', color: 'bg-green-100 text-green-800' },
  'mis-a-jour': { type: 'mis-a-jour', label: 'Mis à jour', color: 'bg-blue-100 text-blue-800' },
  'updated': { type: 'updated', label: 'Mis à jour', color: 'bg-blue-100 text-blue-800' },
  'unchanged': { type: 'unchanged', label: 'Disponible', color: 'bg-gray-100 text-gray-800' }
};
