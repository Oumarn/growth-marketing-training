import { Module, MODULE_STATUSES } from '@/types/modules';

// Configuration directe des modules
const MODULES_CONFIG: Module[] = [
  {
    slug: "module-1/introduction-growth-marketing",
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
    next: "module-2/framework-aaarrr",
    hasCustomComponent: true,
    showDownloadCTA: false
  },
  {
    slug: "module-2/framework-aaarrr",
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
    prev: "module-1/introduction-growth-marketing",
    next: "module-3/cas-pratiques-mini-campagne",
    hasCustomComponent: true,
    showDownloadCTA: false,
    ateliers: [
      {
        slug: "buyer-persona",
        title: "Buyer Persona Workshop",
        duration: "45min",
        description: "Créer des personas détaillés pour votre audience"
      },
      {
        slug: "funnel-canvas",
        title: "Funnel Canvas",
        duration: "45min",
        description: "Mapper votre funnel de conversion complet"
      }
    ]
  },
  {
    slug: "module-3/cas-pratiques-mini-campagne",
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
    prev: "module-2/framework-aaarrr",
    next: "module-4/kpis-dashboard",
    hasCustomComponent: true,
    showDownloadCTA: true,
    ateliers: [
      {
        slug: "mini-campagne",
        title: "Mini-Campagne Workshop", 
        duration: "55min",
        description: "Concevoir une campagne testable (landing + ads + email)"
      }
    ]
  },
  {
    slug: "module-4/kpis-dashboard",
    order: 4,
    title: "Module 4 — KPIs & Dashboard",
    duration: "90min",
    status: "updated",
    description: "Taxonomie claire, NSM input tree, formules clés + 3 types de dashboards",
    objectives: [
      "Construire une taxonomie de métriques (NSM, inputs, leading/lagging)",
      "Modéliser un NSM input tree actionnable",
      "Maîtriser les formules AAARRR & unit economics",
      "Concevoir un dashboard utile (exec/squad/experiment) + rituels"
    ],
    prev: "module-3/cas-pratiques-mini-campagne",
    next: "module-5/experimentation-ab-testing",
    hasCustomComponent: true,
    showDownloadCTA: true,
    ateliers: [
      {
        slug: "dashboard-express",
        title: "Dashboard Express Workshop",
        duration: "15min",
        description: "NSM tree + wireframe dashboard + calculs essentiels"
      }
    ]
  },
  {
    slug: "module-5/experimentation-ab-testing",
    order: 5,
    title: "Module 5 — Expérimentation & A/B Testing",
    duration: "120min",
    status: "updated",
    description: "De l'idée à la décision : hypothèses testables, types de tests, analyse et décision",
    objectives: [
      "Passer d'idées à des hypothèses testables (Experiment Card)",
      "Choisir le bon type de test (A/B, holdout, feature flag…)",
      "Fixer KPI primaire/secondaires/guardrails alignés NSM", 
      "Planifier (MDE, durée) et analyser correctement (uplift, IC/p-value)",
      "Décider start / iterate / kill et capitaliser (log des apprentissages)"
    ],
    prev: "module-4/kpis-dashboard",
    next: "module-6/outils-no-code-automation",
    hasCustomComponent: true,
    showDownloadCTA: true,
    ateliers: [
      {
        slug: "experiment-card",
        title: "Experiment Card",
        duration: "30min",
        description: "Créer vos premières cartes d'expérimentation"
      }
    ]
  },
  {
    slug: "module-6/outils-no-code-automation",
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
    prev: "module-5/experimentation-ab-testing",
    next: "module-7/ia-par-canal-marketing",
    hasCustomComponent: true,
    showDownloadCTA: true,
    ateliers: [
      {
        slug: "no-code-starter",
        title: "No-Code Automation Setup",
        duration: "60-90min",
        description: "Construire vos premiers workflows automatisés"
      }
    ]
  },
  {
    slug: "module-7/ia-par-canal-marketing",
    order: 7,
    title: "Module 7 — Canaux : SEO • SEA • Social • Emailing",
    duration: "120min",
    status: "nouveau",
    description: "AAARRR appliqué par canal avec IA et automation",
    objectives: [
      "Diagnostiquer chaque canal avec les bons KPIs (AAARRR)",
      "Mettre en place des quick wins + plan 30-60-90 par canal",
      "Utiliser IA (génération/analyse) et n8n (workflows) pour l'itération",
      "Relier systématiquement aux inputs NSM & au Dashboard"
    ],
    prev: "module-6/outils-no-code-automation",
    next: null,
    hasCustomComponent: true,
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

export const getAllModules = (): Module[] => {
  return MODULES_CONFIG;
};

export const getModules = (): Module[] => {
  return MODULES_CONFIG;
};

export const getModulesByDay = () => {
  return {
    1: MODULES_CONFIG.filter(m => m.order <= 3),
    2: MODULES_CONFIG.filter(m => m.order > 3)
  };
};

export const getNextModule = (currentSlug: string): Module | null => {
  const currentModule = getModuleBySlug(currentSlug);
  return currentModule?.next ? getModuleBySlug(currentModule.next) : null;
};

export const getPreviousModule = (currentSlug: string): Module | null => {
  const currentModule = getModuleBySlug(currentSlug);
  return currentModule?.prev ? getModuleBySlug(currentModule.prev) : null;
};
