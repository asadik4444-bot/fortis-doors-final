# Fortis Doors V6 — Full Audit & AI Generation Prompts

Date: 2026-03-25

---

## BUGS TO FIX (Claude can fix)

### 1. Contact Page — Empty Address Field
**Page:** contact.html
**Issue:** The "Адрес" (Address) section shows the label but no address text.
**Fix:** Add the real address text from the PDF: Республика Узбекистан, Ташкентская область, Янгиюльский район, махалля Навруз, улица Самарканд, дом 215

### 2. Catalog Footer — Old Address
**Page:** catalog.html footer
**Issue:** Footer still shows "Tashkent, Uzbekistan" instead of "Янгиюль, Узбекистан"
**Fix:** Update fallback text in footer contact section.

### 3. Homepage Stats (FIXED)
**Status:** Already fixed in this session.
- 10,000 — Doors per month capacity
- 10+ — Years experience
- 46 — Door models
- 99% — Satisfaction

### 4. Fortis Logo SVG
**Issue:** Current favicon.svg is a simple "F" in a dark square. The PDF catalog uses a geometric F logo with a dot (see page 2 of catalog). Need to recreate as SVG.
**Fix:** Claude will create an SVG matching the PDF logo.

---

## THINGS THAT NEED USER INPUT

### 5. Email Address
**Current:** asadik4444@gmail.com (appears on all pages)
**Action:** Tell Claude what the new email should be, and it will be replaced across all pages.

### 6. WhatsApp / Telegram Numbers
**Current WhatsApp:** wa.me/998930468008
**Current Telegram:** t.me/fortisdoors
**Action:** Confirm if these are correct, or provide new ones.

---

## PHOTOS NEEDED — AI Generation Prompts

### 7. Homepage — Brand Story Section (Left Photo)
**Location:** index.html, "О нас / Кто мы?" section, left side image
**Current:** `images/doors/about-doors.jpg` — cropped from PDF page 3, shows 4 doors in a row
**Problem:** Looks like a catalog cutout, not a lifestyle/brand photo

**AI Prompt for Kling / Midjourney / DALL-E:**
> A modern steel door factory interior, warm lighting, clean production line with CNC machines and quality control stations. Workers in professional uniforms inspecting premium steel entry doors. Industrial but premium aesthetic, slightly warm color grading. Photorealistic, architectural photography style, 16:9 aspect ratio.

**Alternative prompt (showroom style):**
> A premium door showroom with several steel entry doors on display, modern minimalist interior with concrete floors and warm ambient lighting. Doors arranged at angles showing different finishes — dark, brown, and white panels. Professional product photography, warm tones, 3:4 aspect ratio.

### 8. About Page — Hero Banner Image
**Location:** about.html, top banner image
**Current:** `images/doors/custom-solutions.jpg` — cropped from PDF page 27
**Problem:** Shows multiple door photos tiled together, looks like a collage

**AI Prompt:**
> Aerial view of a modern door manufacturing factory floor, steel sheets being cut by CNC laser machines, rows of finished steel doors in various colors standing in racks, clean industrial environment with bright fluorescent lighting. Documentary style, 21:9 ultrawide aspect ratio.

### 9. About Page — Values/Journey Section
**Location:** about.html, milestones/journey section
**Current:** No image in this section
**Suggestion:** Add a photo next to the "Our Advantages" milestone list

**AI Prompt:**
> Close-up of hands wearing work gloves installing a premium steel door hinge mechanism, macro photography showing precision craftsmanship. The door panel is dark matte black with visible texture detail. Shallow depth of field, warm workshop lighting, 1:1 square aspect ratio.

### 10. Homepage — Hero Section Background
**Location:** index.html, hero video background
**Current:** `door1.mp4` — a short clip of a door opening
**Status:** This is OK but could be improved

**AI Video Prompt for Kling:**
> Cinematic slow-motion of a premium steel entry door opening from outside, revealing a warm, well-lit modern interior. Camera smoothly pushes through the doorway. The door has a sleek black finish with bronze hardware. Warm ambient lighting, luxury residential entrance. 5 seconds, 16:9, cinematic film grain.

**Alternative video prompt:**
> Smooth tracking shot along a row of premium steel doors in a modern showroom, each door has a different finish (black, brown, walnut, white). Camera glides past them with shallow depth of field. Warm gallery lighting, minimal aesthetic. 8 seconds, 16:9.

**Another option (production themed):**
> Time-lapse of a steel door being assembled on a factory line: metal sheet cutting, bending, welding, panel installation, quality check, and final product. Clean modern factory, professional workers. Speed ramp from fast to slow at the reveal of finished door. 10 seconds, 16:9.

---

## PHOTO QUALITY — Cropped Door Images

### 11. Catalog Door Photos
**Location:** `V6/images/doors/*.jpg`
**Issue:** Photos were auto-cropped from PDF pages. Some have:
- Small remnant of the Fortis logo in the top-left corner (top-position doors)
- Slight white space or page border artifacts at edges
- The quality is good enough for web card display (600px wide)

**Recommendation:**
- For the website cards (catalog grid), current quality is acceptable
- For the product detail page (large view), the images could look pixelated
- If you have access to original high-res door photos from the factory, those would be better
- Otherwise, the compressed PDF extraction at 300 DPI is the best available

### 12. Collection Section Photos (Homepage)
**Location:** index.html, 5 collection bento cards
**Current images used:**
- Komfort: `komfort-k1.jpg` (black door, slight logo remnant)
- Modern: `modern-m1-black.jpg` (great — clean modern black door)
- Prestige: `prestige-p3-walnut.jpg` (excellent — walnut with diamond texture)
- Elite: `elite-e2-cherry.jpg` (good — cherry red classical door)
- 120 Series: `s120-elite3-brown.jpg` (good — double door)

**These are the best representatives for each series.** No change needed unless you have higher-res originals.

---

## TRANSLATION REVIEW

### 13. Catalog Description Text
**Current (RU):** "46 моделей в пяти сериях. Стальные входные двери производства Узбекистан."
**Issue:** "производства Узбекистан" sounds slightly awkward
**Better:** "46 моделей в пяти сериях. Стальные входные двери узбекского производства."

### 14. Construction Section — Cross-Section Values
**Location:** index.html, engineering/construction section
**Issue:** The cross-section diagram shows legacy values from the old design:
- "16 mm" for MDF panels — should match actual specs
- "1.5 mm" for steel — catalog says 1 mm door / 1.2 mm frame
- "60 mm" for insulation
These may need verification against actual factory specs.

---

## MOBILE RESPONSIVENESS

### 15. Mobile Layout Check
**Status:** PASSED
- Header: hamburger menu works, logo visible
- Hero: text stacks properly, stats in 2x2 grid
- Collections: cards stack vertically
- Features: cards stack vertically
- Footer: all sections stack
- WhatsApp floating button: visible and accessible

**Minor note:** On very small screens (320px), some long door names like "Модерн М-3 Каштан тёмный" might wrap awkwardly in catalog cards. Not critical.

---

## LOGO

### 16. Fortis Logo SVG
**Current:** Simple dark square with serif "F"
**Needed:** The geometric logo from the PDF catalog — a stylized F with rounded corners and a dot element (see `images/doors/fortis-logo.png` for reference)
**Action:** Claude will create a clean SVG recreation of this logo.

---

## VIDEO IDEAS FOR HERO SECTION

### Option A: Keep current door1.mp4
The existing video of a door opening is functional. It works.

### Option B: AI-Generated (Kling)
Use one of the video prompts above (#10). Best option would be the showroom tracking shot — it shows multiple products and feels premium.

### Option C: User-filmed content
If you have access to the factory in Yangiyo'l, a real 15-second clip would be the most authentic:
- Factory floor with CNC machines
- Doors being assembled
- Final quality check
- Showroom walkthrough

---

## SUMMARY CHECKLIST

| # | Task | Who | Status |
|---|------|-----|--------|
| 1 | Fix contact page empty address | Claude | TODO |
| 2 | Fix catalog footer old address | Claude | TODO |
| 3 | Fix homepage stats | Claude | DONE |
| 4 | Create Fortis logo SVG | Claude | TODO |
| 5 | Update email address | User tells Claude | WAITING |
| 6 | Confirm WhatsApp/Telegram | User confirms | WAITING |
| 7 | Brand story photo | User generates with AI prompt | WAITING |
| 8 | About page banner | User generates with AI prompt | WAITING |
| 9 | Values section photo | User generates with AI prompt | OPTIONAL |
| 10 | Hero video upgrade | User generates with Kling | OPTIONAL |
| 11 | Higher-res door photos | User provides from factory | OPTIONAL |
| 12 | Collection card photos | OK as-is | DONE |
| 13 | Fix translation awkwardness | Claude | TODO |
| 14 | Verify construction specs | User confirms | WAITING |
| 15 | Mobile responsiveness | Tested and passed | DONE |
| 16 | Fortis logo SVG | Claude | TODO |
