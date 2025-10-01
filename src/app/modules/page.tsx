'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { CheckCircle, Circle, Clock, ArrowRight, Star, Zap } from 'lucide-react';
import { getModulesByDay } from '@/lib/modules';
import { useProgress } from '@/contexts/ProgressContext';
import ResumeBanner from '@/components/ResumeBanner';

function StatusBadge({ status }: { status: string }) {
  const badges = {
    unchanged: null,
    updated: (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
        <Zap className="w-3 h-3 mr-1" />
        Mis à jour
      </span>
    ),
    new: (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
        <Star className="w-3 h-3 mr-1" />
        Nouveau
      </span>
    )
  };
  
  return badges[status as keyof typeof badges];
}


export default function ModulesPage() {
  const { isModuleComplete } = useProgress();
  const modulesByDay = getModulesByDay();
  const day1Modules = modulesByDay[1];
  const day2Modules = modulesByDay[2];

  const renderModuleCard = (module: any) => (
    <Card key={module.slug} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {isModuleComplete(module.slug) ? (
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
              )}
              <span className="text-sm font-medium text-gray-500">
                Module {module.order}
              </span>
              <StatusBadge status={module.status} />
            </div>
            <CardTitle className="text-lg leading-tight">
              {module.title}
            </CardTitle>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-1" />
          {module.duration}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-600 mb-4 leading-relaxed">
          {module.description}
        </p>
        
        {module.ateliers && module.ateliers.length > 0 && (
          <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-sm font-medium text-purple-700 mb-1">
              🎯 Ateliers inclus :
            </div>
            {module.ateliers.map((atelier: any, index: number) => (
              <div key={atelier.slug} className="text-sm text-purple-600">
                • {atelier.title} ({atelier.duration})
              </div>
            ))}
          </div>
        )}
        
        <Link href={`/${module.slug}`}>
          <Button className="w-full group">
            {isModuleComplete(module.slug) ? 'Revoir le module' : 'Commencer le module'}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <ResumeBanner />
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Formation Growth Marketing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Parcours complet de 7 modules pour maîtriser le Growth Marketing, 
            de la théorie à la pratique avec des ateliers hands-on.
          </p>
        </div>

        {/* Day 1 Modules */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold mr-4">
              Jour 1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Fondamentaux & Stratégie
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {day1Modules.map(renderModuleCard)}
          </div>
        </div>

        {/* Day 2 Modules */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold mr-4">
              Jour 2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Expérimentation & Automation
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {day2Modules.map(renderModuleCard)}
          </div>
        </div>

        {/* Action Section */}
        <div className="text-center bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à commencer votre transformation Growth ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Suivez les modules dans l'ordre pour une progression optimale. 
            Chaque module inclut des exercices pratiques et des ressources téléchargeables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/module-1/introduction-growth-marketing">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                🚀 Commencer par le Module 1
              </Button>
            </Link>
            <Link href="/download">
              <Button size="lg" variant="outline">
                📚 Voir toutes les ressources
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
