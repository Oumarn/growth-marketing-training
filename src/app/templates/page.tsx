import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Download, FileText, Table, Wrench, Bot, Gift, Star } from 'lucide-react';
import Link from 'next/link';
import downloadsNewData from '@/data/downloads-new.json';

export default function TemplatesPage() {
  // Get all downloads organized by category
  const allDownloads = downloadsNewData.downloads;
  const categories = downloadsNewData.categories;

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'slides': return <FileText className="h-5 w-5" />;
      case 'templates': return <Table className="h-5 w-5" />;
      case 'outils': return <Wrench className="h-5 w-5" />;
      case 'workflows': return <Bot className="h-5 w-5" />;
      case 'bonus': return <Gift className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📝 Templates & Ressources
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Une collection complète de templates, outils et ressources prêts à l'emploi pour maîtriser le Growth Marketing. 
            Plus de 50 fichiers organisés par catégorie et module.
          </p>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Templates</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-600">7</div>
              <div className="text-sm text-gray-600">Modules</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-purple-600">15+</div>
              <div className="text-sm text-gray-600">Workflows</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-orange-600">5</div>
              <div className="text-sm text-gray-600">Catégories</div>
            </div>
          </div>
        </div>

        {/* Quick tip */}
        <Alert className="mb-8 max-w-4xl mx-auto">
          <Lightbulb className="h-4 w-4" />
          <AlertDescription>
            <strong>Astuce :</strong> Tous les templates sont optimisés pour l'impression A4 et compatibles 
            avec Excel, Google Sheets, Miro, Figma et autres outils collaboratifs.
          </AlertDescription>
        </Alert>

        {/* Featured pack */}
        {allDownloads.filter(item => item.featured).map(item => (
          <Card key={item.id} className="mb-12 max-w-4xl mx-auto border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-yellow-500 fill-current" />
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Recommandé</Badge>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">{item.size}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                    <span className="text-sm text-gray-500">({item.downloads} téléchargements)</span>
                  </div>
                </div>
              </div>
              <CardDescription className="text-base">{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {item.modules.map(module => (
                    <Badge key={module} variant="outline" className="text-xs">
                      Module {module}
                    </Badge>
                  ))}
                </div>
                <Button asChild>
                  <a href={item.url} download>
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger tout
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map(category => {
            const categoryDownloads = allDownloads.filter(item => 
              item.category === category.id && !item.featured
            );
            
            return (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    {getCategoryIcon(category.id)}
                    <span>{category.name}</span>
                    <Badge variant="secondary">{categoryDownloads.length}</Badge>
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categoryDownloads.slice(0, 3).map(item => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium text-sm">{item.title}</div>
                          <div className="text-xs text-gray-500">{item.format} • {item.size}</div>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <a href={item.url} download>
                            <Download className="h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    ))}
                    {categoryDownloads.length > 3 && (
                      <div className="text-center pt-2">
                        <Button variant="ghost" size="sm">
                          Voir {categoryDownloads.length - 3} autres ressources
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* Pack de données SaaS */}
        <Card className="mt-16 border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-3xl text-indigo-900 text-center">🎒 Pack de Données SaaS</CardTitle>
            <CardDescription className="text-lg text-indigo-700 text-center max-w-3xl mx-auto">
              Dataset synthétique complet pour l'atelier <strong>Buyer Persona Workshop</strong>. 
              Cas pratique : MeetingFlow (startup SaaS de scheduling).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="border-indigo-100">
                <CardHeader className="text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <CardTitle className="text-lg">Données CSV</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full justify-start text-xs bg-blue-50 hover:bg-blue-100" asChild>
                    <a href="/downloads/saas_case_pack/product_funnel.csv" download>
                      📈 Product Funnel
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start text-xs bg-green-50 hover:bg-green-100" asChild>
                    <a href="/downloads/saas_case_pack/analytics_traffic.csv" download>
                      🌐 Analytics Traffic
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start text-xs bg-purple-50 hover:bg-purple-100" asChild>
                    <a href="/downloads/saas_case_pack/crm_accounts.csv" download>
                      💼 CRM Accounts
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start text-xs bg-orange-50 hover:bg-orange-100" asChild>
                    <a href="/downloads/saas_case_pack/support_tickets.csv" download>
                      🎧 Support Tickets
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-indigo-100">
                <CardHeader className="text-center">
                  <div className="text-2xl mb-2">📝</div>
                  <CardTitle className="text-lg">Templates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full justify-start text-xs" asChild>
                    <a href="/downloads/saas_case_pack/interview_guide.md" download>
                      📋 Interview Guide
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start text-xs" asChild>
                    <a href="/downloads/saas_case_pack/inapp_survey.md" download>
                      📊 Survey Template
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start text-xs" asChild>
                    <a href="/downloads/saas_case_pack/buyer_persona_template.md" download>
                      📋 Persona Canvas
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-indigo-100">
                <CardHeader className="text-center">
                  <div className="text-2xl mb-2">📖</div>
                  <CardTitle className="text-lg">Documentation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full justify-start text-xs" asChild>
                    <a href="/downloads/saas_case_pack/README.txt" download>
                      📚 Guide complet
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start text-xs" asChild>
                    <Link href="/workshop/buyer-persona">
                      🛠️ Faire l'atelier
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-indigo-100">
                <CardHeader className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <CardTitle className="text-lg">Objectif</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>• 3 personas détaillés</p>
                    <p>• Messaging matrix</p>
                    <p>• Plan de validation</p>
                    <p>• 45 min d'atelier</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Alert className="bg-indigo-100 border-indigo-200">
              <Lightbulb className="h-4 w-4" />
              <AlertDescription>
                <strong>Comment utiliser ce pack ?</strong> Téléchargez tous les fichiers CSV • 
                Ouvrez-les dans Excel/Google Sheets • Suivez l'atelier Buyer Persona Workshop • 
                Utilisez les templates d'interview et de survey pour valider vos personas
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        
        {/* Module mapping */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-2xl">📚 Ressources par Module</CardTitle>
            <CardDescription>
              Découvrez quelles ressources utiliser pour chaque module de la formation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  module: "Module 1",
                  title: "Stratégie Growth",
                  color: "blue",
                  resources: ["Growth Canvas", "OKRs Template", "Roadmap"]
                },
                {
                  module: "Module 2", 
                  title: "Funnel AAARRR",
                  color: "green",
                  resources: ["Buyer Persona Canvas", "Funnel Canvas", "Metrics Dashboard"]
                },
                {
                  module: "Module 3",
                  title: "Analytics & Data",
                  color: "purple", 
                  resources: ["GA4 Setup", "Dashboard Templates", "KPI Calculator"]
                },
                {
                  module: "Module 4",
                  title: "KPIs & Dashboards",
                  color: "orange",
                  resources: ["KPI Dashboard Pack", "Executive Dashboard", "Metrics Glossary"]
                },
                {
                  module: "Module 5",
                  title: "Expérimentation",
                  color: "red",
                  resources: ["Experiment Pack", "A/B Test Calculator", "Statistics Guide"]
                },
                {
                  module: "Module 6",
                  title: "Automatisation",
                  color: "indigo",
                  resources: ["Automation Templates", "n8n Workflows", "Integration Guide"]
                }
              ].map((item, index) => (
                <div key={index} className={`border-l-4 border-${item.color}-500 pl-4 bg-${item.color}-50 p-4 rounded-r-lg`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.module} - {item.title}</h3>
                  <div className="space-y-2">
                    {item.resources.map((resource, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-2 mb-1">
                        {resource}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Usage tips and tools */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5" />
                <span>Conseils d'utilisation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-600 space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500">•</span>
                  <span><strong>Personnalisez</strong> les templates selon votre secteur d'activité</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">•</span>
                  <span><strong>Travaillez en équipe</strong> pour enrichir les réflexions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500">•</span>
                  <span><strong>Itérez régulièrement</strong> sur vos personas et funnel</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-500">•</span>
                  <span><strong>Documentez vos expériences</strong> pour capitaliser les apprentissages</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wrench className="h-5 w-5" />
                <span>Outils recommandés</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Miro/Mural", desc: "Collaboration visuelle en équipe", color: "blue" },
                  { name: "Figma", desc: "Édition collaborative des templates", color: "purple" },
                  { name: "Google Slides", desc: "Présentations et ateliers", color: "green" },
                  { name: "n8n", desc: "Automatisation des workflows", color: "orange" }
                ].map((tool, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{tool.name}</div>
                      <div className="text-xs text-gray-500">{tool.desc}</div>
                    </div>
                    <Badge variant="outline" className={`bg-${tool.color}-50 text-${tool.color}-700`}>
                      Recommandé
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Call to action */}
        <Card className="mt-12 text-center bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl">🎯 Passez à l'action !</CardTitle>
            <CardDescription className="text-lg">
              Téléchargez vos templates et commencez à structurer votre approche Growth Marketing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/ateliers">
                  <Wrench className="mr-2 h-4 w-4" />
                  Voir les ateliers guidés
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/download">
                  <Download className="mr-2 h-4 w-4" />
                  Tout télécharger
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
