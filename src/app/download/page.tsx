import ResourceList from '@/components/ResourceList';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Info, Star, Users } from 'lucide-react';
import { Resource } from '@/types';
import downloadsData from '@/data/downloads-new.json';

export default function DownloadPage() {
  const featuredDownload = downloadsData.downloads.find(item => item.featured);
  const categories = downloadsData.categories;
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📥 Ressources Growth Marketing
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Téléchargez tous les supports du cours : slides, templates Excel, workflows d'automatisation, 
            prompts IA et ressources bonus pour maîtriser le Growth Marketing.
          </p>
        </div>

        {/* Featured Download */}
        {featuredDownload && (
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">{featuredDownload.title}</CardTitle>
                <p className="text-blue-100 text-lg">{featuredDownload.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-center items-center gap-6 mb-6">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{featuredDownload.downloads} téléchargements</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-orange-400" />
                    <span>{featuredDownload.rating}/5</span>
                  </div>
                  <div className="text-sm">
                    {featuredDownload.size}
                  </div>
                </div>
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger le Pack Complet
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Resources by Category */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categoryDownloads = downloadsData.downloads.filter(
              item => item.category === category.id && !item.featured
            );
            
            if (categoryDownloads.length === 0) return null;
            
            return (
              <div key={category.id}>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryDownloads.map((download) => (
                    <Card key={download.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{download.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Badge variant="outline">{download.format}</Badge>
                          <span>{download.size}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm mb-4">{download.description}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{download.downloads}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Star className="w-4 h-4 mr-1 text-yellow-500" />
                            <span>{download.rating}</span>
                          </div>
                        </div>
                        
                        <Button className="w-full" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Info alert */}
        <Alert className="mt-12 max-w-4xl mx-auto">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Note :</strong> Ces ressources sont des templates de démonstration. 
            Dans une formation réelle, tous les liens seraient fonctionnels et mèneraient aux véritables supports pédagogiques.
          </AlertDescription>
        </Alert>
        
        {/* Additional info */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Guide d'utilisation des ressources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">� Templates Excel/Sheets</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• <strong>Diagnostic AAARRR</strong> : Analysez votre funnel étape par étape</li>
                <li>• <strong>ROI Calculator</strong> : Calculez CAC, LTV et ROI par canal</li>
                <li>• <strong>A/B Test Analyzer</strong> : Validez la signification statistique</li>
                <li>• Compatible Google Sheets et Excel</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 Workflows d'Automatisation</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• <strong>Zapier/Make</strong> : 15 workflows prêts à importer</li>
                <li>• <strong>n8n Open Source</strong> : Starter pack complet</li>
                <li>• <strong>Email Sequences</strong> : 10 campagnes types</li>
                <li>• Documentation d'installation incluse</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">🎯 Utilisation recommandée</h4>
            <p className="text-blue-800 text-sm">
              Commencez par le Diagnostic AAARRR lors du Module 2, utilisez l'Experiment Canvas pour le Module 5, 
              puis progressez vers les workflows d'automatisation lors des Modules 6 et 7. 
              Gardez les prompts IA comme référence permanente pour optimiser vos contenus.
            </p>
          </div>
        </div>
        
        {/* Support section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🙋‍♀️ Besoin d'aide ?</h2>
          <p className="text-gray-600 mb-6">
            Des questions sur l'utilisation des templates ou des workflows ? 
          </p>
          <div className="space-x-4">
            <Button variant="outline">
              💬 Support pédagogique
            </Button>
            <Button variant="outline">
              📧 Contact formateur
            </Button>
          </div>
        </div>
        
        {/* Support section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🙋‍♀️ Besoin d'aide ?</h2>
          <p className="text-gray-600 mb-6">
            Des questions sur l'utilisation des templates ou des workflows ? 
          </p>
          <div className="space-x-4">
            <Button variant="outline">
              💬 Support pédagogique
            </Button>
            <Button variant="outline">
              📧 Contact formateur
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
