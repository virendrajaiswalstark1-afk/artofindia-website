# Artify — Editing Guide

This is a static 5-page prototype: no server or database required. Open
`index.html` in a browser, or upload the whole folder to any static host
(Netlify, Vercel, GitHub Pages, or your own server).

## Pages
- `index.html` — Home / gallery
- `shop.html` — Shop / collection grid (filters, search, sort)
- `product.html` — Product detail (reads `?id=` from the URL, e.g. `product.html?id=3`)
- `about.html` — About Us / mission / how we work
- `testimonials.html` — Happy buyers / reviews

Shared across all pages: `styles.css` (all design/colors) and `script.js`
(all product data + cart/filter/form logic).

## Add or edit a product
Open `script.js` and find the `PRODUCTS` array near the top. Each product is
one object:

```js
{
  id: 19, ph: "ph-3", cat: "decorative", catLabel: "Decorative",
  name: "Your Product Name", material: "Material", size: "10 × 8 × 4 in",
  price: 5000, badge: "New Arrival",
  desc: "One-line description shown on the shop grid.",
  story: "Longer paragraph shown on the product page.",
  craft: "Technique / specialty (no personal names)",
  time: "10 days", tradition: "Name of the technique/tradition"
}
```
Just copy an existing entry, give it a new unique `id`, and edit the fields.
It will automatically appear in the shop grid, filters, and get its own
product page at `product.html?id=19`.

**To change a price:** edit the `price` number for that product — updates
everywhere the product appears (grid, product page, cart).

**Categories** must be one of: `ganesh` (Lord Ganesh), `krishna` (Lord
Krishna), `decorative`, `jewelry`, `others` (these match the filter chips
and the color-coded category tags in `styles.css`).

**Note:** individual maker names/photos are intentionally not displayed
anywhere on the site — only craft/technique and heritage/workshop context.

## Replace placeholder images
Every artwork/photo on the site is currently a colored gradient block
(class `ph ph-1` through `ph-10`) so the whole site works before you have
real photography. To swap in a real photo, replace a div like:

```html
<div class="ph ph-1"></div>
```
with:
```html
<div class="ph"><img src="images/your-photo.jpg" alt="Product name"></div>
```
Create an `images/` folder next to the HTML files and drop your photos in.
The gradient (`ph-1` etc.) is just a fallback color — you can drop the class
once a real photo is in place, or keep it as the background behind a
transparent PNG.

## Edit testimonials
Testimonials are written directly in `testimonials.html` — search for
`testi-card` and copy/edit a block. The "Share Your Experience" form at the
bottom doesn't submit anywhere yet (there's no backend) — wire it to your
email service or form backend of choice by editing the `reviewForm` handler
in `script.js`.

## Cart
The cart is intentionally in-memory only (no login, no backend) — it resets
on page reload. Wire `Cart.add()` / `Cart.total()` in `script.js` to a real
checkout flow (Shopify, Stripe Checkout, etc.) when you're ready.

## Colors / theme
All color tokens are CSS variables at the top of `styles.css` under `:root`.
Change a value once there and it updates across all five pages.
