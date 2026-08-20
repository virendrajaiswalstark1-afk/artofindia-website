# Artify — React + Tailwind

A React (Vite) single-page app styled with Tailwind CSS. Same site, same
product data, same copy as the original static HTML version — now
componentized with client-side routing.

The original static HTML/CSS/JS version is kept in `legacy/` for reference.

## Run it

```
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Structure

- `src/main.jsx` — app entry, wraps everything in `BrowserRouter` + `CartProvider`
- `src/App.jsx` — routes: `/`, `/shop`, `/product/:id`, `/about`, `/testimonials`
- `src/pages/` — one file per page (`Home`, `Shop`, `Product`, `About`, `Testimonials`)
- `src/components/` — shared UI: `Nav`, `Footer`, `CartDrawer`, `ProductCard`, `Ph` (placeholder photo block), `Eyebrow`, `CategoryTag`
- `src/context/CartContext.jsx` — in-memory cart (resets on reload, same as before)
- `src/data/products.js` — the `PRODUCTS` array, `CATEGORY_LABELS`, and `money()` — unchanged from the original `script.js`
- `src/index.css` — Tailwind directives + the handful of things Tailwind can't express as utilities (font import, the `ph-1`…`ph-10` gradient placeholders, the marquee keyframes/mask)
- `tailwind.config.js` — the original `styles.css` color tokens (`ivory`, `ink`, `gold`, `orange`, `royal`, `emerald`, `maroon`, etc.) ported in as Tailwind theme colors

## Add or edit a product

Open `src/data/products.js` and edit the `PRODUCTS` array — same shape as
before (`id`, `ph`, `cat`, `catLabel`, `name`, `material`, `size`, `price`,
`badge`, `desc`, `story`, `craft`, `time`, `tradition`, optional `heritage: true`).
It automatically appears in the shop grid, filters, and gets its own page at
`/product/<id>`.

**Categories** must be one of: `ganesh`, `krishna`, `decorative`, `jewelry`,
`others` — these drive the filter chips and color-coded category tags.

## Replace placeholder images

Every artwork photo is currently a colored gradient block (the `Ph`
component, variants `ph-1`–`ph-10`, defined in `src/index.css`), same as the
original site. To use a real photo instead of a gradient for a given
product, swap `<Ph variant={p.ph} .../>` for an `<img>` tag in the relevant
component.

## Cart

The cart lives in `src/context/CartContext.jsx`, in-memory only (no login,
no backend) — it resets on page reload, matching the original behavior.
Wire `add()` / `total()` to a real checkout flow when you're ready.

## Colors / theme

All color tokens are in `tailwind.config.js` under `theme.extend.colors`.
Change a value once there and it updates across the whole app.
