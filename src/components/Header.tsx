import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logos/fastlearn_logo_primary_v3.png"
                alt="FastLearn"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <span className="text-sm text-gray-500 hidden sm:block">Growth Marketing Formation</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link href="/agenda" className="text-gray-600 hover:text-gray-900 transition-colors">
              Agenda
            </Link>
            <Link href="/modules" className="text-gray-600 hover:text-gray-900 transition-colors">
              Modules
            </Link>
            <Link href="/ateliers" className="text-gray-600 hover:text-gray-900 transition-colors">
              Ateliers
            </Link>
            <Link href="/templates" className="text-gray-600 hover:text-gray-900 transition-colors">
              Templates
            </Link>
            <Link href="/download" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Button variant="outline" size="sm">
                Télécharger
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
