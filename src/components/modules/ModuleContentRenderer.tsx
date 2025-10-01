import React from 'react';
import { Module } from '@/types/modules';

// Import des composants de contenu personnalisés
import Module1Content from '@/components/Module1Content';
import Module2Content from '@/components/Module2Content';
import Module3Content from '@/components/Module3Content';
import Module4Content from '@/components/Module4Content';
import Module5Content from '@/components/Module5Content';
import Module6Content from '@/components/Module6Content';
import Module7Content from '@/components/Module7Content';

interface ModuleContentRendererProps {
  module: Module;
}

const ModuleContentRenderer: React.FC<ModuleContentRendererProps> = ({ module }) => {
  // Rendu des composants personnalisés
  if (module.hasCustomComponent) {
    switch (module.slug) {
      case 'module-1/introduction-growth-marketing':
        return <Module1Content />;
      case 'module-2/framework-aaarrr':
        return <Module2Content />;
      case 'module-3/cas-pratiques-mini-campagne':
        return <Module3Content />;
      case 'module-4/kpis-dashboard':
        return <Module4Content />;
      case 'module-5/experimentation-ab-testing':
        return <Module5Content />;
      case 'module-6/outils-no-code-automation':
        return <Module6Content />;
      case 'module-7/ia-par-canal-marketing':
        return <Module7Content />;
      default:
        return <DefaultModuleContent module={module} />;
    }
  }

  // Rendu du contenu par défaut
  return <DefaultModuleContent module={module} />;
};

// Composant de contenu par défaut pour les modules sans composant personnalisé
const DefaultModuleContent: React.FC<{ module: Module }> = ({ module }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Introduction */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {module.title}
        </h2>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>⏱️ {module.duration}</span>
          <span>📚 Module {module.order}</span>
        </div>
        <p className="text-gray-700 mb-6">
          {module.description}
        </p>

        {/* Objectifs */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Objectifs d'apprentissage</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {module.objectives.map((objective, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span className="text-gray-700">{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu par défaut */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🚧</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Module en cours de préparation
          </h3>
          <p className="text-gray-600 mb-8">
            Ce module sera bientôt disponible avec du contenu interactif et des exercices pratiques.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-blue-800 text-sm font-medium">
              💡 En attendant, vous pouvez consulter les autres modules disponibles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleContentRenderer;
