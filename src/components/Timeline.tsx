import agendaData from '@/data/agenda.json';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { AgendaItem } from '@/types';

const typeConfig = {
  theory: { label: 'Théorie', color: 'bg-blue-100 text-blue-700' },
  workshop: { label: 'Atelier', color: 'bg-green-100 text-green-700' },
  wrapup: { label: 'Restitution', color: 'bg-purple-100 text-purple-700' }
};

interface TimelineItemProps extends AgendaItem {}

function TimelineItem({ start, end, title, type, module, description }: TimelineItemProps) {
  const typeInfo = typeConfig[type];
  
  return (
    <div className="flex items-start space-x-4 p-4 border rounded-lg bg-white hover:bg-gray-50 transition-colors">
      <div className="flex-shrink-0 text-center">
        <div className="text-sm font-medium text-gray-900">{start}</div>
        <div className="text-xs text-gray-500">{end}</div>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          {module ? (
            <Link href={`/modules/${module}`} className="text-lg font-semibold text-gray-900 hover:text-blue-600">
              {title}
            </Link>
          ) : (
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          )}
          <Badge className={typeInfo.color}>
            {typeInfo.label}
          </Badge>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Jour 1 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Jour 1 - Fondamentaux & Cadre Méthodologique
          </h2>
          <div className="space-y-4">
            {(agendaData.jour1 as AgendaItem[]).map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
          <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg text-center">
            <p className="text-sm text-orange-700 font-medium">
              🍴 Pause déjeuner : 12h30 - 13h30
            </p>
          </div>
        </div>
        
        {/* Jour 2 */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Jour 2 - Automatisation & IA appliquée
          </h2>
          <div className="space-y-4">
            {(agendaData.jour2 as AgendaItem[]).map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
          <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg text-center">
            <p className="text-sm text-orange-700 font-medium">
              🍴 Pause déjeuner : 12h30 - 13h30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
