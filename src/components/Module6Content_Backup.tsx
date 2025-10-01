"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, TrendingUp, AlertTriangle, FileText, Calculator, BarChart3, Beaker, Zap, Bot, Settings, Database, Network, Shield, Download, Copy, Clock, Users, Play, Code } from 'lucide-react';

// Composant Quiz interactif pour Module 6
function QuizModule6() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Quand ne pas automatiser ?",
      answer: "✅ Process instables, données peu fiables, zones sensibles sans garde-fous",
      explanation: "L'automatisation requiert des règles claires et des données fiables pour être efficace",
      isCorrect: true
    },
    {
      id: 2,
      question: "Différence entre outputs IA et expériences ?",
      answer: "✅ IA produit des variantes, expériences testent leur performance",
      explanation: "L'IA génère du contenu, les A/B tests valident leur efficacité sur les KPIs",
      isCorrect: true
    },
    {
      id: 3,
      question: "Deux KPIs pour valider un clone Social ?",
      answer: "✅ Engagement Rate relatif vs baseline + CTR lien",
      explanation: "ER mesure l'engagement, CTR mesure l'action - les deux sont complémentaires",
      isCorrect: true
    }
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswer(false);
    }
  };

  const toggleShowAllQuestions = () => {
    setShowAllQuestions(!showAllQuestions);
  };

  if (showAllQuestions) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Quiz Flash - Module 6</h3>
          <button
            onClick={toggleShowAllQuestions}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Affichage question par question
          </button>
        </div>
        <div className="space-y-6">
          {questions.map((q, index) => (
            <div key={q.id} className="bg-white rounded-lg p-4 border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-gray-900">{q.question}</h4>
              </div>
              <div className="ml-11">
                <p className="text-blue-700 font-medium mb-2">{q.answer}</p>
                <p className="text-gray-600 text-sm">{q.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Quiz Flash - Module 6</h3>
        <button
          onClick={toggleShowAllQuestions}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Voir tout
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 border border-blue-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">{currentQuestion + 1}</span>
            </div>
            <span className="text-sm text-gray-600">Question {currentQuestion + 1} sur {questions.length}</span>
          </div>
          <div className="flex gap-1">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentQuestion ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          {questions[currentQuestion].question}
        </h4>

        {!showAnswer ? (
          <button
            onClick={() => setShowAnswer(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voir la réponse
          </button>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-700 font-medium mb-2">
                {questions[currentQuestion].answer}
              </p>
              <p className="text-gray-600 text-sm">
                {questions[currentQuestion].explanation}
              </p>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Précédent
              </button>
              <button
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Composant Stack & Architecture
function StackArchitecture() {
  const [selectedLayer, setSelectedLayer] = useState(0);

  const layers = [
    {
      name: "Ingestion",
      description: "APIs, webhooks, CSV",
      components: ["Google Analytics API", "Meta/Google Ads API", "Webhooks", "CSV Upload", "CRM Integration"],
      color: "bg-green-50 border-green-200",
      icon: Database
    },
    {
      name: "Traitement", 
      description: "Règles, IA",
      components: ["Business Rules", "LLM Processing", "Data Validation", "Transformation", "Classification"],
      color: "bg-blue-50 border-blue-200",
      icon: Settings
    },
    {
      name: "Stockage",
      description: "Sheet/DB/Notion",
      components: ["Google Sheets", "PostgreSQL", "Notion Database", "Redis Cache", "File Storage"],
      color: "bg-purple-50 border-purple-200", 
      icon: Database
    },
    {
      name: "Action",
      description: "Ads/Social/Email",
      components: ["Campaign Updates", "Social Posts", "Email Triggers", "Slack Notifications", "API Calls"],
      color: "bg-orange-50 border-orange-200",
      icon: Zap
    },
    {
      name: "Mesure",
      description: "Logs → Dashboard",
      components: ["Execution Logs", "Performance Metrics", "Dashboard Updates", "Alert System", "Reporting"],
      color: "bg-red-50 border-red-200",
      icon: BarChart3
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Stack & Architecture (Référence)</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">🛠️ Stack Technique</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Network className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Orchestration</p>
                <p className="text-xs text-gray-600">n8n (triggers, retries, idempotency)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Database className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Sources</p>
                <p className="text-xs text-gray-600">Analytics, Ads, Social, CRM, Support, Sheets</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Bot className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">IA</p>
                <p className="text-xs text-gray-600">LLM (génération/résumés/classification), embeddings</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">🔧 Ops</h4>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-gray-500 mt-0.5" />
              <span><strong>Secrets :</strong> rotation, environment variables</span>
            </div>
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />
              <span><strong>Quotas :</strong> rate limiting, backoff</span>
            </div>
            <div className="flex items-start gap-2">
              <TrendingUp className="w-4 h-4 text-green-500 mt-0.5" />
              <span><strong>Retries :</strong> exponential backoff, DLQ</span>
            </div>
            <div className="flex items-start gap-2">
              <BarChart3 className="w-4 h-4 text-blue-500 mt-0.5" />
              <span><strong>Observabilité :</strong> logs structurés, monitoring</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Couches d'Architecture</h4>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {layers.map((layer, index) => (
            <button
              key={index}
              onClick={() => setSelectedLayer(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedLayer === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {layer.name}
            </button>
          ))}
        </div>

        <div className={`rounded-lg p-6 border ${layers[selectedLayer].color}`}>
          <div className="flex items-center gap-3 mb-4">
            {React.createElement(layers[selectedLayer].icon, { className: "w-6 h-6 text-gray-600" })}
            <div>
              <h5 className="font-bold text-gray-900">{layers[selectedLayer].name}</h5>
              <p className="text-sm text-gray-600">{layers[selectedLayer].description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-semibold text-gray-900 mb-2">Composants</h6>
              <ul className="space-y-1">
                {layers[selectedLayer].components.map((component, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    {component}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Catalogue des Workflows
function CatalogueWorkflows() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(0);

  const workflows = [
    {
      name: "Santé UTM",
      description: "Vérifier/normaliser tags sur liens sortants",
      trigger: "Cron daily",
      steps: ["Scan liens", "Valider UTM", "Corriger format", "Alert équipe"],
      kpis: ["% liens conformes", "Temps correction"]
    },
    {
      name: "Lead Enrichment & Routing",
      description: "Enrichir, scorer, router (Slack/CRM)",
      trigger: "Webhook form",
      steps: ["Enrichir données", "Calculer score", "Router segment", "Notifier équipe"],
      kpis: ["Taux d'enrichissement", "Temps de routage"]
    },
    {
      name: "NPS → Actions",
      description: "Déclenche relance avis / parrainage / ticket",
      trigger: "NPS survey response",
      steps: ["Analyser score", "Classifier segment", "Déclencher action", "Log suivi"],
      kpis: ["Taux de conversion post-NPS", "Satisfaction"]
    },
    {
      name: "Churn Alert",
      description: "Signaux d'usage ↓ → playbook CS",
      trigger: "Usage metrics",
      steps: ["Détecter signaux", "Calculer risque", "Alert CS", "Créer ticket"],
      kpis: ["Précision alerts", "Taux de rétention"]
    },
    {
      name: "SEA Budget Pacing",
      description: "Alerte sous/sur-dépense + suggestion réallocation",
      trigger: "Cron hourly",
      steps: ["Check budgets", "Calculer pacing", "Suggérer ajustements", "Notifier équipe"],
      kpis: ["Budget utilization", "ROAS"]
    },
    {
      name: "Creative Loop (SEA/Social)",
      description: "Générer 5 variantes, tester, logger résultats",
      trigger: "Manual/Scheduled",
      steps: ["Analyser winners", "Générer variantes", "Créer campagnes", "Log résultats"],
      kpis: ["CTR variantes", "CVR post-clic"]
    },
    {
      name: "Social Listening → Résumé IA",
      description: "Veille → résumés, angles, hashtags",
      trigger: "Cron daily",
      steps: ["Collecter mentions", "Analyser sentiment", "Générer insights", "Partager équipe"],
      kpis: ["Mentions trackées", "Insights qualité"]
    },
    {
      name: "Content Ops",
      description: "Brief → outline → post multi-formats",
      trigger: "Content brief",
      steps: ["Analyser brief", "Générer outline", "Créer formats", "Programmer diffusion"],
      kpis: ["Temps création", "Engagement rate"]
    },
    {
      name: "Cohortes hebdo",
      description: "Calcul auto D7/D30 → GSheet/DB",
      trigger: "Cron weekly",
      steps: ["Extraire données", "Calculer cohortes", "Générer graphiques", "Màj dashboard"],
      kpis: ["Rétention D7/D30", "Précision calculs"]
    },
    {
      name: "Referrals Monitor",
      description: "K-factor hebdo + alertes",
      trigger: "Cron weekly",
      steps: ["Calculer K-factor", "Comparer baseline", "Générer alertes", "Màj reporting"],
      kpis: ["K-factor", "Croissance virale"]
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Catalogue de Workflows Utiles</h3>
      
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {workflows.map((workflow, index) => (
          <button
            key={index}
            onClick={() => setSelectedWorkflow(index)}
            className={`p-4 rounded-lg text-left transition-all ${
              selectedWorkflow === index
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <h4 className="font-semibold text-sm mb-1">{workflow.name}</h4>
            <p className="text-xs opacity-80">{workflow.description}</p>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-6 h-6 text-blue-600" />
          <div>
            <h4 className="font-bold text-gray-900">{workflows[selectedWorkflow].name}</h4>
            <p className="text-sm text-gray-600">{workflows[selectedWorkflow].description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">🔄 Étapes du Workflow</h5>
            <div className="space-y-2">
              {workflows[selectedWorkflow].steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">{idx + 1}</span>
                  </div>
                  <span className="text-sm text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-gray-900 mb-3">📊 KPIs de Mesure</h5>
            <div className="space-y-2">
              {workflows[selectedWorkflow].kpis.map((kpi, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <BarChart3 className="w-4 h-4 text-green-500 mt-0.5" />
                  <span className="text-sm text-gray-700">{kpi}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
              <p className="text-xs text-blue-800">
                <strong>Trigger:</strong> {workflows[selectedWorkflow].trigger}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant IA pour Création & Optimisation
function IACreationOptimisation() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">IA pour la Création & l'Optimisation</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-4">🧠 Principes Fondamentaux</h4>
          <div className="space-y-3">
            <div className="bg-white rounded p-3 border border-purple-200">
              <h5 className="font-medium text-purple-800 text-sm mb-1">Prompts structurés</h5>
              <p className="text-purple-700 text-xs">Objectif, contraintes, format JSON si besoin</p>
            </div>
            <div className="bg-white rounded p-3 border border-purple-200">
              <h5 className="font-medium text-purple-800 text-sm mb-1">Few-shot learning</h5>
              <p className="text-purple-700 text-xs">Montrer 2-3 bons exemples</p>
            </div>
            <div className="bg-white rounded p-3 border border-purple-200">
              <h5 className="font-medium text-purple-800 text-sm mb-1">Garde-fous</h5>
              <p className="text-purple-700 text-xs">Ton, interdits, longueur max, conformité</p>
            </div>
            <div className="bg-white rounded p-3 border border-purple-200">
              <h5 className="font-medium text-purple-800 text-sm mb-1">Évaluation</h5>
              <p className="text-purple-700 text-xs">Score lisibilité, unicité hook, conformité branding</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <h4 className="font-semibold text-green-900 mb-4">🔄 Boucle d'Amélioration</h4>
          <div className="space-y-3">
            {[
              "Brief → Génération",
              "→ Filtre qualité", 
              "→ Variante A/B",
              "→ Log résultats",
              "→ Learnings"
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">{index + 1}</span>
                </div>
                <span className="text-sm text-green-800">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Social + IA
function SocialIA() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Social + IA : Détecter & Répliquer les Posts "Winners"</h3>
      
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-200">
        <h4 className="font-semibold text-pink-900 mb-4">🎯 Pipeline Cible</h4>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white rounded p-4 border border-pink-200">
              <h5 className="font-medium text-pink-800 mb-2">1. Collecter métriques</h5>
              <p className="text-sm text-gray-700">ER, partages, sauvegardes, temps de lecture</p>
            </div>
            <div className="bg-white rounded p-4 border border-pink-200">
              <h5 className="font-medium text-pink-800 mb-2">2. Classifier via IA</h5>
              <p className="text-sm text-gray-700">Format, tone, hook, angle, visuel</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded p-4 border border-pink-200">
              <h5 className="font-medium text-pink-800 mb-2">3. Replicate blueprint</h5>
              <p className="text-sm text-gray-700">Structure + 3 variantes adaptées persona/canal</p>
            </div>
            <div className="bg-white rounded p-4 border border-pink-200">
              <h5 className="font-medium text-pink-800 mb-2">4. Planifier & logger</h5>
              <p className="text-sm text-gray-700">Performances → nourrir prochains prompts</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded border border-pink-200">
          <h5 className="font-semibold text-pink-900 mb-2">📊 KPIs de Validation</h5>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <span className="font-medium text-pink-800 block">ER Relatif</span>
              <span className="text-gray-600">vs baseline</span>
            </div>
            <div className="text-center">
              <span className="font-medium text-pink-800 block">Saves/Share</span>
              <span className="text-gray-600">engagement profond</span>
            </div>
            <div className="text-center">
              <span className="font-medium text-pink-800 block">CTR Lien</span>
              <span className="text-gray-600">action directe</span>
            </div>
            <div className="text-center">
              <span className="font-medium text-pink-800 block">CVR Post-clic</span>
              <span className="text-gray-600">conversion finale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant SEA + IA
function SEAIA() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">SEA + IA : Accélérer la Boucle Créative & Qualité</h3>
      
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white rounded p-4 border border-yellow-200">
              <h5 className="font-medium text-yellow-800 mb-2">🔍 Keyword → Clusters</h5>
              <p className="text-sm text-gray-700">Grouper par intent, angles par cluster</p>
            </div>
            <div className="bg-white rounded p-4 border border-yellow-200">
              <h5 className="font-medium text-yellow-800 mb-2">📝 RSA Assets</h5>
              <p className="text-sm text-gray-700">Headlines/descriptions multi-angles + negative keywords</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded p-4 border border-yellow-200">
              <h5 className="font-medium text-yellow-800 mb-2">🎯 Qualité Landing</h5>
              <p className="text-sm text-gray-700">Check cohérence query ↔ H1 ↔ proof ↔ CTA</p>
            </div>
            <div className="bg-white rounded p-4 border border-yellow-200">
              <h5 className="font-medium text-yellow-800 mb-2">⚡ Pacing</h5>
              <p className="text-sm text-gray-700">Synthèse quotidienne (spend, CPA, IS) + suggestions</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded border border-yellow-200">
          <h5 className="font-semibold text-yellow-900 mb-2">📊 KPIs SEA + IA</h5>
          <div className="grid md:grid-cols-5 gap-4 text-sm">
            <div className="text-center">
              <span className="font-medium text-yellow-800 block">CTR</span>
              <span className="text-gray-600">attractivité ads</span>
            </div>
            <div className="text-center">
              <span className="font-medium text-yellow-800 block">CVR Post-clic</span>
              <span className="text-gray-600">qualité landing</span>
            </div>
            <div className="text-center">
              <span className="font-medium text-yellow-800 block">CPA</span>
              <span className="text-gray-600">coût acquisition</span>
            </div>
            <div className="text-center">
              <span className="font-medium text-yellow-800 block">QS Indicatif</span>
              <span className="text-gray-600">quality score</span>
            </div>
            <div className="text-center">
              <span className="font-medium text-yellow-800 block">Free→Paid D30</span>
              <span className="text-gray-600">conversion long terme</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Prompts Réutilisables
function PromptsReutilisables() {
  const [selectedPrompt, setSelectedPrompt] = useState(0);

  const prompts = [
    {
      title: "Analyse d'un post gagnant",
      category: "Classification",
      prompt: `Rôle : Analyste social.
Entrées : {texte, métriques, persona, canal}.
Tâche : Résume en 3 puces pourquoi ce post performe. Classe par : hook, format, angle, tone, CTA.
Sortie JSON : { "reason": "...", "hook": "...", "format": "...", "angle": "...", "tone":"...", "cta":"..." }
Contraintes : Français, 80 mots max.`
    },
    {
      title: "Génération de clones",
      category: "Création",
      prompt: `Rôle : Copywriter.
Entrées : {blueprint_json, persona, canal}.
Tâche : Propose 3 variantes suivant le blueprint, chacune avec Hook • Body (≤280) • CTA.
Contraintes : ton pro, pas de claims non prouvés, pas d'emoji si LinkedIn.`
    },
    {
      title: "SEA — RSA assets",
      category: "SEA",
      prompt: `Entrées : {cluster, intent, bénéfice, preuves}.
Sortie : 10 headlines (≤30c), 4 descriptions (≤90c), liste negatives candidats.
Format : JSON structuré avec arrays headlines[], descriptions[], negatives[]`
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Prompts Réutilisables</h3>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {prompts.map((prompt, index) => (
          <button
            key={index}
            onClick={() => setSelectedPrompt(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedPrompt === index
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {prompt.title}
          </button>
        ))}
      </div>

      <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <span className="text-white font-semibold">{prompts[selectedPrompt].title}</span>
            <Badge variant="outline" className="text-xs border-green-400 text-green-400">
              {prompts[selectedPrompt].category}
            </Badge>
          </div>
          <button 
            className="text-gray-400 hover:text-white transition-colors"
            onClick={() => navigator.clipboard.writeText(prompts[selectedPrompt].prompt)}
          >
            📋 Copier
          </button>
        </div>
        <pre className="whitespace-pre-wrap text-xs leading-relaxed">
          {prompts[selectedPrompt].prompt}
        </pre>
      </div>
    </div>
  );
}

// Composant Atelier n8n
function AteliernN8n() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">🛠️ Atelier (45-60') — n8n + IA : "Top Post Radar"</h3>
      
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6 border border-teal-200 mb-6">
        <h4 className="font-semibold text-teal-900 mb-4">🎯 Objectif</h4>
        <p className="text-teal-800 text-sm">
          Repérer les posts Social top 10%, expliquer pourquoi ils performent, 
          générer 3 clones prêts à programmer, et logger les résultats.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">🔄 Flux n8n (Nœuds)</h4>
          <div className="space-y-3">
            {[
              "Cron (daily 08:00)",
              "HTTP Request → récupérer analytics",
              "Function → calcul ER & top-decile", 
              "LLM → analyse post (JSON)",
              "LLM → génération 3 clones",
              "Merge → assembler données",
              "Google Sheets → écrire winners",
              "Slack → envoyer digest",
              "Webhook → planification",
              "HTTP/Sheet → log Dashboard"
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-xs">{index + 1}</span>
                </div>
                <span className="text-sm text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">📦 Livrables</h4>
          <div className="space-y-3">
            {[
              "1 workflow n8n fonctionnel",
              "1 sheet 'Winners & Clones'",
              "1 digest Slack quotidien",
              "1 log pour Module 4 Dashboard"
            ].map((deliverable, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span className="text-sm text-gray-700">{deliverable}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-teal-50 rounded border border-teal-200">
            <h5 className="font-semibold text-teal-900 mb-2">⚙️ Variables Required</h5>
            <div className="text-xs text-teal-800 space-y-1">
              <p>• SOCIAL_ANALYTICS_URL</p>
              <p>• OPENAI_API_KEY / LLM_ENDPOINT</p>
              <p>• SHEET_ID, SLACK_CHANNEL</p>
              <p>• TARGET_PERSONA, TARGET_KPI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant principal
export default function Module6Content() {
  return (
    <div className="space-y-16">
      {/* SLIDE 1: TITRE ET OBJECTIFS */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-800 text-white flex items-center justify-center p-8 rounded-3xl">
        <div className="text-center max-w-4xl">
          <div className="text-8xl mb-8">🤖</div>
          <h1 className="text-6xl font-bold mb-8 leading-tight">Module 6</h1>
          <h2 className="text-4xl font-light mb-12 text-blue-100">IA & Automatisation No-Code pour le Growth</h2>
          <div className="text-xl text-blue-200 mb-8">Durée : 2h • n8n + IA • 1 atelier pratique</div>
        </div>
      </section>

      {/* SLIDE 2: OBJECTIFS D'APPRENTISSAGE */}
      <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Objectifs d'apprentissage</h2>
            <div className="w-32 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Workflows No-Code</h3>
              </div>
              <p className="text-gray-600 mb-4">Construire des workflows n8n qui servent la NSM</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">IA pour Contenus</h3>
              </div>
              <p className="text-gray-600 mb-4">Utiliser l'IA pour produire, analyser et itérer des contenus (SEO, SEA & Social)</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Boucles d'Apprentissage</h3>
              </div>
              <p className="text-gray-600 mb-4">Mettre en place des boucles (logs, alertes, évaluation)</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Intégration Modules</h3>
              </div>
              <p className="text-gray-600 mb-4">Relier l'automatisation au Dashboard (M4) et aux tests (M5)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Pourquoi automatiser ? */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Pourquoi automatiser ? (et quand ne pas le faire)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-3">✅ À FAIRE</h3>
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>Tâches répétitives, fort volume</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>Règles claires, SLA court</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>Impact direct sur un input NSM</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-700 mb-3">❌ À ÉVITER</h3>
            <ul className="space-y-2 text-sm text-red-800">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Process instables, données peu fiables</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Zones sensibles (PII) sans garde-fous</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white rounded border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2">🎯 Bénéfices</h4>
          <p className="text-sm text-gray-700">
            <strong>Vitesse, cohérence, moins d'erreurs, focus sur l'expérimentation</strong>
          </p>
        </div>
      </div>

      {/* Stack & Architecture */}
      <StackArchitecture />

      {/* Catalogue de Workflows */}
      <CatalogueWorkflows />

      {/* IA pour Création & Optimisation */}
      <IACreationOptimisation />

      {/* Social + IA */}
      <SocialIA />

      {/* SEA + IA */}
      <SEAIA />

      {/* Mesure & Boucles */}
      <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Mesure & Boucles (brancher Module 4 & 5)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="bg-white rounded p-4 border border-indigo-200">
              <h5 className="font-medium text-indigo-800 mb-2">📝 Log structuré</h5>
              <p className="text-sm text-gray-700">Chaque run : entrée → sortie → action → résultat</p>
            </div>
            <div className="bg-white rounded p-4 border border-indigo-200">
              <h5 className="font-medium text-indigo-800 mb-2">📈 Agrégats hebdo</h5>
              <p className="text-sm text-gray-700">CVR, Activation, Free→Paid, K-factor vers Dashboard</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded p-4 border border-indigo-200">
              <h5 className="font-medium text-indigo-800 mb-2">🧪 Lien tests</h5>
              <p className="text-sm text-gray-700">Chaque output IA → test (Module 5) : ID, variante, dates</p>
            </div>
            <div className="bg-white rounded p-4 border border-indigo-200">
              <h5 className="font-medium text-indigo-800 mb-2">🔗 Intégration</h5>
              <p className="text-sm text-gray-700">Alimenter /experiments et annoter courbes Dashboard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sécurité & Conformité */}
      <div className="bg-red-50 rounded-lg p-6 border border-red-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🛡️ Sécurité, Conformité, Qualité</h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <h5 className="font-medium text-red-800 mb-1">PII</h5>
            <p className="text-xs text-gray-700">Minimiser, pseudonymiser, strict nécessaire</p>
          </div>
          <div className="text-center">
            <Settings className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <h5 className="font-medium text-orange-800 mb-1">Tokens & Quotas</h5>
            <p className="text-xs text-gray-700">Rotation, backoff</p>
          </div>
          <div className="text-center">
            <AlertTriangle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <h5 className="font-medium text-yellow-800 mb-1">Hallucinations</h5>
            <p className="text-xs text-gray-700">Validation règles + échantillonnage humain</p>
          </div>
          <div className="text-center">
            <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h5 className="font-medium text-blue-800 mb-1">Traçabilité</h5>
            <p className="text-xs text-gray-700">Versionner prompts, log complet, replay</p>
          </div>
        </div>
      </div>

      {/* Atelier n8n */}
      <AteliernN8n />

      {/* Prompts Réutilisables */}
      <PromptsReutilisables />

      {/* Quiz Flash */}
      <QuizModule6 />

      {/* Module 6 Download Pack */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
        <div className="text-6xl mb-4">🎁</div>
        <h3 className="text-2xl font-bold mb-4">Pack Module 6 — n8n + IA</h3>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          Téléchargez le starter workflow n8n, prompts structurés, modèles Google Sheets 
          et toutes les ressources pour automatiser votre Growth avec l'IA.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <Network className="w-5 h-5 mx-auto mb-1" />
            <span>Workflow n8n JSON</span>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <Bot className="w-5 h-5 mx-auto mb-1" />
            <span>Prompts Réutilisables</span>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <Database className="w-5 h-5 mx-auto mb-1" />
            <span>Modèles Google Sheets</span>
          </div>
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <Settings className="w-5 h-5 mx-auto mb-1" />
            <span>Variables Environment</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-6 py-3"
            onClick={() => window.open('/download', '_blank')}
          >
            📥 Télécharger le Pack n8n + IA
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-indigo-600 px-6 py-3"
            onClick={() => window.open('/templates', '_blank')}
          >
            📝 Voir Tous les Templates
          </Button>
        </div>
      </div>
    </div>
  );
}
