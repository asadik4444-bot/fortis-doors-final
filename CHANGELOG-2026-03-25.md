# Changelog — 2026-03-25

All changes made in this session. To revert any change, use the "Previous" values listed below.

---

## 1. Hero Background Video (index.html)
- **Previous:** `door1.mp4` (original door opening clip, kept in V6 root)
- **New:** `video/hero-bg.mp4` (optimized from `Video & photos/video/video_v1.mp4` — slow pan across door panels)
- **Original source:** `Video & photos/video/video_v1.mp4` (12MB)
- **To revert:** Change `<source src="video/hero-bg.mp4"` back to `<source src="door1.mp4"`

## 2. Brand Story Photo (index.html, "О нас" section)
- **Previous:** `images/doors/about-doors.jpg` (cropped from PDF, 4 doors in a row)
- **New:** `images/showroom-brand.jpg` (optimized from `Video & photos/photo/photo.jpeg` — real showroom with LED strip lighting)
- **Original source:** `Video & photos/photo/photo.jpeg` (2.3MB)
- **To revert:** Change `src="images/showroom-brand.jpg"` back to `src="images/doors/about-doors.jpg"`

## 3. About Page Hero Banner (about.html)
- **Previous:** `images/doors/custom-solutions.jpg` (collage from PDF page 27)
- **New:** `images/showroom-variety.jpg` (optimized from `Video & photos/photo/photo_v5.jpeg` — 6 diverse doors wide shot)
- **Original source:** `Video & photos/photo/photo_v5.jpeg` (2.0MB)
- **To revert:** Change `src="images/showroom-variety.jpg"` back to `src="images/doors/custom-solutions.jpg"`

## 4. About Page Craftsmanship Photo (about.html, values section)
- **Previous:** No image in this section
- **New:** `images/craftsmanship.jpg` (optimized from `Video & photos/photo/hf_20260325_184621_fc160c60-33c8-4d22-aa3c-fb4c7f242015.png` — portrait hinge installation)
- **Original source:** `Video & photos/photo/hf_20260325_184621_fc160c60-33c8-4d22-aa3c-fb4c7f242015.png` (5.9MB)
- **To revert:** Remove the `<img>` element added to the values/advantages section

## 5. Header Logo (all pages)
- **Previous:** Text-based logo: `Fortis<span class="text-bronze-500">.</span>` (font-serif text)
- **New:** Logo image from `images/fortis-logo.png` (optimized from `Video & photos/logo/logo.jpeg`)
- **Original source:** `Video & photos/logo/logo.jpeg` (565KB)
- **Affected files:** index.html, catalog.html, product.html, about.html, contact.html (both header and footer logos)
- **To revert:** Replace `<img src="images/fortis-logo.png" ...>` back to `Fortis<span class="text-bronze-500">.</span>`

## 6. Footer Address (all pages) — done earlier this session
- **Previous:** Hardcoded "Tashkent, Uzbekistan" or "Янгиюль, Узбекистан"
- **New:** `x-text="$store.i18n.t.contact.addressValue"` with full translated address
- **Affected files:** catalog.html, product.html, about.html, index.html

## 7. Favicon SVG
- **Previous:** Simple serif "F" letter in dark square
- **New:** Geometric F logo with dot matching official Fortis branding
- **File:** `favicon.svg`

---

## All original files are preserved:
- `door1.mp4` — kept in V6 root (not deleted)
- `images/doors/about-doors.jpg` — kept in place
- `images/doors/custom-solutions.jpg` — kept in place
- All source files remain in `Video & photos/` folder

## Video options not used (available for future):
- `Video & photos/video/video_v2.mp4` — CNC drill/production shot (15MB)
- `Video & photos/video/video_v3.mp4` — Door handle close-up with light effects (15MB)
- `Video & photos/logo animation/logo animation.mp4` — Animated Fortis logo reveal (2.4MB)
- `Video & photos/Archive/hf_*.mp4` — Archive video (15MB)

## Photos not used (available for future):
- `photo_v4.png` — AI-generated modern showroom (1.2MB)
- `photo_v1.jpeg` / `photo_v2.jpeg` — Hinge close-ups, landscape (8MB each)
- `hf_*_eb9c*.png` — Portrait hinge installation alternate (5.5MB)
- `hf_*_c913*.png` — Portrait hinge installation alternate (5.2MB)
- `hf_*_4ca9*.jpeg` — Landscape hinge close-up (8.3MB)
- `hf_*_651f*.jpeg` — Landscape hinge close-up (8.1MB)
- `hf_*_eb90*.jpeg` — Wide hinge detail (844KB)
