import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Get the base URL from the request
    const protocol = request.headers.get('x-forwarded-proto') || 'http';
    const host = request.headers.get('host') || 'localhost:3000';
    const baseUrl = `${protocol}://${host}`;
    
    // Get URL parameters
    const url = new URL(request.url);
    const moduleParam = url.searchParams.get('module');
    const format = url.searchParams.get('format') || 'png'; // png or jpg
    
    // Build target URL for continuous layout (no page breaks)
    let targetUrl = `${baseUrl}/print`;
    const params = new URLSearchParams();
    
    if (moduleParam) {
      params.append('module', moduleParam);
    }
    params.append('mode', 'image'); // Special mode for continuous layout
    
    targetUrl += '?' + params.toString();
    
    console.log('Generating full-page image from:', targetUrl);

    // Launch Puppeteer with high-resolution settings
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

    // Set high-resolution viewport for crisp text
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2, // Retina quality
    });

    // Navigate to the print page
    await page.goto(targetUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for content to load - try different selectors
    try {
      await page.waitForSelector('.image-root', { timeout: 5000 });
    } catch {
      try {
        await page.waitForSelector('.print-root', { timeout: 5000 });
      } catch {
        await page.waitForSelector('body', { timeout: 5000 });
      }
    }
    
    // Wait a bit more for any dynamic content to render
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Disable animations, transitions and any page breaks for continuous capture
    await page.addStyleTag({ 
      content: `
        *, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
          
          /* Force continuous layout - no page breaks anywhere */
          break-inside: auto !important;
          break-after: auto !important;
          break-before: auto !important;
          page-break-inside: auto !important;
          page-break-after: auto !important;
          page-break-before: auto !important;
          
          /* Remove any height constraints that might cause splits */
          height: auto !important;
          min-height: auto !important;
          max-height: none !important;
        }
        
        /* Override @page rules for continuous layout */
        @page {
          size: auto !important;
          margin: 0 !important;
        }
        
        /* Force all containers to flow naturally */
        .slide, .slide-continuous, .slide-print, .slide-screen,
        section, article, div, .page-break-after, .page-break-before, .avoid-break {
          break-inside: auto !important;
          break-after: auto !important;
          break-before: auto !important;
          page-break-inside: auto !important;
          page-break-after: auto !important;
          page-break-before: auto !important;
          height: auto !important;
          min-height: auto !important;
          max-height: none !important;
        }
        
        /* Make sure images and content don't break */
        img, figure, table, pre, blockquote, .objectives-grid, .metrics-timing, 
        .proof-grid, .synthesis-grid, .mastery-grid {
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
      `
    });

    // Take full-page screenshot (captures entire height as one image)
    const imageBuffer = await page.screenshot({
      type: format === 'jpg' ? 'jpeg' : 'png',
      fullPage: true,
      quality: format === 'jpg' ? 90 : undefined,
    });

    await browser.close();

    const contentType = format === 'jpg' ? 'image/jpeg' : 'image/png';
    const extension = format === 'jpg' ? 'jpg' : 'png';
    const filename = `FastLearn-${moduleParam || 'module'}.${extension}`;

    return new NextResponse(Buffer.from(imageBuffer), {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="${filename}"`,
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });

  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}
