# Fortis Doors V6 — Site Manual

## Quick Start
```bash
cd V6
python3 -m http.server 3002
# Open http://localhost:3002
```

## Deploy
**Pure static site** — no backend, no database, no server-side code.
Deploy to any static host:

| Host | How | Cost |
|------|-----|------|
| **Netlify** | Drag & drop V6 folder at netlify.com | Free |
| **Vercel** | Connect GitHub repo at vercel.com | Free |
| **Cloudflare Pages** | Connect GitHub repo | Free |
| **GitHub Pages** | Enable in repo Settings → Pages | Free |

### Custom Domain
1. Buy a domain (e.g. fortisdoors.uz)
2. Add custom domain in your hosting dashboard
3. Update DNS (A record or CNAME as instructed)
4. HTTPS is automatic and free on all hosts above

---

## How to Change Things

### Product Photos
```
Location: images/doors/
Format:   JPEG, 600px wide, portrait
```
Replace the file keeping the **same filename**:
```
images/doors/modern-m1-black.jpg   ← replace this file
images/doors/elite-e2-cherry.jpg   ← or this one
```

### Product Names & Descriptions
```
File: js/i18n.js
```
Search for the product slug (e.g. `modern-m1-black`). It appears **3 times** — once per language:
- **English:** ~line 120–170
- **Russian:** ~line 295–350
- **Uzbek:** ~line 470–520

Each product has: `name`, `short` (catalogue card), `full` (detail page).
**Edit all 3 languages** when changing text.

### Hero Video
```
Replace: video/hero-bg.mp4
Format:  MP4, H.264, 1280px wide, no audio, <2MB
Optional: replace video/hero-poster.jpg (first frame)
```

### Construction / Cross-Section Specs
```
File: index.html (search for "Сечение")
```
Values to change (~line 780–820):
```
16 mm    ← outer panel thickness
1.5 mm   ← steel thickness (catalog says 1mm door / 1.2mm frame)
3x       ← number of seals
60 mm    ← insulation thickness
```
Also update labels in `js/i18n.js` — search for `engineering` section (3 places, one per language).

### Contact Info
| What | Search for | Files |
|------|-----------|-------|
| Phone | `998930468008` | All 5 HTML files |
| Email | `asadik4444@gmail.com` | All 5 HTML files |
| Address | `addressValue` in i18n.js | 3 places (EN/RU/UZ) |
| WhatsApp | `wa.me/998930468008` | All 5 HTML files |
| Telegram | `t.me/fortisdoors` | All 5 HTML files |

### Logo
| File | Where used |
|------|-----------|
| `images/fortis-logo.png` | Header (all pages) — bronze on transparent |
| `images/fortis-logo-light.png` | Footer (all pages) — white on transparent |
| `favicon.svg` | Browser tab icon |

### Add a Language
1. Open `js/i18n.js`
2. Copy the entire `ru: { ... }` block
3. Paste as new key (e.g. `tr: { ... }`)
4. Translate all values
5. Add language button in header of each HTML file

---

## File Structure
```
V6/
├── index.html              ← Homepage
├── catalog.html            ← Catalogue with filters
├── product.html            ← Product detail (?slug= param)
├── about.html              ← About page
├── contact.html            ← Contact page
├── favicon.svg             ← Browser tab icon
├── css/style.css           ← Custom styles & animations
├── js/
│   ├── app.js              ← Alpine components & interactions
│   ├── i18n.js             ← ALL translations + 46 product entries
│   └── tailwind-config.js  ← Shared color/font config
├── images/
│   ├── doors/              ← 46 product photos (600px JPEGs)
│   ├── fortis-logo.png     ← Header logo
│   ├── fortis-logo-light.png ← Footer logo
│   ├── showroom-brand.jpg  ← Brand story photo
│   ├── showroom-variety.jpg ← About hero photo
│   └── craftsmanship.jpg   ← Craftsmanship section photo
├── video/
│   ├── hero-bg.mp4         ← Hero background (437KB)
│   └── hero-poster.jpg     ← Video poster frame
└── CHANGELOG-2026-03-25.md ← Detailed change log
```

---

## Security

### Is it safe?
**Yes — this is one of the safest website types possible.**

| Concern | Status |
|---------|--------|
| Backend / server code | **None** — pure HTML files |
| Database | **None** — nothing to breach |
| User accounts / passwords | **None** — nothing to steal |
| API keys / secrets | **None** — nothing exposed |
| Cookies / tracking | **None** — no GDPR concerns |
| Form data storage | **None** — contact form opens email client |
| HTTPS | **Free & automatic** on all recommended hosts |

### Can someone hack it?
There is **nothing to hack**. No database, no server, no login system. The site is just files served to the browser. Modifying it requires access to your GitHub repo or hosting account — protect those credentials.

### What could go wrong?
The only theoretical issue: if CDN links go down (Tailwind, Alpine, Google Fonts), styles/interactions would temporarily break. This is extremely rare.

### Bottom line
**Deploy it, point your domain, and forget about it.** Zero maintenance required. Only touch it again to update content.

---

## Tech Stack
| Component | Library | Version |
|-----------|---------|---------|
| CSS | Tailwind CSS (CDN) | Latest |
| JS | Alpine.js | 3.14.9 |
| Icons | Phosphor Icons | 2.1.1 |
| Fonts | DM Serif Display + Outfit | Google Fonts |
| Animations | GSAP + ScrollTrigger | 3.12.5 |
| Build step | **None** | Pure static |
