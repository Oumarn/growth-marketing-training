import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProgressProvider } from "@/contexts/ProgressContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FastLearn - Growth Marketing Formation Master",
  description: "Formation complète de 2 jours (14h) pour maîtriser les fondamentaux du Growth Marketing et l'automatisation avec l'IA",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/fastlearn_favicon_512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ProgressProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 relative">
              {children}
            </main>
            <Footer />
          </div>
        </ProgressProvider>
      </body>
    </html>
  );
}
