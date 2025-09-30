'use client';

import { useProgress } from '@/contexts/ProgressContext';
import { CheckCircle } from 'lucide-react';

interface MarkCompleteButtonProps {
  type: 'module' | 'atelier';
  slug: string;
  title: string;
}

export default function MarkCompleteButton({ type, slug, title }: MarkCompleteButtonProps) {
  const { 
    markModuleComplete, 
    markAtelierComplete, 
    isModuleComplete, 
    isAtelierComplete 
  } = useProgress();

  const isComplete = type === 'module' 
    ? isModuleComplete(slug) 
    : isAtelierComplete(slug);

  const handleMarkComplete = () => {
    if (type === 'module') {
      markModuleComplete(slug);
    } else {
      markAtelierComplete(slug);
    }
  };

  if (isComplete) {
    return (
      <div className="flex items-center justify-center p-4 bg-green-50 border border-green-200 rounded-lg">
        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
        <span className="text-green-700 font-medium">
          {type === 'module' ? 'Module terminé' : 'Atelier terminé'} ✨
        </span>
      </div>
    );
  }

  return (
    <button
      onClick={handleMarkComplete}
      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
    >
      ✅ Marquer "{title}" comme terminé
    </button>
  );
}
