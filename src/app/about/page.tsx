import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3, 
  Lightbulb, 
  BookOpen, 
  Award,
  ExternalLink,
  Mail,
  Linkedin,
  Zap,
  Brain,
  Settings
} from 'lucide-react';
import Link from 'next/link';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const metadata = {
  title: 'À propos — Oumar NDIAYE, Head of Growth, Professeur & Auteur',
  description: 'Head of Growth et professeur en Growth Marketing & Analytics. Ex-Forest Admin, fondateur de Studymapper. Spécialiste PLG, AAARRR, A/B testing, IA & automatisation (n8n). Ateliers & templates concrets.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
              <span className="text-4xl font-bold text-white">ON</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Oumar NDIAYE
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Head of Growth, professeur & auteur
            </p>
            <div className="max-w-2xl mx-auto">
              <Alert className="border-blue-200 bg-blue-50">
                <Lightbulb className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800 font-medium text-lg">
                  « Construire la croissance comme un système : valeur, données, expérimentation. »
                </AlertDescription>
              </Alert>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="text-sm">Growth Marketing</Badge>
            <Badge variant="secondary" className="text-sm">A/B Testing</Badge>
            <Badge variant="secondary" className="text-sm">Product-Led Growth</Badge>
            <Badge variant="secondary" className="text-sm">Data Analytics</Badge>
            <Badge variant="secondary" className="text-sm">IA & Automatisation</Badge>
          </div>
        </div>

        {/* Histoire Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <BookOpen className="h-6 w-6 text-blue-600" />
              Mon histoire en bref
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700 leading-relaxed">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">🚀 Les débuts chez Comexplorer (Adimeo) - 2015</h3>
                <p>
                  J'ai démarré au contact de scale-ups comme <strong>ContentSquare</strong> et <strong>Spendesk</strong> : 
                  j'y ai appris à transformer l'intuition marketing en résultats mesurables.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">📈 Early stage chez Bruce</h3>
                <p>
                  J'ai bâti le plan growth de A à Z (acquisition → fidélisation) : 
                  <strong> ×5 de CA en 1 an</strong> et levée de fonds en série A.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">🎯 Fondateur de Studymapper (EdTech)</h3>
                <p>
                  Cadrage produit, go-to-market, acquisition et monétisation. En parallèle, missions de conseil 
                  (ex. <strong>Lalaleads</strong>) : paid multi-canal (SEA/SMA) jusqu'à <strong>500 k€ / mois</strong>, 
                  audit de funnel, refonte du tracking, roadmap d'expériences et KPIs.
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Head of Growth chez Forest Admin (Hexa)</h3>
                <p>
                  Renforcement de mon approche <strong>product-led + data</strong>. 
                  Aujourd'hui, je transmets ces méthodes en tant que professeur, tuteur et auteur.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Atouts Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <BarChart3 className="h-6 w-6 text-green-600" />
              Mon atout data & ops
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Tracking & métriques
                  </h3>
                  <p className="text-blue-800 text-sm">
                    Plans d'événements propres, cohortes D7/D30, NSM & input tree, 
                    unit economics (LTV, CAC, payback).
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Expérimentation
                  </h3>
                  <p className="text-green-800 text-sm">
                    A/B tests de bout en bout (MDE, taille d'échantillon, guardrails, 
                    décisions start / iterate / kill).
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Paid multi-canal
                  </h3>
                  <p className="text-purple-800 text-sm">
                    SEA/SMA structurés (stratégie, créas, ciblages, pacing, ROAS/LTV:CAC) 
                    — budgets jusqu'à <strong>500 k€ / mois</strong>.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2 flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Stack & automatisation
                  </h3>
                  <p className="text-orange-800 text-sm">
                    GA4, Mixpanel / Amplitude, Looker Studio / Metabase, Segment, GTM ; 
                    n8n / no-code ; IA pour analyse & création.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Philosophie pédagogique */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Brain className="h-6 w-6 text-purple-600" />
              Ma philosophie pédagogique
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-semibold text-blue-900 mb-2">Data &gt; HiPPO</h3>
                <p className="text-blue-800 text-sm">
                  On remplace l'intuition seule par des expériences testables (A/B), 
                  un NSM clair et des KPIs AAARRR par étape.
                </p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🛠️</div>
                <h3 className="font-semibold text-green-900 mb-2">Apprendre en faisant</h3>
                <p className="text-green-800 text-sm">
                  Ateliers "mini-campagne", n8n pour l'automatisation, 
                  IA pour accélérer l'analyse & la création (sans sacrifier la rigueur).
                </p>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">⚙️</div>
                <h3 className="font-semibold text-purple-900 mb-2">Systèmes qui composent</h3>
                <p className="text-purple-800 text-sm">
                  Proposition de valeur limpide, cadence d'expérimentation, 
                  boucles (produit, referral, contenu).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ce que j'apporte */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Award className="h-6 w-6 text-orange-600" />
              Ce que j'apporte en cours (ou en coaching)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🎯 Cas concrets décortiqués</h3>
              <p className="text-gray-700 mb-4">
                Cas concrets décortiqués et transposables à vos projets.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-2">Stack & Outils maîtrisés :</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  'HubSpot/CRM', 'GA4', 'Mixpanel', 'Amplitude', 'Looker Studio', 'n8n', 
                  'Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Userpilot', 'Lemlist', 
                  'Segment', 'Google Tag Manager', 'Semrush', 'Ahrefs', 'Adjust'
                ].map((tool) => (
                  <Badge key={tool} variant="outline" className="text-xs">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">🎪 Ateliers guidés</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-1 text-gray-700">
                  <li>• ICP & Buyer Personas</li>
                  <li>• Buyer Journey Mapping</li>
                  <li>• SEO (topic clusters, keyword research)</li>
                  <li>• Google & Bing Ads</li>
                  <li>• Social Ads</li>
                  <li>• Cold Outreach</li>
                </ul>
                <ul className="space-y-1 text-gray-700">
                  <li>• Funnel Canvas</li>
                  <li>• Experiment Cards</li>
                  <li>• Dashboard AAARRR</li>
                  <li>• Top-Post Radar (Social+IA)</li>
                  <li>• SEA Pacing (qualité & budget)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ma manière de travailler */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Users className="h-6 w-6 text-blue-600" />
              Ma manière de travailler
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Clarté</h3>
                <p className="text-gray-600 text-sm">
                  One-liner valeur, ICP prioritaire, message-marché testé.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cadence</h3>
                <p className="text-gray-600 text-sm">
                  Backlog d'expériences priorisées (ICE), fenêtre de test réaliste, 
                  journal de décision start / iterate / kill.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Composé</h3>
                <p className="text-gray-600 text-sm">
                  Tout alimente un dashboard (NSM + inputs), on capitalise les learnings 
                  et on scale ce qui marche.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formats */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <BookOpen className="h-6 w-6 text-green-600" />
              Formats disponibles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">
                  📚 Cours & workshops (1–2 jours)
                </h3>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Fundamentals</li>
                  <li>• AAARRR Framework</li>
                  <li>• A/B testing & MDE</li>
                  <li>• IA & automatisation (n8n)</li>
                  <li>• Canaux SEO / SEA / Social / Email</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-3">
                  🎯 Mentorat / Office Hours
                </h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Revue de funnel</li>
                  <li>• Plan d'expériences</li>
                  <li>• Structuration d'équipe growth</li>
                </ul>
                
                <h3 className="font-semibold text-green-900 mb-3 mt-4">
                  📝 Interventions & écrits
                </h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Conférences</li>
                  <li>• Playbooks et templates actionnables</li>
                  <li>• Dashboard, personas, canvas, cards</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white shadow-2xl border-0 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
          
          <CardHeader className="text-center relative z-10">
            <CardTitle className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Me contacter
            </CardTitle>
            <CardDescription className="text-blue-100 text-lg font-medium">
              Prêt à transformer votre croissance ? Parlons-en !
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center relative z-10">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 font-semibold px-6 py-3"
              >
                <a 
                  href="https://linkedin.com/in/ondiaye" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              
              <Button 
                asChild 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold px-6 py-3"
              >
                <a 
                  href="mailto:oumar-ndiaye@live.fr"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
              
              <Button 
                asChild 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 font-semibold px-6 py-3"
              >
                <Link href="/modules" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Voir la formation
                </Link>
              </Button>
            </div>
            
            {/* Additional contact info */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-white/80 text-sm">
                🚀 Réponse garantie sous 24h • 📞 Consultation gratuite de 15min
              </p>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </div>
  );
}
