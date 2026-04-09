const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const imagesDir = 'C:/Work/Marketing/Claude Code/Tridge website/images/screenshots';

  // ─── export-new-markets.html screenshots ───────────────────────────────────
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

    const filePath = 'file:///' + path.resolve('C:/Work/Marketing/Claude Code/Tridge website/export-new-markets.html').replace(/\\/g, '/');
    await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 30000 });

    // Force all scroll-reveal elements visible
    await page.evaluate(() => {
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.transition = 'none';
      });
    });
    await new Promise(r => setTimeout(r, 2000));

    // Screenshot 1 — HERO
    const hero = await page.$('section.hero-nm');
    if (hero) {
      const box = await hero.boundingBox();
      await page.screenshot({
        path: imagesDir + '/review-hero.png',
        clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 700) }
      });
      console.log('review-hero.png saved');
    }

    // Screenshot 2 — HOW IT WORKS
    const hiw = await page.$('section.hiw-nm');
    if (hiw) {
      const box = await hiw.boundingBox();
      await page.screenshot({
        path: imagesDir + '/review-how-it-works.png',
        clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 900) }
      });
      console.log('review-how-it-works.png saved');
    }

    // Screenshot 3 — PROOF full section
    const proof = await page.$('section.proof-nm');
    if (proof) {
      const box = await proof.boundingBox();
      await page.screenshot({
        path: imagesDir + '/review-proof.png',
        clip: { x: box.x, y: box.y, width: box.width, height: box.height }
      });
      console.log('review-proof.png saved');
    }

    await page.close();
  }

  // ─── landing.html screenshots ───────────────────────────────────────────────
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

    const filePath = 'file:///' + path.resolve('C:/Work/Marketing/Claude Code/Tridge website/landing.html').replace(/\\/g, '/');
    await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 30000 });

    await page.evaluate(() => {
      document.querySelectorAll('.scroll-reveal, [data-scroll]').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.transition = 'none';
      });
    });
    await new Promise(r => setTimeout(r, 2000));

    // Screenshot — LANDING HERO (full hero section)
    const hero = await page.$('section.hero');
    if (hero) {
      const box = await hero.boundingBox();
      await page.screenshot({
        path: imagesDir + '/review-landing-hero.png',
        clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 900) }
      });
      console.log('review-landing-hero.png saved');
    }

    // Screenshot — DARK SECTIONS (solutions + problem labels)
    // Capture solutions section (dark, with section-tag-light label)
    const solutions = await page.$('section.solutions');
    if (solutions) {
      const box = await solutions.boundingBox();
      await page.screenshot({
        path: imagesDir + '/review-landing-labels.png',
        clip: { x: box.x, y: box.y, width: box.width, height: Math.min(box.height, 700) }
      });
      console.log('review-landing-labels.png saved');
    }

    await page.close();
  }

  await browser.close();
  console.log('Done.');
})();
