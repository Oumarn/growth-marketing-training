import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Get the base URL from the request
    const protocol = request.headers.get('x-forwarded-proto') || 'http';
    const host = request.headers.get('host') || 'localhost:3000';
    const baseUrl = `${protocol}://${host}`;
    
    console.log('Generating PDF from:', `${baseUrl}/print`);

    // Launch Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();

    // Set viewport for consistent rendering
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2,
    });

    // Navigate to the print page
    await page.goto(`${baseUrl}/print`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for content to load
    await page.waitForSelector('.print-container', { timeout: 10000 });

    // Generate PDF
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm',
      },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size: 10px; margin: 0 auto; color: #666; width: 100%; text-align: center;">
          <span style="margin-right: 20px;">FastLearn - Formation Growth Marketing</span>
        </div>
      `,
      footerTemplate: `
        <div style="font-size: 10px; margin: 0 auto; color: #666; width: 100%; text-align: center;">
          <span style="margin-right: 20px;">Page <span class="pageNumber"></span> sur <span class="totalPages"></span></span>
          <span>© 2025 FastLearn</span>
        </div>
      `,
    });

    await browser.close();

    // Generate filename with current date
    const date = new Date().toISOString().split('T')[0];
    const filename = `FastLearn-Growth-Marketing-Formation-${date}.pdf`;

    // Return PDF as response
    return new Response(Buffer.from(pdf), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });

  } catch (error) {
    console.error('PDF generation error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate PDF',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  // Allow POST requests as well for potential customization
  return GET(request);
}
