import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Components
import DownloadCTA from '@/components/DownloadCTA';
import ProgressBar from '@/components/ProgressBar';
import StepperNav from '@/components/StepperNav';
import PrevNextNav from '@/components/PrevNextNav';
import AtelierCallouts from '@/components/AtelierCallouts';
import MarkCompleteButton from '@/components/MarkCompleteButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import ModuleContentRenderer from '@/components/modules/ModuleContentRenderer';

// Data & Types
import { 
  getModuleBySlug, 
  getModuleStatus, 
  getModulesWithDownloadCTA,
  getAllModules
} from '@/lib/modules';

interface ModulePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for build optimization
export async function generateStaticParams() {
  const modules = getAllModules();
  return modules
    .filter(module => module.slug.startsWith('module-6/'))
    .map((module) => ({
      slug: module.slug.split('/')[1], // Extract the part after "module-6/"
    }));
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { slug } = await params;
  const fullSlug = `module-6/${slug}`;
  const module = getModuleBySlug(fullSlug);
  
  if (!module) {
    notFound();
  }
  
  // Get module status info
  const statusInfo = getModuleStatus(module.status);
  
  // Check if module should show download CTA
  const showDownloadCTA = getModulesWithDownloadCTA().includes(fullSlug);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Stepper Navigation */}
      <StepperNav currentSlug={fullSlug} />
      
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={[
            { label: 'Modules', href: '/modules' },
            { label: module.title }
          ]} 
        />
        
        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar />
        </div>

        {/* Module Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <Badge 
              variant="secondary" 
              className={statusInfo.color}
            >
              {statusInfo.label}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {module.duration}
            </div>
            <span>•</span>
            <span>Module {module.order}</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {module.title}
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            {module.description}
          </p>

          {/* Objectives Preview */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">🎯 Ce que vous allez apprendre</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {module.objectives.slice(0, 4).map((objective, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700">{objective}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Module Content */}
        <div className="mb-8">
          <ModuleContentRenderer module={module} />
        </div>

        {/* Mark Complete Button */}
        <div className="mb-8">
          <MarkCompleteButton 
            type="module" 
            slug={fullSlug} 
            title={module.title} 
          />
        </div>

        {/* Ateliers */}
        <AtelierCallouts moduleSlug={fullSlug} />

        {/* Navigation */}
        <PrevNextNav currentSlug={fullSlug} />
      </div>
      
      {/* Download CTA */}
      {showDownloadCTA && <DownloadCTA />}
    </div>
  );
}
