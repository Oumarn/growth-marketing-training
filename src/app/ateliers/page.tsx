import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, FileText, Code } from 'lucide-react';

function getAtelierSlug(title: string): string {
  const slugMap: Record<string, string> = {
    "Buyer Persona Canvas": "buyer-persona",
    "Funnel Canvas AAARRR": "funnel-canvas", 
    "Experiment Card": "experiment-card",
    "n8n Workflow Starter": "no-code-starter"
  };
  return slugMap[title] || title.toLowerCase().replace(/\s+/g, '-');
}

const ateliers = [
  {
    title: "Buyer Persona Canvas",
    description: "Créez des personas détaillés pour mieux cibler vos audiences et personnaliser vos messages.",
    duration: "30 min",
    participants: "Individuel ou équipe",
    difficulty: "Débutant",
    module: "Module 2",
    icon: Users,
    color: "bg-blue-50 border-blue-200",
    template: "/assets/templates/buyer-persona.pdf"
  },
  {
    title: "Funnel Canvas AAARRR",
    description: "Cartographiez votre funnel complet et identifiez les points d'amélioration à chaque étape.",
    duration: "45 min", 
    participants: "Équipe recommandée",
    difficulty: "Intermédiaire",
    module: "Module 2",
    icon: FileText,
    color: "bg-green-50 border-green-200",
    template: "/assets/templates/funnel-canvas.pdf"
  },
  {
    title: "Experiment Card",
    description: "Structurez vos expérimentations Growth avec une méthodologie rigoureuse et des KPIs clairs.", 
    duration: "20 min",
    participants: "Individuel",
    difficulty: "Intermédiaire", 
    module: "Module 5",
    icon: FileText,
    color: "bg-purple-50 border-purple-200",
    template: "/assets/templates/experiment-card.pdf"
  },
  {
    title: "n8n Workflow Starter",
    description: "Implémentez vos premiers workflows d'automatisation pour le Growth Marketing avec n8n.",
    duration: "90 min",
    participants: "Technique requis",
    difficulty: "Avancé",
    module: "Module 7", 
    icon: Code,
    color: "bg-orange-50 border-orange-200",
    template: "/assets/templates/n8n-starter.json"
  }
];

const difficultyColors = {
  "Débutant": "bg-green-100 text-green-700",
  "Intermédiaire": "bg-yellow-100 text-yellow-700", 
  "Avancé": "bg-red-100 text-red-700"
};

export default function AteliersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🛠️ Ateliers pratiques
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Des exercices guidés et des templates pour mettre en pratique les concepts 
            du Growth Marketing. Chaque atelier inclut des consignes détaillées et des livrables concrets.
          </p>
        </div>

        {/* Ateliers grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {ateliers.map((atelier, index) => {
            const Icon = atelier.icon;
            
            return (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${atelier.color}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-6 h-6 text-gray-600" />
                      <div>
                        <CardTitle className="text-xl">{atelier.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">{atelier.module}</Badge>
                          <Badge className={difficultyColors[atelier.difficulty as keyof typeof difficultyColors]}>
                            {atelier.difficulty}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-3">{atelier.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {atelier.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {atelier.participants}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link href={`/ateliers/${getAtelierSlug(atelier.title)}`}>
                      <Button className="w-full text-xs sm:text-sm font-medium px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-sm hover:shadow-md transition-all duration-200">
                        Commencer l'atelier
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Télécharger le template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Guide d'utilisation */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Guide d'utilisation des ateliers</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Objectifs pédagogiques</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• <strong>Mettre en pratique</strong> les concepts théoriques</li>
                <li>• <strong>Créer des livrables</strong> utilisables dans votre activité</li>
                <li>• <strong>Développer une méthodologie</strong> structurée</li>
                <li>• <strong>Favoriser la collaboration</strong> en équipe</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semiblement text-gray-900 mb-4">⏰ Planification recommandée</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• <strong>Jour 1 matin</strong> : Buyer Persona + Funnel Canvas</li>
                <li>• <strong>Jour 1 après-midi</strong> : Experiment Card (cas pratiques)</li>
                <li>• <strong>Jour 2 après-midi</strong> : n8n Workflow (IA + automatisation)</li>
                <li>• <strong>Restitution</strong> : Présentation des résultats (16h00)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Conseils d'animation</h4>
            <p className="text-blue-800 text-sm">
              Formez des groupes de 3-4 personnes pour les ateliers collaboratifs. Prévoyez un temps de 
              restitution pour chaque exercice. Les templates peuvent être remplis en digital (Miro, Figma) 
              ou sur papier selon vos préférences.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Prêt à commencer ?</h2>
          <p className="text-gray-600 mb-6">
            Téléchargez tous les templates et lancez votre premier atelier
          </p>
          <div className="space-x-4">
            <Link href="/download">
              <Button size="lg">
                Télécharger tous les templates
              </Button>
            </Link>
            <Link href="/modules">
              <Button size="lg" variant="outline">
                Voir les modules associés
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
