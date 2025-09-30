import ResourceList from '@/components/ResourceList';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { Resource } from '@/types';
import downloadsData from '@/data/downloads.json';

export default function TemplatesPage() {
  // Filtrer pour ne garder que les templates (pas le cours complet ni le ZIP)
  const templates = (downloadsData as Resource[]).filter(item => 
    item.type !== 'zip' && !item.label.includes('Support du cours')
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📝 Templates & Modèles
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Une collection de templates prêts à l'emploi pour structurer votre approche Growth Marketing. 
            Chaque modèle est conçu pour être immédiatement opérationnel.
          </p>
        </div>

        {/* Quick tip */}
        <Alert className="mb-8 max-w-4xl mx-auto">
          <Lightbulb className="h-4 w-4" />
          <AlertDescription>
            <strong>Astuce :</strong> Imprimez les templates PDF en format A4 pour vos ateliers en présentiel, 
            ou utilisez-les en digital avec des outils comme Miro, Figma ou Google Slides.
          </AlertDescription>
        </Alert>

        {/* Templates grid */}
        <ResourceList resources={templates} />
        
        {/* Utilisation par module */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Utilisation par module</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">Module 2 - Funnel AAARRR</h3>
              <p className="text-gray-600 text-sm mb-2">
                Utilisez le <strong>Buyer Persona Canvas</strong> et le <strong>Funnel Canvas</strong> 
                pour cartographier votre audience et votre parcours client.
              </p>
              <div className="flex space-x-3">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Buyer Persona
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Funnel Canvas
                </span>
              </div>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">Module 5 - Expérimentation</h3>
              <p className="text-gray-600 text-sm mb-2">
                L'<strong>Experiment Card</strong> structure vos tests Growth selon le processus GROWS.
              </p>
              <div className="flex space-x-3">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Experiment Card
                </span>
              </div>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900">Module 7 - IA & Automatisation</h3>
              <p className="text-gray-600 text-sm mb-2">
                Les <strong>workflows n8n</strong> et <strong>modèles Canva</strong> pour automatiser 
                vos processus Growth avec l'IA.
              </p>
              <div className="flex space-x-3">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  n8n Workflows
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Modèles Canva
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Conseils d'utilisation */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Conseils d'utilisation</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• <strong>Personnalisez</strong> les templates selon votre secteur d'activité</li>
              <li>• <strong>Travaillez en équipe</strong> pour enrichir les réflexions</li>
              <li>• <strong>Itérez régulièrement</strong> sur vos personas et funnel</li>
              <li>• <strong>Documentez vos expériences</strong> pour capitaliser les apprentissages</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🔧 Outils recommandés</h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• <strong>Miro/Mural</strong> : Collaboration visuelle en équipe</li>
              <li>• <strong>Figma</strong> : Édition collaborative des templates</li>
              <li>• <strong>Google Slides</strong> : Présentations et ateliers</li>
              <li>• <strong>n8n</strong> : Automatisation des workflows</li>
            </ul>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Passez à l'action !</h2>
          <p className="text-gray-600 mb-6">
            Téléchargez vos templates et commencez à structurer votre approche Growth
          </p>
          <div className="space-x-4">
            <Link href="/ateliers">
              <Button size="lg">
                Voir les ateliers guidés
              </Button>
            </Link>
            <Link href="/download">
              <Button size="lg" variant="outline">
                Tout télécharger
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
