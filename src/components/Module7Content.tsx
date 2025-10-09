"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, TrendingUp, AlertTriangle, FileText, Calculator, BarChart3, Beaker, Zap, Bot, Settings, Database, Network, Shield, Download, Copy, Clock, Users, Play, Code, Lightbulb, ArrowRight, Star, Search, MousePointer, Share2, Mail, Calendar, Globe, Smartphone, ChevronRight, Eye, Heart } from 'lucide-react';

// Composant Cadre AAARRR x Canaux
function CanalsAaarrrMapping() {
  const [selectedChannel, setSelectedChannel] = useState(0);

  const channels = [
    {
      name: "SEO",
      icon: Search,
      color: "bg-green-50 border-green-200",
      mapping: [
        { phase: "Awareness", kpi: "Topical reach, Impressions", description: "Visibilité sur les requêtes cibles" },
        { phase: "Acquisition", kpi: "Clics organiques, CTR SERP", description: "Trafic qualifié depuis les moteurs" },
        { phase: "Activation", kpi: "CVR post-clic, Time on page", description: "Engagement sur les landing pages" },
        { phase: "Retention", kpi: "Pages/session, Return visits", description: "Fidélisation par le contenu" },
        { phase: "Revenue", kpi: "CVR organique, Revenue/visit", description: "Conversion business" },
        { phase: "Referral", kpi: "Social shares, Backlinks", description: "Amplification naturelle" }
      ]
    },
    {
      name: "SEA", 
      icon: MousePointer,
      color: "bg-blue-50 border-blue-200",
      mapping: [
        { phase: "Awareness", kpi: "Impression Share, Reach", description: "Couverture publicitaire" },
        { phase: "Acquisition", kpi: "CTR, Clics, CPC", description: "Acquisition payante ciblée" },
        { phase: "Activation", kpi: "CVR post-clic, CPA", description: "Conversion immédiate" },
        { phase: "Retention", kpi: "RLSA performance", description: "Remarketing audiences" },
        { phase: "Revenue", kpi: "ROAS, Revenue/click", description: "Retour sur investissement" },
        { phase: "Referral", kpi: "Brand searches lift", description: "Impact sur la notoriété" }
      ]
    },
    {
      name: "Social",
      icon: Share2,
      color: "bg-purple-50 border-purple-200", 
      mapping: [
        { phase: "Awareness", kpi: "Portée, Impressions", description: "Visibilité sociale" },
        { phase: "Acquisition", kpi: "CTR, Clics vers site", description: "Trafic social entrant" },
        { phase: "Activation", kpi: "ER, Saves, CVR", description: "Engagement et conversion" },
        { phase: "Retention", kpi: "Followers, Repeat engage", description: "Communauté fidèle" },
        { phase: "Revenue", kpi: "Social commerce CVR", description: "Ventes directes" },
        { phase: "Referral", kpi: "Shares, UGC, Mentions", description: "Viralité organique" }
      ]
    },
    {
      name: "Email",
      icon: Mail,
      color: "bg-orange-50 border-orange-200",
      mapping: [
        { phase: "Awareness", kpi: "Database growth", description: "Croissance de la base" },
        { phase: "Acquisition", kpi: "Opt-in rate, Lead magnet", description: "Capture de leads" },
        { phase: "Activation", kpi: "Welcome CVR, TTFV J1", description: "Onboarding efficace" },
        { phase: "Retention", kpi: "Open rate, CTOR", description: "Engagement email" },
        { phase: "Revenue", kpi: "Revenue/email, Free→Paid", description: "Monétisation directe" },
        { phase: "Referral", kpi: "Forward rate, NPS→sharing", description: "Recommandation" }
      ]
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🎯 Cadre commun : Canaux × AAARRR</h3>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Navigation canaux */}
        <div className="space-y-2 lg:order-1 order-2">
          {channels.map((channel, index) => (
            <button
              key={index}
              onClick={() => setSelectedChannel(index)}
              className={`w-full text-left p-3 rounded-lg border text-sm transition-all ${
                selectedChannel === index
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  {React.createElement(channel.icon, { className: "w-4 h-4" })}
                </div>
                <div className="font-medium">{channel.name}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Mapping AAARRR du canal sélectionné */}
        <div className="lg:col-span-3 lg:order-2 order-1">
          <div className={`rounded-lg p-6 border ${channels[selectedChannel].color}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border">
                {React.createElement(channels[selectedChannel].icon, { className: "w-6 h-6 text-gray-700" })}
              </div>
              <h4 className="font-bold text-gray-900 text-lg">{channels[selectedChannel].name} × AAARRR</h4>
            </div>
            
            <div className="space-y-4">
              {channels[selectedChannel].mapping.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-gray-600">{item.phase[0]}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-medium text-gray-900">{item.phase}</h5>
                        <Badge variant="secondary" className="text-xs">{item.kpi}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <p className="font-medium text-yellow-800 text-sm">Instrumentation clé</p>
            <p className="text-yellow-700 text-sm">
              UTM propres, post-click tracking (scroll, time on page), attribution simple (last non-direct + annotations tests)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant SEO
function SEOModule() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    {
      name: "Principes & Quick Wins",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">🎯 Stratégie Intent-First</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-green-600" />
                  <span>Intent → Topics → Pages</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-green-600" />
                  <span>Cluster sémantique</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-green-600" />
                  <span>Éviter cannibalisation</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-3">⚡ Quick Wins Techniques</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span>Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span>Sitemap & robots.txt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                  <span>Corriger 4xx/5xx</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-4">🤖 IA + n8n pour SEO</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-blue-800 mb-2">IA Assisté</h5>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• Clustering mots-clés</li>
                  <li>• Brief rédactionnel</li>
                  <li>• Outline + FAQ schema</li>
                  <li>• Réécriture H1/Title pour CTR</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 mb-2">n8n Workflows</h5>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• Monitor sitemap/indexation</li>
                  <li>• Alertes CWV</li>
                  <li>• Détecter titres faibles CTR</li>
                  <li>• Proposer variantes automatiquement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: "Plan 30/60/90",
      content: (
        <div className="space-y-6">
          {[
            {
              period: "30 jours",
              color: "bg-green-50 border-green-200",
              tasks: [
                "Audit indexabilité complet",
                "Corriger 404/redirects critiques", 
                "Réécrire 10 titres/descriptions (CTR)",
                "Définir 1 cluster prioritaire"
              ]
            },
            {
              period: "60 jours", 
              color: "bg-blue-50 border-blue-200",
              tasks: [
                "6-8 pages nouvelles (briefs IA + relecture)",
                "Maillage interne structuré",
                "Implémentation FAQ schema",
                "Optimisation vitesse mobile"
              ]
            },
            {
              period: "90 jours",
              color: "bg-purple-50 border-purple-200", 
              tasks: [
                "Refresh 10 pages top performance",
                "Liens internes hub ↔ spokes",
                "Tests formats (tableau, schéma)",
                "Analyse compétitive avancée"
              ]
            }
          ].map((phase, index) => (
            <div key={index} className={`rounded-lg p-4 border ${phase.color}`}>
              <h4 className="font-semibold text-gray-900 mb-3">{phase.period}</h4>
              <div className="grid md:grid-cols-2 gap-2">
                {phase.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🔍 SEO — Stratégie & Exécution</h3>
      
      <div className="flex gap-2 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedTab === index
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        {tabs[selectedTab].content}
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
          <Eye className="w-8 h-8 mx-auto mb-2 text-green-600" />
          <div className="font-medium text-gray-900">KPIs Clés</div>
          <div className="text-sm text-gray-600">CTR SERP, Clics, CVR post-clic</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
          <Target className="w-8 h-8 mx-auto mb-2 text-blue-600" />
          <div className="font-medium text-gray-900">Tests Prioritaires</div>
          <div className="text-sm text-gray-600">Title A/B, FAQ schema, Preuves ATF</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
          <BarChart3 className="w-8 h-8 mx-auto mb-2 text-purple-600" />
          <div className="font-medium text-gray-900">Dashboard</div>
          <div className="text-sm text-gray-600">Trafic organique, Positions, CVR</div>
        </div>
      </div>
    </div>
  );
}

// Composant SEA
function SEAModule() {
  const [selectedConcept, setSelectedConcept] = useState(0);

  const concepts = [
    {
      title: "Structure & Bonnes Pratiques",
      icon: Settings,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h5 className="font-medium text-blue-800">Structure Campagnes</h5>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• STAGs (thème serré)</li>
                <li>• Exact/Phrase/Broad + Negatives</li>
                <li>• RSA (min. 8-10 H / 4 D)</li>
                <li>• Sitelinks + Extensions</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="font-medium text-blue-800">Cohérence Landing</h5>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Query ↔ H1 ↔ Preuve ↔ CTA</li>
                <li>• Vitesse mobile optimisée</li>
                <li>• Above-the-fold pertinent</li>
                <li>• CTA claire et visible</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "IA + n8n Automation",
      icon: Bot,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded p-3 border border-blue-200">
              <h5 className="font-medium text-blue-800 mb-2">IA Génération</h5>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Angles par cluster d'intent</li>
                <li>• RSA assets (H + D)</li>
                <li>• Idées de mots-clés négatifs</li>
                <li>• Analyse des search terms</li>
              </ul>
            </div>
            <div className="bg-white rounded p-3 border border-blue-200">
              <h5 className="font-medium text-blue-800 mb-2">n8n Workflows</h5>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Budget pacing automatique</li>
                <li>• Search terms mining</li>
                <li>• Creative refresh cycle</li>
                <li>• Alertes performance</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Optimisation & Tests",
      icon: Target,
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 rounded p-4 border border-yellow-200">
            <h5 className="font-medium text-yellow-800 mb-2">Boucle Hebdomadaire</h5>
            <div className="flex items-center gap-2 text-sm text-yellow-700">
              <span>Requêtes</span>
              <ArrowRight className="w-3 h-3" />
              <span>Negatives</span>
              <ArrowRight className="w-3 h-3" />
              <span>RSA Assets</span>
              <ArrowRight className="w-3 h-3" />
              <span>Élagage</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { test: 'Hook "pain" vs "bénéfice"', kpi: 'CTR' },
              { test: 'Preuve above-the-fold', kpi: 'CVR' },
              { test: 'PMax vs Search', kpi: 'ROAS' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded p-3 border border-blue-200 text-center">
                <div className="font-medium text-blue-900 text-sm">{item.test}</div>
                <div className="text-xs text-blue-600 mt-1">→ {item.kpi}</div>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🎯 SEA — Structure & Performance</h3>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Navigation concepts */}
        <div className="space-y-2 lg:order-1 order-2">
          {concepts.map((concept, index) => (
            <button
              key={index}
              onClick={() => setSelectedConcept(index)}
              className={`w-full text-left p-3 rounded-lg border text-sm transition-all ${
                selectedConcept === index
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  {React.createElement(concept.icon, { className: "w-4 h-4" })}
                </div>
                <div className="font-medium">{concept.title}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Contenu du concept sélectionné */}
        <div className="lg:col-span-3 lg:order-2 order-1">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                {React.createElement(concepts[selectedConcept].icon, { className: "w-5 h-5" })}
              </div>
              <h4 className="font-bold text-blue-900 text-lg">{concepts[selectedConcept].title}</h4>
            </div>
            {concepts[selectedConcept].content}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
        <div className="flex items-start gap-2">
          <Shield className="w-5 h-5 text-red-600 mt-0.5" />
          <div>
            <p className="font-medium text-red-800 text-sm">Garde-fous SEA</p>
            <p className="text-red-700 text-sm">
              CPC↑ sans CVR↑, Cannibalisation Brand, ROAS &lt; cible → décision scale/iterate/kill
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Social Media
function SocialModule() {
  const contentPillars = [
    { name: "Éducation", description: "Guides, tutos, tips", color: "bg-blue-100 text-blue-800" },
    { name: "Preuve", description: "Cas clients, résultats", color: "bg-green-100 text-green-800" },
    { name: "Behind-the-scenes", description: "Coulisses équipe", color: "bg-purple-100 text-purple-800" },
    { name: "Community", description: "UGC, témoignages", color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">📱 Social Media — Organique + Paid</h3>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Organique */}
        <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Stratégie Organique
          </h4>
          
          <div className="space-y-4">
            <div>
              <h5 className="font-medium text-purple-800 mb-2">Content Pillars (3-4)</h5>
              <div className="grid grid-cols-2 gap-2">
                {contentPillars.map((pillar, index) => (
                  <div key={index} className={`rounded p-2 text-xs ${pillar.color}`}>
                    <div className="font-medium">{pillar.name}</div>
                    <div className="opacity-75">{pillar.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded p-4 border border-purple-200">
              <h5 className="font-medium text-purple-800 mb-2">🤖 Top Post Radar (IA + n8n)</h5>
              <div className="text-sm text-purple-700 space-y-1">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <span>Détecter winners (top 10% ER)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <span>Analyser hook/angle (IA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <span>Cloner 3 variantes par persona</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  <span>Log → Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Paid */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Social Ads
          </h4>
          
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {['TOFU', 'MOFU', 'BOFU'].map((funnel, index) => (
                <div key={index} className="bg-white rounded p-2 text-center border border-blue-200">
                  <div className="font-medium text-blue-900 text-sm">{funnel}</div>
                  <div className="text-xs text-blue-600">
                    {funnel === 'TOFU' && 'Awareness'}
                    {funnel === 'MOFU' && 'Consideration'}
                    {funnel === 'BOFU' && 'Conversion'}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded p-4 border border-blue-200">
              <h5 className="font-medium text-blue-800 mb-2">KPIs Social</h5>
              <div className="text-sm text-blue-700">
                ER = (likes+comments+shares+saves)/impressions
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="text-xs">• Saves & Shares</div>
                <div className="text-xs">• CTR vers site</div>
                <div className="text-xs">• CVR post-clic</div>
                <div className="text-xs">• CPA social</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center gap-3 mb-2">
          <Zap className="w-5 h-5 text-green-600" />
          <span className="font-semibold text-green-900">Formats "Hook First"</span>
        </div>
        <p className="text-green-800 text-sm">
          Carrousels "problème → preuve → CTA", vidéos courtes, citations visuelles avec données chiffrées
        </p>
      </div>
    </div>
  );
}

// Composant Email Marketing
function EmailModule() {
  const [selectedFlow, setSelectedFlow] = useState(0);

  const flows = [
    {
      name: "Welcome / Activation J1",
      icon: Users,
      description: "TTFV guidé en 3 étapes",
      emails: [
        { subject: "Bienvenue ! Votre première action en 2 min", goal: "TTFV immédiat" },
        { subject: "Résultat obtenu ? Voici l'étape 2", goal: "Progression guidée" },
        { subject: "Félicitations ! Prochaine étape", goal: "Activation complète" }
      ]
    },
    {
      name: "Onboarding",
      icon: Settings,
      description: "3-5 emails : cas, templates, intégrations",
      emails: [
        { subject: "Cas d'usage #1 : comme [Client]", goal: "Inspiration concrète" },
        { subject: "Templates prêts à l'emploi", goal: "Facilitation usage" },
        { subject: "Intégrations populaires", goal: "Écosystème étendu" }
      ]
    },
    {
      name: "Nurture",
      icon: TrendingUp,
      description: "Preuves, use cases avancés",
      emails: [
        { subject: "Comment [Client] a gagné 40% de temps", goal: "Preuve sociale" },
        { subject: "Nouvelle fonctionnalité disponible", goal: "Product adoption" },
        { subject: "Webinar : techniques avancées", goal: "Education continue" }
      ]
    },
    {
      name: "Reactivation / Winback",
      icon: Zap,
      description: "Offre limitée, preuve actualisée",
      emails: [
        { subject: "On vous a manqué ? Voici ce qui a changé", goal: "Réengagement" },
        { subject: "Offre spéciale : 30% pour votre retour", goal: "Incitation commerciale" },
        { subject: "Dernière chance : l'offre expire demain", goal: "Urgence" }
      ]
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">📧 Email — Lifecycle & Performance</h3>
      
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Navigation flows */}
        <div className="space-y-2">
          {flows.map((flow, index) => (
            <button
              key={index}
              onClick={() => setSelectedFlow(index)}
              className={`w-full text-left p-3 rounded-lg border text-sm transition-all ${
                selectedFlow === index
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  {React.createElement(flow.icon, { className: "w-4 h-4" })}
                </div>
                <div>
                  <div className="font-medium">{flow.name}</div>
                  <div className="text-xs opacity-75 mt-1">{flow.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Flow sélectionné */}
        <div className="lg:col-span-2">
          <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white">
                {React.createElement(flows[selectedFlow].icon, { className: "w-5 h-5" })}
              </div>
              <div>
                <h4 className="font-bold text-orange-900 text-lg">{flows[selectedFlow].name}</h4>
                <p className="text-orange-700 text-sm">{flows[selectedFlow].description}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {flows[selectedFlow].emails.map((email, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-orange-200">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-orange-600">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1">{email.subject}</div>
                      <div className="text-sm text-gray-600">{email.goal}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-orange-600" />
            KPIs Email
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>• Open rate</div>
            <div>• CTOR</div>
            <div>• Activation J1</div>
            <div>• Revenue/email</div>
            <div>• Unsub rate</div>
            <div>• Spam rate</div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <Bot className="w-5 h-5" />
            IA + n8n Email
          </h4>
          <div className="space-y-2 text-sm text-blue-700">
            <div>• Objets A/B automatiques</div>
            <div>• Personnalisation légère</div>
            <div>• Résumé feedbacks NPS</div>
            <div>• Webhook produit → segment</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Plans de Test
function TestPlans() {
  const testsByChannel = [
    {
      channel: "SEO",
      icon: Search,
      color: "bg-green-50 border-green-200",
      tests: [
        { test: "Title 'bénéfice chiffré' vs 'temps gagné'", kpi: "SERP CTR", duration: "14j" },
        { test: "FAQ schema implémenté vs sans", kpi: "Clics", duration: "30j" },
        { test: "Preuve above-the-fold", kpi: "CVR post-clic", duration: "14j" }
      ]
    },
    {
      channel: "SEA",
      icon: MousePointer,
      color: "bg-blue-50 border-blue-200",
      tests: [
        { test: "Headlines 'pain' vs 'preuve chiffrée'", kpi: "CTR", duration: "7j" },
        { test: "Landing preuve above-the-fold", kpi: "CVR", duration: "14j" },
        { test: "PMax vs Search Campaign", kpi: "ROAS", duration: "30j" }
      ]
    },
    {
      channel: "Social",
      icon: Share2,
      color: "bg-purple-50 border-purple-200",
      tests: [
        { test: "Hook liste vs question", kpi: "ER", duration: "7j" },
        { test: "Carrousel 5 vs 7 slides", kpi: "CTR", duration: "14j" },
        { test: "Video vs Carrousel", kpi: "Saves", duration: "14j" }
      ]
    },
    {
      channel: "Email",
      icon: Mail,
      color: "bg-orange-50 border-orange-200",
      tests: [
        { test: "Objet '2 minutes' vs 'résultat chiffré'", kpi: "Open/CTOR", duration: "7j" },
        { test: "P.S. avec preuve", kpi: "Activation J1", duration: "14j" },
        { test: "Send time 9h vs 14h", kpi: "Open rate", duration: "14j" }
      ]
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🧪 Plans de test par canal (prêts)</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {testsByChannel.map((channel, index) => (
          <div key={index} className={`rounded-lg p-6 border ${channel.color}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border">
                {React.createElement(channel.icon, { className: "w-5 h-5 text-gray-700" })}
              </div>
              <h4 className="font-bold text-gray-900 text-lg">{channel.channel}</h4>
            </div>
            
            <div className="space-y-3">
              {channel.tests.map((test, testIndex) => (
                <div key={testIndex} className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="font-medium text-gray-900 text-sm mb-1">{test.test}</div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">{test.kpi}</Badge>
                    <span className="text-xs text-gray-500">{test.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <p className="font-medium text-yellow-800 text-sm">Garde-fous Tests</p>
            <p className="text-yellow-700 text-sm">
              Seuils fixés avant (Module 5), durée 7-14j selon canal, tout passe par /experiments + annotations Dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Atelier Plan Multi-Canal
function MultiChannelWorkshop() {
  const workshopSteps = [
    { time: "0-10'", task: "Choix ICP + objectifs (inputs NSM)", deliverable: "Persona & KPI cible définis" },
    { time: "10-25'", task: "SEO + SEA (artefacts)", deliverable: "Cluster, RSA, landing tests" },
    { time: "25-40'", task: "Social + Email (artefacts)", deliverable: "Posts clones, welcome flow" },
    { time: "40-50'", task: "KPIs/Seuils + Dashboard", deliverable: "Plan annotation & logs" },
    { time: "50-55'", task: "Pitch flash (1 min/équipe)", deliverable: "Restitution condensée" }
  ];

  const deliverables = [
    { canal: "SEO", items: ["1 cluster (3 pages)", "5 titles à réécrire", "1 FAQ schema"] },
    { canal: "SEA", items: ["1 ad group intent", "6-10 headlines RSA", "1 test landing"] },
    { canal: "Social", items: ["2 posts clone", "1 carrousel", "Calendrier 2 sem"] },
    { canal: "Email", items: ["1 welcome", "1 activation J1", "1 reactivation"] }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🎯 Atelier — Plan multi-canal 30 jours (55')</h3>
      
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200 mb-6">
        <h4 className="font-semibold text-indigo-900 mb-2">🎯 Objectif</h4>
        <p className="text-indigo-800 text-sm">
          Produire un plan exécutable pour un ICP avec 1 test prioritaire par canal + liens Dashboard & Expérimentations
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Timeline */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">⏱️ Timeline (minute par minute)</h4>
          <div className="space-y-3">
            {workshopSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-100 rounded px-2 py-1 text-sm font-medium text-indigo-700 flex-shrink-0">
                    {step.time}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">{step.task}</div>
                    <div className="text-xs text-gray-600 mt-1">{step.deliverable}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Livrables */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">📋 Livrables par canal</h4>
          <div className="space-y-4">
            {deliverables.map((channel, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <h5 className="font-medium text-gray-900 mb-2">{channel.canal}</h5>
                <div className="space-y-1">
                  {channel.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center gap-3 mb-2">
          <Target className="w-5 h-5 text-green-600" />
          <span className="font-semibold text-green-900">Connexions clés</span>
        </div>
        <ul className="text-green-800 text-sm space-y-1">
          <li>• KPIs & seuils → Dashboard Module 4 (carte "Expériences")</li>
          <li>• Tests → /experiments Module 5 (validation causale)</li>
          <li>• IA & n8n → Module 6 (workflows automatisés)</li>
        </ul>
      </div>
    </div>
  );
}

// Composant Quiz Flash
function QuizModule7() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      question: "KPI clé SEA post-clic ?",
      answer: "✅ CVR (Conversion Rate)",
      explanation: "Le CVR post-clic mesure l'efficacité de la landing page après le clic publicitaire"
    },
    {
      question: "Deux signaux Social de 'winner' ?",
      answer: "✅ ER élevé (top 10%) + Saves/Shares",
      explanation: "L'Engagement Rate et les saves/shares indiquent un contenu qui résonne avec l'audience"
    },
    {
      question: "Deux garde-fous emailing ?",
      answer: "✅ Spam rate <1% + Unsub rate <2%",
      explanation: "Ces seuils protègent la délivrabilité et la santé de la base email"
    },
    {
      question: "Premier quick win SEO ?",
      answer: "✅ Audit indexabilité + corriger 404",
      explanation: "S'assurer que les pages sont crawlables et accessibles est la base du SEO"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🧠 Quiz Flash — Module 7</h3>
      
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-900">
            Question {currentQuestion + 1}/4
          </h4>
          <div className="text-sm text-gray-500">
            Canaux × AAARRR × Tests
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-purple-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            {questions[currentQuestion].question}
          </h4>

          {!showAnswer ? (
            <Button onClick={() => setShowAnswer(true)} className="bg-purple-600 hover:bg-purple-700">
              Voir la réponse
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-purple-700 font-medium mb-2">{questions[currentQuestion].answer}</p>
                <p className="text-gray-600 text-sm">{questions[currentQuestion].explanation}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    if (currentQuestion > 0) {
                      setCurrentQuestion(currentQuestion - 1);
                      setShowAnswer(false);
                    }
                  }}
                  disabled={currentQuestion === 0}
                  variant="outline"
                >
                  ← Précédent
                </Button>
                <Button
                  onClick={() => {
                    if (currentQuestion < questions.length - 1) {
                      setCurrentQuestion(currentQuestion + 1);
                      setShowAnswer(false);
                    }
                  }}
                  disabled={currentQuestion === questions.length - 1}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Suivant →
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Composant principal
export default function Module7Content() {
  return (
    <div className="space-y-16">
      {/* SLIDE 1: TITRE ET OBJECTIFS */}
      <section className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-800 text-white flex items-center justify-center p-8 rounded-3xl">
        <div className="text-center max-w-4xl">
          <div className="text-8xl mb-8">🚀</div>
          <h1 className="text-6xl font-bold mb-8 leading-tight">Module 7</h1>
          <h2 className="text-4xl font-light mb-12 text-pink-100">Canaux : SEO • SEA • Social • Emailing</h2>
          <div className="text-xl text-pink-200 mb-8">AAARRR appliqué • IA + n8n • Dashboard connecté</div>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <Search className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">SEO</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <MousePointer className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">SEA</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <Share2 className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Social</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <Mail className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Email</div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 2: OBJECTIFS D'APPRENTISSAGE */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Objectifs d'apprentissage</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Diagnostiquer avec AAARRR</h3>
              </div>
              <p className="text-gray-600 mb-4">Savoir diagnostiquer chaque canal avec les bons KPIs selon le framework AAARRR</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Quick Wins + Plan 30-60-90</h3>
              </div>
              <p className="text-gray-600 mb-4">Mettre en place des quick wins et un plan d'exécution structuré par canal</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">IA + n8n pour l'itération</h3>
              </div>
              <p className="text-gray-600 mb-4">Utiliser l'IA pour générer/analyser et n8n pour automatiser les workflows</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Lien NSM & Dashboard</h3>
              </div>
              <p className="text-gray-600 mb-4">Relier systématiquement aux inputs NSM et au Dashboard de performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cadre AAARRR x Canaux */}
      <CanalsAaarrrMapping />

      {/* SEO Module */}
      <SEOModule />

      {/* SEA Module */}
      <SEAModule />

      {/* Social Media Module */}
      <SocialModule />

      {/* Email Module */}
      <EmailModule />

      {/* Plans de Test */}
      <TestPlans />

      {/* Atelier Multi-Canal */}
      <MultiChannelWorkshop />

      {/* Quiz Flash */}
      <QuizModule7 />

      {/* Download Pack */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 text-white text-center">
        <div className="text-6xl mb-4">📦</div>
        <h3 className="text-2xl font-bold mb-4">Pack Module 7 — Templates Multi-Canal</h3>
        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
          Téléchargez tous les templates pour SEO, SEA, Social et Email : briefs, 
          workflows n8n, plans de tests et calendriers éditoriaux.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <Search className="w-5 h-5 mx-auto mb-1" />
            <span>SEO Brief</span>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <MousePointer className="w-5 h-5 mx-auto mb-1" />
            <span>SEA RSA Sheet</span>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <Share2 className="w-5 h-5 mx-auto mb-1" />
            <span>Social Blueprint</span>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <Mail className="w-5 h-5 mx-auto mb-1" />
            <span>Email Flows</span>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <Calendar className="w-5 h-5 mx-auto mb-1" />
            <span>Plan 30-60-90</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
            onClick={() => window.open('/download', '_blank')}
          >
            📥 Télécharger Pack Multi-Canal
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-purple-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
            onClick={() => window.open('/download', '_blank')}
          >
            📋 Voir Tous les Templates
          </Button>
        </div>
      </div>
    </div>
  );
}
