'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp, BookOpen, Download, Calendar } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (window.pageYOffset > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Ne pas afficher sur certaines pages
  if (pathname === '/download' || pathname === '/templates') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Scroll to top */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="sm"
          className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800 hover:bg-gray-700"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}

      {/* Main floating CTAs */}
      {isVisible && (
        <div className="flex flex-col gap-2 bg-white rounded-lg shadow-lg border p-3 animate-fade-in">
          <div className="text-xs text-gray-600 text-center mb-2 font-medium">
            🚀 Actions rapides
          </div>
          
          <Link href="/modules">
            <Button size="sm" className="w-full text-xs bg-blue-600 hover:bg-blue-700 transition-colors">
              <BookOpen className="w-4 h-4 mr-1" />
              Modules
            </Button>
          </Link>
          
          <Link href="/agenda">
            <Button size="sm" variant="outline" className="w-full text-xs hover:bg-gray-50 transition-colors">
              <Calendar className="w-4 h-4 mr-1" />
              Agenda
            </Button>
          </Link>
          
          <Link href="/download">
            <Button size="sm" variant="outline" className="w-full text-xs hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4 mr-1" />
              Télécharger
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
