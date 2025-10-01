"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, TrendingUp, AlertTriangle, FileText, Calculator, BarChart3, Beaker, Zap, Bot, Settings, Database, Network, Shield, Download, Copy, Clock, Users, Play, Code, Lightbulb, ArrowRight, Star, Workflow, Eye, Lock } from 'lucide-react';

// Composant Score d'Automatisation
function AutomationScore() {
  const [scores, setScores] = useState({
    impact: 3,
    frequence: 3,
    clarte: 3,
    data: 3,
    risque: 3
  });

  const handleScoreChange = (criteria: string, value: number) => {
    setScores(prev => ({ ...prev, [criteria]: value }));
  };

  const totalScore = scores.impact + scores.frequence + scores.clarte + scores.data - scores.risque;
  const shouldAutomate = totalScore >= 10;

  const criteria = [
    { key: 'impact', label: 'Impact NSM', description: 'Faible → Fort' },
    { key: 'frequence', label: 'Fréquence', description: 'Mensuelle → Quotidienne' },
    { key: 'clarte', label: 'Clarté des règles', description: 'Flou → Clair' },
    { key: 'data', label: 'Qualité data', description: 'Lacunaire → Fiable' },
    { key: 'risque', label: 'Risque', description: 'Élevé → Faible (inversé)' }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">📊 Score d'Automatisation (priorisation)</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {criteria.map((criterion, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">{criterion.label}</h4>
                  <p className="text-xs text-gray-600">{criterion.description}</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleScoreChange(criterion.key, value)}
                      className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
                        scores[criterion.key as keyof typeof scores] >= value
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-200">
          <div className="text-center">
            <div className={`text-4xl font-bold mb-4 ${shouldAutomate ? 'text-green-600' : 'text-red-600'}`}>
              {totalScore}
            </div>
            <div className={`text-lg font-semibold mb-2 ${shouldAutomate ? 'text-green-600' : 'text-red-600'}`}>
              {shouldAutomate ? '✅ GO - Automatiser' : '❌ Éviter pour l\'instant'}
            </div>
            <p className="text-sm text-gray-600">
              Score = (Impact + Fréquence + Clarté + Data) − Risque
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Seuil recommandé : ≥ 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Processus Standard
function ProcessusStandard() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "But NSM",
      description: "Choisissez l'input à bouger",
      example: "ex. Activation J1",
      icon: Target,
      details: "Identifiez clairement quel input de votre North Star Metric vous voulez impacter. Cela guidera toutes les décisions suivantes."
    },
    {
      title: "Mapper le flux",
      description: "Qui ? Quoi ? Quand ? Où ? Données ?",
      example: "Cartographier l'existant",
      icon: Network,
      details: "Documentez précisément le processus actuel : acteurs, étapes, points de données, timing, outils utilisés."
    },
    {
      title: "Standardiser",
      description: "Règles/prompts & outputs attendus",
      example: "Format JSON/CSV",
      icon: Settings,
      details: "Définissez des règles claires et des formats de sortie standardisés. Cette étape est cruciale pour la suite."
    },
    {
      title: "Automatiser",
      description: "n8n : trigger → traitement → sortie → logs",
      example: "Workflow complet",
      icon: Zap,
      details: "Construisez le workflow avec déclencheur, logique de traitement, actions de sortie et journalisation."
    },
    {
      title: "Mesurer",
      description: "Log lignes → Dashboard (Module 4)",
      example: "KPIs trackés",
      icon: BarChart3,
      details: "Intégrez les métriques dans votre dashboard existant pour suivre l'impact de l'automatisation."
    },
    {
      title: "Gouverner",
      description: "Owner, alertes, versioning, rollback",
      example: "Maintenance & contrôle",
      icon: Shield,
      details: "Établissez la gouvernance : responsable, système d'alertes, gestion des versions, plan de rollback."
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">⚙️ Processus Standard (6 étapes)</h3>
      
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Navigation des étapes */}
        <div className="space-y-2">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-full text-left p-3 rounded-lg border text-sm transition-all ${
                currentStep === index
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  {React.createElement(step.icon, { className: "w-4 h-4" })}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{index + 1}. {step.title}</div>
                  <div className="text-xs opacity-75 mt-1">{step.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Détail de l'étape sélectionnée */}
        <div className="lg:col-span-2">
          <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                {React.createElement(steps[currentStep].icon, { className: "w-6 h-6" })}
              </div>
              <div>
                <h4 className="font-bold text-indigo-900 text-lg">{steps[currentStep].title}</h4>
                <p className="text-indigo-700">{steps[currentStep].description}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-indigo-200 mb-4">
              <div className="text-sm font-medium text-indigo-900 mb-2">Exemple</div>
              <div className="text-indigo-700">{steps[currentStep].example}</div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-indigo-200">
              <div className="text-sm font-medium text-indigo-900 mb-2">Détails</div>
              <div className="text-gray-700 text-sm">{steps[currentStep].details}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
          <div>
            <p className="font-medium text-yellow-800 text-sm">Point clé</p>
            <p className="text-yellow-700 text-sm">
              Ne sautez jamais la standardisation. C'est la garantie que votre automatisation sera robuste et maintenable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Boîte à outils
function BoiteAOutils() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = [
    {
      name: "Orchestration",
      icon: Workflow,
      color: "bg-purple-50 border-purple-200",
      tools: [
        { name: "n8n", description: "Open source, branches, retries, webhooks", status: "recommandé" }
      ]
    },
    {
      name: "Stockage/Échange",
      icon: Database,
      color: "bg-blue-50 border-blue-200",
      tools: [
        { name: "Google Sheets", description: "Simple, collaboratif, API native", status: "facile" },
        { name: "Airtable", description: "Base de données relationnelle", status: "intermédiaire" },
        { name: "Notion", description: "Documentation + données", status: "hybride" }
      ]
    },
    {
      name: "Intelligence Artificielle",
      icon: Bot,
      color: "bg-red-50 border-red-200",
      tools: [
        { name: "LLM APIs", description: "Générer, résumer, classer", status: "essentiel" },
        { name: "Température basse", description: "0.2-0.4 pour l'analyse", status: "conseil" },
        { name: "JSON strict", description: "Format de sortie standardisé", status: "obligatoire" }
      ]
    },
    {
      name: "Canaux",
      icon: Network,
      color: "bg-green-50 border-green-200",
      tools: [
        { name: "Google/Meta/LinkedIn Ads", description: "APIs publicitaires", status: "business" },
        { name: "Social APIs", description: "Buffer, Hootsuite", status: "contenu" },
        { name: "Email APIs", description: "Sendgrid, Mailjet", status: "automation" },
        { name: "CRM APIs", description: "HubSpot, Salesforce", status: "leads" }
      ]
    },
    {
      name: "Monitoring",
      icon: Eye,
      color: "bg-yellow-50 border-yellow-200",
      tools: [
        { name: "Slack", description: "Alertes temps réel", status: "communication" },
        { name: "Logs Sheets/DB", description: "Journalisation structurée", status: "traçabilité" },
        { name: "UTM & Events", description: "Tracking propre", status: "mesure" }
      ]
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🧰 Boîte à outils (piliers)</h3>
      
      <div className="grid lg:grid-cols-4 gap-6">
        {/* Navigation catégories */}
        <div className="space-y-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`w-full text-left p-3 rounded-lg border text-sm transition-all ${
                selectedCategory === index
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  {React.createElement(category.icon, { className: "w-4 h-4" })}
                </div>
                <div className="font-medium">{category.name}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Outils de la catégorie sélectionnée */}
        <div className="lg:col-span-3">
          <div className={`rounded-lg p-6 border ${categories[selectedCategory].color}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border">
                {React.createElement(categories[selectedCategory].icon, { className: "w-6 h-6 text-gray-700" })}
              </div>
              <h4 className="font-bold text-gray-900 text-lg">{categories[selectedCategory].name}</h4>
            </div>
            
            <div className="space-y-4">
              {categories[selectedCategory].tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 flex items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="font-medium text-gray-900">{tool.name}</h5>
                      <Badge variant="secondary" className="text-xs">
                        {tool.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <p className="font-medium text-blue-800 text-sm">Conseil de démarrage</p>
            <p className="text-blue-700 text-sm">
              Commencez "léger" avec Sheets + Slack, puis migrez vers des outils plus avancés (DB/BI) quand le volume le justifie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Patrons de Workflows
function PatronsWorkflows() {
  const patterns = [
    {
      name: "Social — Top Post Radar",
      description: "Identifier et cloner les posts performants",
      steps: ["Collecter", "Classer ER", "Analyser (IA)", "Cloner", "Sheet", "Slack", "Log"],
      color: "bg-blue-50 border-blue-200",
      icon: TrendingUp
    },
    {
      name: "SEA — Pacing & Refresh", 
      description: "Optimiser budgets et créer nouveaux assets",
      steps: ["Calcul CTR/CVR/CPA", "Détecter anomalies", "RSA assets (IA)", "Sheet", "Slack"],
      color: "bg-green-50 border-green-200", 
      icon: Target
    },
    {
      name: "Email — NPS → Actions",
      description: "Router les retours NPS vers les bonnes actions",
      steps: ["NPS in", "Classer score", "Relance avis/parrainage", "Ticket support"],
      color: "bg-purple-50 border-purple-200",
      icon: Users
    },
    {
      name: "Lead Enrichment",
      description: "Enrichir et scorer les nouveaux leads",
      steps: ["Webhook lead", "Enrichir données", "Score qualité", "Router Slack/CRM"],
      color: "bg-orange-50 border-orange-200",
      icon: Database
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🔄 Patrons de workflows (reproductibles)</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        {patterns.map((pattern, index) => (
          <div key={index} className={`rounded-lg p-6 border ${pattern.color}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border">
                {React.createElement(pattern.icon, { className: "w-5 h-5 text-gray-700" })}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{pattern.name}</h4>
                <p className="text-sm text-gray-600">{pattern.description}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-xs font-medium text-gray-500 mb-2">ÉTAPES</div>
              <div className="flex flex-wrap gap-2">
                {pattern.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center gap-1">
                    <div className="bg-white px-2 py-1 rounded text-xs font-medium text-gray-700 border">
                      {step}
                    </div>
                    {stepIndex < pattern.steps.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Composant Gouvernance & Sécurité
function Gouvernance() {
  const aspects = [
    {
      title: "PII & Confidentialité",
      icon: Lock,
      items: [
        "Minimiser les données personnelles collectées",
        "Pseudonymiser quand possible", 
        "Conserver le strict nécessaire",
        "Documenter les traitements"
      ],
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Secrets & Accès",
      icon: Shield,
      items: [
        "Vault n8n pour les clés API",
        "Accès par rôle (principe du moindre privilège)",
        "Rotation régulière des clés",
        "Audit des accès"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Qualité & Tests",
      icon: CheckCircle,
      items: [
        "QA en environnement de staging",
        "Tests unitaires des prompts",
        "Few-shot examples stables",
        "Validation des outputs"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "SLA & Résilience",
      icon: Clock,
      items: [
        "Mécanismes de retry et backoff",
        "Dead Letter Queue (DLQ)",
        "Monitoring des quotas API",
        "Plans de rollback documentés"
      ],
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      title: "Audit & Traçabilité",
      icon: FileText,
      items: [
        "Logs horodatés de toutes les opérations",
        "Versioning des prompts et paramètres",
        "Traçabilité des décisions IA",
        "Rétention et archivage des logs"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🛡️ Gouvernance, sécurité, conformité</h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aspects.map((aspect, index) => (
          <div key={index} className={`rounded-lg p-6 border ${aspect.color}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border">
                {React.createElement(aspect.icon, { className: "w-5 h-5 text-gray-700" })}
              </div>
              <h4 className="font-semibold text-gray-900">{aspect.title}</h4>
            </div>
            
            <ul className="space-y-2">
              {aspect.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-gray-700 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-800 text-white rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="font-semibold">Règle d'or</span>
        </div>
        <p className="text-gray-200">"Si ce n'est pas loggé, ce n'est pas fait"</p>
      </div>
    </div>
  );
}

// Composant Anti-patterns
function AntiPatterns() {
  const antiPatterns = [
    {
      problem: "Automatiser avant de stabiliser le process",
      solution: "Standardisez d'abord manuellement, puis automatisez",
      icon: AlertTriangle
    },
    {
      problem: "Prompts flous (pas de format/critères)", 
      solution: "Spécifiez format JSON strict, contraintes et exemples",
      icon: FileText
    },
    {
      problem: "Pas de guardrails (envoi public sans revue)",
      solution: "Ajoutez validation, modération et circuits d'approbation",
      icon: Shield
    },
    {
      problem: "Données sales (UTM incohérents, IDs manquants)",
      solution: "Nettoyage des données en amont, validation des inputs",
      icon: Database
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">⚠️ Anti-patterns & dépannage</h3>
      
      <div className="space-y-4">
        {antiPatterns.map((item, index) => (
          <div key={index} className="bg-red-50 rounded-lg p-4 border border-red-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                {React.createElement(item.icon, { className: "w-5 h-5 text-red-600" })}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-red-900 mb-2">❌ {item.problem}</h4>
                <p className="text-sm text-red-700">✅ {item.solution}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <p className="font-medium text-blue-800 text-sm">Deux mots d'ordre</p>
            <p className="text-blue-700 text-sm">
              <strong>Petit périmètre, forte fiabilité.</strong> Mieux vaut une automatisation simple qui marche qu'une complexe qui échoue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Automation Canvas (Atelier)
function AutomationCanvas() {
  const canvasFields = [
    { label: "Nom & objectif", description: "NSM + input visé", placeholder: "Ex: Activation J1 via onboarding personnalisé" },
    { label: "Score d'automatisation", description: "Impact, Fréquence, Clarté, Data, Risque", placeholder: "Impact:4, Fréquence:5, Clarté:3, Data:4, Risque:2 = Score:14" },
    { label: "Déclencheur", description: "Cron/webhook/event", placeholder: "Ex: Webhook nouveau lead, cron quotidien 9h" },
    { label: "Entrées", description: "Source, schéma, exemples", placeholder: "Ex: CRM webhook {email, company, source, timestamp}" },
    { label: "Règles / Prompt", description: "Format JSON strict, contraintes", placeholder: "Ex: Analyser secteur + taille → recommander parcours A/B/C" },
    { label: "Actions", description: "API/Sheet/Slack/Email", placeholder: "Ex: Créer tâche CRM + email séquence + Slack commercial" },
    { label: "Logs", description: "Champs, table/onglet, rétention", placeholder: "Ex: timestamp, lead_id, parcours_choisi, action_prise" },
    { label: "KPIs & seuils", description: "Primaire, secondaires, guardrails", placeholder: "Ex: Taux activation J7 >40%, temps réponse <2h" },
    { label: "Sécurité", description: "PII, secrets, accès", placeholder: "Ex: Chiffrement email, vault API, accès équipe growth uniquement" },
    { label: "Plan test & rollback", description: "Comment tester et revenir en arrière", placeholder: "Ex: Test avec 10% traffic, rollback manuel si erreur >5%" },
    { label: "Owner, fréquence, SLA", description: "Responsable, cadence, temps de réponse", placeholder: "Ex: Owner: Growth PM, Check quotidien, SLA 4h" }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">📋 Atelier guidé (30-45') — Automation Canvas</h3>
      
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200 mb-6">
        <h4 className="font-semibold text-green-900 mb-2">🎯 Objectif</h4>
        <p className="text-green-800 text-sm">
          Prioriser 2 automatisations alignées NSM et prototyper 1 workflow complet.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Étapes de l'atelier */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">📝 Étapes de l'atelier</h4>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <h5 className="font-medium text-gray-900">Backlog & Scoring</h5>
              </div>
              <p className="text-sm text-gray-600">
                Listez 6 tâches candidates → Score d'Automatisation (≥10 = shortlist)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <h5 className="font-medium text-gray-900">Canvas Complet</h5>
              </div>
              <p className="text-sm text-gray-600">
                Remplissez le canvas pour l'automatisation #1 (voir champs ci-contre)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <h5 className="font-medium text-gray-900">Maquette n8n</h5>
              </div>
              <p className="text-sm text-gray-600">
                Dessinez les nœuds et variables d'environnement sur tableau
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <h5 className="font-medium text-gray-900">Restitution</h5>
              </div>
              <p className="text-sm text-gray-600">
                Présentation flash (1 min/équipe) des résultats
              </p>
            </div>
          </div>
        </div>

        {/* Canvas template */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">📋 Template Automation Canvas</h4>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 max-h-96 overflow-y-auto">
            <div className="space-y-3">
              {canvasFields.map((field, index) => (
                <div key={index} className="bg-white rounded p-3 border border-gray-200">
                  <div className="font-medium text-gray-900 text-sm mb-1">{field.label}</div>
                  <div className="text-xs text-gray-500 mb-2">{field.description}</div>
                  <div className="text-xs text-gray-400 italic">{field.placeholder}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
        <div className="flex items-center gap-2 mb-2">
          <Download className="w-5 h-5 text-purple-600" />
          <span className="font-semibold text-purple-900">Livrables</span>
        </div>
        <p className="text-purple-800 text-sm">
          1 Automation Canvas complet + 1 maquette workflow n8n
        </p>
      </div>
    </div>
  );
}

// Composant principal
export default function Module6Content() {
  return (
    <div className="space-y-16">
      {/* SLIDE 1: TITRE ET OBJECTIFS */}
      <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-800 text-white flex items-center justify-center p-8 rounded-3xl">
        <div className="text-center max-w-4xl">
          <div className="text-8xl mb-8">🤖</div>
          <h1 className="text-6xl font-bold mb-8 leading-tight">Module 6</h1>
          <h2 className="text-4xl font-light mb-12 text-blue-100">Pourquoi & Comment automatiser</h2>
          <div className="text-xl text-blue-200 mb-8">No-Code + IA • Processus • Gouvernance</div>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <Target className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Choisir quoi automatiser</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <Workflow className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Processus standard</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <Settings className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Boîte à outils</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <div className="text-sm">Garde-fous</div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 2: POURQUOI AUTOMATISER */}
      <section className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">⚡</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Pourquoi automatiser en Growth ?</h2>
            <div className="w-32 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8" />
                Levier
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-green-500" />
                  <span>+ vitesse d'itération</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>+ cohérence des actions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>− erreurs humaines</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-3">
                <Target className="w-8 h-8" />
                Focus
              </h3>
              <p className="text-gray-700 mb-4">
                Libère du temps pour la recherche d'insights et les tests A/B
              </p>
              <p className="text-gray-600 text-sm">
                L'automatisation des tâches répétitives permet de se concentrer sur la stratégie et l'expérimentation.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-purple-700 mb-6 flex items-center gap-3">
              <Network className="w-8 h-8" />
              Exemples concrets
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">"Top Post Radar"</h4>
                <p className="text-purple-700 text-sm">Identifier et cloner automatiquement les posts performants</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">"SEA Budget Pacing"</h4>
                <p className="text-purple-700 text-sm">Optimiser les budgets publicitaires en temps réel</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">"Lead Enrichment"</h4>
                <p className="text-purple-700 text-sm">Enrichir et router les leads automatiquement</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-orange-100 rounded-2xl border border-orange-200">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <h4 className="font-semibold text-orange-900">Point clé</h4>
            </div>
            <p className="text-orange-800">
              Automatisez ce qui impacte un input NSM, pas ce qui est "cool". L'objectif est l'efficacité business, pas la technologie.
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 3: QUAND AUTOMATISER */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🤔 Quand automatiser (et quand éviter)</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 border border-green-200">
            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
              ✅ Automatiser si
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong>Tâche répétitive</strong> (≥ 1×/semaine)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong>Règles claires</strong> (if/then) ou prompt stable
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong>Données fiables</strong> (events/UTM/IDs)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <strong>Impact direct</strong> sur un input NSM
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border border-red-200">
            <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center gap-2">
              ❌ Éviter si
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <strong>Process instable</strong> ou changeant fréquemment
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <strong>Data bruitée/PII sensible</strong> sans garde-fous
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <strong>Risque utilisateur élevé</strong> (impact client direct)
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-medium text-blue-800 text-sm">Conseil</p>
              <p className="text-blue-700 text-sm">
                Gardez une part "manuel" au début pour stabiliser le process avant d'automatiser complètement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Score d'automatisation */}
      <AutomationScore />

      {/* Processus standard */}
      <ProcessusStandard />

      {/* Boîte à outils */}
      <BoiteAOutils />

      {/* Patrons de workflows */}
      <PatronsWorkflows />

      {/* Gouvernance */}
      <Gouvernance />

      {/* Anti-patterns */}
      <AntiPatterns />

      {/* Automation Canvas */}
      <AutomationCanvas />

      {/* Évaluation */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-200 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">📊 Évaluation & barème</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { criteria: "Lien NSM & clarté de l'objetif", weight: "25%", description: "Alignement avec la North Star Metric" },
            { criteria: "Canvas complet & garde-fous", weight: "25%", description: "Qualité de la documentation et sécurité" },
            { criteria: "Log & mesure prêts pour Dashboard", weight: "25%", description: "Intégration avec le système de mesure" },
            { criteria: "Pertinence outils & faisabilité", weight: "25%", description: "Choix technologiques et réalisme" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-purple-200 flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{item.criteria}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <div className="bg-purple-100 px-3 py-1 rounded-lg">
                <span className="font-bold text-purple-700">{item.weight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download Pack */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
        <div className="text-6xl mb-4">📦</div>
        <h3 className="text-2xl font-bold mb-4">Templates Module 6 — Automation</h3>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          Téléchargez l'Automation Canvas, le template de scoring, et tous les outils 
          pour prioriser et construire vos automatisations no-code.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <FileText className="w-5 h-5 mx-auto mb-1" />
            <span>Automation Canvas</span>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <Calculator className="w-5 h-5 mx-auto mb-1" />
            <span>Scoring Template</span>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <Bot className="w-5 h-5 mx-auto mb-1" />
            <span>Prompts Ready</span>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <Workflow className="w-5 h-5 mx-auto mb-1" />
            <span>Workflow Patterns</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-6 py-3"
            onClick={() => window.open('/download', '_blank')}
          >
            📥 Télécharger Templates Automation
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-indigo-600 px-6 py-3"
            onClick={() => window.open('/templates', '_blank')}
          >
            📋 Voir Tous les Templates
          </Button>
        </div>
      </div>
    </div>
  );
}
