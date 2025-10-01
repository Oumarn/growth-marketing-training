import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Clock, Users, Target, Download, CheckCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import MarkCompleteButtonClient from '@/components/MarkCompleteButtonClient';
import { DashboardExpressWorkshop } from '@/components/DashboardExpressWorkshop';


const ateliers: Record<string, any> = {
  'buyer-persona': {
    title: 'Buyer Persona Workshop',
    duration: '45min',
    description: 'Créez des personas détaillés pour mieux comprendre votre audience cible',
    objectives: [
      'Identifier les segments clés de votre audience',
      'Créer des personas détaillés avec demographics et psychographics',
      'Définir les pain points et motivations de chaque persona',
      'Adapter votre messaging pour chaque segment'
    ],
    materials: [
      'Template Buyer Persona',
      'Questionnaire de recherche utilisateur',
      'Guide d\'interview client'
    ],
    steps: [
      {
        title: 'Phase 1: Recherche (15min)',
        content: 'Analysez vos données existantes (Analytics, CRM, Support) pour identifier les patterns dans votre audience actuelle.'
      },
      {
        title: 'Phase 2: Création (20min)',
        content: 'Utilisez le template pour créer 2-3 personas principaux avec leurs caractéristiques démographiques, comportementales et motivationnelles.'
      },
      {
        title: 'Phase 3: Validation (10min)',
        content: 'Reviewez vos personas avec votre équipe et identifiez les hypothèses à valider avec de vraies données clients.'
      }
    ],
    deliverables: [
      '2-3 personas documentés',
      'Plan de validation des hypothèses',
      'Recommandations messaging par persona'
    ]
  },
  'funnel-canvas': {
    title: 'Funnel Canvas',
    duration: '45min',
    description: 'Mappez votre funnel de conversion complet et identifiez les points d\'optimisation',
    objectives: [
      'Visualiser votre funnel actuel étape par étape',
      'Identifier les points de friction majeurs',
      'Calculer les taux de conversion à chaque étape',
      'Prioriser les optimisations à impact'
    ],
    materials: [
      'Template Funnel Canvas',
      'Calculateur de conversion',
      'Checklist d\'optimisation'
    ],
    steps: [
      {
        title: 'Phase 1: Mapping (20min)',
        content: 'Dessinez votre funnel actuel avec toutes les étapes depuis la première interaction jusqu\'à la conversion finale.'
      },
      {
        title: 'Phase 2: Métriques (15min)',
        content: 'Ajoutez les volumes et taux de conversion à chaque étape. Identifiez où vous perdez le plus d\'utilisateurs.'
      },
      {
        title: 'Phase 3: Optimisation (10min)',
        content: 'Listez 3-5 actions d\'optimisation prioritaires basées sur l\'impact potentiel et la facilité d\'implémentation.'
      }
    ],
    deliverables: [
      'Funnel Canvas complet',
      'Analyse des points de friction',
      'Plan d\'optimisation priorisé'
    ]
  },
  'experiment-card': {
    title: 'Atelier Express — "Design & Size"',
    duration: '30-40min',
    description: 'Créez vos premiers tests A/B structurés : de l\'idée à la décision avec templates et outils fournis',
    objectives: [
      'Passer d\'idées à des hypothèses testables (Experiment Card)',
      'Choisir le bon type de test et fixer KPI primaire/secondaires/guardrails',
      'Planifier (MDE, durée) et définir critères start/iterate/kill',
      'Maîtriser les templates et outils pour lancer vos tests'
    ],
    materials: [
      'Template Experiment Card (format standard 1 page)',
      'Calculateur MDE (Google Sheets avec formules)',
      'Experiments Log (tracking des apprentissages)',
      'Templates MVT & Bandits'
    ],
    phases: [
      {
        title: 'Idéation',
        duration: '5min',
        content: '5 idées → score ICE → top 2',
        deliverable: '2 idées de tests priorisées',
        tips: [
          'Brainstormez 5 idées d\'optimisation sur votre funnel',
          'Scorez chaque idée sur Impact, Confidence, Ease (1-3)',
          'Sélectionnez les 2 meilleures pour créer des Experiment Cards'
        ]
      },
      {
        title: 'Experiment Cards',
        duration: '10min',
        content: 'Hypothèse, KPI, design, tracking, seuils',
        deliverable: '2 Experiment Cards complètes',
        tips: [
          'Utilisez la formule SMART : Chez [segment], [changement] augmentera [KPI] de +X pts en [période], car [insight]',
          '1 seul KPI primaire + secondaires + guardrails alignés NSM',
          'Définissez variantes A/B, ciblage et plan de tracking'
        ]
      },
      {
        title: 'Dimensionnement',
        duration: '10min',
        content: 'Baseline + MDE → échantillon & durée',
        deliverable: 'Estimation trafic/durée par test',
        tips: [
          'MDE = Minimum Detectable Effect (amélioration minimale à détecter)',
          'Baseline basse (2-5%) + MDE petit (+1-2 pts) = 1000-2000 par variante',
          'Durée : 7-14 jours minimum, cycle hebdo complet'
        ]
      },
      {
        title: 'Présentation',
        duration: '5min',
        content: '1 slide/test — décision & next step',
        deliverable: 'Critères start/iterate/kill + planning Q1 2025',
        tips: [
          'START : effet ≥ seuil + pas d\'impact négatif guardrails',
          'ITERATE : signaux positifs mais insuffisants',
          'KILL : effet nul/négatif + documenter l\'apprentissage'
        ]
      }
    ],
    steps: [
      {
        title: 'Phase 1: Idéation & Priorisation (5min)',
        content: 'Brainstormez 5 idées d\'optimisation, scorez-les ICE (Impact-Confidence-Ease 1-3) et sélectionnez le top 2 pour vos Experiment Cards.'
      },
      {
        title: 'Phase 2: Création des Experiment Cards (10min)',  
        content: 'Pour chaque idée sélectionnée, créez une Experiment Card complète avec hypothèse SMART, KPI primaire unique, secondaires, guardrails et design des variantes.'
      },
      {
        title: 'Phase 3: Dimensionnement & Planification (10min)',
        content: 'Calculez la taille d\'échantillon nécessaire selon votre baseline et MDE souhaité. Estimez la durée selon votre trafic quotidien.'
      },
      {
        title: 'Phase 4: Critères de Décision & Next Steps (5min)',
        content: 'Définissez vos seuils pour Start/Iterate/Kill et planifiez le lancement (owner, timing, outils) pour Q1 2025.'
      }
    ],
    deliverables: [
      '2 Experiment Cards complètes (hypothèse + KPIs + design)',
      'Estimation trafic/durée par test avec calculs MDE',
      'Critères start/iterate/kill définis avec seuils',
      'Planning de lancement Q1 2025 (owner + timing + outils)'
    ],
    templates: [
      {
        name: 'Experiment Card Template',
        description: 'Format standard 1 page',
        icon: '📝',
        downloadUrl: '/downloads/experiment-card-template.md'
      },
      {
        name: 'Calculateur MDE',
        description: 'Google Sheets avec formules',
        icon: '🧮',
        downloadUrl: '/downloads/mde-calculator-template.csv'
      },
      {
        name: 'Log des Expériences',
        description: 'Tracking des apprentissages',
        icon: '📊',
        downloadUrl: '/downloads/experiments-log-template.csv'
      },
      {
        name: 'Templates MVT & Bandits',
        description: 'Tests avancés',
        icon: '🧪',
        downloadUrl: '/downloads/mvt-template.md'
      }
    ]
  },
  'no-code-starter': {
    title: 'No-Code Automation Setup',
    duration: '60-90min',
    description: 'Construisez vos premiers workflows automatisés sans code',
    objectives: [
      'Configurer vos premiers outils no-code',
      'Créer un workflow d\'onboarding automatisé',
      'Mettre en place un système de lead scoring',
      'Automatiser votre reporting'
    ],
    materials: [
      'Accès Zapier/Make (gratuit)',
      'Templates de workflows',
      'Guide de configuration étape par étape'
    ],
    steps: [
      {
        title: 'Phase 1: Setup (20min)',
        content: 'Créez vos comptes sur Zapier et les outils connectés (Gmail, Google Sheets, etc.). Configurez les permissions et API keys.'
      },
      {
        title: 'Phase 2: Premier Workflow (30min)',
        content: 'Construisez un workflow simple : Nouveau lead (formulaire) → Ajout CRM → Email de bienvenue → Notification équipe.'
      },
      {
        title: 'Phase 3: Test & Scale (20min)',
        content: 'Testez votre workflow avec de fausses données, puis créez 1-2 workflows additionnels pour d\'autres cas d\'usage.'
      }
    ],
    deliverables: [
      '2-3 workflows automatisés fonctionnels',
      'Documentation des processus',
      'Plan de scaling des automations'
    ]
  },
  'mini-campagne': {
    title: 'Mini-Campagne Workshop',
    duration: '55min',
    description: 'Concevez une campagne de growth marketing complète avec landing page, ads et email sequence',
    objectives: [
      'Définir une stratégie de campagne cohérente',
      'Créer une landing page optimisée pour la conversion',
      'Concevoir des ads performantes (Facebook/Google)',
      'Structurer une email sequence de nurturing',
      'Définir les KPIs et plan de mesure'
    ],
    materials: [
      'Cadres PAS & AIDA',
      'Templates Landing Page & Email',
      'Exemples de plans de test',
      'Dashboard de KPIs',
      'Experiment Cards templates'
    ],
    steps: [
      {
        title: 'Phase 1: Stratégie & Persona (15min)',
        content: 'Définissez votre audience cible, votre proposition de valeur unique et votre objectif de campagne (acquisition, activation, retention).'
      },
      {
        title: 'Phase 2: Landing Page & Ads (25min)',
        content: 'Créez votre landing page avec headlines, CTA et social proof. Concevez vos ads avec visuals et copy adaptés à chaque plateforme.'
      },
      {
        title: 'Phase 3: Email Sequence & KPIs (15min)',
        content: 'Structurez votre sequence d\'emails post-conversion (welcome, education, social proof). Définissez vos métriques de succès.'
      }
    ],
    deliverables: [
      'Brief de campagne complet',
      'Maquette landing page annotée',
      '3-5 variations d\'ads avec copy',
      'Email sequence (3-5 emails)',
      'Dashboard KPIs avec targets'
    ],
    frameworks: {
      pas: {
        title: 'PAS (Problem–Agitate–Solve)',
        usage: 'Pour ads et landing pages',
        example: 'P: "Perdez-vous 2h/sem. à fixer des RDV ?" | A: "Allers-retours, no-shows, multi-interviewers…" | S: "Partagez 1 lien. +20% de RDV tenus."'
      },
      aida: {
        title: 'AIDA (Attention–Interest–Desire–Action)', 
        usage: 'Pour séquences complètes',
        example: 'A: Hook accrocheur | I: Bénéfice clair | D: Preuve sociale | A: CTA direct'
      }
    },
    templates: {
      landing: {
        title: 'Landing — Squelette',
        elements: [
          'H1 (bénéfice) : "Remplacez 10 emails par 1 lien — +20% de RDV tenus."',
          'H2 (contexte) : Pour [ICP] qui [situation/pain]',
          '3 Bullet proofs : chiffre, cas bref, intégration clé',
          'CTA unique : "Créer mon lien en 2 min"',
          'Confiance : logos clients, avis ★★★★☆, capture avant/après, FAQ courte'
        ]
      },
      email: {
        title: 'Email d\'activation — Squelette',
        elements: [
          'Objet A : "Votre 1er RDV en 2 minutes (vraiment)"',
          'Objet B : "+20% de RDV tenus (essai)"',
          'Corps : accroche pain→bénéfice • étapes 1-2-3 • CTA • PS preuve'
        ]
      }
    },
    testExamples: [
      {
        title: 'Test Landing Page',
        hypothesis: 'Chez [PME Sales], ajouter la preuve chiffrée ↑ CVR visite→signup de +2 pts.',
        abTest: 'H1 "bénéfice chiffré" vs "temps gagné"',
        duration: '14 j',
        kpis: 'Principal CVR 5% → ≥7% (p<0,05) ; Secondaires Time on page, Scroll depth',
        decision: '≥7% → Scale ; 6–7% → Iterate ; <6% → Kill'
      },
      {
        title: 'Test Email Activation',
        hypothesis: 'L\'objet "2 minutes" ↓ TTFV de 20% vs B.',
        abTest: 'Objet A "2 min" vs B "bénéfice"',
        duration: '7 j',
        kpis: 'Open/CTR, Activations J1',
        decision: 'TTFV <10h → Deploy A ; >15h → Test nouveau format'
      },
      {
        title: 'Test Ads Campaign',
        hypothesis: 'Le hook "no-shows" ↑ CTR de +30%.',
        abTest: 'Creative A (no-shows focus) vs B (email focus)',
        duration: '10 j',
        kpis: 'CTR ≥2.5% ; 2nd : CPC, CVR post-clic',
        decision: 'CTR >3% → Scale budget ; <2% → Test nouvelles créas'
      }
    ],
    restitution: {
      format: '1 slide/équipe (1 min) — ICP & one-liner • LP (contenu) • Ads/Carrousel • Email A/B • Plan A/B & KPIs • Next step',
      bareme: {
        'Clarté ICP & pain': '20%',
        'Proposition de valeur & preuves': '25%',
        'Testabilité (A/B, KPIs, seuils)': '25%',
        'Qualité des assets': '20%',
        'Timing & next step': '10%'
      }
    }
  },
  'dashboard-express': {
    title: 'Dashboard Express Workshop',
    duration: '15min',
    description: 'Créez rapidement un NSM input tree et wireframe de dashboard avec calculs essentiels',
    objectives: [
      'Dessiner un NSM input tree (NSM + 4 inputs)',
      'Sketcher un wireframe dashboard (6-8 cartes)',
      'Calculer 3 formules essentielles avec seuils',
      'Assigner des owners par carte KPI'
    ],
    materials: [
      'Template NSM Input Tree',
      'Wireframe Dashboard (Exec/Squad)',
      'Calculateur de formules AAARRR',
      'Guide des seuils KPI',
      'Checklist data quality'
    ],
    phases: [
      {
        title: 'NSM Input Tree',
        duration: '5min',
        content: 'Dessinez votre NSM principal + 4 inputs clés qui l\'impactent directement',
        deliverable: '1 NSM + 4 inputs connectés',
        tips: [
          'Choisissez un NSM mesurable (ex: utilisateurs activés/semaine)',
          'Identifiez 4 leviers directs (acquisition, activation, rétention, revenus)',
          'Vérifiez que chaque input est actionnable par des expériences'
        ]
      },
      {
        title: 'Dashboard Wireframe',
        duration: '7min',
        content: 'Sketchez 6-8 cartes pour un dashboard Exec OU Squad',
        deliverable: 'Wireframe avec 6-8 cartes + seuils',
        tips: [
          'Exec: focus outcomes (NSM, LTV:CAC, D30)',
          'Squad: focus inputs (AAARRR détaillé, segments)',
          'Chaque carte = titre + métrique + seuil (vert/orange/rouge)',
          'Assignez un \'owner\' responsable par carte'
        ]
      },
      {
        title: 'Calculs essentiels',
        duration: '3min',
        content: 'Calculez 3 formules dans un onglet : CVR, Activation rate, Free→Paid',
        deliverable: '3 formules avec données d\'exemple',
        tips: [
          'CVR = signups ÷ visiteurs',
          'Activation = users activés ÷ signups',
          'Free→Paid = payants ÷ free users',
          'Utilisez des données réalistes de votre secteur'
        ]
      }
    ],
    steps: [
      {
        title: 'Phase 1: NSM Input Tree (5min)',
        content: 'Dessinez votre NSM principal + 4 inputs clés qui l\'impactent directement. Vérifiez que chaque input est actionnable par des expériences.'
      },
      {
        title: 'Phase 2: Dashboard Wireframe (7min)',
        content: 'Sketchez 6-8 cartes pour un dashboard Exec OU Squad. Chaque carte = titre + métrique + seuil (vert/orange/rouge) + owner assigné.'
      },
      {
        title: 'Phase 3: Calculs essentiels (3min)',
        content: 'Calculez 3 formules dans un onglet : CVR (signups ÷ visiteurs), Activation rate (activés ÷ signups), Free→Paid (payants ÷ free users).'
      }
    ],
    deliverables: [
      'NSM input tree avec 4 connexions',
      'Wireframe dashboard (6-8 cartes + seuils)',
      '3 formules calculées avec données exemple',
      'Assignment des owners par KPI'
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(ateliers).map((slug) => ({
    slug,
  }));
}

export default async function AtelierPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const atelier = ateliers[resolvedParams.slug];
  
  if (!atelier) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Modules', href: '/modules' },
            { label: 'Ateliers', href: '/ateliers' },
            { label: atelier.title }
          ]} 
        />

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-white/20 rounded-full p-3 mr-4">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{atelier.title}</h1>
              <div className="flex items-center gap-4 text-purple-100">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {atelier.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Atelier pratique
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-purple-100">
            {atelier.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Objectifs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-purple-600" />
                  Objectifs d'apprentissage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {atelier.objectives.map((objective: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Interface Interactive pour Dashboard Express */}
            {resolvedParams.slug === 'dashboard-express' && atelier.phases && (
              <DashboardExpressWorkshop phases={atelier.phases} />
            )}

            {/* Phases détaillées pour experiment-card */}
            {resolvedParams.slug === 'experiment-card' && atelier.phases && (
              <Card>
                <CardHeader>
                  <CardTitle>🎯 Déroulé de l'Atelier Express (30-40')</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {atelier.phases.map((phase: any, index: number) => (
                      <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="text-orange-600 font-bold text-sm">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-orange-900">{phase.title} ({phase.duration})</h3>
                            <p className="text-xs text-gray-600">{phase.content}</p>
                          </div>
                        </div>
                        <div className="bg-white rounded p-3 border border-orange-200 mb-3">
                          <p className="text-xs font-medium text-orange-800 mb-1">📦 Livrable:</p>
                          <p className="text-xs text-gray-700">{phase.deliverable}</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs font-medium text-orange-800">💡 Tips:</p>
                          {phase.tips.map((tip: string, tipIndex: number) => (
                            <p key={tipIndex} className="text-xs text-gray-700 flex items-start gap-1">
                              <span className="text-orange-500 mt-0.5">•</span>
                              {tip}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Étapes */}
            {resolvedParams.slug !== 'dashboard-express' && resolvedParams.slug !== 'experiment-card' && (
              <Card>
                <CardHeader>
                  <CardTitle>Déroulé de l'atelier</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {atelier.steps.map((step: any, index: number) => (
                      <div key={index} className="border-l-4 border-purple-200 pl-4">
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Étapes simplifiées pour experiment-card */}
            {resolvedParams.slug === 'experiment-card' && (
              <Card>
                <CardHeader>
                  <CardTitle>Étapes détaillées</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {atelier.steps.map((step: any, index: number) => (
                      <div key={index} className="border-l-4 border-purple-200 pl-4">
                        <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Livrables */}
            <Card>
              <CardHeader>
                <CardTitle>📦 Livrables attendus</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {atelier.deliverables.map((deliverable: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Templates & Outils pour experiment-card */}
            {resolvedParams.slug === 'experiment-card' && atelier.templates && (
              <Card>
                <CardHeader>
                  <CardTitle>💡 Templates & Outils Fournis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {atelier.templates.map((template: any, index: number) => (
                      <div key={index} className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                        <div className="text-2xl mb-2">{template.icon}</div>
                        <p className="font-medium text-sm text-gray-900 mb-1">{template.name}</p>
                        <p className="text-xs text-gray-600 mb-3">{template.description}</p>
                        <Link href={template.downloadUrl} target="_blank">
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="w-full"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Télécharger
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Pack Download pour experiment-card */}
            {resolvedParams.slug === 'experiment-card' && (
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-6 text-white text-center">
                <div className="text-4xl mb-3">🎁</div>
                <h3 className="text-xl font-bold mb-3">Pack Module 5 — Expérimentation</h3>
                <p className="text-purple-100 mb-4 text-sm">
                  Tous les templates et outils pour lancer vos premiers tests A/B : 
                  Experiment Cards, calculateur MDE, journal des apprentissages et exemples prêts à l'emploi.
                </p>
                
                <div className="flex flex-col gap-2">
                  <Link href="/download" target="_blank">
                    <Button className="bg-white text-purple-600 hover:bg-purple-50 font-semibold w-full">
                      📥 Télécharger le Pack Complet
                    </Button>
                  </Link>
                  <Link href="/templates" target="_blank">
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-purple-600 w-full"
                    >
                      📝 Voir Tous les Templates
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {/* Cadres & Templates pour mini-campagne */}
            {resolvedParams.slug === 'mini-campagne' && atelier.frameworks && (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle>Cadres de Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">{atelier.frameworks.pas.title}</h4>
                        <p className="text-sm text-blue-700 mb-2">{atelier.frameworks.pas.usage}</p>
                        <p className="text-sm text-gray-700 italic">{atelier.frameworks.pas.example}</p>
                      </div>
                      <div className="bg-green-50 rounded p-4">
                        <h4 className="font-semibold text-green-900 mb-2">{atelier.frameworks.aida.title}</h4>
                        <p className="text-sm text-green-700 mb-2">{atelier.frameworks.aida.usage}</p>
                        <p className="text-sm text-gray-700 italic">{atelier.frameworks.aida.example}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Templates Prêts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{atelier.templates.landing.title}</h4>
                        <ul className="space-y-1">
                          {atelier.templates.landing.elements.map((element: string, index: number) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                              <span className="text-purple-500 mr-2 mt-0.5">•</span>
                              {element}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{atelier.templates.email.title}</h4>
                        <ul className="space-y-1">
                          {atelier.templates.email.elements.map((element: string, index: number) => (
                            <li key={index} className="text-sm text-gray-700 flex items-start">
                              <span className="text-purple-500 mr-2 mt-0.5">•</span>
                              {element}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Plans de Test — Exemples</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {atelier.testExamples.map((example: any, index: number) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">{example.title}</h4>
                          <div className="space-y-2 text-sm">
                            <p><strong>Hypothèse:</strong> {example.hypothesis}</p>
                            <p><strong>A/B:</strong> {example.abTest}</p>
                            <p><strong>Durée:</strong> {example.duration}</p>
                            <p><strong>KPIs:</strong> {example.kpis}</p>
                            <p><strong>Décision:</strong> {example.decision}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Restitution & Barème</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Format (10' total)</h4>
                        <p className="text-sm text-gray-700">{atelier.restitution.format}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Barème</h4>
                        <ul className="space-y-1">
                          {Object.entries(atelier.restitution.bareme).map(([key, value]: [string, any], index: number) => (
                            <li key={index} className="text-sm text-gray-700 flex justify-between">
                              <span>{key}</span>
                              <strong>{value}</strong>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ressources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="w-5 h-5 mr-2 text-blue-600" />
                  Ressources nécessaires
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {atelier.materials.map((material: string, index: number) => (
                    <li key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                      <span>{material}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link href="/templates">
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger les templates
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Mark Complete */}
            <div>
              <MarkCompleteButtonClient 
                type="atelier" 
                slug={resolvedParams.slug} 
                title={atelier.title} 
              />
            </div>

            {/* Retour */}
            <Card>
              <CardContent className="pt-6">
                <Link href="/modules">
                  <Button variant="outline" className="w-full">
                    ← Retour aux modules
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
