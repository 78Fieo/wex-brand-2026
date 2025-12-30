import { chromium } from 'playwright';

async function takeScreenshot() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ 
    viewport: { width: 1440, height: 900 } 
  });
  
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  
  // Wait for animations to settle
  await page.waitForTimeout(3000);
  
  // Take full page screenshot
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `screenshots/draft-v2-1-${timestamp}.png`;
  
  await page.screenshot({ 
    path: filename, 
    fullPage: true 
  });
  
  console.log(`Screenshot saved to ${filename}`);
  
  await browser.close();
}

takeScreenshot().catch(console.error);

