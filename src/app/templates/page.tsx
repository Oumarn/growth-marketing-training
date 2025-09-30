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
        
        {/* Pack de données SaaS */}
        <div className="mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">🎒 Pack de Données SaaS</h2>
            <p className="text-lg text-indigo-700 max-w-3xl mx-auto">
              Dataset synthétique complet pour l'atelier <strong>Buyer Persona Workshop</strong>. 
              Cas pratique : MeetingFlow (startup SaaS de scheduling).
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100">
              <div className="text-center mb-3">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-semibold text-gray-800">Données CSV</h3>
              </div>
              <div className="space-y-2">
                <a 
                  href="/downloads/saas_case_pack/product_funnel.csv" 
                  download
                  className="block text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded hover:bg-blue-200 transition-colors"
                >
                  📈 Product Funnel
                </a>
                <a 
                  href="/downloads/saas_case_pack/analytics_traffic.csv" 
                  download
                  className="block text-xs bg-green-100 text-green-800 py-1 px-2 rounded hover:bg-green-200 transition-colors"
                >
                  🌐 Analytics Traffic  
                </a>
                <a 
                  href="/downloads/saas_case_pack/crm_accounts.csv" 
                  download
                  className="block text-xs bg-purple-100 text-purple-800 py-1 px-2 rounded hover:bg-purple-200 transition-colors"
                >
                  💼 CRM Accounts
                </a>
                <a 
                  href="/downloads/saas_case_pack/support_tickets.csv" 
                  download
                  className="block text-xs bg-orange-100 text-orange-800 py-1 px-2 rounded hover:bg-orange-200 transition-colors"
                >
                  🎧 Support Tickets
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100">
              <div className="text-center mb-3">
                <div className="text-2xl mb-2">📝</div>
                <h3 className="font-semibold text-gray-800">Templates</h3>
              </div>
              <div className="space-y-2">
                <a 
                  href="/downloads/saas_case_pack/interview_guide.md" 
                  download
                  className="block text-xs bg-indigo-100 text-indigo-800 py-1 px-2 rounded hover:bg-indigo-200 transition-colors"
                >
                  📋 Interview Guide
                </a>
                <a 
                  href="/downloads/saas_case_pack/inapp_survey.md" 
                  download
                  className="block text-xs bg-pink-100 text-pink-800 py-1 px-2 rounded hover:bg-pink-200 transition-colors"
                >
                  📊 Survey Template
                </a>
                <a 
                  href="/downloads/saas_case_pack/buyer_persona_template.md" 
                  download
                  className="block text-xs bg-teal-100 text-teal-800 py-1 px-2 rounded hover:bg-teal-200 transition-colors"
                >
                  📋 Persona Canvas
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100">
              <div className="text-center mb-3">
                <div className="text-2xl mb-2">📖</div>
                <h3 className="font-semibold text-gray-800">Documentation</h3>
              </div>
              <div className="space-y-2">
                <a 
                  href="/downloads/saas_case_pack/README.txt" 
                  download
                  className="block text-xs bg-gray-100 text-gray-800 py-1 px-2 rounded hover:bg-gray-200 transition-colors"
                >
                  📚 Guide complet
                </a>
                <Link
                  href="/workshop/buyer-persona"
                  className="block text-xs bg-yellow-100 text-yellow-800 py-1 px-2 rounded hover:bg-yellow-200 transition-colors"
                >
                  🛠️ Faire l'atelier
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100">
              <div className="text-center mb-3">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-800">Objectif</h3>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                <p>• 3 personas détaillés</p>
                <p>• Messaging matrix</p>
                <p>• Plan de validation</p>
                <p>• 45 min d'atelier</p>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-100 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">💡</div>
              <div>
                <h4 className="font-semibold text-indigo-900 mb-1">Comment utiliser ce pack ?</h4>
                <p className="text-sm text-indigo-800 leading-relaxed">
                  <strong>1.</strong> Téléchargez tous les fichiers CSV • 
                  <strong>2.</strong> Ouvrez-les dans Excel/Google Sheets • 
                  <strong>3.</strong> Suivez l'atelier Buyer Persona Workshop • 
                  <strong>4.</strong> Utilisez les templates d'interview et de survey pour valider vos personas
                </p>
              </div>
            </div>
          </div>
        </div>
        
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
