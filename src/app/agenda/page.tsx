'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { CheckCircle, Circle, Clock, ArrowRight, Star, Zap } from 'lucide-react';
import { getModulesByDay, getModuleBySlug } from '@/lib/modules';
import { useProgress } from '@/contexts/ProgressContext';
import agendaData from '@/data/agenda.json';
import { AgendaItem } from '@/types';

const typeConfig = {
  theory: { label: 'Théorie', color: 'bg-blue-100 text-blue-700' },
  workshop: { label: 'Atelier', color: 'bg-green-100 text-green-700' },
  wrapup: { label: 'Restitution', color: 'bg-purple-100 text-purple-700' }
};

function StatusBadge({ status }: { status: string }) {
  const badges = {
    unchanged: null,
    updated: (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
        <Zap className="w-3 h-3 mr-1" />
        Mis à jour
      </span>
    ),
    nouveau: (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
        <Star className="w-3 h-3 mr-1" />
        Nouveau
      </span>
    )
  };
  
  return badges[status as keyof typeof badges];
}

export default function AgendaPage() {
  const { isModuleComplete } = useProgress();

  const renderAgendaCard = (item: AgendaItem, dayNumber: number) => {
    const module = item.module ? getModuleBySlug(item.module) : null;
    const typeInfo = typeConfig[item.type];
    
    return (
      <Card key={`${item.start}-${item.title}`} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.start} - {item.end}
                </div>
                <Badge className={typeInfo.color}>
                  {typeInfo.label}
                </Badge>
                {module && <StatusBadge status={module.status} />}
              </div>
              <div className="flex items-center gap-2 mb-1">
                {module && isModuleComplete(module.slug) ? (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : module ? (
                  <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                ) : null}
                <CardTitle className="text-lg leading-tight">
                  {item.title}
                </CardTitle>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-gray-600 mb-4 leading-relaxed">
            {item.description}
          </p>
          
          {module && module.ateliers && module.ateliers.length > 0 && (
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
          
          {module ? (
            <Link href={`/${module.slug}`}>
              <Button className="w-full group">
                {isModuleComplete(module.slug) ? 'Revoir le module' : 'Accéder au module'}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          ) : (
            <div className="text-center py-2 text-gray-500 text-sm">
              Session de clôture
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📅 Agenda de la formation
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Programme détaillé sur 2 jours (14h) : fondamentaux du Growth Marketing, 
            automatisation no-code et IA appliquée aux canaux digitaux.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/modules">
              <Button size="lg">
                Voir les modules
              </Button>
            </Link>
            <Link href="/download">
              <Button size="lg" variant="outline">
                Télécharger le programme
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Day 1 Modules */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold mr-4">
              Jour 1
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Fondamentaux & Cadre Méthodologique
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {(agendaData.jour1 as AgendaItem[]).map((item) => renderAgendaCard(item, 1))}
          </div>
          
          <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg text-center">
            <p className="text-sm text-orange-700 font-medium">
              🍴 Pause déjeuner : 12h30 - 13h30
            </p>
          </div>
        </div>

        {/* Day 2 Modules */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold mr-4">
              Jour 2
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Automatisation & IA appliquée
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {(agendaData.jour2 as AgendaItem[]).map((item) => renderAgendaCard(item, 2))}
          </div>
          
          <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg text-center">
            <p className="text-sm text-orange-700 font-medium">
              🍴 Pause déjeuner : 12h30 - 13h30
            </p>
          </div>
        </div>
        
        {/* Informations pratiques */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">ℹ️ Informations pratiques</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">⏰ Horaires</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Début : 09h00</li>
                <li>Pause déjeuner : 12h30-13h30</li>
                <li>Fin : 17h00</li>
                <li>Pauses café incluses</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Méthodologie</h3>
              <ul className="text-gray-600 space-y-1">
                <li>40% théorie</li>
                <li>60% pratique</li>
                <li>Ateliers en groupe</li>
                <li>Études de cas réels</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📋 Supports</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Slides de présentation</li>
                <li>Templates d'exercices</li>
                <li>Workflows n8n</li>
                <li>Accès ressources en ligne</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
