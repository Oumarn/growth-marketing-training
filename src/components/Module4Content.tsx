"use client";

import React, { useState } from 'react';
import SaaSDashboard from './SaaSDashboard';

// Composant Quiz interactif pour Module 4
function QuizModule4() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Leading vs Lagging : laquelle est prédictive ?",
      answer: "✅ Leading metrics",
      explanation: "Leading = prédictives (ex. Aha atteint), Lagging = résultats (ex. MRR)",
      isCorrect: true
    },
    {
      id: 2,
      question: "LTV = ARPU × marge / churn - Pourquoi la marge compte ?",
      answer: "✅ Pour le profit net disponible",
      explanation: "On ne peut réinvestir que la marge après coûts, pas le revenu brut",
      isCorrect: true
    },
    {
      id: 3,
      question: "Pourquoi Dashboard Exec ≠ Squad ?",
      answer: "✅ Objectifs différents",
      explanation: "Exec = décisions stratégiques (vue d'ensemble), Squad = optimisations tactiques (détails AAARRR)",
      isCorrect: true
    },
    {
      id: 4,
      question: "Un bon dashboard a combien de métriques ?",
      answer: "✅ 5-8 cartes max",
      explanation: "Plus de 8 cartes = paralysie d'analyse, moins de focus sur l'essentiel",
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
          <h3 className="text-xl font-bold text-gray-900">Quiz Flash - Module 4</h3>
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
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Quiz Flash - Module 4</h3>
        <button
          onClick={toggleShowAllQuestions}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Voir tout
        </button>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-600">
          Question {currentQuestion + 1} sur {questions.length}
        </span>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestion === questions.length - 1}
            className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            →
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">
          {questions[currentQuestion].question}
        </h4>
        
        {!showAnswer ? (
          <button
            onClick={() => setShowAnswer(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voir la réponse
          </button>
        ) : (
          <div className="space-y-3">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium">{questions[currentQuestion].answer}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">{questions[currentQuestion].explanation}</p>
            </div>
          </div>
        )}
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

// Composant Taxonomie KPI
function TaxonomieKPI() {
  const [activeType, setActiveType] = useState('nsm');

  const kpiTypes = {
    nsm: {
      title: "NSM (Outcome)",
      description: "Valeur durable mesurée",
      examples: [
        "Utilisateurs activés / semaine",
        "ARR (Annual Recurring Revenue)",
        "NPS Score moyen",
        "Commandes réussies / jour"
      ],
      color: "bg-purple-50 border-purple-200 text-purple-900"
    },
    input: {
      title: "Input Metrics",
      description: "Leviers directs de la NSM",
      examples: [
        "CVR visite→signup",
        "TTFV (Time To First Value)",
        "Activation rate",
        "Feature adoption rate"
      ],
      color: "bg-blue-50 border-blue-200 text-blue-900"
    },
    leading: {
      title: "Leading Metrics",
      description: "Prédictives, changent avant la NSM",
      examples: [
        "Aha moment atteint",
        "Engagement D7",
        "Trial starts",
        "Feature usage intensity"
      ],
      color: "bg-green-50 border-green-200 text-green-900"
    },
    lagging: {
      title: "Lagging Metrics",
      description: "Résultats, confirment les tendances",
      examples: [
        "MRR (Monthly Recurring Revenue)",
        "Customer count",
        "Churn rate",
        "Revenue per customer"
      ],
      color: "bg-orange-50 border-orange-200 text-orange-900"
    },
    health: {
      title: "Health Metrics",
      description: "Qualité de mesure & système",
      examples: [
        "Data freshness",
        "Event tracking coverage",
        "Attribution accuracy",
        "Dashboard load time"
      ],
      color: "bg-gray-50 border-gray-200 text-gray-900"
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Taxonomie KPI — Langage commun</h3>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(kpiTypes).map(([key, type]) => (
          <button
            key={key}
            onClick={() => setActiveType(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeType === key
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type.title}
          </button>
        ))}
      </div>

      <div className={`rounded-lg p-6 border-2 ${kpiTypes[activeType as keyof typeof kpiTypes].color}`}>
        <h4 className="font-bold text-lg mb-2">
          {kpiTypes[activeType as keyof typeof kpiTypes].title}
        </h4>
        <p className="mb-4 font-medium">
          {kpiTypes[activeType as keyof typeof kpiTypes].description}
        </p>
        
        <div className="grid md:grid-cols-2 gap-3">
          {kpiTypes[activeType as keyof typeof kpiTypes].examples.map((example, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-current rounded-full opacity-60" />
              <span className="text-sm">{example}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Composant NSM Input Tree
function NSMInputTree() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">NSM Input Tree — Exemple concret</h3>
      
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
        <div className="text-center mb-6">
          <div className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-bold text-lg">
            NSM: Utilisateurs activés / semaine
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              category: "Acquisition",
              metrics: ["CVR visite→signup", "Source quality", "CPA par canal"],
              color: "bg-blue-100 border-blue-300 text-blue-900"
            },
            {
              category: "Activation",
              metrics: ["Aha Rate", "TTFV médian", "Setup completion"],
              color: "bg-green-100 border-green-300 text-green-900"
            },
            {
              category: "Rétention",
              metrics: ["D7/D30 retention", "Stickiness DAU/MAU", "Feature usage"],
              color: "bg-orange-100 border-orange-300 text-orange-900"
            },
            {
              category: "Revenus",
              metrics: ["Free→Paid CVR", "ARPU", "Expansion rate"],
              color: "bg-pink-100 border-pink-300 text-pink-900"
            },
            {
              category: "Référence",
              metrics: ["Referrals/100 users", "K-factor", "Viral coefficient"],
              color: "bg-indigo-100 border-indigo-300 text-indigo-900"
            },
            {
              category: "Expérience",
              metrics: ["NPS", "Support tickets", "Time to resolution"],
              color: "bg-gray-100 border-gray-300 text-gray-900"
            }
          ].map((node, index) => (
            <div key={index} className={`rounded-lg p-4 border-2 ${node.color}`}>
              <h4 className="font-bold mb-3">{node.category}</h4>
              <ul className="space-y-1">
                {node.metrics.map((metric, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2">
                    <span className="text-current mt-1">→</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
          <p className="text-sm text-gray-700">
            <strong>💡 Principe :</strong> Chaque nœud = levier testable. 
            Une expérience peut impacter 1-2 inputs, qui remontent vers la NSM.
          </p>
        </div>
      </div>
    </div>
  );
}

// Composant Formules Essentielles
function FormulesEssentielles() {
  const [activeCategory, setActiveCategory] = useState('aaarrr');

  const formulas = {
    aaarrr: {
      title: "Formules AAARRR",
      items: [
        {
          name: "CVR visite→signup",
          formula: "signups ÷ visiteurs",
          example: "1,000 signups ÷ 10,000 visiteurs = 10%"
        },
        {
          name: "Activation rate",
          formula: "users activés ÷ signups",
          example: "400 activés ÷ 1,000 signups = 40%"
        },
        {
          name: "Stickiness",
          formula: "DAU ÷ MAU",
          example: "5,000 DAU ÷ 20,000 MAU = 25%"
        },
        {
          name: "CRR (Customer Retention Rate)",
          formula: "(clients fin - nouveaux) ÷ clients début",
          example: "(950 - 200) ÷ 1000 = 75%"
        },
        {
          name: "K-factor",
          formula: "(invitations ÷ user) × (conv des invités)",
          example: "(2 invit/user) × (20% conv) = 0.4"
        }
      ]
    },
    economics: {
      title: "Unit Economics",
      items: [
        {
          name: "CAC (Customer Acquisition Cost)",
          formula: "dépenses d'acquisition ÷ clients acquis",
          example: "€50,000 ÷ 500 clients = €100 CAC"
        },
        {
          name: "ARPU (Average Revenue Per User)",
          formula: "revenus ÷ clients payants",
          example: "€100,000 ÷ 2,000 clients = €50/mois"
        },
        {
          name: "LTV (Lifetime Value)",
          formula: "(ARPU × marge %) ÷ churn mensuel",
          example: "(€50 × 80%) ÷ 5% = €800"
        },
        {
          name: "LTV:CAC Ratio",
          formula: "LTV ÷ CAC (cible ≥ 3:1)",
          example: "€800 ÷ €100 = 8:1 ✅"
        },
        {
          name: "Payback Period",
          formula: "CAC ÷ (ARPU × marge)",
          example: "€100 ÷ (€50 × 80%) = 2.5 mois"
        }
      ]
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Formules Essentielles</h3>
      
      <div className="flex gap-4 mb-6">
        {Object.entries(formulas).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeCategory === key
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {formulas[activeCategory as keyof typeof formulas].items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-600">Formule</span>
                <p className="text-indigo-700 font-mono bg-indigo-50 px-3 py-1 rounded mt-1">
                  {item.formula}
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Exemple</span>
                <p className="text-gray-700 mt-1">{item.example}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Composant Dashboard Patterns
function DashboardPatterns() {
  const [selectedPattern, setSelectedPattern] = useState(0);

  const patterns = [
    {
      title: "Dashboard Exec",
      audience: "Direction, C-level",
      frequency: "Hebdomadaire (30min)",
      cards: [
        "NSM (objectif vs réalisé)",
        "MRR + croissance %",
        "LTV:CAC ratio",
        "Rétention D30",
        "3 alertes critiques"
      ],
      rules: [
        "1 slide maximum",
        "Focus sur outcomes",
        "Seuils clairs (vert/orange/rouge)",
        "Décisions stratégiques"
      ],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Dashboard Squad",
      audience: "Équipe produit/growth",
      frequency: "Quotidien",
      cards: [
        "AAARRR détaillé par étape",
        "Activation & TTFV par segment",
        "Funnel conversion par source",
        "Feature adoption rates",
        "Backlog top 5 ICE scores",
        "Expériences en cours"
      ],
      rules: [
        "8 cartes maximum",
        "Segmentation utile",
        "Focus sur inputs",
        "Actions tactiques"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Dashboard Experiment",
      audience: "Growth team, PM",
      frequency: "En continu",
      cards: [
        "Résultats A/B (uplift, p-value)",
        "Taille d'échantillon atteinte",
        "Durée restante par test",
        "Pipeline d'expériences",
        "Win rate & learning log"
      ],
      rules: [
        "Une ligne = une expérience",
        "Status : start/iterate/kill",
        "Critères de décision clairs",
        "Learning capture"
      ],
      color: "bg-green-50 border-green-200"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Patterns de Dashboards</h3>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {patterns.map((pattern, index) => (
          <button
            key={index}
            onClick={() => setSelectedPattern(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedPattern === index
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {pattern.title}
          </button>
        ))}
      </div>

      <div className={`rounded-lg p-6 border-2 ${patterns[selectedPattern].color}`}>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-lg mb-2">{patterns[selectedPattern].title}</h4>
            <div className="space-y-2 text-sm">
              <p><strong>Audience :</strong> {patterns[selectedPattern].audience}</p>
              <p><strong>Fréquence :</strong> {patterns[selectedPattern].frequency}</p>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Règles d'or</h5>
            <ul className="space-y-1">
              {patterns[selectedPattern].rules.map((rule, idx) => (
                <li key={idx} className="text-sm flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Cartes recommandées ({patterns[selectedPattern].cards.length})</h5>
          <div className="grid md:grid-cols-2 gap-2">
            {patterns[selectedPattern].cards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-xs font-bold text-indigo-600">
                    {idx + 1}
                  </div>
                  <span className="text-sm font-medium">{card}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



// Composant Data Quality
function DataQuality() {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Data Quality & Gouvernance</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-4">✅ Bonnes pratiques</h4>
          <ul className="space-y-2">
            {[
              "Plan de tracking cohérent (verbe+objet)",
              "Identités unifiées (anonyme→identifié)",
              "QA systématique des événements",
              "Glossaire des définitions partagé",
              "Refresh automatique + ownership claire"
            ].map((practice, index) => (
              <li key={index} className="text-blue-800 flex items-start gap-2 text-sm">
                <span className="text-green-500 mt-0.5">✓</span>
                {practice}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50 rounded-lg p-6 border border-red-200">
          <h4 className="font-semibold text-red-900 mb-4">❌ Anti-patterns</h4>
          <ul className="space-y-2">
            {[
              "Mettre toutes les métriques (musée)",
              "Mélanger les définitions entre périodes",
              "Pas de seuil → pas de décision",
              "Pas d'owner → pas d'action",
              "Dashboard sans refresh ni maintenance"
            ].map((antiPattern, index) => (
              <li key={index} className="text-red-800 flex items-start gap-2 text-sm">
                <span className="text-red-500 mt-0.5">✗</span>
                {antiPattern}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h5 className="font-semibold text-yellow-900 mb-2">🎯 Conseil pratique</h5>
        <p className="text-yellow-800 text-sm">
          Démarrez en <strong>Google Sheets</strong> avec 3 cartes essentielles (NSM, Activation, Free→Paid), 
          puis migrez vers Looker Studio/Metabase quand vous avez validé l'usage et les définitions.
        </p>
      </div>
    </div>
  );
}

// Composant principal
export default function Module4Content() {
  return (
    <div className="space-y-16">
      {/* SLIDE 1: TITRE ET OBJECTIFS */}
      <section className="min-h-screen bg-gradient-to-br from-orange-600 via-red-600 to-pink-800 text-white flex items-center justify-center p-8 rounded-3xl">
        <div className="text-center max-w-4xl">
          <div className="text-8xl mb-8">📊</div>
          <h1 className="text-6xl font-bold mb-8 leading-tight">Module 4</h1>
          <h2 className="text-4xl font-light mb-12 text-orange-100">KPIs & Dashboard</h2>
          <div className="text-xl text-orange-200 mb-8">Durée : 1h30 • Taxonomie & NSM • 1 atelier</div>
        </div>
      </section>

      {/* Introduction */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Pourquoi un dashboard ?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Décider vite</h3>
            <p className="text-sm text-gray-600">Stop/iterate/scale basé sur data</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Aligner l'équipe</h3>
            <p className="text-sm text-gray-600">Une version de la vérité</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Rituel hebdo</h3>
            <p className="text-sm text-gray-600">30min → écarts → actions</p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white rounded border">
          <p className="text-sm text-gray-700">
            <strong>Anti-brouillard :</strong> Évite vanity metrics & "reporting musée"
          </p>
        </div>
      </div>

      {/* Taxonomie KPI */}
      <TaxonomieKPI />

      {/* NSM Input Tree */}
      <NSMInputTree />

      {/* Formules essentielles */}
      <FormulesEssentielles />

      {/* Dashboard Patterns */}
      <DashboardPatterns />

      {/* Dashboard SaaS Example */}
      <SaaSDashboard />

      {/* Data Quality */}
      <DataQuality />

      {/* Quiz Flash */}
      <QuizModule4 />

      {/* Rituels */}
      <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🔄 Rituel Hebdo — Framework</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              step: "1. Review KPIs",
              time: "10min",
              action: "NSM + inputs vs objectifs"
            },
            {
              step: "2. Identifier écarts",
              time: "10min", 
              action: "Rouge/orange → pourquoi ?"
            },
            {
              step: "3. Décisions",
              time: "5min",
              action: "Start / Iterate / Kill"
            },
            {
              step: "4. Actions",
              time: "5min",
              action: "MAJ backlog + owners"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-indigo-200">
              <div className="text-indigo-600 font-bold text-sm mb-1">{item.step}</div>
              <div className="text-gray-500 text-xs mb-2">{item.time}</div>
              <div className="text-gray-700 text-sm">{item.action}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-white rounded border border-indigo-200">
          <p className="text-sm text-indigo-800">
            <strong>🎯 Résultat :</strong> 30 minutes → décisions claires → backlog à jour → équipe alignée
          </p>
        </div>
      </div>
    </div>
  );
}
