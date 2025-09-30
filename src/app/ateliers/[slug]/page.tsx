import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Clock, Users, Target, Download, CheckCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import MarkCompleteButtonClient from '@/components/MarkCompleteButtonClient';

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
  }
};

export async function generateStaticParams() {
  return Object.keys(ateliers).map((slug) => ({
    slug,
  }));
}

export default function AtelierPage({ params }: { params: { slug: string } }) {
  const atelier = ateliers[params.slug];
  
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

            {/* Étapes */}
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
                slug={params.slug} 
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
