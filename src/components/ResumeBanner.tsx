'use client';

import Link from 'next/link';
import { useProgress } from '@/contexts/ProgressContext';
import { getModuleBySlug } from '@/lib/modules';
import { ArrowRight, Play } from 'lucide-react';

export default function ResumeBanner() {
  const { getNextIncompleteModule } = useProgress();
  const nextIncompleteSlug = getNextIncompleteModule();
  
  if (!nextIncompleteSlug) return null;
  
  const nextModule = getModuleBySlug(nextIncompleteSlug);
  if (!nextModule) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <div className="bg-white/20 rounded-full p-2">
              <Play className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Reprendre votre formation
              </h3>
              <p className="text-blue-100">
                Vous étiez au {nextModule.title}
              </p>
            </div>
          </div>
          
          <Link
            href={`/${nextIncompleteSlug}`}
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Continuer la formation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
