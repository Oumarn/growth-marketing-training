"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, TrendingUp, AlertTriangle, FileText, Calculator, BarChart3, Beaker } from 'lucide-react';

// Composant Quiz interactif pour Module 5
function QuizModule5() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Quelle est la formule d'une hypothèse testable ?",
      answer: "✅ Chez [segment], [changement] augmentera [KPI primaire] de +X pts en [période], car [insight]",
      explanation: "Une hypothèse SMART doit être spécifique, mesurable, avec un seuil et une justification",
      isCorrect: true
    },
    {
      id: 2,
      question: "Combien de KPIs primaires par test ?",
      answer: "✅ 1 seul KPI primaire",
      explanation: "Multiple primaires = décision impossible. 1 primaire + secondaires + guardrails",
      isCorrect: true
    },
    {
      id: 3,
      question: "Quelle est la durée recommandée pour un A/B test ?",
      answer: "✅ 7-14 jours avec cycle hebdo complet",
      explanation: "Couvrir les variations comportementales et éviter les biais saisonniers",
      isCorrect: true
    },
    {
      id: 4,
      question: "Que faire si le test ne donne pas de résultat significatif ?",
      answer: "✅ Vérifier MDE vs variance, qualité d'exécution, hypothèse",
      explanation: "Manque de puissance, problème technique ou hypothèse trop large sont les causes principales",
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
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Quiz Flash - Module 5</h3>
          <button
            onClick={toggleShowAllQuestions}
            className="text-green-600 hover:text-green-800 font-medium"
          >
            Affichage question par question
          </button>
        </div>
        <div className="space-y-6">
          {questions.map((q, index) => (
            <div key={q.id} className="bg-white rounded-lg p-4 border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-gray-900">{q.question}</h4>
              </div>
              <div className="ml-11">
                <p className="text-green-700 font-medium mb-2">{q.answer}</p>
                <p className="text-gray-600 text-sm">{q.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Quiz Flash - Module 5</h3>
        <button
          onClick={toggleShowAllQuestions}
          className="text-green-600 hover:text-green-800 font-medium"
        >
          Voir tout
        </button>
      </div>

      <div className="bg-white rounded-lg p-6 border border-green-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">{currentQuestion + 1}</span>
            </div>
            <span className="text-sm text-gray-600">Question {currentQuestion + 1} sur {questions.length}</span>
          </div>
          <div className="flex gap-1">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentQuestion ? 'bg-green-600' : 'bg-gray-300'
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
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Voir la réponse
          </button>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-700 font-medium mb-2">
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
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
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

// Composant Types de Tests
function TypesTests() {
  const [selectedType, setSelectedType] = useState(0);

  const testTypes = [
    {
      name: "A/B fixe",
      usage: "Le plus courant",
      description: "2 variantes, horizon fixe, lecture post-hoc",
      pros: ["Simple à analyser", "Résultats clairs", "Bon contrôle statistique"],
      cons: ["Pas d'optimisation en cours", "Durée fixe obligatoire"],
      whenToUse: "Tests standard de features, UI, copy",
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "A/B/n",
      usage: "Tests multivariants",
      description: ">2 variantes (attention à la puissance)",
      pros: ["Compare plusieurs options", "Économise le temps"],
      cons: ["Réduit la puissance statistique", "Complexifie l'analyse"],
      whenToUse: "Quand vous avez 3+ concepts différents",
      color: "bg-purple-50 border-purple-200"
    },
    {
      name: "Holdout",
      usage: "Impact global",
      description: "Groupe 'pas d'expo' pour mesurer impact global",
      pros: ["Mesure l'effet net", "Évite les biais de contamination"],
      cons: ["Plus complexe à setup", "Demande plus de trafic"],
      whenToUse: "Lifecycle emails, notifications push",
      color: "bg-orange-50 border-orange-200"
    },
    {
      name: "Feature Flags",
      usage: "Déploiement progressif",
      description: "0% → 50% → 100% ramp-up progressif",
      pros: ["Contrôle du risque", "Rollback facile", "Monitoring en temps réel"],
      cons: ["Setup plus complexe", "Nécessite infrastructure flags"],
      whenToUse: "Nouvelles features majeures, architecture",
      color: "bg-green-50 border-green-200"
    },
    {
      name: "Multivarié (MVT)",
      usage: "Plusieurs facteurs",
      description: "Teste plusieurs éléments simultanément",
      pros: ["Interactions entre facteurs", "Optimisation globale"],
      cons: ["Complexité exponentielle", "Beaucoup de trafic requis"],
      whenToUse: "Seulement si fort trafic (>10k/semaine)",
      color: "bg-red-50 border-red-200"
    },
    {
      name: "Bandits",
      usage: "Allocation adaptative",
      description: "Exploit/explore automatique",
      pros: ["S'adapte en temps réel", "Maximise les gains"],
      cons: ["Analyse complexe", "Moins de learnings"],
      whenToUse: "Ads créatives, recommandations",
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Types de Tests & Quand les Utiliser</h3>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {testTypes.map((type, index) => (
          <button
            key={index}
            onClick={() => setSelectedType(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedType === index
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type.name}
          </button>
        ))}
      </div>

      <div className={`rounded-lg p-6 border ${testTypes[selectedType].color}`}>
        <div className="flex items-center gap-3 mb-4">
          <Beaker className="w-6 h-6 text-gray-600" />
          <div>
            <h4 className="font-bold text-gray-900">{testTypes[selectedType].name}</h4>
            <p className="text-sm text-gray-600">{testTypes[selectedType].usage}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{testTypes[selectedType].description}</p>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h5 className="font-semibold text-green-700 mb-2">✅ Avantages</h5>
            <ul className="space-y-1">
              {testTypes[selectedType].pros.map((pro, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-red-700 mb-2">❌ Inconvénients</h5>
            <ul className="space-y-1">
              {testTypes[selectedType].cons.map((con, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-blue-700 mb-2">🎯 Quand utiliser</h5>
            <p className="text-sm text-gray-700">{testTypes[selectedType].whenToUse}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Experiment Card Template
function ExperimentCard() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Experiment Card — Format Standard</h3>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-4">📝 Formule d'Hypothèse SMART</h4>
          <div className="bg-white rounded-lg p-4 border border-blue-200 mb-4">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Format :</strong>
            </p>
            <p className="text-blue-700 font-mono text-sm bg-blue-50 p-3 rounded">
              Chez [segment], [changement] augmentera [KPI primaire] de +X pts en [période], car [insight].
            </p>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Exemple MeetFlow :</strong>
            </p>
            <p className="text-green-700 text-sm">
              "Chez RH PME, preuve chiffrée en H1 augmentera CVR visite→signup de +2 pts en 14j, car réduction friction cognitive."
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">🎯 Structure Experiment Card</h4>
          <div className="space-y-3">
            {[
              { label: "Contexte & Insight", desc: "Source de données, support, insights qualitatifs" },
              { label: "Hypothèse", desc: "Formule SMART + KPI primaire/secondaires/guardrails" },
              { label: "Design", desc: "Variantes, ciblage, durée, taille échantillon" },
              { label: "Implémentation", desc: "Owner, outils, plan tracking (events/props)" },
              { label: "Critères", desc: "Seuils start/iterate/kill définies à l'avance" },
              { label: "Learnings", desc: "Ce qu'on retient (même en cas d'échec)" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-xs">{index + 1}</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{item.label}</p>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant KPIs & Alignement NSM
function KPIsAlignment() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">KPIs : Primaire / Secondaires / Guardrails</h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-green-600" />
            <h4 className="font-semibold text-green-900">KPI Primaire</h4>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="font-medium text-green-800 text-sm">🎯 1 seul par test</p>
              <p className="text-green-700 text-xs mt-1">CVR visite→signup, Activation 24h, Time to Value</p>
            </div>
            <div className="text-xs text-green-700">
              <strong>Pourquoi 1 seul ?</strong> Multiple primaires = décision impossible
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-blue-900">Secondaires</h4>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="font-medium text-blue-800 text-sm">📊 Indicateurs de compréhension</p>
              <p className="text-blue-700 text-xs mt-1">TTFV, scroll depth, session duration</p>
            </div>
            <div className="text-xs text-blue-700">
              <strong>Usage :</strong> Comprendre le "pourquoi" du résultat primaire
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <h4 className="font-semibold text-orange-900">Guardrails</h4>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="font-medium text-orange-800 text-sm">🛡️ Ne pas dégrader</p>
              <p className="text-orange-700 text-xs mt-1">Taux d'erreurs, churn, NPS, performance</p>
            </div>
            <div className="text-xs text-orange-700">
              <strong>Seuil :</strong> Arrêt automatique si dégradation significative
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
        <h5 className="font-semibold text-indigo-900 mb-2">🔗 Lien avec NSM (Module 4)</h5>
        <p className="text-indigo-800 text-sm">
          Chaque test doit impacter un <strong>input de votre NSM Tree</strong>. 
          Si CVR signup est un input → test optimisation landing. 
          Si Activation est un input → test onboarding/TTFV.
        </p>
      </div>
    </div>
  );
}

// Composant Planification & MDE
function PlanificationMDE() {
  const [selectedScenario, setSelectedScenario] = useState(0);

  const scenarios = [
    {
      scenario: "Baseline basse + MDE petit",
      baseline: "2-5%",
      mde: "+1-2 pts",
      sample: "1,000-2,000 par variante",
      duration: "10-14 jours",
      example: "CVR signup 3% → 5%"
    },
    {
      scenario: "Baseline moyenne + MDE standard",
      baseline: "20-30%",
      mde: "+3-5 pts",
      sample: "800-1,200 par variante",
      duration: "7-10 jours",
      example: "Activation 25% → 30%"
    },
    {
      scenario: "Baseline élevée + MDE conservateur",
      baseline: "60-80%",
      mde: "+2-3 pts",
      sample: "1,500-2,500 par variante",
      duration: "7-14 jours",
      example: "Email open 70% → 73%"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Planifier : MDE, Échantillon & Durée</h3>
      
      {/* Définition MDE */}
      <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 mb-6">
        <h4 className="font-semibold text-purple-900 mb-4">📐 Qu'est-ce que le MDE ?</h4>
        <div className="bg-white rounded-lg p-4 border border-purple-200">
          <p className="text-purple-800 text-sm mb-3">
            <strong>MDE (Minimum Detectable Effect)</strong> = la plus petite amélioration qu'on veut pouvoir détecter statistiquement.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-purple-700 mb-2"><strong>Exemple concret :</strong></p>
              <p className="text-xs text-purple-700">
                Si CVR actuel = 3%, MDE = +2 pts → on veut détecter si le test atteint ≥5% 
                (soit +67% d'amélioration relative)
              </p>
            </div>
            <div>
              <p className="text-xs text-purple-700 mb-2"><strong>Impact sur le trafic :</strong></p>
              <p className="text-xs text-purple-700">
                Plus le MDE est petit, plus on a besoin de trafic. 
                MDE +1 pt ≈ 4x plus de trafic que MDE +2 pts
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200 mb-6">
        <h4 className="font-semibold text-yellow-900 mb-4">📐 Règles Rapides (Ordre de Grandeur)</h4>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {scenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => setSelectedScenario(index)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedScenario === index
                  ? 'bg-yellow-600 text-white'
                  : 'bg-white text-yellow-700 hover:bg-yellow-100'
              }`}
            >
              {scenario.scenario}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg p-4 border border-yellow-200">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Baseline :</span>
                <span className="text-sm font-medium">{scenarios[selectedScenario].baseline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">MDE :</span>
                <span className="text-sm font-medium">{scenarios[selectedScenario].mde}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Échantillon :</span>
                <span className="text-sm font-medium">{scenarios[selectedScenario].sample}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Durée :</span>
                <span className="text-sm font-medium">{scenarios[selectedScenario].duration}</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>Exemple :</strong> {scenarios[selectedScenario].example}
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-4">✅ Bonnes Pratiques</h4>
          <ul className="space-y-2">
            {[
              "Viser 7-14 jours minimum",
              "Couvrir un cycle hebdo complet",
              "Éviter périodes anormales (vacances, Black Friday)",
              "Fixer taille & horizon à l'avance",
              "Ne pas 'peek & stop' au feeling"
            ].map((practice, index) => (
              <li key={index} className="text-blue-800 flex items-start gap-2 text-sm">
                <span className="text-green-500 mt-0.5">✓</span>
                {practice}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-4">🧮 Calculateur Précis</h4>
          <p className="text-gray-700 text-sm mb-4">
            Pour des calculs exacts, utilisez un calculateur avec α=5%, puissance=80% :
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">GrowthBook (intégré)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">PostHog (sample size calculator)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">Optimizely Stats Engine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Exemples MeetFlow
function ExemplesMeetFlow() {
  const [selectedExample, setSelectedExample] = useState(0);

  const examples = [
    {
      id: "LP_H1_Proof",
      title: "Landing Page H1 - Preuve Chiffrée",
      segment: "RH PME",
      variants: ['H1: "−30% no-shows"', 'H1: "Panel en 2 min"'],
      primary: "CVR visite→signup",
      secondary: ["TTFV", "Scroll depth", "Bounce rate"],
      guardrails: ["Erreurs 404", "Load time"],
      hypothesis: "La preuve chiffrée réduira la friction cognitive et augmentera la confiance",
      mde: "+2 pts",
      sample: "1,200 par variante",
      duration: "14 jours"
    },
    {
      id: "Email_Subject_2min",
      title: "Email Subject - Time vs Pain",
      segment: "Signups récents",
      variants: ['Objet: "2 min"', 'Objet: "no-shows"'],
      primary: "Activation J1",
      secondary: ["Open rate", "Click rate", "Time in app"],
      guardrails: ["Unsubscribe rate", "Spam complaints"],
      hypothesis: "L'angle temps sera plus motivant que l'angle problème",
      mde: "+3 pts",
      sample: "800 par variante",
      duration: "7 jours"
    },
    {
      id: "Ads_Hook_NoShows",
      title: "Ads Hook - No-shows vs Allers-retours",
      segment: "RH sur LinkedIn",
      variants: ['Hook: "no-shows"', 'Hook: "allers-retours"'],
      primary: "CTR",
      secondary: ["CPC", "CVR post-clic", "Video view rate"],
      guardrails: ["Frequency", "Negative feedback"],
      hypothesis: "Le pain no-shows est plus spécifique et mémorable",
      mde: "+0.5 pts",
      sample: "2,000 impressions par variante",
      duration: "10 jours"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Exemples MeetFlow — Prêts à Lancer</h3>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => setSelectedExample(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedExample === index
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {example.id}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{examples[selectedExample].title}</h4>
            <p className="text-sm text-gray-600">Segment : {examples[selectedExample].segment}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">🧪 Variantes</h5>
              <div className="space-y-2">
                {examples[selectedExample].variants.map((variant, idx) => (
                  <div key={idx} className="bg-gray-50 rounded p-3">
                    <span className="text-sm text-gray-700">{variant}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-gray-900 mb-2">💡 Hypothèse</h5>
              <p className="text-sm text-gray-700 bg-blue-50 rounded p-3">
                {examples[selectedExample].hypothesis}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">🎯 KPIs</h5>
              <div className="space-y-2">
                <div className="bg-green-50 rounded p-3">
                  <span className="text-xs font-medium text-green-700 block">PRIMAIRE</span>
                  <span className="text-sm text-gray-700">{examples[selectedExample].primary}</span>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <span className="text-xs font-medium text-blue-700 block">SECONDAIRES</span>
                  <span className="text-sm text-gray-700">
                    {examples[selectedExample].secondary.join(", ")}
                  </span>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <span className="text-xs font-medium text-orange-700 block">GUARDRAILS</span>
                  <span className="text-sm text-gray-700">
                    {examples[selectedExample].guardrails.join(", ")}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded p-3">
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-gray-600 block">MDE</span>
                  <span className="font-medium">{examples[selectedExample].mde}</span>
                </div>
                <div>
                  <span className="text-gray-600 block">Échantillon</span>
                  <span className="font-medium">{examples[selectedExample].sample}</span>
                </div>
                <div>
                  <span className="text-gray-600 block">Durée</span>
                  <span className="font-medium">{examples[selectedExample].duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant Analyse & Décision
function AnalyseDecision() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Analyse & Décision : Start / Iterate / Kill</h3>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-4">📊 Lire les Résultats</h4>
          <div className="space-y-3">
            <div className="bg-white rounded p-3 border border-blue-200">
              <h5 className="font-medium text-blue-800 text-sm mb-1">Uplift Absolu vs Relatif</h5>
              <p className="text-blue-700 text-xs">Afficher les deux : +2 pts ET +40% relatif</p>
            </div>
            <div className="bg-white rounded p-3 border border-blue-200">
              <h5 className="font-medium text-blue-800 text-sm mb-1">IC 95% / p-value</h5>
              <p className="text-blue-700 text-xs">Méfiance peeking et tests multiples</p>
            </div>
            <div className="bg-white rounded p-3 border border-blue-200">
              <h5 className="font-medium text-blue-800 text-sm mb-1">Analyse par Segments</h5>
              <p className="text-blue-700 text-xs">Après lecture globale (éviter p-hacking)</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h5 className="font-semibold text-green-900">🚀 START (Scale)</h5>
            </div>
            <p className="text-green-800 text-sm">
              Effet ≥ seuil + pas d'impact négatif guardrails
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-yellow-600" />
              <h5 className="font-semibold text-yellow-900">🔄 ITERATE</h5>
            </div>
            <p className="text-yellow-800 text-sm">
              Signaux positifs mais insuffisants (améliorer preuve, ciblage)
            </p>
          </div>

          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h5 className="font-semibold text-red-900">❌ KILL</h5>
            </div>
            <p className="text-red-800 text-sm">
              Effet nul/négatif + coût d'opportunité ; documenter l'apprentissage
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
        <h5 className="font-semibold text-indigo-900 mb-2">💡 Règle d'Or</h5>
        <p className="text-indigo-800 text-sm">
          <strong>1 victoire claire {'>'} 3 tests tièdes.</strong> 
          Mieux vaut itérer jusqu'à un succès net que multiplier les tests marginaux.
        </p>
      </div>
    </div>
  );
}

// Composant principal
export default function Module5Content() {
  return (
    <div className="space-y-16">
      {/* SLIDE 1: TITRE ET OBJECTIFS */}
      <section className="min-h-screen bg-gradient-to-br from-green-600 via-emerald-600 to-teal-800 text-white flex items-center justify-center p-8 rounded-3xl">
        <div className="text-center max-w-4xl">
          <div className="text-8xl mb-8">🧪</div>
          <h1 className="text-6xl font-bold mb-8 leading-tight">Module 5</h1>
          <h2 className="text-4xl font-light mb-12 text-green-100">Expérimentation & A/B Testing</h2>
          <div className="text-xl text-green-200 mb-8">Durée : 2h • Hypothèses & Analyse • 1 atelier</div>
        </div>
      </section>

      {/* SLIDE 2: OBJECTIFS D'APPRENTISSAGE */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Objectifs d'apprentissage</h2>
            <div className="w-32 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Hypothèses Testables</h3>
              </div>
              <p className="text-gray-600 mb-4">Passer d'idées à des hypothèses testables (Experiment Card)</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Types de Tests</h3>
              </div>
              <p className="text-gray-600 mb-4">Choisir le bon type de test (A/B, holdout, feature flag…)</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">KPIs & NSM</h3>
              </div>
              <p className="text-gray-600 mb-4">Fixer KPI primaire/secondaires/guardrails alignés NSM</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Planifier & Analyser</h3>
              </div>
              <p className="text-gray-600 mb-4">Planifier (MDE, durée) et analyser correctement (uplift, IC/p-value)</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">5</div>
                <h3 className="text-xl font-bold text-gray-800 ml-4">Décision & Capitalisation</h3>
              </div>
              <p className="text-gray-600 mb-4">Décider start / iterate / kill et capitaliser (log des apprentissages)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Pourquoi expérimenter ? */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Pourquoi expérimenter ? (vs opinions)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-red-700 mb-2">❌ Sans test</h3>
            <ul className="space-y-1 text-sm text-red-800">
              <li>• Biais HiPPO (opinion du chef)</li>
              <li>• Corrélations douteuses</li>
              <li>• "Musée de métriques"</li>
              <li>• Décisions au feeling</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-green-700 mb-2">✅ Avec test</h3>
            <ul className="space-y-1 text-sm text-green-800">
              <li>• Apprentissage causal</li>
              <li>• Choix clairs stop/scale</li>
              <li>• ROI mesurable</li>
              <li>• Focus sur NSM</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white rounded border border-green-200">
          <p className="text-sm text-gray-700">
            <strong>Rythme optimal :</strong> 1-3 tests/semaine par squad {'>'} "1 gros pari par trimestre"
          </p>
        </div>
      </div>

      {/* Experiment Card */}
      <ExperimentCard />

      {/* Types de Tests */}
      <TypesTests />

      {/* KPIs & Alignement */}
      <KPIsAlignment />

      {/* Planification & MDE */}
      <PlanificationMDE />

      {/* Exemples MeetFlow */}
      <ExemplesMeetFlow />

      {/* Design & Exécution */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">🔧 Design & Exécution — Checklist</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-4">🎯 Setup Technique</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-900">Randomisation côté serveur/outil</p>
                  <p className="text-xs text-gray-600">Éviter fuites cookies, redirect bias</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-900">Ciblage : 1 segment prioritaire</p>
                  <p className="text-xs text-gray-600">Persona/source/plan spécifique</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-900">QA : tracking des events</p>
                  <p className="text-xs text-gray-600">Staging → prod, "empty states", responsive</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-4">🛡️ Plan de Secours</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 text-xs">!</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-900">Feature flag off</p>
                  <p className="text-xs text-gray-600">Arrêt immédiat si problème technique</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 text-xs">!</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-900">Rollback simple</p>
                  <p className="text-xs text-gray-600">Procédure définie et testée</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 text-xs">!</span>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-900">Monitoring erreurs</p>
                  <p className="text-xs text-gray-600">Alertes automatiques sur guardrails</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-white rounded border border-blue-200">
          <h5 className="font-semibold text-blue-900 mb-2">📝 Journal (Log) obligatoire</h5>
          <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-700">
            <div>
              <span className="font-medium">ID du test</span>
              <p className="text-xs text-gray-600">LP_H1_Proof_2025Q1</p>
            </div>
            <div>
              <span className="font-medium">Dates</span>
              <p className="text-xs text-gray-600">Début → Fin → Analyse</p>
            </div>
            <div>
              <span className="font-medium">Owner</span>
              <p className="text-xs text-gray-600">Responsable principal</p>
            </div>
            <div>
              <span className="font-medium">Assets</span>
              <p className="text-xs text-gray-600">Screenshots, liens</p>
            </div>
          </div>
        </div>
      </div>

      {/* Analyse & Décision */}
      <AnalyseDecision />

      {/* Quiz Flash */}
      <QuizModule5 />

      {/* Stack & Gouvernance */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🛠️ Stack & Gouvernance</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Outils recommandés</h4>
            <div className="space-y-2">
              <div className="bg-white rounded p-3 border">
                <p className="font-medium text-sm">PostHog</p>
                <p className="text-xs text-gray-600">Analytics + A/B testing intégré</p>
              </div>
              <div className="bg-white rounded p-3 border">
                <p className="font-medium text-sm">GrowthBook</p>
                <p className="text-xs text-gray-600">Feature flags + statistiques avancées</p>
              </div>
              <div className="bg-white rounded p-3 border">
                <p className="font-medium text-sm">Optimizely/VWO</p>
                <p className="text-xs text-gray-600">Solutions enterprise</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Conventions & Rituels</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span><strong>Nommage :</strong> LP_H1_Proof_2025Q1</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span><strong>Tags :</strong> stage, ICP, owner</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span><strong>Review hebdo :</strong> résultats + backlog ICE</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span><strong>Dashboard :</strong> /experiments (Module 4)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Annexes & Anti-patterns */}
      <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ Annexes — Anti-patterns à Éviter</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-red-700 mb-3">❌ À NE PAS FAIRE</h4>
            <ul className="space-y-2 text-sm text-red-800">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Multiplier les variantes si trafic limité</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Plusieurs KPIs primaires par test</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Peeking et arrêt prématuré au feeling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Ignorer les guardrails</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">•</span>
                <span>Ne pas documenter les échecs</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-3">✅ BONNES PRATIQUES</h4>
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>1 seul KPI primaire par test</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>Écrire la décision même en échec</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>Relier au Dashboard (Module 4)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>Alimenter /experiments et annoter courbes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">•</span>
                <span>La connaissance progresse toujours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  );
}
