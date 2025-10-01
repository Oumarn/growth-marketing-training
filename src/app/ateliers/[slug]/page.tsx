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
    title: 'Experiment Card',
    duration: '30min',
    description: 'Créez vos premières cartes d\'expérimentation pour structurer vos tests A/B',
    objectives: [
      'Maîtriser le format Experiment Card',
      'Formuler des hypothèses testables',
      'Définir les métriques de succès',
      'Planifier l\'exécution des tests'
    ],
    materials: [
      'Template Experiment Card',
      'Guide de formulation d\'hypothèses',
      'Calculateur sample size'
    ],
    steps: [
      {
        title: 'Phase 1: Hypothèse (10min)',
        content: 'Identifiez un problème dans votre funnel et formulez une hypothèse claire : "Nous croyons que [CHANGE] va résulter en [OUTCOME] parce que [REASON]".'
      },
      {
        title: 'Phase 2: Design (15min)',
        content: 'Définissez les variations à tester, les métriques principales et secondaires, et calculez la taille d\'échantillon nécessaire.'
      },
      {
        title: 'Phase 3: Planning (5min)',
        content: 'Planifiez la durée du test, les ressources nécessaires et les critères de décision (significance, power, etc.).'
      }
    ],
    deliverables: [
      '1-2 Experiment Cards complètes',
      'Planning d\'exécution',
      'Checklist de lancement'
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

            {/* Étapes */}
            {resolvedParams.slug !== 'dashboard-express' && (
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

            {/* Livrables */}
            <Card>
              <CardHeader>
                <CardTitle>Livrables attendus</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {atelier.deliverables.map((deliverable: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

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
