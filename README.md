# Fortis Doors V6 — Alpine.js Static Site

## Tech Stack
- **HTML** — 4 static pages (index, catalog, about, contact)
- **Tailwind CSS** — via Play CDN with custom bronze color palette
- **Alpine.js** — lightweight reactivity (~15KB) for menu, filters, forms, i18n
- **Phosphor Icons** — web font version (unpkg CDN)
- **Google Fonts** — DM Serif Display (headings) + Outfit (body)
- **No build step** — no Node.js, no npm, no bundler required

## File Structure
```
V6/
├── index.html          Home page (hero, brand story, collections, features, engineering, process, testimonials, CTA)
├── catalog.html        Product catalog with category filters (12 products, 5 categories)
├── about.html          About page (values, milestones)
├── contact.html        Contact form + info panel
├── css/
│   └── style.css       Custom CSS: scroll reveals, animations, scrollbar, grain overlay, utilities
├── js/
│   ├── i18n.js         All translations (ru, en, uz) — single object
│   └── app.js          Alpine stores, components, products data, IntersectionObserver scroll reveals
└── README.md
```

## Design System (matches V4)
- **Accent color:** Bronze #A67C52 (full palette 50–950)
- **Fonts:** DM Serif Display (serif headings), Outfit (sans body)
- **No pure black:** uses zinc-950 instead
- **Border radius:** 2.5rem (rounded-4xl) on cards/containers
- **Shadows:** bronze-tinted `rgba(166,124,82,0.06)`
- **Background:** #FAF9F7 (warm cream)
- **Animations:** CSS transitions + IntersectionObserver (replaces Framer Motion)
- **Easing:** cubic-bezier(0.16, 1, 0.3, 1) — "ease-premium"

## i18n (Internationalization)
- 3 languages: Russian (default), English, Uzbek
- Stored in `js/i18n.js` as a single `translations` object
- Alpine.js store at `$store.i18n` with `.locale`, `.t`, `.setLocale(code)`
- Language preference saved to `localStorage` (key: `fortis-locale`)
- All visible text uses `x-text="$store.i18n.t.section.key"`

## Contact Form
The form offers 3 contact channels:
1. **Email (mailto)** — form submit opens the user's email client with pre-filled subject/body to asadik4444@gmail.com
2. **WhatsApp** — link to wa.me/41796154174 (shown below submit button + in info panel)
3. **Telegram** — link to t.me/fortisdoors (shown below submit button + in info panel)

To add server-side form handling later, replace the `submitForm()` method in `app.js` with a `fetch()` POST to:
- Formspree (free tier)
- Netlify Forms (if hosted on Netlify)
- A Cloudflare Worker that forwards to Telegram bot API

## Company Info
- **Name:** Fortis Doors
- **Location:** Tashkent, Uzbekistan
- **Phone:** +41 79 615 41 74
- **Email:** asadik4444@gmail.com
- **WhatsApp:** wa.me/41796154174
- **Telegram:** t.me/fortisdoors

## Products
12 door models across 5 categories:
- **Interior (3):** Milano Classic, Nordic Flush, Venetian Glass
- **Exterior (3):** Fortress Oak, Modern Steel, Thermal Guard
- **Sliding (2):** Glide Series, Pocket Slim
- **Fire-Rated (2):** Fire Shield 30, Fire Shield 60
- **Custom (2):** Artisan Carved, Pivot Grand

Product data is hardcoded in `js/app.js`. Product names/descriptions are translated via `$store.i18n.t.products[slug]`.

## Running Locally
```bash
# Any static server works. Examples:
python3 -m http.server 3002
# or
npx serve .
# or just open index.html in a browser (some features need a server for CORS)
```

## Hosting
Can be deployed to **any** static hosting:
- Netlify / Cloudflare Pages / Vercel (free tiers)
- GitHub Pages
- Any shared hosting ($3/mo)
- S3 + CloudFront
- Literally any web server (nginx, Apache, caddy)

No server-side runtime needed. Total payload: ~7 files, ~180KB before CDN assets.

## Key Differences from V4 (Next.js)
| Feature | V4 (Next.js) | V6 (Alpine.js) |
|---|---|---|
| Runtime | Node.js required | None |
| Build step | `npm run build` | None |
| JS to browser | ~200KB+ (React + Framer Motion) | ~30KB (Alpine.js + icons) |
| Total files | ~114 (with node_modules) | 7 |
| Animations | Framer Motion (JS) | CSS transitions + IntersectionObserver |
| i18n | next-intl (middleware + routing) | Alpine store + localStorage |
| Image optimization | Next.js `<Image>` | Native `<img>` with lazy loading |
| Contact form backend | API route → Telegram bot | mailto + WhatsApp/Telegram links |
| Hosting | Vercel/Node server | Any static host |
