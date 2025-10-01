'use client';

import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function PDFDownloadButton({ className = "" }: { className?: string }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      // Dynamic import to avoid SSR issues
      const [jsPDF, html2canvas] = await Promise.all([
        import('jspdf').then(mod => mod.default),
        import('html2canvas').then(mod => mod.default)
      ]);

      // Open print page in new window for better rendering
      const printWindow = window.open('/print', '_blank');
      
      if (!printWindow) {
        throw new Error('Popup blocked. Please allow popups and try again.');
      }

      // Wait for the window to load
      await new Promise<void>((resolve) => {
        printWindow.onload = () => {
          setTimeout(resolve, 3000); // Give extra time for content to render
        };
      });

      const printDocument = printWindow.document;
      const printContainer = printDocument.querySelector('.print-container');

      if (!printContainer) {
        throw new Error('Print content not found');
      }

      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      // Get all page elements
      const pageElements = printContainer.querySelectorAll('.print-page-break, .print-cover-page');
      
      if (pageElements.length === 0) {
        // Fallback: capture entire container
        const canvas = await html2canvas(printContainer as HTMLElement, {
          useCORS: true,
          allowTaint: true,
          background: '#ffffff',
          width: 794, // A4 width at 96 DPI
          height: 1123 // A4 height at 96 DPI
        });

        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      } else {
        // Process each page separately
        for (let i = 0; i < pageElements.length; i++) {
          if (i > 0) {
            pdf.addPage();
          }

          const element = pageElements[i] as HTMLElement;
          const canvas = await html2canvas(element, {
            useCORS: true,
            allowTaint: true,
            background: '#ffffff',
            width: 794,
            height: 1123
          });

          const imgData = canvas.toDataURL('image/png');
          const imgWidth = 210;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          
          // Adjust if image is taller than A4
          if (imgHeight > 297) {
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, 297);
          } else {
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
          }
        }
      }

      // Generate filename with current date
      const date = new Date().toISOString().split('T')[0];
      const filename = `FastLearn-Growth-Marketing-Formation-${date}.pdf`;

      // Download PDF
      pdf.save(filename);

      // Close the print window
      printWindow.close();

    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Erreur lors de la génération du PDF. Veuillez réessayer ou utiliser la fonction d\'impression de votre navigateur sur la page /print');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button 
      onClick={generatePDF}
      disabled={isGenerating}
      variant="outline" 
      size="sm" 
      className={`bg-red-50 border-red-200 text-red-700 hover:bg-red-100 ${className}`}
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Génération...
        </>
      ) : (
        <>
          📄 PDF Complet
        </>
      )}
    </Button>
  );
}
