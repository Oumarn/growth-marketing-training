"use client";

import React, { useState } from 'react';

// Composant Quiz interactif
function QuizFlash() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Le Growth optimise tout le parcours client",
      answer: "✅ VRAI",
      explanation: "Du premier contact à la recommandation",
      isCorrect: true
    },
    {
      id: 2,
      question: "La NSM doit refléter la valeur d'usage, pas la vanité",
      answer: "✅ VRAI",
      explanation: "Corrélée à la rétention long terme",
      isCorrect: true
    },
    {
      id: 3,
      question: "Activation = simple inscription",
      answer: "❌ FAUX",
      explanation: "C'est la première action de valeur",
      isCorrect: false
    },
    {
      id: 4,
      question: "Une boucle de croissance s'auto-alimente",
      answer: "✅ VRAI",
      explanation: "Comme le parrainage Dropbox",
      isCorrect: true
    },
    {
      id: 5,
      question: "ICE sert à prioriser les expériences",
      answer: "✅ VRAI",
      explanation: "Impact × Confiance ÷ Effort",
      isCorrect: true
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
    <section className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white p-4 sm:p-8 rounded-3xl flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-16">
          <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">🧠</div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 px-4">Quiz flash</h2>
          <div className="w-20 sm:w-32 h-1 bg-white mx-auto"></div>
        </div>

        {!showAllQuestions ? (
          // Écran d'accueil du quiz
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-8">
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">🎯</div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 px-4">Prêt pour le quiz ?</h3>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed px-4">
                5 questions pour tester vos connaissances sur le Growth Marketing
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 sm:mb-8 text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">📋</div>
                  <p className="font-semibold">5 questions</p>
                  <p className="text-purple-200">Vrai/Faux</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">⏱️</div>
                  <p className="font-semibold">~3 minutes</p>
                  <p className="text-purple-200">À votre rythme</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">🎓</div>
                  <p className="font-semibold">Interactif</p>
                  <p className="text-purple-200">Questions puis réponses</p>
                </div>
              </div>
              <button
                onClick={handleShowAllQuestions}
                className="bg-white text-purple-600 font-bold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-purple-50 transition-all shadow-md hover:shadow-lg"
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
            <div className="bg-white/20 backdrop-blur rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">
                  {questions[currentQuestion].isCorrect ? "🤔" : "🧐"}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 px-4">
                  {questions[currentQuestion].question}
                </h3>
                
                {!showAnswer ? (
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base lg:text-lg text-purple-200 mb-4 sm:mb-6 px-4">
                      Prenez le temps de réfléchir... 🤔
                    </p>
                    <button
                      onClick={handleShowAnswer}
                      className="bg-white text-purple-600 font-bold text-sm px-4 py-2 rounded-full hover:bg-purple-50 transition-all shadow-sm hover:shadow-md"
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
                          className="bg-white text-purple-600 font-bold px-6 py-2 rounded-full hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg"
                        >
                          Question suivante →
                        </button>
                      ) : (
                        <div className="text-center">
                          <div className="text-4xl mb-4">🎉</div>
                          <p className="text-xl font-bold">Quiz terminé !</p>
                          <p className="text-purple-200 mt-2">Bravo, vous maîtrisez les fondamentaux !</p>
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
                        ? 'bg-white text-purple-600'
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

export default function Module1Content() {
  return (
    <div className="space-y-16 overflow-x-hidden">
      {/* SLIDE 1: TITRE ET OBJECTIFS */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white flex items-center justify-center p-4 sm:p-8 rounded-3xl overflow-hidden">
        <div className="text-center max-w-4xl">
          <div className="text-4xl sm:text-6xl lg:text-8xl mb-6 sm:mb-8">🚀</div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">Module 1</h1>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-light mb-8 sm:mb-12 text-blue-100 px-4">Introduction au Growth Marketing</h2>
          <div className="text-base sm:text-lg lg:text-xl text-blue-200 mb-8">Durée : 1 heure • 4 objectifs • 1 atelier</div>
        </div>
      </section>

      {/* SLIDE 2: OBJECTIFS D'APPRENTISSAGE */}
      <section className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-4 sm:p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-16">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">🎯</div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4 px-4">Objectifs d'apprentissage</h2>
            <div className="w-20 sm:w-32 h-1 bg-emerald-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0">1</div>
                <div className="ml-3 sm:ml-4 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Distinguer</div>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">Growth Marketing vs marketing traditionnel</p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0">2</div>
                <div className="ml-3 sm:ml-4 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Comprendre</div>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">La logique AAARRR (vue d'ensemble)</p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0">3</div>
                <div className="ml-3 sm:ml-4 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Adopter</div>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">Les principes clés: NSM, boucles, expérimentation</p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl transform hover:scale-105 transition-transform text-left">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold flex-shrink-0">4</div>
                <div className="ml-3 sm:ml-4 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Proposer</div>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">Une North Star Metric simple</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 3: POURQUOI LE GROWTH */}
      <section className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 p-4 sm:p-8 rounded-3xl flex items-center overflow-hidden">
        <div className="max-w-6xl mx-auto w-full grid-contained">
          <div className="text-center mb-8 sm:mb-16">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">🤔</div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4">Pourquoi le Growth ?</h2>
            <div className="w-16 sm:w-32 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="w-full overflow-hidden grid-contained">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-full">
              {/* Problèmes */}
              <div className="bg-red-100 rounded-2xl p-3 sm:p-4 lg:p-6 border-l-4 sm:border-l-6 border-red-500 text-left max-w-full overflow-hidden">
                <div className="flex items-start mb-3 sm:mb-4 max-w-full">
                  <div className="text-xl sm:text-2xl lg:text-3xl mr-2 sm:mr-3 flex-shrink-0">❌</div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-red-800 flex-1 min-w-0 break-words">Limites du marketing traditionnel</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3 text-red-700 max-w-full">
                  <li className="flex items-start max-w-full">
                    <span className="text-base sm:text-lg lg:text-xl mr-2 mt-1 flex-shrink-0">•</span>
                    <span className="text-sm sm:text-base lg:text-lg leading-relaxed flex-1 min-w-0 break-words">Campagnes court-terme sans activation ni rétention</span>
                  </li>
                  <li className="flex items-start max-w-full">
                    <span className="text-base sm:text-lg lg:text-xl mr-2 mt-1 flex-shrink-0">•</span>
                    <span className="text-sm sm:text-base lg:text-lg leading-relaxed flex-1 min-w-0 break-words">Dépenses médias ↗️ → rendement décroissant</span>
                  </li>
                  <li className="flex items-start max-w-full">
                    <span className="text-base sm:text-lg lg:text-xl mr-2 mt-1 flex-shrink-0">•</span>
                    <span className="text-sm sm:text-base lg:text-lg leading-relaxed flex-1 min-w-0 break-words">Décisions au feeling → vanity metrics</span>
                  </li>
                </ul>
              </div>
            
              {/* Solutions */}
              <div className="bg-green-100 rounded-2xl p-3 sm:p-4 lg:p-6 border-l-4 sm:border-l-6 border-green-500 text-left max-w-full overflow-hidden">
                <div className="flex items-start mb-3 sm:mb-4 max-w-full">
                  <div className="text-xl sm:text-2xl lg:text-3xl mr-2 sm:mr-3 flex-shrink-0">✅</div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-green-800 flex-1 min-w-0 break-words">Growth = parcours complet</h3>
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-green-700 mb-3 sm:mb-4 leading-relaxed break-words">
                  Du premier contact à la recommandation, optimiser <strong>chaque étape</strong> pour une croissance durable.
                </div>
                <div className="bg-white rounded-xl p-2 sm:p-3 overflow-x-auto max-w-full">
                  <div className="flex items-center text-xs sm:text-sm font-semibold text-center whitespace-nowrap">
                    <span className="px-1">Notoriété</span>
                    <span className="px-1">→</span>
                    <span className="px-1">Acquisition</span>
                    <span className="px-1">→</span>
                    <span className="px-1">Activation</span>
                    <span className="px-1">→</span>
                    <span className="px-1">Rétention</span>
                    <span className="px-1">→</span>
                    <span className="px-1">Revenus</span>
                    <span className="px-1">→</span>
                    <span className="px-1">Referral</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 4: MINDSET GROWTH */}
      <section className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🧠</div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">Mindset Growth</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Hypothèses</h3>
              <p className="text-gray-600 leading-relaxed">Formuler des idées testables</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">Tests</h3>
              <p className="text-gray-600 leading-relaxed">Expérimentation rapide</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Apprentissages</h3>
              <p className="text-gray-600 leading-relaxed">Data-driven insights</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-orange-800 mb-3">Itérations</h3>
              <p className="text-gray-600 leading-relaxed">Amélioration continue</p>
            </div>
          </div>
          
          {/* Équipe Cross-fonctionnelle */}
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">🎯 Approche Cross-fonctionnelle</h3>
            <div className="flex justify-center items-center space-x-6 mb-6">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">PROD</div>
              <div className="text-3xl text-gray-400">×</div>
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">MKT</div>
              <div className="text-3xl text-gray-400">×</div>
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">TECH</div>
              <div className="text-3xl text-gray-400">×</div>
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">DATA</div>
            </div>
            <p className="text-xl text-gray-700 font-semibold leading-relaxed">Une équipe • Un backlog • Un objectif commun</p>
          </div>
        </div>
      </section>

      {/* SLIDE 5: COMPARAISON GROWTH VS TRADITIONNEL */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-4 sm:p-8 rounded-3xl flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-16">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">🆚</div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4">Growth vs Marketing Traditionnel</h2>
            <div className="w-16 sm:w-32 h-1 bg-slate-500 mx-auto"></div>
          </div>

          {/* Illustration visuelle des funnels */}
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 mb-8 sm:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
              {/* Marketing Traditionnel - Funnel uniforme */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-8">Traditional Marketing</h3>
                <div className="relative">
                  {/* Funnel traditionnel - largeurs uniformes */}
                  <div className="space-y-2">
                    <div className="bg-blue-500 text-white py-3 px-8 text-center font-semibold rounded-t-lg">
                      Acquisition
                    </div>
                    <div className="bg-gray-300 text-gray-700 py-3 px-12 text-center font-medium">
                      Activation
                    </div>
                    <div className="bg-gray-300 text-gray-700 py-3 px-16 text-center font-medium">
                      Retention
                    </div>
                    <div className="bg-gray-300 text-gray-700 py-3 px-20 text-center font-medium">
                      Referral
                    </div>
                    <div className="bg-gray-300 text-gray-700 py-3 px-24 text-center font-medium rounded-b-lg">
                      Revenue
                    </div>
                  </div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">VS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Marketing - Funnel optimisé */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4 sm:mb-8">Growth Marketing</h3>
                <div className="relative">
                  {/* Funnel Growth - largeurs décroissantes */}
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="bg-blue-500 text-white py-3 px-6 text-center font-semibold rounded-t-lg w-full">
                      Acquisition
                    </div>
                    <div className="bg-blue-400 text-white py-3 px-6 text-center font-semibold w-5/6">
                      Activation
                    </div>
                    <div className="bg-blue-400 text-white py-3 px-6 text-center font-semibold w-4/6">
                      Retention
                    </div>
                    <div className="bg-blue-400 text-white py-3 px-6 text-center font-semibold w-3/6">
                      Referral
                    </div>
                    <div className="bg-blue-400 text-white py-3 px-6 text-center font-semibold rounded-b-lg w-2/6">
                      Revenue
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-xl p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 text-xs sm:text-sm">
                  <div className="text-red-700">
                    <p className="font-semibold mb-2">❌ Marketing Traditionnel</p>
                    <p>Focus uniquement sur l'acquisition, abandon des autres étapes</p>
                  </div>
                  <div className="text-green-700">
                    <p className="font-semibold mb-2">✅ Growth Marketing</p>
                    <p>Optimisation de chaque étape du funnel pour maximiser la conversion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-slate-600 to-gray-700 text-white p-3 sm:p-6">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div className="text-sm sm:text-lg lg:text-xl font-semibold">Critère</div>
                <div className="text-sm sm:text-lg lg:text-xl font-semibold">❌ Traditionnel</div>
                <div className="text-sm sm:text-lg lg:text-xl font-semibold">✅ Growth</div>
              </div>
            </div>
            
            <div className="divide-y divide-gray-100">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50">
                <div className="font-semibold text-gray-800 flex items-center text-xs sm:text-base"><span className="text-lg sm:text-2xl mr-1 sm:mr-2">🎯</span> Objectif</div>
                <div className="text-gray-600 text-xs sm:text-base">Campagnes ponctuelles</div>
                <div className="text-green-700 font-semibold text-xs sm:text-base">Croissance durable</div>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50">
                <div className="font-semibold text-gray-800 flex items-center text-xs sm:text-base"><span className="text-lg sm:text-2xl mr-1 sm:mr-2">⏰</span> Horizon</div>
                <div className="text-gray-600 text-xs sm:text-base">Planning annuel figé</div>
                <div className="text-green-700 font-semibold text-xs sm:text-base">Itératif court → long terme</div>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50">
                <div className="font-semibold text-gray-800 flex items-center text-xs sm:text-base"><span className="text-lg sm:text-2xl mr-1 sm:mr-2">🔄</span> Processus</div>
                <div className="text-gray-600 text-xs sm:text-base">Exécution de plans</div>
                <div className="text-green-700 font-semibold text-xs sm:text-base">Tests A/B & expérimentation</div>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50">
                <div className="font-semibold text-gray-800 flex items-center text-xs sm:text-base"><span className="text-lg sm:text-2xl mr-1 sm:mr-2">📊</span> Mesure</div>
                <div className="text-gray-600 text-xs sm:text-base">Impressions, reach</div>
                <div className="text-green-700 font-semibold text-xs sm:text-base">AAARRR, LTV:CAC, rétention</div>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-gray-50">
                <div className="font-semibold text-gray-800 flex items-center text-xs sm:text-base"><span className="text-lg sm:text-2xl mr-1 sm:mr-2">👥</span> Organisation</div>
                <div className="text-gray-600 text-xs sm:text-base">Silos par spécialité</div>
                <div className="text-green-700 font-semibold text-xs sm:text-base">Escouade pluridisciplinaire</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 6: FUNNEL AAARRR */}
      <section className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-4 sm:p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-16">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">🏴‍☠️</div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">Le Pirate Funnel</h2>
            <h3 className="text-lg sm:text-2xl lg:text-3xl font-light text-indigo-200">AAARRR Framework</h3>
            <div className="w-16 sm:w-32 h-1 bg-white mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3 text-center hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg">
              <div className="text-xl sm:text-2xl mb-2">👁️</div>
              <h3 className="text-xs sm:text-sm font-bold mb-2 text-white leading-tight">Awareness</h3>
              <p className="text-xs text-blue-100 leading-tight">Combien de personnes atteignez-vous ?</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-3 text-center hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg">
              <div className="text-xl sm:text-2xl mb-2">🌐</div>
              <h3 className="text-xs sm:text-sm font-bold mb-2 text-white leading-tight">Acquisition</h3>
              <p className="text-xs text-green-100 leading-tight">Combien visitent votre site/app ?</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-3 text-center hover:from-yellow-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg">
              <div className="text-xl sm:text-2xl mb-2">⚡</div>
              <h3 className="text-xs sm:text-sm font-bold mb-2 text-white leading-tight">Activation</h3>
              <p className="text-xs text-yellow-100 leading-tight">Combien franchissent la 1ère étape clé ?</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-3 text-center hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
              <div className="text-xl sm:text-2xl mb-2">🔄</div>
              <h3 className="text-xs sm:text-sm font-bold mb-2 text-white leading-tight">Rétention</h3>
              <p className="text-xs text-purple-100 leading-tight">Combien reviennent ?</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-3 text-center hover:from-emerald-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg">
              <div className="text-xl sm:text-2xl mb-2">💳</div>
              <h3 className="text-xs sm:text-sm font-bold mb-2 text-white leading-tight">Revenus</h3>
              <p className="text-xs text-emerald-100 leading-tight">Combien payent ?</p>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-3 text-center hover:from-pink-600 hover:to-rose-700 transition-all transform hover:scale-105 shadow-lg">
              <div className="text-xl sm:text-2xl mb-2">📢</div>
              <h3 className="text-xs sm:text-sm font-bold mb-2 text-white leading-tight">Recommandations</h3>
              <p className="text-xs text-pink-100 leading-tight">Combien recommandent ?</p>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 bg-white/10 backdrop-blur rounded-xl p-4 sm:p-6">
            <p className="text-lg sm:text-xl text-center"><strong>💡 Objectif :</strong> Repérer le maillon faible à prioriser</p>
            <p className="text-center text-indigo-200 mt-2">→ Module 2 : diagnostic AAARRR</p>
          </div>
        </div>
      </section>

      {/* SLIDE 7: NORTH STAR METRIC */}
      <section className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 p-4 sm:p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-16">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">⭐</div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4">North Star Metric</h2>
            <div className="w-16 sm:w-32 h-1 bg-yellow-500 mx-auto"></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mt-4 sm:mt-6">La métrique centrale corrélée à la <strong>valeur long terme</strong></p>
          </div>
          
          {/* Règles NSM */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold text-yellow-800 mb-3">Orientée Usage</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Reflète l'utilisation clé, pas la vanité</p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">📊</div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">Mesurable</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Fréquence hebdo/mensuelle</p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">👥</div>
              <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-3">Alignement</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Objectif commun pour l'équipe</p>
            </div>
          </div>
          
          {/* Exemples par modèle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-blue-500 text-white rounded-2xl p-4 sm:p-6 text-left h-full flex flex-col">
              <div className="text-2xl sm:text-3xl mb-3 text-center">💼</div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-center">SaaS B2B</h4>
              <ul className="text-xs sm:text-sm space-y-2 flex-grow">
                <li className="leading-relaxed">• Utilisateurs activés/semaine</li>
              </ul>
            </div>
            <div className="bg-green-500 text-white rounded-2xl p-4 sm:p-6 text-left h-full flex flex-col">
              <div className="text-2xl sm:text-3xl mb-3 text-center">🛒</div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-center">E-commerce</h4>
              <ul className="text-xs sm:text-sm space-y-2 flex-grow">
                <li className="leading-relaxed">• Clients ≥1 commande/semaine</li>
                <li className="leading-relaxed">• Taux première commande</li>
              </ul>
            </div>
            <div className="bg-purple-500 text-white rounded-2xl p-4 sm:p-6 text-left h-full flex flex-col">
              <div className="text-2xl sm:text-3xl mb-3 text-center">🏪</div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-center">Marketplace</h4>
              <ul className="text-xs sm:text-sm space-y-2 flex-grow">
                <li className="leading-relaxed">• Transactions réglées/semaine</li>
                <li className="leading-relaxed">• GMV/acheteur actif</li>
              </ul>
            </div>
            <div className="bg-orange-500 text-white rounded-2xl p-4 sm:p-6 text-left h-full flex flex-col">
              <div className="text-2xl sm:text-3xl mb-3 text-center">📱</div>
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-center">App Mobile</h4>
              <ul className="text-xs sm:text-sm space-y-2 flex-grow">
                <li className="leading-relaxed">• Rétention D7</li>
                <li className="leading-relaxed">• Sessions action clé/MAU</li>
              </ul>
            </div>
          </div>

          {/* Cas pratiques célèbres */}
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-4 sm:p-8">
            <h3 className="text-lg sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">🌟 Cas pratiques célèbres</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👥</div>
                <h4 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">Facebook</h4>
                <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <p className="font-semibold mb-2">NSM aux débuts :</p>
                  <p className="bg-blue-50 rounded-lg p-2 sm:p-3">Utilisateurs ayant ajouté <strong>7 amis</strong> dans leurs <strong>10 premiers jours</strong></p>
                  <p className="text-xs text-gray-500 mt-2">→ Corrélé à la rétention long terme</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏠</div>
                <h4 className="text-lg sm:text-xl font-bold text-pink-800 mb-3">Airbnb</h4>
                <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <p className="font-semibold mb-2">NSM actuelle :</p>
                  <p className="bg-pink-50 rounded-lg p-2 sm:p-3">Nombre de <strong>nuits réservées</strong></p>
                  <p className="text-xs text-gray-500 mt-2">→ Reflète l'usage réel de la plateforme</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎵</div>
                <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-3">Spotify</h4>
                <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <p className="font-semibold mb-2">NSM principale :</p>
                  <p className="bg-green-50 rounded-lg p-2 sm:p-3"><strong>Temps d'écoute</strong> par utilisateur</p>
                  <p className="text-xs text-gray-500 mt-2">→ Engagement et satisfaction utilisateur</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 bg-yellow-50 rounded-xl p-3 sm:p-4 border-l-4 border-yellow-400">
              <p className="text-yellow-800 text-xs sm:text-sm font-medium">
                <strong>💡 Point clé :</strong> Chaque NSM capture le moment "Aha" où l'utilisateur comprend la valeur du produit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 8: BOUCLES DE CROISSANCE */}
      <section className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-4 sm:p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-16">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">🔄</div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 mb-4">Boucles de croissance</h2>
            <div className="w-16 sm:w-32 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          {/* Schéma de boucle */}
          <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xl mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-gray-800">💫 Le principe des boucles</h3>
            
            {/* Diagramme circulaire */}
            <div className="relative w-full max-w-lg mx-auto mb-8">
              <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Cercle de fond */}
                <circle cx="200" cy="200" r="150" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5"/>
                
                {/* Éléments positionnés en cercle */}
                {/* Produit - en haut */}
                <foreignObject x="160" y="40" width="80" height="40">
                  <div className="bg-blue-500 text-white px-3 py-2 rounded-lg text-xs font-semibold text-center">
                    Produit
                  </div>
                </foreignObject>
                
                {/* Valeur - à droite */}
                <foreignObject x="310" y="120" width="80" height="40">
                  <div className="bg-green-500 text-white px-3 py-2 rounded-lg text-xs font-semibold text-center">
                    Valeur
                  </div>
                </foreignObject>
                
                {/* Partage - en bas droite */}
                <foreignObject x="280" y="240" width="80" height="40">
                  <div className="bg-purple-500 text-white px-3 py-2 rounded-lg text-xs font-semibold text-center">
                    Partage
                  </div>
                </foreignObject>
                
                {/* Nouveau trafic - en bas gauche */}
                <foreignObject x="40" y="240" width="100" height="40">
                  <div className="bg-orange-500 text-white px-3 py-2 rounded-lg text-xs font-semibold text-center">
                    Nouveau trafic
                  </div>
                </foreignObject>
                
                {/* Flèches courbes */}
                {/* Produit vers Valeur */}
                <path d="M 220 80 Q 280 100 320 140" fill="none" stroke="#9ca3af" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                
                {/* Valeur vers Partage */}
                <path d="M 340 160 Q 360 200 320 240" fill="none" stroke="#9ca3af" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                
                {/* Partage vers Nouveau trafic */}
                <path d="M 280 260 Q 200 300 140 260" fill="none" stroke="#9ca3af" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                
                {/* Nouveau trafic vers Produit - la boucle se ferme */}
                <path d="M 90 240 Q 50 150 180 80" fill="none" stroke="#ef4444" strokeWidth="4" markerEnd="url(#arrowhead-red)"/>
                
                {/* Définition des flèches */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af"/>
                  </marker>
                  <marker id="arrowhead-red" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
                    <polygon points="0 0, 12 4, 0 8" fill="#ef4444"/>
                  </marker>
                </defs>
              </svg>
            </div>
            
            <div className="text-center mb-4">
              <div className="text-lg text-red-600 font-bold">🔄 La boucle se referme : le nouveau trafic alimente à nouveau le produit</div>
            </div>
            <p className="text-center text-xl text-gray-700 font-semibold">Chaque initiative doit idéalement <strong>renforcer un loop</strong></p>
          </div>
          
          {/* Cas emblématiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-blue-500 text-white rounded-2xl p-6 sm:p-8 text-left">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">📦</div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">Dropbox</h4>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold mb-2 leading-relaxed">Boucle : Parrainage in-product</p>
                <p className="leading-relaxed">→ Espace offert aux 2 parties → Referral alimente Awareness</p>
              </div>
            </div>
            <div className="bg-purple-500 text-white rounded-2xl p-6 sm:p-8 text-left">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">📧</div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">Hotmail</h4>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold mb-2 leading-relaxed">Boucle : Signature virale</p>
                <p className="leading-relaxed">"PS: I love you..." → Diffusion à coût marginal nul</p>
              </div>
            </div>
            <div className="bg-green-500 text-white rounded-2xl p-6 sm:p-8 text-left">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-center">🏠</div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">Airbnb</h4>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold mb-2 leading-relaxed">Boucle : Photos pro</p>
                <p className="leading-relaxed">→ Conversion ↗️ → Plus d'offres & demande</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 9: EXPÉRIMENTATION */}
      <section className="min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 text-white p-4 sm:p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-16">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">🧪</div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">Expérimentation continue</h2>
            <div className="w-16 sm:w-32 h-1 bg-white mx-auto"></div>
          </div>
          
          {/* Cadre GROWS */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 sm:p-8 mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-2xl font-bold text-center mb-6 sm:mb-8">📋 Cadre GROWS</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              <div className="text-center p-4 sm:p-6 bg-blue-500 rounded-xl">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🔍</div>
                <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Gather</h4>
                <p className="text-xs sm:text-sm">Collecter données</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-purple-500 rounded-xl">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📊</div>
                <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Rank</h4>
                <p className="text-xs sm:text-sm">Prioriser (ICE)</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-green-500 rounded-xl">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📝</div>
                <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Outline</h4>
                <p className="text-xs leading-tight">Hypothèse/test</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-orange-500 rounded-xl">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">⚡</div>
                <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Work</h4>
                <p className="text-xs sm:text-sm">Exécuter</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-red-500 rounded-xl">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🔬</div>
                <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2">Study</h4>
                <p className="text-xs sm:text-sm">Analyser & décider</p>
              </div>
            </div>
          </div>
          
          {/* Score ICE */}
          <div className="bg-white text-gray-800 rounded-2xl p-4 sm:p-8">
            <h3 className="text-lg sm:text-2xl font-bold text-center mb-6 sm:mb-8">🎯 Priorisation ICE</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📈</div>
                <h4 className="font-bold text-blue-800 mb-2 text-sm sm:text-base">Impact</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Effet potentiel sur la NSM</p>
                <p className="text-xs text-gray-500 mt-2">Score : 1-5</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-green-50 rounded-xl">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🎯</div>
                <h4 className="font-bold text-green-800 mb-2 text-sm sm:text-base">Confiance</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Certitude du résultat</p>
                <p className="text-xs text-gray-500 mt-2">Score : 1-5</p>
              </div>
              <div className="text-center p-4 sm:p-6 bg-orange-50 rounded-xl">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">⚡</div>
                <h4 className="font-bold text-orange-800 mb-2 text-sm sm:text-base">Effort</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Ressources nécessaires</p>
                <p className="text-xs text-gray-500 mt-2">Score : 1-5 (inverse)</p>
              </div>
            </div>
            <div className="bg-blue-100 rounded-xl p-3 sm:p-4">
              <p className="text-center text-blue-800 text-lg sm:text-xl font-bold">(Impact × Confiance) ÷ Effort = Score ICE</p>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 10: ATELIER */}
      <section className="min-h-screen bg-gradient-to-br from-orange-400 to-red-500 text-white p-4 sm:p-8 rounded-3xl flex items-center">
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8">🛠️</div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 sm:mb-8">Atelier éclair</h2>
          <h3 className="text-lg sm:text-2xl lg:text-3xl font-light mb-8 sm:mb-12">Choisis ta NSM (10')</h3>
          
          <div className="bg-white/20 backdrop-blur rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">⏱️</span> Durée
                </h4>
                <p className="text-base sm:text-lg leading-relaxed">10 minutes en binôme</p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📋</span> Mission
                </h4>
                <p className="text-base sm:text-lg leading-relaxed">Choisir un contexte et proposer 1 NSM + 2 justifications</p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📝</span> Format
                </h4>
                <p className="text-base sm:text-lg leading-relaxed">"NSM = ... ; on la mesure car ..."</p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🎤</span> Partage
                </h4>
                <p className="text-base sm:text-lg leading-relaxed">30 secondes par binôme</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">💼</div>
              <h4 className="font-bold text-base sm:text-lg">SaaS</h4>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🛒</div>
              <h4 className="font-bold text-base sm:text-lg">E-commerce</h4>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📱</div>
              <h4 className="font-bold text-base sm:text-lg">App Mobile</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 11: QUIZ */}
      <QuizFlash />

      {/* SLIDE 12: RÉCAP ET TEASER */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white p-4 sm:p-8 rounded-3xl flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-16">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">🚀</div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">Récap & Suite</h2>
            <div className="w-16 sm:w-32 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Points clés */}
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 sm:p-8 text-left">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">📋 Points clés à retenir</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">1</span>
                  <span className="text-sm sm:text-lg leading-relaxed">Growth = système AAARRR complet</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">2</span>
                  <span className="text-sm sm:text-lg leading-relaxed">NSM = métrique corrélée à la valeur</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">3</span>
                  <span className="text-sm sm:text-lg leading-relaxed">Boucles de croissance auto-alimentées</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 bg-white/30 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">4</span>
                  <span className="text-sm sm:text-lg leading-relaxed">Expérimentation continue (GROWS)</span>
                </div>
              </div>
            </div>
            
            {/* Teaser Module 2 */}
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-6 sm:p-8 text-left">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">🔜 Module 2 : Framework AAARRR</h3>
              <div className="text-sm sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Utilisez AAARRR comme cadre de diagnostic pour identifier et cibler les goulots d'étranglement de votre funnel.
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl p-3 sm:p-4">
                <h4 className="font-bold mb-2 text-sm sm:text-base">Au programme :</h4>
                <ul className="text-xs sm:text-sm space-y-1">
                  <li className="leading-relaxed">• Diagnostic complet de votre funnel</li>
                  <li className="leading-relaxed">• Identification des points faibles</li>
                  <li className="leading-relaxed">• Priorisation des actions</li>
                  <li className="leading-relaxed">• Cas pratiques concrets</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎉</div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Bravo ! Module 1 terminé</h3>
            <p className="text-base sm:text-lg lg:text-xl text-blue-200 mt-2">Passons à la pratique avec le diagnostic AAARRR</p>
          </div>
        </div>
      </section>
    </div>
  );
}
