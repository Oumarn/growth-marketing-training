'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink, FileText, Archive, Code } from 'lucide-react';
import { Resource } from '@/types';

interface ResourceListProps {
  resources: Resource[];
}

const typeConfig = {
  pdf: { icon: FileText, color: 'bg-red-100 text-red-700' },
  zip: { icon: Archive, color: 'bg-blue-100 text-blue-700' },
  json: { icon: Code, color: 'bg-green-100 text-green-700' },
  external: { icon: ExternalLink, color: 'bg-purple-100 text-purple-700' }
};

export default function ResourceList({ resources }: ResourceListProps) {
  const handleDownload = (resource: Resource) => {
    if (resource.type === 'external') {
      window.open(resource.path, '_blank');
    } else {
      // Simulate download - in real app, this would trigger actual file download
      const link = document.createElement('a');
      link.href = resource.path;
      link.download = resource.label;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource, index) => {
        const typeInfo = typeConfig[resource.type];
        const Icon = typeInfo.icon;
        
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <Icon className="w-5 h-5 text-gray-600" />
                  <CardTitle className="text-lg">{resource.label}</CardTitle>
                </div>
                <Badge className={typeInfo.color}>
                  {resource.type.toUpperCase()}
                </Badge>
              </div>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <Button 
                onClick={() => handleDownload(resource)}
                className="w-full"
                variant={resource.type === 'external' ? 'outline' : 'default'}
              >
                {resource.type === 'external' ? (
                  <>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ouvrir
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
