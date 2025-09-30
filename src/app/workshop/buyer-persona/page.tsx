'use client';

import React, { useState } from 'react';

export default function BuyerPersonaWorkshop() {
  const [completedPhases, setCompletedPhases] = useState<number[]>([]);
  const [showResources, setShowResources] = useState(false);

  const togglePhaseCompletion = (phaseNumber: number) => {
    setCompletedPhases(prev => 
      prev.includes(phaseNumber) 
        ? prev.filter(p => p !== phaseNumber)
        : [...prev, phaseNumber]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">👥</div>
            <h1 className="text-5xl font-bold mb-4">Buyer Persona Workshop</h1>
            <p className="text-2xl text-indigo-200 mb-6">Cas pratique SaaS : MeetingFlow</p>
            <div className="flex justify-center items-center space-x-8 text-lg">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⏱️</span>
                <span>45 minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">👥</span>
                <span>Équipes 3-4</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎯</span>
                <span>Atelier pratique</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 py-12 space-y-12">
        
        {/* Contexte Entreprise */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🏢</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contexte : MeetingFlow SaaS</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="text-3xl mb-3 text-center">💡</div>
              <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">Value Proposition</h3>
              <p className="text-center text-blue-700">"Planifiez des réunions sans aller-retour"</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <div className="text-3xl mb-3 text-center">⭐</div>
              <h3 className="text-xl font-bold text-green-800 mb-3 text-center">North Star Metric</h3>
              <p className="text-center text-green-700">Meetings booked / semaine</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <div className="text-3xl mb-3 text-center">⚡</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3 text-center">Activation</h3>
              <p className="text-center text-purple-700">1er créneau réservé via lien</p>
            </div>
          </div>
        </section>

        {/* Objectifs d'apprentissage */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Objectifs d'apprentissage</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Identifier les segments clés</h3>
                <p className="text-gray-600">À partir de données existantes (Analytics, CRM, Support)</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Créer des personas détaillés</h3>
                <p className="text-gray-600">Demographics, psychographics et comportements</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Définir pain points</h3>
                <p className="text-gray-600">Motivations et jobs-to-be-done de chaque persona</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Adapter le messaging</h3>
                <p className="text-gray-600">Message personnalisé pour chaque segment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Déroulé de l'atelier */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">📋</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Déroulé de l'atelier (45')</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Phase 0 - Brief */}
            <div className="border-l-4 border-gray-400 pl-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Phase 0 - Brief (3')</h3>
                <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">3 min</div>
              </div>
              <p className="text-gray-600 mb-4">
                Présentation de la promesse, NSM et événement d'activation. Rappel : partir de données réelles pour éviter les personas "fantaisie".
              </p>
            </div>

            {/* Phase 1 - Recherche */}
            <div className={`border-l-4 ${completedPhases.includes(1) ? 'border-green-500' : 'border-blue-500'} pl-6`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Phase 1 - Recherche (15')</h3>
                <div className="flex items-center space-x-2">
                  <div className="text-sm bg-blue-100 px-3 py-1 rounded-full">15 min</div>
                  <button
                    onClick={() => togglePhaseCompletion(1)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      completedPhases.includes(1) 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {completedPhases.includes(1) && '✓'}
                  </button>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Collecte rapide sur 4 sources de données synthétiques :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">📊 Analytics</h4>
                  <p className="text-sm text-blue-700">Pages d'entrée, taux d'inscription, pays/device</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">📈 Product Analytics</h4>
                  <p className="text-sm text-green-700">Activation rate, TTFV, features par rôle</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">💼 CRM</h4>
                  <p className="text-sm text-purple-700">Rôle, taille entreprise, plan choisi</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">🎧 Support</h4>
                  <p className="text-sm text-orange-700">Top tickets, tags (no-shows, Outlook, etc.)</p>
                </div>
              </div>
              
              <div className="bg-blue-100 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">📋 Livrable express :</h4>
                <p className="text-blue-700">3 patterns identifiés (ex: "RH mid-market sur plan Teams", "freins Outlook")</p>
              </div>
            </div>

            {/* Phase 2 - Création */}
            <div className={`border-l-4 ${completedPhases.includes(2) ? 'border-green-500' : 'border-purple-500'} pl-6`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Phase 2 - Création (20')</h3>
                <div className="flex items-center space-x-2">
                  <div className="text-sm bg-purple-100 px-3 py-1 rounded-full">20 min</div>
                  <button
                    onClick={() => togglePhaseCompletion(2)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      completedPhases.includes(2) 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {completedPhases.includes(2) && '✓'}
                  </button>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Utilisez le template Buyer Persona pour créer 2-3 personas principaux :
              </p>
              
              {/* Personas Templates */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Persona A - AE Sales */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">💼</div>
                    <h4 className="text-lg font-bold text-blue-800">Persona A - AE Sales</h4>
                    <p className="text-sm text-blue-600">PME Tech, 5-20 RDV/semaine</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-blue-800">Pain points:</span>
                      <p className="text-blue-700">Allers-retours email, no-shows</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-800">Motivations:</span>
                      <p className="text-blue-700">+RDV qualifiés, vitesse</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-800">Activation:</span>
                      <p className="text-blue-700">1er RDV réservé &lt;24h</p>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-800">Message test:</span>
                      <p className="text-blue-700">"10 emails → 1 lien"</p>
                    </div>
                  </div>
                </div>

                {/* Persona B - RH */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">👥</div>
                    <h4 className="text-lg font-bold text-green-800">Persona B - Recruteur</h4>
                    <p className="text-sm text-green-600">Mid-market, 15-30 entretiens/semaine</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-green-800">Pain points:</span>
                      <p className="text-green-700">Coordination panels, no-shows</p>
                    </div>
                    <div>
                      <span className="font-semibold text-green-800">Motivations:</span>
                      <p className="text-green-700">Time-to-hire ↓, expérience candidat</p>
                    </div>
                    <div>
                      <span className="font-semibold text-green-800">Activation:</span>
                      <p className="text-green-700">1er panel programmé</p>
                    </div>
                    <div>
                      <span className="font-semibold text-green-800">Message test:</span>
                      <p className="text-green-700">"Panels sans friction"</p>
                    </div>
                  </div>
                </div>

                {/* Persona C - Indépendant */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">🎯</div>
                    <h4 className="text-lg font-bold text-purple-800">Persona C - Indépendant</h4>
                    <p className="text-sm text-purple-600">Coach/Consultant, 5-10 RDV/semaine</p>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-purple-800">Pain points:</span>
                      <p className="text-purple-700">Pré-paiement, no-shows</p>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-800">Motivations:</span>
                      <p className="text-purple-700">Réduire l'administratif</p>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-800">Activation:</span>
                      <p className="text-purple-700">1er RDV prépayé</p>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-800">Message test:</span>
                      <p className="text-purple-700">"1 lien, 1 paiement, 1 client"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 - Validation */}
            <div className={`border-l-4 ${completedPhases.includes(3) ? 'border-green-500' : 'border-orange-500'} pl-6`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">Phase 3 - Validation (10')</h3>
                <div className="flex items-center space-x-2">
                  <div className="text-sm bg-orange-100 px-3 py-1 rounded-full">10 min</div>
                  <button
                    onClick={() => togglePhaseCompletion(3)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      completedPhases.includes(3) 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 hover:border-green-400'
                    }`}
                  >
                    {completedPhases.includes(3) && '✓'}
                  </button>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Pour chaque persona, produire :
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-3">💡 Hypothèses à tester</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• "Pré-paiement ↓ no-shows de 40% chez Indés"</li>
                    <li>• "Intégration Outlook ↑ activation AE de 25%"</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">📊 Plan de validation</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• <strong>Quali:</strong> 3 interviews / persona</li>
                    <li>• <strong>Quanti:</strong> A/B test onboarding</li>
                    <li>• <strong>KPI:</strong> Activation rate, TTFV, CVR</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Livrables attendus */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">📦</div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Livrables attendus</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">2-3 personas documentés</h3>
              <p className="text-sm text-blue-700">Template complété avec demographics, pain points, motivations</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-lg font-bold text-green-800 mb-2">Matrix messaging</h3>
              <p className="text-sm text-green-700">Hook • Value • Proof • CTA par persona</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-lg font-bold text-purple-800 mb-2">Plan de validation</h3>
              <p className="text-sm text-purple-700">Méthodes quali + quanti + KPI ciblés</p>
            </div>
          </div>
        </section>

        {/* Ressources */}
        <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🧰</div>
            <h2 className="text-3xl font-bold mb-4">Ressources nécessaires</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">📋 Templates & Guides</h3>
              <div className="grid gap-3">
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Template Buyer Persona Canvas</span>
                  </div>
                  <a 
                    href="/downloads/saas_case_pack/buyer_persona_template.md" 
                    download
                    className="text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition-colors"
                  >
                    📥 Télécharger
                  </a>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Guide d'interview client (10 questions)</span>
                  </div>
                  <a 
                    href="/downloads/saas_case_pack/interview_guide.md" 
                    download
                    className="text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition-colors"
                  >
                    📥 Télécharger
                  </a>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Questionnaire de recherche utilisateur</span>
                  </div>
                  <a 
                    href="/downloads/saas_case_pack/inapp_survey.md" 
                    download
                    className="text-xs bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition-colors"
                  >
                    📥 Télécharger
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">📊 Dataset Synthétique</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Product funnel par persona</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Analytics traffic breakdown</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>CRM accounts & Support tickets</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => setShowResources(!showResources)}
              className="bg-white text-indigo-600 font-bold text-lg px-8 py-3 rounded-full hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg mb-4"
            >
              📥 {showResources ? 'Masquer' : 'Télécharger'} les ressources
            </button>
            
            {showResources && (
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 mt-4">
                <h4 className="font-bold mb-4">🎒 Pack de données synthétiques disponible :</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-left">
                    <p className="font-semibold mb-2">📊 Données CSV :</p>
                    <ul className="space-y-1">
                      <li>• <a href="/downloads/saas_case_pack/product_funnel.csv" download className="text-blue-200 hover:text-blue-100 underline">product_funnel.csv</a></li>
                      <li>• <a href="/downloads/saas_case_pack/analytics_traffic.csv" download className="text-blue-200 hover:text-blue-100 underline">analytics_traffic.csv</a></li>
                      <li>• <a href="/downloads/saas_case_pack/crm_accounts.csv" download className="text-blue-200 hover:text-blue-100 underline">crm_accounts.csv</a></li>
                      <li>• <a href="/downloads/saas_case_pack/support_tickets.csv" download className="text-blue-200 hover:text-blue-100 underline">support_tickets.csv</a></li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold mb-2">� Templates :</p>
                    <ul className="space-y-1">
                      <li>• <a href="/downloads/saas_case_pack/buyer_persona_template.md" download className="text-green-200 hover:text-green-100 underline">Template Buyer Persona Canvas</a></li>
                      <li>• <a href="/downloads/saas_case_pack/interview_guide.md" download className="text-green-200 hover:text-green-100 underline">Guide d'interview client</a></li>
                      <li>• <a href="/downloads/saas_case_pack/inapp_survey.md" download className="text-green-200 hover:text-green-100 underline">Questionnaire recherche</a></li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold mb-2">📖 Documentation :</p>
                    <ul className="space-y-1">
                      <li>• <a href="/downloads/saas_case_pack/README.txt" download className="text-yellow-200 hover:text-yellow-100 underline">README complet</a></li>
                      <li>• Instructions détaillées</li>
                      <li>• Cas pratique MeetingFlow</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-400/20 rounded-lg">
                  <p className="text-yellow-100 text-sm">
                    💡 <strong>Note :</strong> Ce dataset est entièrement synthétique et créé à des fins pédagogiques. 
                    Les données reflètent des patterns réalistes de l'industrie SaaS B2B.
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <a 
                      href="/downloads/saas_case_pack/product_funnel.csv" 
                      download
                      className="block bg-blue-500 text-white text-center py-2 px-3 rounded hover:bg-blue-600 transition-colors"
                    >
                      📊 Product Funnel
                    </a>
                    <a 
                      href="/downloads/saas_case_pack/analytics_traffic.csv" 
                      download
                      className="block bg-green-500 text-white text-center py-2 px-3 rounded hover:bg-green-600 transition-colors"
                    >
                      📈 Analytics Traffic
                    </a>
                    <a 
                      href="/downloads/saas_case_pack/crm_accounts.csv" 
                      download
                      className="block bg-purple-500 text-white text-center py-2 px-3 rounded hover:bg-purple-600 transition-colors"
                    >
                      💼 CRM Accounts
                    </a>
                    <a 
                      href="/downloads/saas_case_pack/support_tickets.csv" 
                      download
                      className="block bg-orange-500 text-white text-center py-2 px-3 rounded hover:bg-orange-600 transition-colors"
                    >
                      🎧 Support Tickets
                    </a>
                    <a 
                      href="/downloads/saas_case_pack/interview_guide.md" 
                      download
                      className="block bg-indigo-500 text-white text-center py-2 px-3 rounded hover:bg-indigo-600 transition-colors"
                    >
                      📝 Interview Guide
                    </a>
                    <a 
                      href="/downloads/saas_case_pack/inapp_survey.md" 
                      download
                      className="block bg-pink-500 text-white text-center py-2 px-3 rounded hover:bg-pink-600 transition-colors"
                    >
                      � Survey Template
                    </a>
                    <a 
                      href="/downloads/saas_case_pack/buyer_persona_template.md" 
                      download
                      className="block bg-teal-500 text-white text-center py-2 px-3 rounded hover:bg-teal-600 transition-colors"
                    >
                      📋 Persona Canvas
                    </a>
                  </div>
                  <a 
                    href="/downloads/saas_case_pack/README.txt" 
                    download
                    className="block bg-gray-700 text-white font-bold text-center py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors mt-2"
                  >
                    📖 README - Guide complet
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Progress Tracking */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Progression de l'atelier</h2>
          </div>
          
          <div className="flex justify-center space-x-4 mb-6">
            {[1, 2, 3].map((phase) => (
              <div
                key={phase}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
                  completedPhases.includes(phase)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {completedPhases.includes(phase) ? '✓' : phase}
              </div>
            ))}
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(completedPhases.length / 3) * 100}%` }}
            ></div>
          </div>
          
          <p className="text-center text-gray-600">
            {completedPhases.length === 0 && "Commencez par la phase de recherche"}
            {completedPhases.length === 1 && "Phase recherche terminée ! Passez à la création des personas"}
            {completedPhases.length === 2 && "Personas créés ! Finalisez avec la validation"}
            {completedPhases.length === 3 && "🎉 Atelier terminé ! Bravo pour vos personas data-driven"}
          </p>
          
          {completedPhases.length === 3 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setCompletedPhases([])}
                className="bg-indigo-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
              >
                🔄 Recommencer l'atelier
              </button>
            </div>
          )}
        </section>

        {/* Navigation */}
        <section className="text-center">
          <div className="space-y-4">
            <div className="flex justify-center space-x-4">
              <a
                href="/modules/2-aaarrr"
                className="bg-indigo-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-indigo-600 transition-colors"
              >
                ← Retour aux modules
              </a>
              <a
                href="/"
                className="bg-gray-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
              >
                🏠 Accueil
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
