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