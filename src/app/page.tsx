import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, Award } from 'lucide-react';
import ResumeBanner from '@/components/ResumeBanner';

export default function Home() {
  return (
    <div className="bg-gray-50">
      <ResumeBanner />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold mb-4">
                📈 Formation Growth Marketing
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-6 sm:text-5xl lg:text-6xl">
              Maîtrisez le Growth Marketing
              <span className="block text-orange-300">en 2 jours intensifs</span>
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-100">
              <strong>14h de formation pratique</strong> pour transformer votre approche marketing : 
              framework AAARRR, outils no-code, automatisation IA, et cas d'études concrets 
              des entreprises qui cartonnent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/agenda">
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-bold px-8 py-4 text-lg">
                  🚀 Commencer la formation
                </Button>
              </Link>
              <Link href="/download">
                <Button size="lg" className="bg-white/10 backdrop-blur text-white border-2 border-white/30 hover:bg-white hover:text-gray-900 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg">
                  📥 Télécharger les supports
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-4xl font-bold text-orange-300">7</div>
                <div className="text-sm font-medium text-gray-200">Modules</div>
                <div className="text-xs text-gray-300">Complets</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-4xl font-bold text-orange-300">14h</div>
                <div className="text-sm font-medium text-gray-200">Formation</div>
                <div className="text-xs text-gray-300">Intensive</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-4xl font-bold text-orange-300">100%</div>
                <div className="text-sm font-medium text-gray-200">Pratique</div>
                <div className="text-xs text-gray-300">Actionnable</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="text-4xl font-bold text-orange-300">500+</div>
                <div className="text-sm font-medium text-gray-200">Étudiants</div>
                <div className="text-xs text-gray-300">Satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que vous allez apprendre */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              🎯 Ce que vous allez apprendre
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Une formation <strong>100% pratique</strong> basée sur les méthodes 
              des entreprises qui cartonnent : Dropbox, HubSpot, Airbnb, Slack...
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-blue-500">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Framework AAARRR</h3>
                <p className="text-gray-600 leading-relaxed">
                  Maîtrisez le <strong>Pirate Funnel</strong> : de la notoriété à la recommandation, 
                  optimisez chaque étape de votre tunnel de conversion.
                </p>
                <div className="mt-4 text-sm text-blue-600 font-semibold">
                  ✓ Diagnostic complet • ✓ Métriques clés • ✓ Optimisations
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-green-500">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Automatisation No-Code</h3>
                <p className="text-gray-600 leading-relaxed">
                  Créez des <strong>workflows puissants</strong> sans coder : Zapier, Make, 
                  Airtable, n8n... Automatisez tout votre marketing.
                </p>
                <div className="mt-4 text-sm text-green-600 font-semibold">
                  ✓ 10+ outils • ✓ Templates prêts • ✓ ROI calculé
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-purple-500">
              <CardContent className="p-8">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">IA Marketing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Révolutionnez vos canaux avec l'<strong>Intelligence Artificielle</strong> : 
                  SEO, SEA, Social Media, Email... Le futur du marketing.
                </p>
                <div className="mt-4 text-sm text-purple-600 font-semibold">
                  ✓ ChatGPT avancé • ✓ Outils IA • ✓ Prompts experts
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programme détaillé */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              📚 Programme de la formation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2 jours intensifs • 7 modules • Cas pratiques • Outils professionnels
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Jour 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-blue-500">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Jour 1 - Fondamentaux & Stratégie
                </h3>
              </div>
              <div className="space-y-6">
                <div className="pb-4 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">🚀 Introduction Growth Marketing</h4>
                  <p className="text-gray-600 text-sm">Mindset, différences avec le marketing traditionnel</p>
                </div>
                <div className="pb-4 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">📊 Framework AAARRR</h4>
                  <p className="text-gray-600 text-sm">Pirate Funnel, métriques clés, diagnostic complet</p>
                </div>
                <div className="pb-4 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">🎯 Études de cas</h4>
                  <p className="text-gray-600 text-sm">Dropbox, HubSpot, Airbnb, Slack, PayPal</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">📈 KPIs & Analytics</h4>
                  <p className="text-gray-600 text-sm">Tableaux de bord, GA4, attribution modeling</p>
                </div>
              </div>
            </div>

            {/* Jour 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-l-green-500">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Jour 2 - Automatisation & IA
                </h3>
              </div>
              <div className="space-y-6">
                <div className="pb-4 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">🧪 A/B Testing</h4>
                  <p className="text-gray-600 text-sm">Méthodologie, outils, analyse des résultats</p>
                </div>
                <div className="pb-4 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">⚡ Outils No-Code</h4>
                  <p className="text-gray-600 text-sm">Zapier, Make, Airtable, n8n, automatisations</p>
                </div>
                <div className="pb-4 border-b border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2">🤖 IA Marketing</h4>
                  <p className="text-gray-600 text-sm">ChatGPT, SEO/SEA/Social/Email assisté par IA</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">💼 Projet final</h4>
                  <p className="text-gray-600 text-sm">Restitution, plan d'action personnalisé</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bonus inclus */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">🎁 Bonus inclus</h3>
              <p className="text-lg opacity-90">Tout ce dont vous avez besoin pour réussir</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h4 className="font-semibold mb-2">Templates prêts</h4>
                <p className="text-sm opacity-90">Tableaux de bord, workflows, checklist</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h4 className="font-semibold mb-2">Outils configurés</h4>
                <p className="text-sm opacity-90">Accès aux meilleurs outils du marché</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="font-semibold mb-2">Communauté</h4>
                <p className="text-sm opacity-90">Échanges avec les autres participants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🚀 Prêt à transformer votre croissance ?
          </h2>
          <p className="text-xl mb-4 opacity-90 leading-relaxed">
            Rejoignez les <strong>500+ entrepreneurs</strong> qui ont déjà boosté leur business
          </p>
          <p className="text-lg mb-10 opacity-75">
            Formation 100% pratique • Accès immédiat • Résultats garantis
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link href="/agenda">
              <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-bold text-lg px-8 py-4">
                🚀 Commencer la formation
                <span className="block text-sm font-normal opacity-80">Voir le programme et planning</span>
              </Button>
            </Link>
            <Link href="/download">
              <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg px-8 py-4">
                📥 Télécharger les supports
                <span className="block text-sm font-normal opacity-80">Templates et ressources inclus</span>
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-75">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Accès à vie
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Mises à jour gratuites
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Support communauté
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
