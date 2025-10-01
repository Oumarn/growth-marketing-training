import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { getModuleBySlug } from '@/lib/modules';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const moduleSlug = searchParams.get('module');
  const format = searchParams.get('format') || 'a4';
  
  if (!moduleSlug) {
    return NextResponse.json({ error: 'Module slug is required' }, { status: 400 });
  }

  try {
    const module = getModuleBySlug(moduleSlug);
    if (!module) {
      return NextResponse.json({ error: 'Module not found' }, { status: 404 });
    }

    // Lancer Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Définir la taille de la page pour le PDF
    await page.setViewport({ width: 1200, height: 1600 });
    
    // Aller vers la page print avec le module spécifique
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://your-domain.com' 
      : 'http://localhost:3000';
    
    await page.goto(`${baseUrl}/print?module=${moduleSlug}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Générer le PDF avec des options optimisées
    const pdf = await page.pdf({
      format: format as any,
      printBackground: true,
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm'
      },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size: 10px; width: 100%; text-align: center; color: #666;">
          <h3 style="margin: 0;">${module.title}</h3>
        </div>
      `,
      footerTemplate: `
        <div style="font-size: 10px; width: 100%; text-align: center; color: #666; display: flex; justify-content: space-between; padding: 0 20px;">
          <span>FastLearn - Growth Marketing Formation</span>
          <span>Page <span class="pageNumber"></span> sur <span class="totalPages"></span></span>
        </div>
      `,
      preferCSSPageSize: false,
    });

    await browser.close();

    // Retourner le PDF
    return new NextResponse(pdf as unknown as BodyInit, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${module.slug}-cours.pdf"`,
      },
    });

  } catch (error) {
    console.error('Error generating PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' }, 
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Pour générer un PDF de tous les modules
  try {
    const { modules } = await request.json();
    
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600 });
    
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://your-domain.com' 
      : 'http://localhost:3000';
    
    await page.goto(`${baseUrl}/print?all=true`, {
      waitUntil: 'networkidle0',
      timeout: 60000
    });

    const pdf = await page.pdf({
      format: 'a4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '15mm',  
        bottom: '20mm',
        left: '15mm'
      },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size: 10px; width: 100%; text-align: center; color: #666;">
          <h3 style="margin: 0;">Formation Growth Marketing - Cours Complet</h3>
        </div>
      `,
      footerTemplate: `
        <div style="font-size: 10px; width: 100%; text-align: center; color: #666; display: flex; justify-content: space-between; padding: 0 20px;">
          <span>FastLearn - Growth Marketing Formation</span>
          <span>Page <span class="pageNumber"></span> sur <span class="totalPages"></span></span>
        </div>      `,
      preferCSSPageSize: false,
    });

    await browser.close();

    return new NextResponse(pdf as unknown as BodyInit, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="formation-growth-marketing-complete.pdf"',
      },
    });

  } catch (error) {
    console.error('Error generating complete PDF:', error);
    return NextResponse.json(
      { error: 'Failed to generate complete PDF' }, 
      { status: 500 }
    );
  }
}
