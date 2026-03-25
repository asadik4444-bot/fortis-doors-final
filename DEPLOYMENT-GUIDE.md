# Fortis Doors — Deployment Guide (Beginner-Friendly)

## Step 1: See Your Site Live (Free, 2 Minutes)

1. Open your browser, go to **https://app.netlify.com**
2. Sign up with your email or GitHub account (free)
3. Once logged in, you'll see a page that says **"Drag and drop your site output folder here"**
4. Open Finder, navigate to `Desktop/AI/Fortis doors/V6`
5. **Drag the entire V6 folder** onto that area in the browser
6. Wait 10-30 seconds
7. Netlify gives you a random URL like `https://amazing-door-123.netlify.app`
8. Click it — your site is live on the internet!

> This URL works forever on the free plan. You can share it with anyone to preview.

---

## Step 2: Get Your .uz Domain

### Option A: Register at reg.uz
1. Go to **https://reg.uz**
2. Search for `fortisdoors.uz` (or your preferred name)
3. If available, add to cart
4. Create an account, pay (~$15-30/year)
5. You now own `fortisdoors.uz`

### Option B: Register at nic.uz
1. Go to **https://nic.uz**
2. Same process — search, register, pay

### What you need to register:
- Your name/company name
- Email address
- Phone number
- Payment method (card or bank transfer)

---

## Step 3: Connect Your Domain to Netlify

1. Log in to **https://app.netlify.com**
2. Click on your site (the one you deployed in Step 1)
3. Go to **Site settings** > **Domain management**
4. Click **"Add custom domain"**
5. Type `fortisdoors.uz` and click **Verify**
6. Netlify will show you DNS settings — it will say something like:
   ```
   Point your domain to: dns1.p05.nsone.net
   ```
7. Go back to **reg.uz** (or wherever you bought the domain)
8. Find **DNS settings** or **Nameservers**
9. Change the nameservers to whatever Netlify tells you (usually 2 addresses)
10. Save and wait **1-24 hours** for DNS to update worldwide
11. Go back to Netlify > Domain management > click **"Provision SSL certificate"**
12. Done! Your site is now live at `https://fortisdoors.uz`

---

## Step 4: How to Edit Your Site After Deployment

### To change text, prices, specs, or translations:

1. On your computer, open the file you want to edit:
   - **Product data** (names, prices, specs, images) → edit `V6/js/app.js`
   - **Translations** (Russian, English, Uzbek text) → edit `V6/js/i18n.js`
   - **Page content/layout** → edit the HTML file (`index.html`, `catalog.html`, etc.)
   - **Styles** → edit `V6/css/style.css`

2. Save the file

3. Test locally:
   ```bash
   cd "Desktop/AI/Fortis doors/V6"
   python3 -m http.server 3002
   ```
   Then open `http://localhost:3002` in your browser

4. When happy, re-deploy to Netlify:
   - Go to **https://app.netlify.com**
   - Click on your site
   - Go to **Deploys** tab
   - Drag the V6 folder onto the deploy area again
   - New version goes live in ~10 seconds

### To add real door photos:

1. Put your photos in `V6/images/` folder
   - Name them: `milano-classic.jpg`, `nordic-flush.jpg`, etc.
   - Recommended size: 800x1000 pixels, JPG, under 200KB each

2. Open `V6/js/app.js`

3. Find each product and change the `image` field:
   ```javascript
   // BEFORE:
   image: "https://picsum.photos/seed/milano/800/1000",

   // AFTER:
   image: "images/milano-classic.jpg",
   ```

4. Do this for all 12 products

5. For homepage section images (brand story, collections), find the `picsum.photos` URLs in `index.html` and `about.html` and replace with your local image paths

6. Re-deploy (drag V6 folder to Netlify again)

### To change the hero video:

1. Replace `V6/door1.mp4` with your new video
2. Keep the filename `door1.mp4` (or change it in `index.html` line ~202)
3. Recommended: 1080p, 5-15 seconds loop, under 2MB
4. Re-deploy

---

## Quick Reference: What File Controls What

| What you want to change | File to edit |
|--------------------------|-------------|
| Product names, prices, specs, images | `js/app.js` |
| All text in Russian/English/Uzbek | `js/i18n.js` |
| Homepage layout & sections | `index.html` |
| Catalog page | `catalog.html` |
| Product detail page | `product.html` |
| About page | `about.html` |
| Contact page & form | `contact.html` |
| Colors, animations, scrollbar | `css/style.css` |
| Hero background video | `door1.mp4` (just replace the file) |
| Favicon/logo | `favicon.svg` |

---

## Costs Summary

| Item | Cost |
|------|------|
| Netlify hosting | Free |
| `.uz` domain | ~$15-30/year |
| SSL certificate (HTTPS) | Free (Netlify provides) |
| **Total** | **~$2/month** |

---

## Troubleshooting

**Site not updating after re-deploy?**
→ Hard refresh your browser: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

**Domain not working after connecting?**
→ DNS changes take 1-24 hours. Be patient. Check again tomorrow.

**Images not showing?**
→ Make sure filenames match exactly (case-sensitive). `Milano.jpg` is different from `milano.jpg`

**Contact form not sending?**
→ The form opens your email client (mailto). It doesn't send directly. Users can also click WhatsApp/Telegram buttons.

**Want to add more products?**
→ Copy an existing product entry in `js/app.js`, change the slug/data. Add matching translation keys in `js/i18n.js`.
