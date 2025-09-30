'use client';

import Link from 'next/link';
import { Clock, Users, Target } from 'lucide-react';
import { getModuleBySlug } from '@/lib/modules';
import { useProgress } from '@/contexts/ProgressContext';

interface AtelierCalloutsProps {
  moduleSlug: string;
}

export default function AtelierCallouts({ moduleSlug }: AtelierCalloutsProps) {
  const module = getModuleBySlug(moduleSlug);
  const { isAtelierComplete } = useProgress();

  if (!module?.ateliers?.length) return null;

  return (
    <div className="my-12 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          🎯 Ateliers Pratiques
        </h3>
        <p className="text-gray-600">
          Mettez en pratique immédiatement ce que vous venez d'apprendre
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {module.ateliers.map((atelier) => (
          <div
            key={atelier.slug}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:border-purple-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {atelier.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {atelier.description}
                </p>
              </div>
              {isAtelierComplete(atelier.slug) && (
                <div className="ml-2 text-green-500">
                  ✓ Terminé
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {atelier.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Individuel
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-1" />
                  Pratique
                </div>
              </div>

              <Link
                href={`/ateliers/${atelier.slug}`}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 transition-colors"
              >
                Commencer l'atelier
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-500">
          💡 <strong>Conseil :</strong> Réalisez ces ateliers avant de passer au module suivant pour une meilleure assimilation
        </p>
      </div>
    </div>
  );
}
