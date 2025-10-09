import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

interface DownloadCTAProps {
  showOnModules?: string[];
}

export default function DownloadCTA({ showOnModules = ['3', '6', '7'] }: DownloadCTAProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 border-t shadow-lg rounded-lg mt-8">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-white font-semibold text-sm sm:text-base">
              🎁 Ne partez pas les mains vides !
            </p>
            <p className="text-blue-100 text-xs sm:text-sm">
              Téléchargez tous les supports, templates et workflows pour continuer à progresser
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="/download">
              <Button className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
                📥 Télécharger toutes les ressources
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
