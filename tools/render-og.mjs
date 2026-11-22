// Renders img/og/<slug>.jpg for every car. Needs Playwright: node tools/render-og.mjs
import { chromium } from 'playwright';
import { CARS } from '../assets/js/data.js';
import { fileURLToPath } from 'url';
const here = fileURLToPath(new URL('.', import.meta.url));
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.goto('file://' + here + 'og-template.html', { waitUntil: 'networkidle' });
for (const c of CARS) {
  await p.evaluate(async (c) => {
    const img = document.getElementById('photo');
    img.src = `../img/cars/${c.hero || c.img}.jpg`;
    img.style.objectPosition = c.hero ? '50% 78%' : (c.pos || '50% 55%');
    await img.decode();
    document.getElementById('eyebrow').textContent = `The Signature fleet · ${c.body}`;
    const name = document.getElementById('name');
    name.textContent = c.name;
    name.style.setProperty('--fs', c.name.length > 24 ? '62px' : c.name.length > 16 ? '70px' : '80px');
    document.getElementById('year').textContent = c.year;
  }, c);
  await p.waitForTimeout(150);
  await p.screenshot({ path: `${here}../img/og/${c.slug}.jpg`, type: 'jpeg', quality: 86 });
  console.log('og', c.slug);
}
await b.close();
