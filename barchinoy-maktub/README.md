# Barchinoy uchun maktub — Vercel

Statik sayt: `public/` papkasi to‘g‘ridan to‘g‘ri xizmat qiladi. Kutubxonalar (three.js r160, GSAP 3.12.5)
`public/vendor/` ichida, qo‘shiq `public/music.mp3` — tashqi CDN’ga bog‘liqlik yo‘q (faqat Google Fonts).

Build bosqichi (`scripts/og-url.mjs`) Telegram/WhatsApp havola-preview uchun `og:image` manzilini
avtomatik ravishda saytning haqiqiy domeniga almashtiradi. Hech qanday paket o‘rnatish shart emas.

## 1-usul: Vercel CLI (eng tez)

```bash
npm i -g vercel          # bir marta
cd barchinoy-maktub
vercel                   # login → "Set up and deploy?" Y → loyiha nomi: barchinoy-maktub → qolgan savollarga Enter
vercel --prod            # production havolasi chiqadi: https://barchinoy-maktub.vercel.app (yoki shunga o‘xshash)
```

## 2-usul: GitHub orqali

1. Shu papkani yangi GitHub repozitoriyaga yuklang (papkaning ichidagi fayllar repo ildizida bo‘lsin).
2. vercel.com/new → repozitoriyani **Import** qiling.
3. Framework Preset: **Other** (sozlamalar `vercel.json` dan avtomatik olinadi) → **Deploy**.

## Muhim

- Barchinoyga **production** havolasini yuboring (`…vercel.app`, Vercel → Project → Domains’da ko‘rinadi).
  Har bir deploy uchun chiqadigan uzun "preview" havolalar standart holatda himoyalangan va unga ochilmaydi.
- Matn, ism, tezlik va musiqa sozlamalari `public/index.html` boshidagi `LOVE_CONFIG` ichida.
- Qo‘shiqni almashtirsangiz, faylni boshqa nom bilan saqlab (masalan `music2.mp3`) `musicFile` ni yangilang —
  `music.mp3` brauzerlarda 7 kun keshlanadi.
