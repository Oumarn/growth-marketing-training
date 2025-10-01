import { getAllModules, getModuleBySlug } from '@/lib/modules';
import Module1Content from '@/components/Module1Content';
import Module2Content from '@/components/Module2Content';
import Module3Content from '@/components/Module3Content';
import Module4Content from '@/components/Module4Content';
import Module5Content from '@/components/Module5Content';
import Module6Content from '@/components/Module6Content';
import Module7Content from '@/components/Module7Content';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

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

interface PrintPageProps {
  searchParams: Promise<{ 
    module?: string;
    all?: string;
  }>;
}

export default async function PrintPage({ searchParams }: PrintPageProps) {
  const { module: moduleSlug, all } = await searchParams;
  
  // Si un module spécifique est demandé
  if (moduleSlug && !all) {
    const module = getModuleBySlug(moduleSlug);
    if (!module) return notFound();
    
    const ModuleComponent = moduleComponents[moduleSlug as keyof typeof moduleComponents];
    if (!ModuleComponent) return notFound();
    
    return (
      <div className="print-container print-single-module">
        <div className="avoid-break">
          <h1 className="print-module-title">{module.title}</h1>
          <div className="print-module-info">
            <p><strong>Durée:</strong> {module.duration}</p>
            <p><strong>Objectifs:</strong> {module.description}</p>
          </div>
        </div>
        <ModuleComponent />
      </div>
    );
  }
  
  // Sinon, générer le PDF complet
  const modules = getAllModules();

  return (
    <div className="print-container print-full-document">
      
      {/* Page de couverture */}
      <div className="avoid-break print-cover">
        <div className="text-center">
          <img 
            src="/logos/fastlearn_logo_primary_v3.png" 
            alt="FastLearn" 
            className="mx-auto h-16 w-auto mb-6"
          />
          <h1 className="text-6xl font-bold mb-4 text-gray-900">
            Growth Marketing
          </h1>
          <h2 className="text-4xl font-semibold mb-8 text-blue-600">
            Formation Master - Cours Complet
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            7 Modules - 14h de formation pratique
          </p>
          <p className="text-lg text-gray-500">
            Version PDF générée le {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
      
      {/* Table des matières */}
      <div className="print-page-break">
        <h1 className="print-toc-title">Table des Matières</h1>
        <div className="print-toc">
          {modules.map((module, index) => (
            <div key={module.slug} className="print-toc-item">
              <div className="print-toc-number">Module {index + 1}</div>
              <div className="print-toc-content">
                <h3 className="print-toc-module-title">{module.title}</h3>
                <p className="print-toc-description">{module.description}</p>
                <div className="print-toc-meta">
                  <span>Durée: {module.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contenu des modules */}
      {modules.map((module, index) => {
        const ModuleComponent = moduleComponents[module.slug as keyof typeof moduleComponents];
        if (!ModuleComponent) return null;
        
        return (
          <div key={module.slug} className="print-page-break">
            <div className="avoid-break print-module-header">
              <div className="print-module-number">Module {index + 1}</div>
              <h1 className="print-module-title">{module.title}</h1>
              <div className="print-module-info">
                <p><strong>Durée:</strong> {module.duration}</p>
                <p><strong>Objectifs:</strong> {module.description}</p>
              </div>
            </div>
            <div className="print-module-content">
              <ModuleComponent />
            </div>
          </div>
        );
      })}
      
      {/* Page de fin */}
      <div className="print-page-break">
        <div className="text-center print-back-cover">
          <img 
            src="/logos/fastlearn_logo_primary_v3.png" 
            alt="FastLearn" 
            className="mx-auto h-12 w-auto mb-6"
          />
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            🎓 Félicitations !
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Vous maîtrisez maintenant le Growth Marketing avec l'IA et l'automatisation.
          </p>
          <div className="print-next-steps">
            <h3 className="text-2xl font-bold mb-4">🚀 Prochaines Étapes</h3>
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-semibold mb-2">📊 Mise en Application</h4>
                <ul className="text-sm space-y-1">
                  <li>• Utilisez les templates fournis</li>
                  <li>• Configurez vos dashboards KPIs</li>
                  <li>• Lancez vos premières expérimentations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔄 Amélioration Continue</h4>
                <ul className="text-sm space-y-1">
                  <li>• Mesurez et analysez vos résultats</li>
                  <li>• Itérez sur vos campagnes</li>
                  <li>• Explorez de nouveaux canaux</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


