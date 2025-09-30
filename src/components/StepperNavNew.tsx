'use client';

import Link from 'next/link';
import { getModules } from '@/lib/modules';
import { useProgress } from '@/contexts/ProgressContext';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface StepperNavProps {
  currentSlug?: string;
}

export default function StepperNav({ currentSlug }: StepperNavProps) {
  const modules = getModules();
  const { isModuleComplete } = useProgress();

  const getStatusIcon = (moduleSlug: string) => {
    if (isModuleComplete(moduleSlug)) {
      return <CheckCircle className="w-6 h-6 text-green-500" />;
    }
    if (moduleSlug === currentSlug) {
      return <Clock className="w-6 h-6 text-blue-500" />;
    }
    return <Circle className="w-6 h-6 text-gray-300" />;
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      unchanged: 'bg-gray-100 text-gray-700',
      updated: 'bg-blue-100 text-blue-700',
      new: 'bg-green-100 text-green-700'
    };
    
    const labels = {
      unchanged: '',
      updated: 'Mis à jour',
      new: 'Nouveau'
    };

    if (status === 'unchanged') return null;

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${badges[status as keyof typeof badges]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8 overflow-x-auto">
            {modules.map((module, index) => (
              <Link
                key={module.slug}
                href={`/modules/${module.slug}`}
                className={`flex items-center space-x-2 whitespace-nowrap transition-colors hover:text-blue-600 ${
                  currentSlug === module.slug 
                    ? 'text-blue-600 font-semibold' 
                    : isModuleComplete(module.slug)
                    ? 'text-green-600'
                    : 'text-gray-500'
                }`}
              >
                {getStatusIcon(module.slug)}
                <span className="text-sm">
                  Module {module.order}
                </span>
                {index < modules.length - 1 && (
                  <div className="w-8 h-px bg-gray-300 ml-4" />
                )}
              </Link>
            ))}
          </div>
          
          {currentSlug && (
            <div className="flex items-center space-x-2 ml-4">
              {(() => {
                const currentModule = modules.find(m => m.slug === currentSlug);
                return currentModule ? getStatusBadge(currentModule.status) : null;
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
