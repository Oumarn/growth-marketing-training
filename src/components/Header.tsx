'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import PDFDownloadButton from './PDFDownloadButton';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
                className="h-6 sm:h-8 w-auto"
                priority
              />
            </Link>
            <span className="text-xs sm:text-sm text-gray-500 hidden sm:block">Growth Marketing Formation</span>
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
            <PDFDownloadButton />
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
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-2 space-y-1">
              <Link 
                href="/agenda" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agenda
              </Link>
              <Link 
                href="/modules" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Modules
              </Link>
              <Link 
                href="/ateliers" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ateliers
              </Link>
              <Link 
                href="/templates" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Templates
              </Link>
              <Link 
                href="/download" 
                className="block px-3 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button variant="outline" size="sm" className="w-full">
                  Télécharger
                </Button>
              </Link>
              <div className="block px-3 py-2">
                <PDFDownloadButton className="w-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
