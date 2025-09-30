import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  duration: string;
  status: 'unchanged' | 'updated' | 'new';
  slug: string;
  objectives?: string[];
}

const statusConfig = {
  unchanged: { label: 'Inchangé', color: 'bg-gray-100 text-gray-700' },
  updated: { label: 'Mis à jour', color: 'bg-blue-100 text-blue-700' },
  new: { label: 'Nouveau', color: 'bg-green-100 text-green-700' }
};

export default function ModuleCard({ title, description, duration, status, slug, objectives }: ModuleCardProps) {
  const statusInfo = statusConfig[status];
  
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge className={statusInfo.color}>
            {statusInfo.label}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="w-4 h-4 mr-1" />
          {duration}
        </div>
        
        {objectives && objectives.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Objectifs :</p>
            <ul className="text-sm text-gray-600 space-y-1">
              {objectives.slice(0, 2).map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  {objective}
                </li>
              ))}
              {objectives.length > 2 && (
                <li className="text-gray-400 text-xs">+{objectives.length - 2} autres objectifs</li>
              )}
            </ul>
          </div>
        )}
        
        <Link href={`/modules/${slug}`}>
          <Button className="w-full">
            Voir le module
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
