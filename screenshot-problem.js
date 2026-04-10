const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  const filePath = 'file:///' + path.resolve('export-solution.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  await page.addStyleTag({ content: '*, *::before, *::after { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }' });
  await new Promise(r => setTimeout(r, 500));

  const section = await page.$('.problem-es');
  const box = await section.boundingBox();

  const outPath = path.resolve('images/screenshots/review-solution-problem.png');
  await page.screenshot({ path: outPath, clip: { x: box.x, y: box.y, width: box.width, height: box.height } });

  await browser.close();
  console.log('Done:', outPath);
})();
