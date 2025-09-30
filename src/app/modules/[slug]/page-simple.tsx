import { notFound } from 'next/navigation';

// Simple module data for testing
const modules = {
  "1-intro": {
    title: "Module 1 — Introduction au Growth Marketing",
    duration: "90min",
    content: "Introduction au Growth Marketing"
  },
  "2-aaarr": {
    title: "Module 2 — Framework AAARRR", 
    duration: "120min",
    content: "Framework AAARRR détaillé"
  },
  "3-cas-pratique": {
    title: "Module 3 — Cas Pratiques",
    duration: "120min", 
    content: "Études de cas pratiques"
  },
  "4-kpis-automation": {
    title: "Module 4 — KPIs & Automation",
    duration: "90min",
    content: "KPIs et automatisation"
  },
  "5-experimentation": {
    title: "Module 5 — A/B Testing",
    duration: "120min",
    content: "Tests et expérimentation"
  },
  "6-no-code": {
    title: "Module 6 — Outils No-Code",
    duration: "150min", 
    content: "Outils sans développement"
  },
  "7-ai-par-canal": {
    title: "Module 7 — IA par Canal",
    duration: "120min",
    content: "Intelligence artificielle marketing"
  }
};

export async function generateStaticParams() {
  return Object.keys(modules).map((slug) => ({
    slug: slug,
  }));
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const moduleData = modules[slug as keyof typeof modules];
  
  if (!moduleData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{moduleData.title}</h1>
        <p className="text-gray-600 mb-8">Durée: {moduleData.duration}</p>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <p>{moduleData.content}</p>
        </div>
      </div>
    </div>
  );
}
