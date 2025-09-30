'use client';

import { usePathname } from 'next/navigation';

const modules = [
  '1-intro', '2-aaarr', '3-cas-pratique', '4-kpis-automation', 
  '5-experimentation', '6-no-code', '7-ai-par-canal'
];

export default function ProgressBar() {
  const pathname = usePathname();
  
  // Extraire le slug du module depuis l'URL
  const currentModuleSlug = pathname.split('/modules/')[1];
  const currentModuleIndex = modules.findIndex(module => module === currentModuleSlug);
  
  // Ne pas afficher si on n'est pas sur une page de module
  if (!currentModuleSlug || currentModuleIndex === -1) {
    return null;
  }
  
  const progress = ((currentModuleIndex + 1) / modules.length) * 100;
  
  return (
    <div className="bg-white border-b shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Progression du cours</span>
          <span className="font-medium">
            Module {currentModuleIndex + 1} sur {modules.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Débutant</span>
          <span>Expert</span>
        </div>
      </div>
    </div>
  );
}
