import { loadModuleSlides } from "@/lib/slide-loader";
import SlideDeck from "@/components/SlideDeck";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, FileDown, Eye } from "lucide-react";
import { notFound } from "next/navigation";

interface ModuleSlidesPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ModuleSlidesPage({ params }: ModuleSlidesPageProps) {
  const { slug } = await params;
  
  try {
    const moduleSlides = await loadModuleSlides(slug);
    const slidesHtml = moduleSlides.slides.map(slide => slide.content);

    return (
      <main className="slides-root min-h-screen bg-gray-50">
        {/* Header with navigation - hidden in print */}
        <div className="no-print border-b border-gray-200 bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                <Link 
                  href={`/${slug}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour au module
                </Link>
                <div className="border-l border-gray-300 pl-4">
                  <h1 className="text-lg font-semibold text-gray-900">
                    {moduleSlides.title} - Mode Slides
                  </h1>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Link href={`/${slug}`}>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Mode Lecture
                  </Button>
                </Link>
                <div className="flex items-center gap-2">
                  <Link href={`/api/pdf?module=${encodeURIComponent(slug)}&mode=slides`}>
                    <Button size="sm" className="flex items-center gap-2">
                      <FileDown className="w-4 h-4" />
                      PDF
                    </Button>
                  </Link>
                  <Link href={`/api/image?module=${encodeURIComponent(slug)}&format=png`}>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
                        <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      Image PNG
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slides deck */}
        <div className="pt-6">
          <SlideDeck 
            slidesHtml={slidesHtml} 
            title={moduleSlides.title}
          />
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error loading module slides:", error);
    return notFound();
  }
}
