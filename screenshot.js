const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  const filePath = 'file:///' + path.resolve('C:/Work/Marketing/Claude Code/Tridge website/export-new-markets.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 30000 });

  // Force all scroll-reveal elements visible (IntersectionObserver doesn't fire headless)
  await page.evaluate(() => {
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.transition = 'none';
    });
  });

  // Wait for fonts and layout to settle
  await new Promise(r => setTimeout(r, 2000));

  const imagesDir = 'C:/Work/Marketing/Claude Code/Tridge website/images/screenshots';

  // Screenshot 1 — HERO (back link + label + headline)
  const hero = await page.$('section.hero-nm');
  if (hero) {
    const box = await hero.boundingBox();
    await page.screenshot({
      path: imagesDir + '/review-hero.png',
      clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 700) }
    });
    console.log('review-hero.png saved');
  }

  // Screenshot 2 — HOW IT WORKS (dark section)
  const hiw = await page.$('section.hiw-nm');
  if (hiw) {
    const box = await hiw.boundingBox();
    await page.screenshot({
      path: imagesDir + '/review-how-it-works.png',
      clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 900) }
    });
    console.log('review-how-it-works.png saved');
  }

  // Screenshot 3 — PROOF full section (big numbers + comparison table)
  const proof = await page.$('section.proof-nm');
  if (proof) {
    const box = await proof.boundingBox();
    await page.screenshot({
      path: imagesDir + '/review-proof.png',
      clip: { x: box.x, y: box.y, width: box.width, height: box.height }
    });
    console.log('review-proof.png saved');
  }

  await browser.close();
  console.log('Done.');
})();
