// Vercel build step: link-preview crawlers (Telegram, WhatsApp, Instagram…) need an absolute
// og:image URL, so we stamp in the project's production domain. No dependencies.
import { readFileSync, writeFileSync } from 'node:fs';

const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const file = new URL('../public/index.html', import.meta.url);
let html = readFileSync(file, 'utf8');

if (host) {
  const origin = `https://${host}`;
  html = html
    .replaceAll('content="/og.jpg"', `content="${origin}/og.jpg"`)
    .replace('<meta property="og:type"', `<meta property="og:url" content="${origin}/">\n<meta property="og:type"`);
  writeFileSync(file, html);
  console.log(`og:image → ${origin}/og.jpg`);
} else {
  console.log('No Vercel host env var found; keeping relative og:image (local build).');
}
