import { Module, MODULE_STATUSES } from '@/types/modules';

// Configuration directe des modules
const MODULES_CONFIG: Module[] = [
  {
    slug: "1-intro",
    order: 1,
    title: "Module 1 — Introduction au Growth Marketing",
    duration: "90min",
    status: "unchanged",
    description: "Fondements, métriques et structures d'équipe",
    objectives: [
      "Distinguer Growth Marketing vs marketing traditionnel",
      "Comprendre la logique AAARRR (vue d'ensemble)",
      "Adopter les principes clés: NSM, boucles, expérimentation",
      "Savoir proposer une North Star Metric simple"
    ],
    prev: null,
    next: "2-aaarr",
    hasCustomComponent: true,
    showDownloadCTA: false
  },
  {
    slug: "2-aaarr",
    order: 2,
    title: "Module 2 — Framework AAARRR",
    duration: "120min",
    status: "updated",
    description: "Méthode complète d'optimisation du funnel",
    objectives: [
      "Maîtriser les 6 métriques AAARRR et leurs KPIs",
      "Savoir calculer et interpréter chaque métrique",
      "Diagnostiquer les goulots d'étranglement de votre funnel",
      "Utiliser la méthode ICE pour prioriser les améliorations"
    ],
    prev: "1-intro",
    next: "3-cas-pratiques",
    hasCustomComponent: true,
    showDownloadCTA: false
  },
  {
    slug: "3-cas-pratiques",
    order: 3,
    title: "Module 3 — Cas pratiques & mini-campagne",
    duration: "120min",
    status: "updated",
    description: "Mécaniques réplicables (Dropbox, HubSpot, Airbnb, PayPal) + atelier mini-campagne",
    objectives: [
      "Extraire des mécaniques réplicables de cas emblématiques",
      "Formuler une proposition de valeur claire et testable",
      "Concevoir une mini-campagne (landing, ads, email) avec KPIs",
      "Préparer 3 expériences A/B rapides à lancer"
    ],
    prev: "2-aaarr",
    next: "4-kpis-automation",
    hasCustomComponent: true,
    showDownloadCTA: true
  },
  {
    slug: "4-kpis-automation",
    order: 4,
    title: "Module 4 — KPIs & Dashboard",
    duration: "90min",
    status: "unchanged",
    description: "Métriques avancées et tableaux de bord",
    objectives: [
      "Définir et tracker les KPIs essentiels",
      "Créer des dashboards automatisés",
      "Interpréter les données pour l'action",
      "Optimiser les métriques de performance"
    ],
    prev: "3-cas-pratiques",
    next: "5-experimentation",
    hasCustomComponent: false,
    showDownloadCTA: false
  },
  {
    slug: "5-experimentation",
    order: 5,
    title: "Module 5 — A/B Testing & Expérimentation",
    duration: "120min",
    status: "unchanged",
    description: "Méthodologie complète d'expérimentation",
    objectives: [
      "Concevoir des expériences A/B valides",
      "Calculer la significativité statistique",
      "Prioriser les tests avec ICE",
      "Interpréter et actioner les résultats"
    ],
    prev: "4-kpis-automation",
    next: "6-no-code",
    hasCustomComponent: false,
    showDownloadCTA: false
  },
  {
    slug: "6-no-code",
    order: 6,
    title: "Module 6 — Outils No-Code & Automation",
    duration: "150min",
    status: "updated",
    description: "Stack technologique sans développement",
    objectives: [
      "Maîtriser les outils no-code essentiels",
      "Automatiser les tâches répétitives",
      "Créer des workflows de croissance",
      "Intégrer les outils entre eux"
    ],
    prev: "5-experimentation",
    next: "7-ai-par-canal",
    hasCustomComponent: false,
    showDownloadCTA: true
  },
  {
    slug: "7-ai-par-canal",
    order: 7,
    title: "Module 7 — IA par Canal Marketing",
    duration: "120min",
    status: "nouveau",
    description: "Applications IA : SEO, SEA, Social, Email",
    objectives: [
      "Appliquer l'IA au SEO et content marketing",
      "Optimiser les campagnes SEA avec l'IA",
      "Automatiser le social media avec l'IA",
      "Personnaliser l'email marketing via l'IA"
    ],
    prev: "6-no-code",
    next: null,
    hasCustomComponent: false,
    showDownloadCTA: true
  }
];

// Map des modules par slug pour accès rapide
export const MODULES_BY_SLUG: Record<string, Module> = MODULES_CONFIG.reduce(
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

export const getModulesWithDownloadCTA = (): string[] => {
  return MODULES_CONFIG
    .filter(module => module.showDownloadCTA)
    .map(module => module.slug);
};
