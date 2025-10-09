'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/logos/fastlearn_logo_primary_v3.png"
                alt="FastLearn"
                width={160}
                height={40}
                className="h-6 sm:h-8 w-auto transition-transform group-hover:scale-105"
                priority
              />
            </Link>
            <div className="hidden sm:block">
              <span className="text-xs font-medium text-gray-600 block">Growth Marketing</span>
              <span className="text-xs text-gray-500">Formation Master</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {/* Core Navigation */}
            <div className="flex items-center space-x-6">
              <Link href="/modules" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                📚 Formation
              </Link>
              <Link href="/ateliers" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                🎯 Ateliers
              </Link>
              <Link href="/agenda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                📅 Planning
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                👨‍🏫 Formateur
              </Link>
            </div>
            
            {/* CTA Button */}
            <Link href="/download" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-200" size="sm">
                📥 Ressources
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {/* Core Navigation */}
              <div className="space-y-1 mb-4">
                <Link 
                  href="/modules" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  📚 Formation complète
                </Link>
                <Link 
                  href="/ateliers" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  🎯 Ateliers pratiques
                </Link>
                <Link 
                  href="/agenda" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  📅 Planning des sessions
                </Link>
                <Link 
                  href="/about" 
                  className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  👨‍🏫 Votre formateur
                </Link>
              </div>
              
              {/* CTA Button */}
              <div className="pt-2 border-t">
                <Link 
                  href="/download" 
                  className="block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium">
                    📥 Télécharger les ressources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
