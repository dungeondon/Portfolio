# KVS Portfolio (Next.js 16 + React 19)

    npm install
    npm run dev      # http://localhost:3000
    npm run build && npm start

## Included
- Tailwind CSS v3 (`tailwind.config.js`; preflight is off so the layout matches the design)
- ReactBits ClickSpark and SplashCursor (`components/`, wired up in `app/layout.js`)
- Floating about-section photos (`animate-float` in `tailwind.config.js`)

## Customise
- `data/products.js`: products (title, overview, images) and contact details for the footer. Each product gets its own page at `/work/<slug>`.
- `public/images/`: drop in product images and `about-1.jpg` to `about-4.jpg`.
- `public/resume.pdf`: your resume.
