"use client";

import React, { useState } from 'react';

// Composant Quiz interactif pour Module 2
function QuizModule2() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const questions = [
    {
      id: 1,
      question: "L'Activation correspond à la première inscription",
      answer: "❌ FAUX",
      explanation: "L'Activation est la première action de valeur, pas juste l'inscription",
      isCorrect: false
    },
    {
      id: 2,
      question: "La Rétention D7 mesure les utilisateurs qui reviennent après 7 jours",
      answer: "✅ VRAI",
      explanation: "D7 = pourcentage d'utilisateurs actifs 7 jours après leur première session",
      isCorrect: true
    },
    {
      id: 3,
      question: "Le NPS mesure la satisfaction client sur une échelle de 1 à 10",
      answer: "❌ FAUX",
      explanation: "Le NPS utilise une échelle de 0 à 10, pas de 1 à 10",
      isCorrect: false
    },
    {
      id: 4,
      question: "Le CAC inclut tous les coûts marketing et commerciaux",
      answer: "✅ VRAI",
      explanation: "CAC = (Coûts marketing + ventes) ÷ nombre de nouveaux clients",
      isCorrect: true
    },
    {
      id: 5,
      question: "La méthode ICE aide à prioriser les actions d'amélioration",
      answer: "✅ VRAI",
      explanation: "ICE = Impact × Confiance ÷ Effort pour prioriser les optimisations",
      isCorrect: true
    },
    {
      id: 6,
      question: "L'Awareness et l'Acquisition sont la même chose",
      answer: "❌ FAUX",
      explanation: "Awareness = notoriété, Acquisition = visiteurs qui arrivent sur le site/app",
      isCorrect: false
    }
  ];

  const handleShowAllQuestions = () => {
    setShowAllQuestions(true);
    setCurrentQuestion(0);
    setShowAnswer(false);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswer(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const resetQuiz = () => {
    setShowAllQuestions(false);
    setCurrentQuestion(0);
    setShowAnswer(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-500 to-teal-500 text-white p-8 rounded-3xl flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🧠</div>
          <h2 className="text-5xl font-bold mb-4">Quiz AAARRR</h2>
          <div className="w-32 h-1 bg-white mx-auto"></div>
        </div>

        {!showAllQuestions ? (
          // Écran d'accueil du quiz
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-12 mb-8">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-6">Testez vos connaissances AAARRR</h3>
              <p className="text-xl mb-8 leading-relaxed">
                6 questions pour maîtriser le diagnostic de funnel
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">📋</div>
                  <p className="font-semibold">6 questions</p>
                  <p className="text-teal-200">Métriques & diagnostic</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">⏱️</div>
                  <p className="font-semibold">~4 minutes</p>
                  <p className="text-teal-200">À votre rythme</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">🎓</div>
                  <p className="font-semibold">Pratique</p>
                  <p className="text-teal-200">Cas réels du Module 2</p>
                </div>
              </div>
              <button
                onClick={handleShowAllQuestions}
                className="bg-white text-indigo-600 font-bold text-xl px-8 py-4 rounded-full hover:bg-teal-50 transition-all transform hover:scale-105 shadow-lg"
              >
                🚀 Commencer le quiz
              </button>
            </div>
          </div>
        ) : (
          // Interface du quiz
          <div className="space-y-8">
            {/* Indicateur de progression */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">
                  Question {currentQuestion + 1} / {questions.length}
                </span>
                <button
                  onClick={resetQuiz}
                  className="text-sm bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
                >
                  🔄 Recommencer
                </button>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question courante */}
            <div className="bg-white/20 backdrop-blur rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-3xl mb-4">
                  {questions[currentQuestion].isCorrect ? "🤔" : "🧐"}
                </div>
                <h3 className="text-2xl font-bold mb-6">
                  {questions[currentQuestion].question}
                </h3>
                
                {!showAnswer ? (
                  <div className="space-y-4">
                    <p className="text-lg text-teal-200 mb-6">
                      Réfléchissez aux métriques AAARRR... 🔍
                    </p>
                    <button
                      onClick={handleShowAnswer}
                      className="bg-white text-indigo-600 font-bold text-lg px-6 py-3 rounded-full hover:bg-teal-50 transition-all transform hover:scale-105 shadow-lg"
                    >
                      💡 Voir la réponse
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className={`text-2xl font-bold ${questions[currentQuestion].isCorrect ? 'text-green-200' : 'text-red-200'}`}>
                      {questions[currentQuestion].answer}
                    </div>
                    <div className="text-lg text-white/80 bg-white/10 rounded-lg p-4">
                      {questions[currentQuestion].explanation}
                    </div>
                    
                    {/* Navigation */}
                    <div className="flex justify-center space-x-4 mt-8">
                      {currentQuestion > 0 && (
                        <button
                          onClick={handlePrevQuestion}
                          className="bg-white/20 text-white font-semibold px-4 py-2 rounded-full hover:bg-white/30 transition-all"
                        >
                          ← Précédent
                        </button>
                      )}
                      
                      {currentQuestion < questions.length - 1 ? (
                        <button
                          onClick={handleNextQuestion}
                          className="bg-white text-indigo-600 font-bold px-6 py-2 rounded-full hover:bg-teal-50 transition-all transform hover:scale-105 shadow-lg"
                        >
                          Question suivante →
                        </button>
                      ) : (
                        <div className="text-center">
                          <div className="text-4xl mb-4">🎉</div>
                          <p className="text-xl font-bold">Quiz AAARRR terminé !</p>
                          <p className="text-teal-200 mt-2">Vous maîtrisez le diagnostic de funnel !</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Résumé des questions en bas */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="flex justify-center space-x-2">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentQuestion(index);
                      setShowAnswer(false);
                    }}
                    className={`w-8 h-8 rounded-full font-bold text-sm transition-all ${
                      index === currentQuestion
                        ? 'bg-white text-indigo-600'
                        : index <= currentQuestion
                        ? 'bg-white/40 text-white'
                        : 'bg-white/20 text-white/60'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Module2Content() {
  return (
    <div className="space-y-16">
      {/* SLIDE 1: TITRE ET OBJECTIFS */}
      <section className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-800 text-white flex items-center justify-center p-8 rounded-3xl">
        <div className="text-center max-w-4xl">
          <div className="text-8xl mb-8">🔍</div>
          <h1 className="text-6xl font-bold mb-8 leading-tight">Module 2</h1>
          <h2 className="text-4xl font-light mb-12 text-emerald-100">Les fondamentaux du Funnel AAARRR</h2>
          <div className="text-xl text-emerald-200 mb-8">Durée : 2h30 • Méthodologie & Diagnostic • 1 atelier</div>
        </div>
      </section>

      {/* SLIDE 2: OBJECTIFS D'APPRENTISSAGE */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl flex items-center">
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
                <div className="ml-4 text-2xl font-semibold text-gray-800">Définir</div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">Précisément chaque étape AAARRR et ses métriques clés</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <div className="ml-4 text-2xl font-semibold text-gray-800">Identifier</div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">Le maillon faible via un diagnostic quanti/qualitatif</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <div className="ml-4 text-2xl font-semibold text-gray-800">Choisir</div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">L'événement d'Activation et la NSM input tree</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <div className="ml-4 text-2xl font-semibold text-gray-800">Prioriser</div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">Les hypothèses avec ICE et cadrer un plan de test</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 3: POURQUOI UN CADRE */}
      <section className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🤯</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Pourquoi un cadre ?</h2>
            <div className="w-32 h-1 bg-pink-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sans cadre */}
            <div className="bg-red-100 rounded-2xl p-8 border-l-8 border-red-500 text-left">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">❌</div>
                <h3 className="text-2xl font-bold text-red-800">Sans cadre</h3>
              </div>
              <ul className="space-y-4 text-red-700">
                <li className="flex items-start">
                  <span className="text-2xl mr-3 mt-1">•</span>
                  <span className="text-lg leading-relaxed">Optimisations au hasard, empilement d'initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 mt-1">•</span>
                  <span className="text-lg leading-relaxed">Biais "acquisition-first", oubli activation/rétention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 mt-1">•</span>
                  <span className="text-lg leading-relaxed">Métriques de vanité → décisions fragiles</span>
                </li>
              </ul>
            </div>
            
            {/* Avec AAARRR */}
            <div className="bg-green-100 rounded-2xl p-8 border-l-8 border-green-500 text-left">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">✅</div>
                <h3 className="text-2xl font-bold text-green-800">Avec AAARRR</h3>
              </div>
              <ul className="space-y-4 text-green-700">
                <li className="flex items-start">
                  <span className="text-2xl mr-3 mt-1">•</span>
                  <span className="text-lg leading-relaxed">On <strong>cible le goulot</strong> (l'étape qui bloque le plus)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 mt-1">•</span>
                  <span className="text-lg leading-relaxed">On relie efforts → métriques → impact business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3 mt-1">•</span>
                  <span className="text-lg leading-relaxed">Langage commun produit/marketing/tech</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 4: VUE D'ENSEMBLE AAARRR */}
      <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🏴‍☠️</div>
            <h2 className="text-5xl font-bold mb-4">Vue d'ensemble AAARRR</h2>
            <h3 className="text-2xl font-light text-indigo-200 mb-4">6 étapes pour diagnostiquer le funnel</h3>
            <div className="w-32 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3 text-center hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg">
              <div className="text-2xl mb-2">👁️</div>
              <h3 className="text-sm font-bold mb-2 text-white leading-tight">Awareness</h3>
              <p className="text-xs text-blue-100 leading-tight">Combien de personnes atteignons-nous ?</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-3 text-center hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg">
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="text-sm font-bold mb-2 text-white leading-tight">Acquisition</h3>
              <p className="text-xs text-green-100 leading-tight">Combien visitent et entrent dans le parcours ?</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-3 text-center hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="text-sm font-bold mb-2 text-white leading-tight">Activation</h3>
              <p className="text-xs text-yellow-100 leading-tight">Combien réalisent la 1ère action de valeur ?</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-3 text-center hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
              <div className="text-2xl mb-2">🔄</div>
              <h3 className="text-sm font-bold mb-2 text-white leading-tight">Rétention</h3>
              <p className="text-xs text-purple-100 leading-tight">Combien reviennent/utilisent à nouveau ?</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-3 text-center hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg">
              <div className="text-2xl mb-2">💳</div>
              <h3 className="text-sm font-bold mb-2 text-white leading-tight">Revenus</h3>
              <p className="text-xs text-emerald-100 leading-tight">Combien paient, combien et à quel rythme ?</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-3 text-center hover:from-pink-600 hover:to-rose-700 transition-all transform hover:scale-105 shadow-lg">
              <div className="text-2xl mb-2">📢</div>
              <h3 className="text-sm font-bold mb-2 text-white leading-tight">Recommandations</h3>
              <p className="text-xs text-pink-100 leading-tight">Combien recommandent et ramènent d'autres ?</p>
            </div>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur rounded-xl p-6">
            <p className="text-xl text-center"><strong>🎯 But :</strong> Identifier le maillon faible, pas tout optimiser en même temps</p>
          </div>
        </div>
      </section>

      {/* SLIDE 5: AWARENESS & ACQUISITION */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">📊</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Awareness & Acquisition</h2>
            <div className="w-32 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Awareness */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">👁️</div>
                <h3 className="text-2xl font-bold text-blue-800">Awareness (Notoriété)</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-2">📈 Reach unique</h4>
                  <p className="text-sm text-gray-700">Personnes exposées à la marque</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-2">🗣️ SoV (Share of Voice)</h4>
                  <p className="text-sm text-gray-700 mb-2">Part de visibilité/mentions/recherches</p>
                  <div className="bg-blue-100 rounded p-2 text-xs font-mono">
                    SoV = Impressions Marque / (Marque + Concurrents)
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-2">📈 Tendance notoriété</h4>
                  <p className="text-sm text-gray-700">Evolution vs période précédente</p>
                </div>
              </div>
            </div>

            {/* Acquisition */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🌐</div>
                <h3 className="text-2xl font-bold text-green-800">Acquisition</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">👥 Visiteurs</h4>
                  <p className="text-sm text-gray-700">Users ou Sessions (rester cohérent)</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">⚡ CVR visite→signup</h4>
                  <div className="bg-green-100 rounded p-2 text-xs font-mono mb-2">
                    CVR = Inscrits / Visiteurs
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">💰 CAC</h4>
                  <div className="bg-green-100 rounded p-2 text-xs font-mono mb-2">
                    CAC = Dépenses acquisition / Clients acquis
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">📊 Qualité trafic</h4>
                  <p className="text-sm text-gray-700">% nouveaux vs revenants, temps, bounce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 6: ACTIVATION (CLÉ) */}
      <section className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">⚡</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Activation (étape clé)</h2>
            <div className="w-32 h-1 bg-orange-500 mx-auto"></div>
            <p className="text-2xl text-gray-600 mt-6"><strong>Première action de valeur</strong> corrélée à la rétention/revenus</p>
          </div>
          
          {/* Métriques clés */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">Activation Rate</h3>
              <div className="bg-orange-100 rounded-lg p-4 mb-4">
                <code className="text-orange-800 font-bold">Utilisateurs activés / Inscrits</code>
              </div>
              <p className="text-gray-600 leading-relaxed">Pourcentage d'utilisateurs qui franchissent l'étape clé</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">TTFV</h3>
              <div className="bg-blue-100 rounded-lg p-4 mb-4">
                <code className="text-blue-800 font-bold">Time-to-First-Value</code>
              </div>
              <p className="text-gray-600 leading-relaxed">Temps entre inscription et action de valeur</p>
            </div>
          </div>

          {/* Exemples par modèle */}
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">🌟 Exemples d'événements d'activation</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">💼</div>
                <h4 className="text-xl font-bold text-blue-800 mb-3">SaaS</h4>
                <ul className="text-sm text-gray-700 leading-relaxed space-y-2">
                  <li>• Créer 1er projet</li>
                  <li>• Inviter 1 collègue</li>
                  <li>• Compléter configuration</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h4 className="text-xl font-bold text-green-800 mb-3">E-commerce</h4>
                <ul className="text-sm text-gray-700 leading-relaxed space-y-2">
                  <li>• Ajouter au panier</li>
                  <li>• + infos livraison remplies</li>
                  <li>• Première commande validée</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-xl font-bold text-purple-800 mb-3">App Mobile</h4>
                <ul className="text-sm text-gray-700 leading-relaxed space-y-2">
                  <li>• Terminer 1er parcours cœur</li>
                  <li>• Utilisation fonctionnalité clé</li>
                  <li>• Profil complété</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-yellow-50 rounded-xl p-4 border-l-4 border-yellow-400">
              <p className="text-yellow-800 text-sm font-medium">
                <strong>🎯 Objectif :</strong> Hausser le taux d'activation et réduire le TTFV
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 7: RÉTENTION */}
      <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🔄</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Rétention (tenir la valeur)</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6">Base solide pour revenus et recommandations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-lg font-bold text-purple-800 mb-3">Cohortes D7/D30</h3>
              <p className="text-sm text-gray-600 leading-relaxed">% utilisateurs d'une cohorte qui reviennent au jour 7/30</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-bold text-blue-800 mb-3">DAU/WAU/MAU</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Utilisateurs actifs quotidiens/hebdo/mensuels</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-green-800 mb-3">Stickiness</h3>
              <div className="bg-green-100 rounded p-2 text-xs font-mono mb-2">
                DAU / MAU
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">Proximité à l'usage quotidien</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-lg font-bold text-red-800 mb-3">Churn & CRR</h3>
              <div className="bg-red-100 rounded p-2 text-xs font-mono mb-2">
                (Clients fin - Nouveaux) / Clients début
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">Taux de rétention client</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 8: REVENUS & UNITÉS ÉCONOMIQUES */}
      <section className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">💰</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Revenus & Unités économiques</h2>
            <div className="w-32 h-1 bg-green-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6">Pourquoi mieux que "CA brut" ? → Vision durable avec coûts intégrés</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl mb-3 text-center">💳</div>
              <h4 className="text-lg font-bold mb-3 text-center text-green-800">ARPU & MRR</h4>
              <div className="space-y-3">
                <div className="bg-green-100 rounded p-3">
                  <code className="text-xs text-green-800">ARPU = Revenus / Clients payants</code>
                </div>
                <div className="bg-green-100 rounded p-3">
                  <code className="text-xs text-green-800">MRR = Σ revenus récurrents mensuels</code>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl mb-3 text-center">📈</div>
              <h4 className="text-lg font-bold mb-3 text-center text-blue-800">LTV</h4>
              <div className="space-y-3">
                <div className="bg-blue-100 rounded p-3">
                  <code className="text-xs text-blue-800">LTV ≈ (ARPU × marge %) / Churn mensuel</code>
                </div>
                <p className="text-sm text-gray-600">Valeur vie client (approx. abonnements)</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl mb-3 text-center">⚖️</div>
              <h4 className="text-lg font-bold mb-3 text-center text-purple-800">Ratios clés</h4>
              <div className="space-y-3">
                <div className="bg-purple-100 rounded p-3">
                  <code className="text-xs text-purple-800">LTV:CAC ≥ 3:1</code>
                  <p className="text-xs text-gray-600 mt-1">Cible recommandée</p>
                </div>
                <div className="bg-purple-100 rounded p-3">
                  <code className="text-xs text-purple-800">Payback = CAC / Marge mensuelle</code>
                  <p className="text-xs text-gray-600 mt-1">Retour en mois</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">💡 Pourquoi ces métriques ?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow">
                <div className="text-2xl mb-2">🎯</div>
                <p className="text-sm text-gray-700">Intègre coûts d'acquisition</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow">
                <div className="text-2xl mb-2">🔄</div>
                <p className="text-sm text-gray-700">Prend en compte la rétention</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow">
                <div className="text-2xl mb-2">📊</div>
                <p className="text-sm text-gray-700">Vision rentabilité long terme</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 9: RECOMMANDATIONS */}
      <section className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">📢</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Recommandations (boucles)</h2>
            <div className="w-32 h-1 bg-pink-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6">Impact long terme : ↓ CAC moyen, ↑ croissance organique</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-5xl mb-4">😊</div>
              <h3 className="text-xl font-bold text-pink-800 mb-3">NPS</h3>
              <div className="bg-pink-100 rounded-lg p-4 mb-4">
                <code className="text-pink-800 font-bold">% Promoteurs (9-10) - % Détracteurs (0-6)</code>
              </div>
              <p className="text-gray-600 leading-relaxed">Net Promoter Score</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">K-factor</h3>
              <div className="bg-blue-100 rounded-lg p-4 mb-4">
                <code className="text-blue-800 font-bold">Invitations par user × Taux conversion invités</code>
              </div>
              <p className="text-gray-600 leading-relaxed">Coefficient de viralité</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Referrals/100</h3>
              <div className="bg-purple-100 rounded-lg p-4 mb-4">
                <code className="text-purple-800 font-bold">Nb parrainages pour 100 utilisateurs</code>
              </div>
              <p className="text-gray-600 leading-relaxed">Taux de recommandation</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">🌟 Bénéfices long terme</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">📉</div>
                <h4 className="font-bold text-pink-800 mb-2">Réduction CAC</h4>
                <p className="text-sm text-gray-700">Acquisition organique via recommandations</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="font-bold text-blue-800 mb-2">Croissance organique</h4>
                <p className="text-sm text-gray-700">Croissance auto-alimentée par les utilisateurs</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">💪</div>
                <h4 className="font-bold text-purple-800 mb-2">Renforce la marque</h4>
                <p className="text-sm text-gray-700">Crédibilité par bouche-à-oreille</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 10: DIAGNOSTIC - MÉTHODES */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🔍</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Diagnostic - Méthodes</h2>
            <div className="w-32 h-1 bg-slate-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl mb-4 text-center">📊</div>
              <h3 className="text-lg font-bold text-blue-800 mb-3 text-center">Funnel drop-off</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Conversion étape→étape</li>
                <li>• Temps par étape</li>
                <li>• Analyse des erreurs</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl mb-4 text-center">📅</div>
              <h3 className="text-lg font-bold text-green-800 mb-3 text-center">Cohortes</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Par semaine/mois d'acquisition</li>
                <li>• Rétention D7/D30</li>
                <li>• Evolution temporelle</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl mb-4 text-center">🎯</div>
              <h3 className="text-lg font-bold text-purple-800 mb-3 text-center">Segmentation</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Persona, plan/offre</li>
                <li>• Device, source</li>
                <li>• Géographie, comportement</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl mb-4 text-center">🗣️</div>
              <h3 className="text-lg font-bold text-orange-800 mb-3 text-center">Quali rapide</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Replays UX</li>
                <li>• 5 interviews utilisateurs</li>
                <li>• Sondage 1-question</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">🌳 Metric Tree</h3>
            
            {/* Version responsive avec une seule structure */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2 lg:space-x-4">
              <div className="bg-yellow-100 rounded-lg p-3 lg:p-4 text-center w-full sm:w-auto sm:min-w-0 sm:flex-1 sm:max-w-32 lg:max-w-none">
                <div className="font-bold text-yellow-800 text-sm lg:text-base">NSM</div>
                <div className="text-xs lg:text-sm text-gray-600">North Star Metric</div>
              </div>
              <div className="text-xl lg:text-2xl text-gray-400 sm:flex-shrink-0">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </div>
              <div className="bg-blue-100 rounded-lg p-3 lg:p-4 text-center w-full sm:w-auto sm:min-w-0 sm:flex-1 sm:max-w-36 lg:max-w-none">
                <div className="font-bold text-blue-800 text-sm lg:text-base">Métriques d'entrée</div>
                <div className="text-xs lg:text-sm text-gray-600">Par étape AAARRR</div>
              </div>
              <div className="text-xl lg:text-2xl text-gray-400 sm:flex-shrink-0">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </div>
              <div className="bg-green-100 rounded-lg p-3 lg:p-4 text-center w-full sm:w-auto sm:min-w-0 sm:flex-1 sm:max-w-32 lg:max-w-none">
                <div className="font-bold text-green-800 text-sm lg:text-base">Leviers</div>
                <div className="text-xs lg:text-sm text-gray-600">Actions concrètes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 11: INSTRUMENTATION 101 */}
      <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">⚙️</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Instrumentation 101</h2>
            <div className="w-32 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6">Bases pour collecter et analyser les données</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-4xl mb-4 text-center">📋</div>
              <h3 className="text-xl font-bold text-blue-800 mb-6 text-center">Plan de tracking</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-2">Structure événement</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• event_name (Verbe + Objet)</li>
                    <li>• description</li>
                    <li>• propriétés (plan, device...)</li>
                    <li>• user_id, timestamp</li>
                  </ul>
                </div>
                <div className="bg-blue-100 rounded-lg p-3">
                  <code className="text-xs text-blue-800">Exemple : "Project Created", "Checkout Completed"</code>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-4xl mb-4 text-center">👤</div>
              <h3 className="text-xl font-bold text-green-800 mb-6 text-center">Identités & Qualité</h3>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Gestion identités</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Anonyme → identifié</li>
                    <li>• Déduplication</li>
                    <li>• Attention PII</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Data quality</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• QA, environnements</li>
                    <li>• Gouvernance données</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">📊 Dashboards & Cadence</h3>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 inline-block shadow">
                <div className="text-3xl mb-3">📅</div>
                <h4 className="font-bold text-indigo-800 mb-2">Cadence hebdomadaire</h4>
                <p className="text-lg text-gray-700">Pour décisions <strong>start / stop / iterate</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 12: PRIORISATION ICE */}
      <section className="min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 text-white p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎯</div>
            <h2 className="text-5xl font-bold mb-4">Priorisation - ICE</h2>
            <div className="w-32 h-1 bg-white mx-auto"></div>
          </div>
          
          {/* Formule ICE */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">📋 Méthode ICE</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-500 rounded-xl">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="font-bold text-lg mb-2">Impact</h4>
                <p className="text-sm">Effet potentiel (1-10)</p>
              </div>
              <div className="text-center p-6 bg-green-500 rounded-xl">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-lg mb-2">Confiance</h4>
                <p className="text-sm">Certitude du résultat (1-10)</p>
              </div>
              <div className="text-center p-6 bg-orange-500 rounded-xl">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-bold text-lg mb-2">Effort</h4>
                <p className="text-sm">Ressources nécessaires (1-10)</p>
              </div>
            </div>
            <div className="bg-yellow-100 text-gray-800 rounded-xl p-6 text-center">
              <p className="text-2xl font-bold">ICE = Impact × Confiance ÷ Effort</p>
            </div>
          </div>
          
          {/* Exemple concret */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">💡 Exemple de scoring</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400">
                <h4 className="text-xl font-bold text-green-300 mb-4">✅ Test A (Priorité)</h4>
                <div className="space-y-2 text-green-200">
                  <p>• Impact: 8/10</p>
                  <p>• Confiance: 6/10</p>
                  <p>• Effort: 2/10</p>
                  <div className="bg-green-400 text-green-900 rounded p-2 font-bold text-center mt-4">
                    ICE = 8 × 6 ÷ 2 = 24
                  </div>
                </div>
              </div>
              
              <div className="bg-red-500/20 rounded-xl p-6 border border-red-400">
                <h4 className="text-xl font-bold text-red-300 mb-4">⏸️ Test B (Reporter)</h4>
                <div className="space-y-2 text-red-200">
                  <p>• Impact: 5/10</p>
                  <p>• Confiance: 7/10</p>
                  <p>• Effort: 5/10</p>
                  <div className="bg-red-400 text-red-900 rounded p-2 font-bold text-center mt-4">
                    ICE = 5 × 7 ÷ 5 = 7
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Décisions post-test */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">🚦 Décision après test</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-green-600 rounded-xl">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-bold text-lg mb-2">START/SCALE</h4>
                <p className="text-sm">Succès clair → Déployer</p>
              </div>
              <div className="text-center p-6 bg-yellow-600 rounded-xl">
                <div className="text-3xl mb-3">🔄</div>
                <h4 className="font-bold text-lg mb-2">ITERATE</h4>
                <p className="text-sm">Signaux positifs → Affiner</p>
              </div>
              <div className="text-center p-6 bg-red-600 rounded-xl">
                <div className="text-3xl mb-3">❌</div>
                <h4 className="font-bold text-lg mb-2">KILL</h4>
                <p className="text-sm">Pas d'impact → Abandonner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 13: TABLEAU RÉCAPITULATIF MÉTRIQUES AAARRR */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-8 rounded-3xl flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-16">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">📊</div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4">Tableau récapitulatif AAARRR</h2>
            <div className="w-16 sm:w-32 h-1 bg-blue-500 mx-auto"></div>
            <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6">Toutes les métriques essentielles en un coup d'œil</p>
          </div>
          
          {/* Version Mobile : Cartes empilées */}
          <div className="lg:hidden space-y-4">
            {/* AWARENESS Card */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">👁️</div>
                <div>
                  <div className="font-bold text-blue-800 text-lg sm:text-xl">Awareness</div>
                  <div className="text-sm text-gray-600">Notoriété • Être connu par la cible</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">Métriques Principales</h4>
                  <ul className="space-y-1">
                    <li>• Impressions</li>
                    <li>• Reach</li>
                    <li>• Brand search</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Secondaires</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Share of voice</li>
                    <li>• Mentions sociales</li>
                    <li>• Trafic direct</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Outils</h4>
                  <ul className="space-y-1 text-gray-600 text-xs">
                    <li>• Google Ads</li>
                    <li>• Facebook Ads</li>
                    <li>• Google Trends</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Benchmark</h4>
                  <div className="text-xs text-gray-600">
                    <div className="font-semibold">Reach: 1-5% du TAM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACQUISITION Card */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">🌐</div>
                <div>
                  <div className="font-bold text-green-800 text-lg sm:text-xl">Acquisition</div>
                  <div className="text-sm text-gray-600">Trafic • Visiter site/app</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">Métriques Principales</h4>
                  <ul className="space-y-1">
                    <li>• Sessions</li>
                    <li>• Unique visitors</li>
                    <li>• CAC</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Secondaires</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Trafic par canal</li>
                    <li>• CTR campagnes</li>
                    <li>• CPC moyen</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Outils</h4>
                  <ul className="space-y-1 text-gray-600 text-xs">
                    <li>• Google Analytics</li>
                    <li>• Mixpanel</li>
                    <li>• Amplitude</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Benchmark</h4>
                  <div className="text-xs text-gray-600">
                    <div className="font-semibold">CAC: &lt; 1/3 LTV</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIVATION Card */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-3">⚡</div>
                <div>
                  <div className="font-bold text-yellow-800 text-lg sm:text-xl">Activation</div>
                  <div className="text-sm text-gray-600">Valeur • 1ère action de valeur</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-yellow-700 mb-2">Métriques Principales</h4>
                  <ul className="space-y-1">
                    <li>• Taux activation</li>
                    <li>• Time to value</li>
                    <li>• Taux onboarding</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Secondaires</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Features adoptées</li>
                    <li>• Profil complété</li>
                    <li>• Tutoriel fini</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Outils</h4>
                  <ul className="space-y-1 text-gray-600 text-xs">
                    <li>• Hotjar</li>
                    <li>• FullStory</li>
                    <li>• Pendo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Benchmark</h4>
                  <div className="text-xs text-gray-600">
                    <div className="font-semibold">Activation: 25-40%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RÉTENTION Card */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">🔄</div>
                <div>
                  <div className="font-bold text-purple-800 text-lg sm:text-xl">Rétention</div>
                  <div className="text-sm text-gray-600">Retour • Revenir réutiliser</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-700 mb-2">Métriques Principales</h4>
                  <ul className="space-y-1">
                    <li>• Rétention D1/D7/D30</li>
                    <li>• MAU/DAU</li>
                    <li>• Churn rate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Secondaires</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Session length</li>
                    <li>• Usage patterns</li>
                    <li>• Stickiness</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Outils</h4>
                  <ul className="space-y-1 text-gray-600 text-xs">
                    <li>• Cohort analysis</li>
                    <li>• Retention curves</li>
                    <li>• User journeys</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Benchmark</h4>
                  <div className="text-xs text-gray-600">
                    <div className="font-semibold">D7: 20-25%</div>
                    <div className="font-semibold">D30: 10-15%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* REVENUS Card */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-3">💳</div>
                <div>
                  <div className="font-bold text-emerald-800 text-lg sm:text-xl">Revenus</div>
                  <div className="text-sm text-gray-600">Monétisation • Payer générer €</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-2">Métriques Principales</h4>
                  <ul className="space-y-1">
                    <li>• Conversion rate</li>
                    <li>• ARPU</li>
                    <li>• LTV</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Secondaires</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Panier moyen</li>
                    <li>• Fréquence achat</li>
                    <li>• MRR growth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Outils</h4>
                  <ul className="space-y-1 text-gray-600 text-xs">
                    <li>• Stripe</li>
                    <li>• ChartMogul</li>
                    <li>• Baremetrics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Benchmark</h4>
                  <div className="text-xs text-gray-600">
                    <div className="font-semibold">Conversion: 2-5%</div>
                    <div className="font-semibold">LTV:CAC: 3:1 min</div>
                  </div>
                </div>
              </div>
            </div>

            {/* REFERRAL Card */}
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">📢</div>
                <div>
                  <div className="font-bold text-pink-800 text-lg sm:text-xl">Referral</div>
                  <div className="text-sm text-gray-600">Recommandation • Recommander partager</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-pink-700 mb-2">Métriques Principales</h4>
                  <ul className="space-y-1">
                    <li>• NPS</li>
                    <li>• Referral rate</li>
                    <li>• Viral coefficient</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Secondaires</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Partages sociaux</li>
                    <li>• Reviews/ratings</li>
                    <li>• Word-of-mouth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Outils</h4>
                  <ul className="space-y-1 text-gray-600 text-xs">
                    <li>• Typeform</li>
                    <li>• ReferralCandy</li>
                    <li>• Viral loops</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Benchmark</h4>
                  <div className="text-xs text-gray-600">
                    <div className="font-semibold">NPS: 50+ bon</div>
                    <div className="font-semibold">Referral: 5-15%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Version Desktop : Tableau traditionnel */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header du tableau */}
            <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white p-6">
              <div className="grid grid-cols-6 gap-4 text-center">
                <div className="text-lg font-bold">Étape</div>
                <div className="text-lg font-bold">Objectif</div>
                <div className="text-lg font-bold">Métriques Principales</div>
                <div className="text-lg font-bold">Métriques Secondaires</div>
                <div className="text-lg font-bold">Outils</div>
                <div className="text-lg font-bold">Benchmark</div>
              </div>
            </div>
            
            {/* Contenu du tableau */}
            <div className="divide-y divide-gray-100">
              {/* AWARENESS */}
              <div className="grid grid-cols-6 gap-4 p-6 hover:bg-blue-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">👁️</div>
                  <div>
                    <div className="font-bold text-blue-800">Awareness</div>
                    <div className="text-sm text-gray-600">Notoriété</div>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  <div className="font-semibold mb-1">Être connu</div>
                  <div>Par la cible</div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-blue-700 mb-1">• Impressions</div>
                  <div className="font-semibold text-blue-700 mb-1">• Reach</div>
                  <div className="font-semibold text-blue-700">• Brand search</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div>• Share of voice</div>
                  <div>• Mentions sociales</div>
                  <div>• Trafic direct</div>
                </div>
                <div className="text-xs text-gray-600">
                  <div>• Google Ads</div>
                  <div>• Facebook Ads</div>
                  <div>• Google Trends</div>
                </div>
                <div className="text-xs text-gray-600">
                  <div className="font-semibold">Reach:</div>
                  <div>1-5% du TAM</div>
                </div>
              </div>

              {/* ACQUISITION */}
              <div className="grid grid-cols-6 gap-4 p-6 hover:bg-green-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">🌐</div>
                  <div>
                    <div className="font-bold text-green-800">Acquisition</div>
                    <div className="text-sm text-gray-600">Trafic</div>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  <div className="font-semibold mb-1">Visiter</div>
                  <div>Site/app</div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-green-700 mb-1">• Sessions</div>
                  <div className="font-semibold text-green-700 mb-1">• Unique visitors</div>
                  <div className="font-semibold text-green-700">• CAC</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div>• Trafic par canal</div>
                  <div>• CTR campagnes</div>
                  <div>• CPC moyen</div>
                </div>
                <div className="text-xs text-gray-600">
                  <div>• Google Analytics</div>
                  <div>• Mixpanel</div>
                  <div>• Amplitude</div>
                </div>
                <div className="text-xs text-gray-600">
                  <div className="font-semibold">CAC:</div>
                  <div>&lt; 1/3 LTV</div>
                </div>
              </div>

              {/* ACTIVATION */}
              <div className="grid grid-cols-6 gap-4 p-6 hover:bg-yellow-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-3">⚡</div>
                  <div>
                    <div className="font-bold text-yellow-800">Activation</div>
                    <div className="text-sm text-gray-600">Valeur</div>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  <div className="font-semibold mb-1">1ère action</div>
                  <div>de valeur</div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-yellow-700 mb-1">• Taux activation</div>
                  <div className="font-semibold text-yellow-700 mb-1">• Time to value</div>
                  <div className="font-semibold text-yellow-700">• Taux onboarding</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div>• Features adoptées</div>
                  <div>• Profil complété</div>
                  <div>• Tutoriel fini</div>
                </div>
                <div className="text-xs text-gray-600">
                  <div>• Hotjar</div>
                  <div>• FullStory</div>
                  <div>• Pendo</div>
                </div>
                <div className="text-xs text-gray-600">
                  <div className="font-semibold">Activation:</div>
                  <div>25-40%</div>
                </div>
              </div>

              {/* RÉTENTION */}
              <div className="grid grid-cols-6 gap-4 p-6 hover:bg-purple-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">🔄</div>
                  <div>
                    <div className="font-bold text-purple-800">Rétention</div>
                    <div className="text-sm text-gray-600">Retour</div>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  <div className="font-semibold mb-1">Revenir</div>
                  <div>Réutiliser</div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-purple-700 mb-1">• Rétention D1/D7/D30</div>
                  <div className="font-semibold text-purple-700 mb-1">• MAU/DAU</div>
                  <div className="font-semibold text-purple-700">• Churn rate</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div>• Session length</div>
                  <div>• Usage patterns</div>
                  <div>• Stickiness</div>
                </div>
                <div className="text-xs text-gray-600">
                  <div>• Cohort analysis</div>
                  <div>• Retention curves</div>
                  <div>• User journeys</div>
                </div>
                <div className="text-xs text-gray-600">
                  <div className="font-semibold">D7:</div>
                  <div>20-25%</div>
                  <div className="font-semibold">D30:</div>
                  <div>10-15%</div>
                </div>
              </div>

              {/* REVENUS */}
              <div className="grid grid-cols-6 gap-4 p-6 hover:bg-emerald-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-3">💳</div>
                  <div>
                    <div className="font-bold text-emerald-800">Revenus</div>
                    <div className="text-sm text-gray-600">Monétisation</div>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  <div className="font-semibold mb-1">Payer</div>
                  <div>Générer €</div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-emerald-700 mb-1">• Conversion rate</div>
                  <div className="font-semibold text-emerald-700 mb-1">• ARPU</div>
                  <div className="font-semibold text-emerald-700">• LTV</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div>• Panier moyen</div>
                  <div>• Fréquence achat</div>
                  <div>• MRR growth</div>
                </div>
                <div className="text-xs text-gray-600">
                  <div>• Stripe</div>
                  <div>• ChartMogul</div>
                  <div>• Baremetrics</div>
                </div>
                <div className="text-xs text-gray-600">
                  <div className="font-semibold">Conversion:</div>
                  <div>2-5%</div>
                  <div className="font-semibold">LTV:CAC:</div>
                  <div>3:1 min</div>
                </div>
              </div>

              {/* REFERRAL */}
              <div className="grid grid-cols-6 gap-4 p-6 hover:bg-pink-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">📢</div>
                  <div>
                    <div className="font-bold text-pink-800">Referral</div>
                    <div className="text-sm text-gray-600">Recommandation</div>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  <div className="font-semibold mb-1">Recommander</div>
                  <div>Partager</div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-pink-700 mb-1">• NPS</div>
                  <div className="font-semibold text-pink-700 mb-1">• Referral rate</div>
                  <div className="font-semibold text-pink-700">• Viral coefficient</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div>• Partages sociaux</div>
                  <div>• Reviews/ratings</div>
                  <div>• Word-of-mouth</div>
                </div>
                <div className="text-xs text-gray-600">
                  <div>• Typeform</div>
                  <div>• ReferralCandy</div>
                  <div>• Viral loops</div>
                </div>
                <div className="text-xs text-gray-600">
                  <div className="font-semibold">NPS:</div>
                  <div>50+ bon</div>
                  <div className="font-semibold">Referral:</div>
                  <div>5-15%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Note explicative */}
          <div className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
              <span className="text-xl sm:text-2xl mr-2">💡</span> Comment utiliser ce tableau
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-xs sm:text-sm text-gray-700">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">1. Diagnostic</h4>
                <p>Calculez vos métriques actuelles pour chaque étape AAARRR</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-2">2. Benchmark</h4>
                <p>Comparez avec les standards du secteur pour identifier les points faibles</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">3. Priorisation</h4>
                <p>Focalisez d'abord sur l'étape avec le plus gros écart vs benchmark</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 14: QUIZ AAARRR */}
      <QuizModule2 />

      {/* SLIDE 15: ATELIER */}
      <section className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500 text-white p-8 rounded-3xl flex items-center">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="text-6xl mb-8">🛠️</div>
          <h2 className="text-5xl font-bold mb-8">Atelier pratique</h2>
          <h3 className="text-3xl font-light mb-12">Canvas AAARRR + Activation + ICE (40')</h3>
          
          <div className="bg-white/20 backdrop-blur rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-2xl mr-3">👥</span> Format
                </h4>
                <p className="text-lg leading-relaxed">Groupes de 3-4 personnes</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-2xl mr-3">⏱️</span> Durée
                </h4>
                <p className="text-lg leading-relaxed">40 minutes</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/20 backdrop-blur rounded-xl p-6">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="font-bold text-lg mb-3">1. Funnel Canvas</h4>
              <p className="text-sm">KPIs actuels/cibles pour chaque étape AAARRR</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-bold text-lg mb-3">2. Choix Activation</h4>
              <p className="text-sm">Événement d'activation + cible TTFV</p>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-xl p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-bold text-lg mb-3">3. Top 3 Tests</h4>
              <p className="text-sm">5 hypothèses → score ICE → 3 prioritaires</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4">📋 Livrables</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <h5 className="font-semibold mb-2">✅ Canvas rempli</h5>
                <p className="text-sm opacity-90">Avec KPIs par étape</p>
              </div>
              <div className="text-left">
                <h5 className="font-semibold mb-2">🧪 3 Experiment Cards</h5>
                <p className="text-sm opacity-90">Hypothèse → Métrique → Design → Critères succès/échec</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 16: RÉCAP ET TEASER */}
      <section className="min-h-screen bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-5xl font-bold mb-4">Récap & Suite</h2>
            <div className="w-32 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Points clés */}
            <div className="bg-white/20 backdrop-blur rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-bold mb-6">📋 Points clés à retenir</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center font-bold">1</span>
                  <span className="text-lg leading-relaxed">AAARRR = cadre de diagnostic systématique</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center font-bold">2</span>
                  <span className="text-lg leading-relaxed">Activation = première action de valeur</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center font-bold">3</span>
                  <span className="text-lg leading-relaxed">Diagnostic multi-angles : quanti + quali</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center font-bold">4</span>
                  <span className="text-lg leading-relaxed">ICE pour prioriser les expériences</span>
                </div>
              </div>
            </div>
            
            {/* Teaser Module 3 */}
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-left">
              <h3 className="text-2xl font-bold mb-6">🔜 Module 3 : Cas pratiques AAARRR</h3>
              <div className="text-lg mb-6 leading-relaxed">
                Appliquer AAARRR sur des cas concrets : SaaS B2B, E-commerce, App mobile avec plans d'action détaillés.
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                <h4 className="font-bold mb-2">Au programme :</h4>
                <ul className="text-sm space-y-1">
                  <li className="leading-relaxed">• 3 études de cas complètes</li>
                  <li className="leading-relaxed">• Plans d'optimisation étape par étape</li>
                  <li className="leading-relaxed">• Métriques spécifiques par secteur</li>
                  <li className="leading-relaxed">• Ateliers de mise en pratique</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-3xl font-bold">Bravo ! Module 2 terminé</h3>
            <p className="text-xl text-emerald-200 mt-2">Prêt à appliquer AAARRR sur des cas concrets</p>
          </div>
        </div>
      </section>
    </div>
  );
}
