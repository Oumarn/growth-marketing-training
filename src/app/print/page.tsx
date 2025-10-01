import { getAllModules } from '@/lib/modules';
import Module1Content from '@/components/Module1Content';
import Module2Content from '@/components/Module2Content';
import Module3Content from '@/components/Module3Content';
import Module4Content from '@/components/Module4Content';
import Module5Content from '@/components/Module5Content';
import Module6Content from '@/components/Module6Content';
import Module7Content from '@/components/Module7Content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FastLearn - Formation Growth Marketing - Guide Complet PDF',
  description: 'Guide complet de la formation Growth Marketing FastLearn - Version PDF',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const moduleComponents = {
  'module-1/introduction-growth-marketing': Module1Content,
  'module-2/framework-aaarrr': Module2Content,
  'module-3/cas-pratiques-mini-campagne': Module3Content,
  'module-4/kpis-dashboard': Module4Content,
  'module-5/experimentation-ab-testing': Module5Content,
  'module-6/outils-no-code-automation': Module6Content,
  'module-7/ia-par-canal-marketing': Module7Content,
};

export default function PrintPage() {
  const modules = getAllModules();

  return (
    <div className="print-container">
      {/* Cover Page */}
      <div className="print-cover-page">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/logos/fastlearn_logo_primary_v3.png" 
              alt="FastLearn" 
              className="mx-auto h-16 w-auto mb-6"
            />
          </div>
          <h1 className="text-6xl font-bold mb-4 text-gray-900">
            Growth Marketing
          </h1>
          <h2 className="text-4xl font-semibold mb-8 text-blue-600">
            Formation Master
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg max-w-2xl mx-auto mb-8">
            <p className="text-xl mb-4">
              <strong>Formation complète de 2 jours (14h)</strong>
            </p>
            <p className="text-lg">
              Maîtrisez les fondamentaux du Growth Marketing et l'automatisation avec l'IA
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">7</div>
              <div className="text-sm font-medium">Modules</div>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-green-600">14h</div>
              <div className="text-sm font-medium">de Formation</div>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-sm font-medium">Templates</div>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-orange-600">100%</div>
              <div className="text-sm font-medium">Pratique</div>
            </div>
          </div>

          <div className="text-lg text-gray-600 mb-8">
            <p>© 2025 FastLearn - Tous droits réservés</p>
            <p>Version PDF générée le {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="print-page-break">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 border-b-2 border-blue-600 pb-4">
            📚 Table des Matières
          </h1>
          
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={module.slug} className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Module {module.order}: {module.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {module.objectives.slice(0, 3).map((objective, i) => (
                      <span key={i} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {objective}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-gray-500 font-mono">
                  Page {index * 15 + 3}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
            <h3 className="text-xl font-bold mb-4 text-gray-900">🎯 Objectifs de la Formation</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📈 Compétences Techniques</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Maîtrise du framework AAARRR</li>
                  <li>• Configuration de dashboards KPIs</li>
                  <li>• Design et analyse d'expérimentations</li>
                  <li>• Automatisation avec outils no-code</li>
                  <li>• Intégration IA par canal marketing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">🚀 Applications Pratiques</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mini-campagnes opérationnelles</li>
                  <li>• Templates prêts à l'emploi</li>
                  <li>• Workflows d'automatisation</li>
                  <li>• Stratégies multicanaux</li>
                  <li>• Mesure ROI et optimisation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module Contents */}
      {modules.map((module) => {
        const ModuleComponent = moduleComponents[module.slug as keyof typeof moduleComponents];
        
        if (!ModuleComponent) return null;

        return (
          <div key={module.slug} className="print-page-break">
            <div className="mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <span className="text-2xl font-bold">
                      {module.order}
                    </span>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-2">
                      {module.title}
                    </h1>
                    <p className="text-blue-100 text-lg">
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">🎯 Objectifs du Module</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {module.objectives.map((objective, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-sm text-gray-700">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="print-module-content">
                <ModuleComponent />
              </div>
            </div>
          </div>
        );
      })}

      {/* Back Cover */}
      <div className="print-page-break">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/logos/fastlearn_logo_primary_v3.png" 
              alt="FastLearn" 
              className="mx-auto h-12 w-auto mb-6"
            />
          </div>
          
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            🎓 Félicitations !
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Vous avez maintenant tous les outils et connaissances nécessaires pour mettre en œuvre 
            une stratégie Growth Marketing performante avec l'IA et l'automatisation.
          </p>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">🚀 Prochaines Étapes</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-semibold mb-2">📊 Mise en Application</h4>
                <ul className="text-sm space-y-1">
                  <li>• Utilisez les templates fournis</li>
                  <li>• Configurez vos dashboards KPIs</li>
                  <li>• Lancez vos premières expérimentations</li>
                  <li>• Automatisez vos workflows</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔄 Amélioration Continue</h4>
                <ul className="text-sm space-y-1">
                  <li>• Mesurez et analysez vos résultats</li>
                  <li>• Itérez sur vos campagnes</li>
                  <li>• Explorez de nouveaux canaux</li>
                  <li>• Partagez vos apprentissages</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-lg text-gray-600">
            <p className="mb-2">
              <strong>FastLearn - Growth Marketing Formation</strong>
            </p>
            <p className="text-sm">
              Pour plus de ressources et mises à jour, visitez notre plateforme de formation.
            </p>
            <p className="text-sm mt-4">
              © 2025 FastLearn - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
