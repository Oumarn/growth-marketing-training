import Timeline from '@/components/Timeline';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AgendaPage() {
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
        
        <Timeline />
        
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
