'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Loader2 } from 'lucide-react';
import { getAllModules } from '@/lib/modules';

interface PDFGeneratorProps {
  moduleSlug?: string;
  className?: string;
}

export default function PDFGenerator({ moduleSlug, className }: PDFGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateSingleModulePDF = async () => {
    if (!moduleSlug) return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/generate-pdf?module=${moduleSlug}`, {
        method: 'GET',
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la génération du PDF');
      }
      
      // Télécharger le PDF
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${moduleSlug}-cours.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setIsGenerating(false);
    }
  };

  const generateCompletePDF = async () => {
    setIsGenerating(true);
    setError(null);
    
    try {
      const modules = getAllModules();
      
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ modules: modules.map(m => m.slug) }),
      });
      
      if (!response.ok) {
        throw new Error('Erreur lors de la génération du PDF complet');
      }
      
      // Télécharger le PDF
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'formation-growth-marketing-complete.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur inconnue');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className={className}>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-3">
        {moduleSlug && (
          <Button
            onClick={generateSingleModulePDF}
            disabled={isGenerating}
            className="flex items-center gap-2"
            variant="outline"
          >
            {isGenerating ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <FileText className="w-4 h-4" />
            )}
            {isGenerating ? 'Génération...' : 'PDF de ce module'}
          </Button>
        )}
        
        <Button
          onClick={generateCompletePDF}
          disabled={isGenerating}
          className="flex items-center gap-2"
        >
          {isGenerating ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          {isGenerating ? 'Génération...' : 'PDF Formation Complète'}
        </Button>
      </div>
      
      <div className="text-xs text-gray-500 mt-2">
        <p>
          💡 Le PDF est optimisé pour l'impression avec une mise en page professionnelle,
          table des matières et pagination automatique.
        </p>
      </div>
    </div>
  );
}
