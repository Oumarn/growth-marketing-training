import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Growth Marketing</h3>
            <p className="text-gray-600 text-sm">
              Formation complète de 2 jours (14h) pour maîtriser les fondamentaux du Growth Marketing 
              et l'automatisation avec l'IA.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/agenda" className="text-gray-600 hover:text-gray-900">Agenda</Link></li>
              <li><Link href="/modules" className="text-gray-600 hover:text-gray-900">Modules</Link></li>
              <li><Link href="/ateliers" className="text-gray-600 hover:text-gray-900">Ateliers</Link></li>
              <li><Link href="/templates" className="text-gray-600 hover:text-gray-900">Templates</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/download" className="text-gray-600 hover:text-gray-900">Téléchargements</Link></li>
              <li><Link href="/modules/7-ai-par-canal" className="text-gray-600 hover:text-gray-900">IA & Automatisation</Link></li>
              <li><Link href="/modules/6-no-code" className="text-gray-600 hover:text-gray-900">Outils No-Code</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Growth Marketing Training. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
