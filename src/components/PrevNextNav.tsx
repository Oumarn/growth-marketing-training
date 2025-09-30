'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getModuleBySlug, getNextModule, getPreviousModule } from '@/lib/modules';

interface PrevNextNavProps {
  currentSlug: string;
}

export default function PrevNextNav({ currentSlug }: PrevNextNavProps) {
  const currentModule = getModuleBySlug(currentSlug);
  const nextModule = getNextModule(currentSlug);
  const prevModule = getPreviousModule(currentSlug);

  if (!currentModule) return null;

  return (
    <div className="border-t border-gray-200 mt-12 pt-8">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          {prevModule && (
            <Link
              href={`/modules/${prevModule.slug}`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              <div className="text-left">
                <div className="text-xs text-gray-500">Précédent</div>
                <div className="font-semibold">{prevModule.title}</div>
              </div>
            </Link>
          )}
        </div>

        <div className="flex-1 flex justify-end">
          {nextModule && (
            <Link
              href={`/modules/${nextModule.slug}`}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 transition-colors"
            >
              <div className="text-right">
                <div className="text-xs text-blue-100">Suivant</div>
                <div className="font-semibold">{nextModule.title}</div>
              </div>
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          )}
          {!nextModule && (
            <Link
              href="/download"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 transition-colors"
            >
              <div className="text-right">
                <div className="text-xs text-green-100">Terminer</div>
                <div className="font-semibold">Télécharger les ressources</div>
              </div>
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
