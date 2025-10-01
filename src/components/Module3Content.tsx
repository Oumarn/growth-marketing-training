"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Composant Quiz interactif pour Module 3
function QuizModule3() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Le parrainage Dropbox fonctionne car il est double-sided",
      answer: "✅ VRAI",
      explanation: "Les deux parties (invitant et invité) reçoivent une valeur immédiate",
      isCorrect: true
    },
    {
      id: 2,
      question: "Un lead magnet eBook est plus efficace qu'un outil utilitaire",
      answer: "❌ FAUX",
      explanation: "HubSpot montre qu'un outil utilitaire (comme un audit) convertit mieux qu'un contenu passif",
      isCorrect: false
    },
    {
      id: 3,
      question: "Airbnb a priorisé le trafic avant la qualité de l'offre",
      answer: "❌ FAUX",
      explanation: "Airbnb a d'abord amélioré les preuves (photos, avis) pour augmenter le CVR",
      isCorrect: false
    },
    {
      id: 4,
      question: "L'incentive PayPal était permanente pour construire le réseau",
      answer: "❌ FAUX",
      explanation: "L'incentive était temporaire et ciblée pour créer l'urgence",
      isCorrect: false
    },
    {
      id: 5,
      question: "Le timing d'activation est crucial dans toutes ces stratégies",
      answer: "✅ VRAI",
      explanation: "Dropbox déclenche après le premier succès, PayPal cible les early adopters",
      isCorrect: true
    },
    {
      id: 6,
      question: "Une landing page doit avoir plusieurs CTA pour plus d'options",
      answer: "❌ FAUX",
      explanation: "Une page = un objectif = un CTA unique pour maximiser la conversion",
      isCorrect: false
    }
  ];

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswer(false);
    }
  };

  const toggleAllQuestions = () => {
    setShowAllQuestions(!showAllQuestions);
    setShowAnswer(false);
    setCurrentQuestion(0);
  };

  if (showAllQuestions) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Quiz Flash - Toutes les questions</h3>
          <button
            onClick={toggleAllQuestions}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Mode interactif
          </button>
        </div>
        
        <div className="grid gap-4">
          {questions.map((q, index) => (
            <div key={q.id} className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 mb-2">{q.question}</p>
                  <p className="text-lg font-bold text-indigo-600 mb-1">{q.answer}</p>
                  <p className="text-sm text-gray-600">{q.explanation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900">Quiz Flash - Module 3</h3>
        <button
          onClick={toggleAllQuestions}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Voir tout
        </button>
      </div>
      
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            Question {currentQuestion + 1} sur {questions.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ←
            </button>
            <button
              onClick={nextQuestion}
              disabled={currentQuestion === questions.length - 1}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-lg font-medium text-gray-900 mb-4">
            {questions[currentQuestion].question}
          </p>
          
          {!showAnswer ? (
            <button
              onClick={() => setShowAnswer(true)}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Voir la réponse
            </button>
          ) : (
            <div className="space-y-3">
              <p className="text-xl font-bold text-indigo-600">
                {questions[currentQuestion].answer}
              </p>
              <p className="text-gray-700">
                {questions[currentQuestion].explanation}
              </p>
            </div>
          )}
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Composant Cas Pratiques
function CasPratiques() {
  const [selectedCase, setSelectedCase] = useState(0);

  const cases = [
    {
      title: "Dropbox — Parrainage Double-Sided",
      company: "Dropbox",
      mechanism: "Parrainage in-product",
      whyWorks: "Incitation claire pour A et B, déclenchée au bon moment dans l'usage",
      keyPoints: [
        "Friction minimale (1 clic)",
        "Valeur immédiate (espace gratuit)",
        "Rappels contextuels"
      ],
      toReplicate: [
        "Incentive double-sided",
        "Placement in-flow",
        "Contre-fraude (limites, vérifs)"
      ],
      kpis: "% utilisateurs qui invitent, K-factor, conversions invitées"
    },
    {
      title: "HubSpot — Outil Gratuit Utilitaire",
      company: "HubSpot",
      mechanism: "Inbound + lead magnet utilitaire",
      whyWorks: "Contenu evergreen + outil gratuit (ex. 'grader') → capture d'email qualifié",
      keyPoints: [
        "Mapping pain → contenu → outil",
        "Nurture d'activation",
        "Scoring qualifié"
      ],
      toReplicate: [
        "Mini-outil ultra spécifique au pain ICP",
        "Follow-up contextualisé",
        "Résultat → CTA activation"
      ],
      kpis: "CR outil→signup, TTFV post-outil, free→paid"
    },
    {
      title: "Airbnb — Preuves & Qualité d'Offre",
      company: "Airbnb",
      mechanism: "Amélioration valeur perçue",
      whyWorks: "Valeur perçue ↑ ⇒ CVR ↑ ⇒ boucle offre/demande",
      keyPoints: [
        "Signal de confiance",
        "UX listings optimisée",
        "Qualité des visuels"
      ],
      toReplicate: [
        "Améliorer la 'preuve' (visuels, reviews, démo)",
        "Preuves above-the-fold",
        "Section confiance renforcée"
      ],
      kpis: "CVR visite→signup, CVR signup→activation, ARPU"
    },
    {
      title: "PayPal — Incentive Réseau Temporaire",
      company: "PayPal",
      mechanism: "Kickstart réseau",
      whyWorks: "Accélère adoption des deux côtés d'un réseau de paiement",
      keyPoints: [
        "Incentive limitée dans le temps",
        "Ciblage communautés early adopters",
        "Message 'rejoignez-nous maintenant'"
      ],
      toReplicate: [
        "Incentive temporaire et ciblée",
        "Urgence créée",
        "Communautés d'early adopters"
      ],
      kpis: "Taux d'adoption par segment, usage récurrent D30"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Cas Pratiques — Mécaniques Réplicables</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {cases.map((cas, index) => (
          <button
            key={index}
            onClick={() => setSelectedCase(index)}
            className={`p-4 rounded-lg border transition-all ${
              selectedCase === index
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="font-medium text-sm">{cas.company}</div>
            <div className="text-xs text-gray-600 mt-1">{cas.mechanism}</div>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
            <span className="text-indigo-600 font-bold text-lg">
              {cases[selectedCase].company.charAt(0)}
            </span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{cases[selectedCase].title}</h4>
            <p className="text-sm text-gray-600">{cases[selectedCase].mechanism}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🎯 Pourquoi ça marche</h5>
            <p className="text-gray-700 mb-4">{cases[selectedCase].whyWorks}</p>

            <h5 className="font-semibold text-gray-900 mb-2">✅ Points clés</h5>
            <ul className="space-y-1">
              {cases[selectedCase].keyPoints.map((point, idx) => (
                <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🔄 À répliquer</h5>
            <ul className="space-y-1 mb-4">
              {cases[selectedCase].toReplicate.map((item, idx) => (
                <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <h5 className="font-semibold text-gray-900 mb-2">📊 KPIs</h5>
            <p className="text-gray-700 text-sm bg-gray-50 rounded p-3">
              {cases[selectedCase].kpis}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



// Composant principal
export default function Module3Content() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Cas pratiques */}
      <CasPratiques />

      {/* Synthèse transférables */}
      <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🔄 Mécaniques Transférables</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">✅ À retenir</h4>
            <ul className="space-y-1">
              <li className="text-gray-700 text-sm">• <strong>Double-sided value</strong> (Dropbox/PayPal)</li>
              <li className="text-gray-700 text-sm">• <strong>Lead magnet utilitaire</strong> (HubSpot)</li>
              <li className="text-gray-700 text-sm">• <strong>Preuves & qualité d'offre</strong> (Airbnb)</li>
              <li className="text-gray-700 text-sm">• <strong>Timing & contexte d'activation</strong> (tous)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">🔧 Check-list</h4>
            <ul className="space-y-1">
              <li className="text-gray-700 text-sm">• <strong>Value</strong> : bénéfice spécifique et mesurable</li>
              <li className="text-gray-700 text-sm">• <strong>Proof</strong> : chiffres, cas, visuels, démos</li>
              <li className="text-gray-700 text-sm">• <strong>Timing</strong> : triggers au bon moment</li>
              <li className="text-gray-700 text-sm">• <strong>Loop</strong> : chaque action alimente une boucle</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quiz Flash */}
      <QuizModule3 />

      {/* Aperçu Atelier */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Atelier — Mini-campagne (aperçu, 55')</h3>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Ce que vous ferez</h4>
          <p className="text-gray-700 mb-4">
            Formuler un one-liner, rédiger le contenu d'une landing, produire 5 headlines + 2 descriptions d'ads 
            (+ 1 concept carrousel), écrire un email d'activation A/B, définir un plan de test (hypothèse, A/B, KPIs, seuils).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Structure :</h4>
            <ol className="space-y-1 text-sm text-gray-700">
              <li>1. Proposition de valeur & message <span className="text-gray-500">(9–10')</span></li>
              <li>2. Landing (wireframe contenu) <span className="text-gray-500">(10–11')</span></li>
              <li>3. Créas : Ads & Social + Email <span className="text-gray-500">(20')</span></li>
              <li>4. Plan de test & mesure <span className="text-gray-500">(9–10')</span></li>
              <li>5. Dry-run pitch <span className="text-gray-500">(3')</span></li>
            </ol>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Livrables :</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• One-liner, contenu de landing</li>
              <li>• 5H/2D + carrousel</li>
              <li>• Email A/B</li>
              <li>• Plan de test</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link href="/ateliers/mini-campagne">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg">
              🎯 Commencer l'atelier
            </Button>
          </Link>
          <p className="text-sm text-gray-600 mt-2">
            Prêt ? Passez à la page atelier pour les consignes détaillées, templates et barème.
          </p>
        </div>
      </div>

      {/* Restitution */}
      <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">🎤 Restitution Flash (10')</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Format</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• 1 slide par équipe (1 min pitch)</li>
              <li>• ICP choisi & one-liner</li>
              <li>• Assets clés (LP, ads, email)</li>
              <li>• Plan A/B & KPIs</li>
              <li>• Next step documenté</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Barème</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Clarté ICP & pain — <strong>20%</strong></li>
              <li>• Proposition de valeur & preuves — <strong>25%</strong></li>
              <li>• Testabilité (A/B, KPIs, seuils) — <strong>25%</strong></li>
              <li>• Qualité des assets — <strong>20%</strong></li>
              <li>• Timing & next step — <strong>10%</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Livrables finaux */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Livrables de l'atelier</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">🎯 Stratégie</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• One-liner ICP + pain + bénéfice</li>
              <li>• Preuves & témoignages</li>
              <li>• Positionnement différenciant</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">🛠️ Assets</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Wireframe landing (contenu)</li>
              <li>• 5 headlines + 2 descriptions ads</li>
              <li>• Email A/B (objets + corps)</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">🧪 Expérimentation</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Hypothèses testables</li>
              <li>• KPIs & seuils de succès</li>
              <li>• 3 Experiment Cards prêtes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
