'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Composant interactif pour Dashboard Express
export function DashboardExpressWorkshop({ phases }: { phases: any[] }) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Atelier — Dashboard Express (15')</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-6">
          {phases.map((phase, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentStep === index
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {index + 1}. {phase.title} ({phase.duration})
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold">{currentStep + 1}</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">{phases[currentStep].title}</h4>
              <p className="text-sm text-indigo-600">{phases[currentStep].duration}</p>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="font-semibold text-gray-900 mb-2">🎯 À faire</h5>
            <p className="text-gray-700 mb-4">{phases[currentStep].content}</p>

            <h5 className="font-semibold text-gray-900 mb-2">📋 Livrable</h5>
            <p className="text-indigo-700 font-medium bg-indigo-50 rounded p-3 mb-4">
              {phases[currentStep].deliverable}
            </p>

            <h5 className="font-semibold text-gray-900 mb-2">💡 Tips</h5>
            <ul className="space-y-2">
              {phases[currentStep].tips.map((tip: string, idx: number) => (
                <li key={idx} className="text-gray-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 pt-4 border-t border-gray-200">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Précédent
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(phases.length - 1, currentStep + 1))}
              disabled={currentStep === phases.length - 1}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Suivant →
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
