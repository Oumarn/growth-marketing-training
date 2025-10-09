"use client";

import { useEffect, useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Home, Square } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideDeckProps {
  slidesHtml: string[];
  title?: string;
}

export default function SlideDeck({ slidesHtml, title }: SlideDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const fromHash = Number(window.location.hash.replace("#s", ""));
    return Number.isFinite(fromHash) && fromHash >= 1 ? fromHash - 1 : 0;
  });
  
  const totalSlides = slidesHtml.length;

  const goToSlide = (slideIndex: number) => {
    const clamped = Math.max(0, Math.min(totalSlides - 1, slideIndex));
    setCurrentSlide(clamped);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, "", `#s${clamped + 1}`);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          goToSlide(currentSlide + 1);
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          goToSlide(currentSlide - 1);
          break;
        case "Home":
          e.preventDefault();
          goToSlide(0);
          break;
        case "End":
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, totalSlides]);

  return (
    <div className="deck">
      {/* Navigation toolbar - hidden in print */}
      <div className="deck-toolbar no-print">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Précédent
          </Button>
          
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-md">
            <span className="text-sm font-medium">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => goToSlide(currentSlide + 1)}
            disabled={currentSlide === totalSlides - 1}
            className="flex items-center gap-2"
          >
            Suivant
            <ChevronRight className="w-4 h-4" />
          </Button>
          
          <div className="border-l border-gray-300 ml-2 pl-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToSlide(0)}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Début
            </Button>
          </div>
        </div>
        
        <div className="text-sm text-gray-600">
          {title && <span className="font-medium">{title}</span>}
          <span className="ml-2">Utilisez ← → pour naviguer</span>
        </div>
      </div>

      {/* Current slide viewport - shown on screen */}
      <div className="slide-viewport">
        <article
          className="slide slide-screen"
          dangerouslySetInnerHTML={{ __html: slidesHtml[currentSlide] }}
        />
      </div>

      {/* All slides for print - hidden on screen */}
      <div className="print-deck">
        {slidesHtml.map((html, index) => (
          <article
            key={index}
            className="slide slide-print page-break-after"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ))}
      </div>
    </div>
  );
}
