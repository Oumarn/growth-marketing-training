export interface Resource {
  label: string;
  path: string;
  type: 'pdf' | 'zip' | 'json' | 'external';
  description: string;
}

export interface AgendaItem {
  start: string;
  end: string;
  title: string;
  type: 'theory' | 'workshop' | 'wrapup';
  module?: string;
  description: string;
}
