# Express Handyman Dublin — Next.js Site

Single-page Next.js (App Router) website for Express Handyman Dublin
Services LLC, a handyman business in Dublin, Ireland, USA.

- Phone: 087 122 3254
- Email: dontthinktwice25@gmail.com
- Google rating: 5.0 stars, 85 reviews
- Facebook: https://www.facebook.com/share/1EnuNmgTkU/?mibextid=wwXIfr

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables needed.
4. Deploy.

## Notes

- One page only (`src/app/page.tsx`), all sections on the page.
- Every section uses the shared `.container` class: `max-width: 1400px`, centered.
- No external images or web fonts — system font stack + one custom SVG logo
  (`public/logo.svg`, also used as the favicon) for fast loading.
- Glassmorphism: sticky glass header, glass hero badge/card and service cards.
- Fully responsive with a hamburger menu on mobile.
- The quote form has no backend — submitting opens the visitor's email app
  with a pre-filled message to dontthinktwice25@gmail.com (mailto).
- No prices, testimonials, addresses or licences are shown — only the
  verified facts above.
