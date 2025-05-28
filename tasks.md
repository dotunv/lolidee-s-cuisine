# SvelteKit Migration & Production-Ready Checklist

## 1. Project Setup
- [ ] Initialize SvelteKit in the current folder
- [ ] Configure TypeScript (optional, recommended)
- [ ] Set up Prettier and ESLint for code quality
- [ ] Set up environment variables for config/secrets

## 2. File & Asset Migration
- [ ] Move all images and static assets to `static/`
- [ ] Move favicon and logo to `static/`
- [ ] Move existing CSS to global and component styles

## 3. Page Conversion
- [ ] Convert `index.html` to `src/routes/+page.svelte`
- [ ] Convert `about.html` to `src/routes/about/+page.svelte`
- [ ] Convert `menu.html` to `src/routes/menu/+page.svelte`
- [ ] Convert `cart.html` to `src/routes/cart/+page.svelte`
- [ ] Convert `contact.html` to `src/routes/contact/+page.svelte`
- [ ] Refactor navigation as a Svelte component
- [ ] Refactor footer as a Svelte component

## 4. Routing & Navigation
- [ ] Use SvelteKit file-based routing
- [ ] Replace `<a href>` with SvelteKit `<a>` or `<Link>`
- [ ] Add 404 page (`src/routes/+error.svelte`)

## 5. Styling
- [ ] Move global CSS to `src/app.css` or `src/routes/+layout.svelte`
- [ ] Move page-specific CSS into component `<style>` blocks
- [ ] Use CSS variables and Svelte scoping
- [ ] Optimize for dark mode (optional)

## 6. Interactivity & State
- [ ] Convert any JS to Svelte stores or reactive statements
- [ ] Make navigation hamburger functional
- [ ] Make cart functional (add/remove items, persist state)
- [ ] Add form validation and submission for contact page

## 7. Accessibility (a11y)
- [ ] Add alt text to all images
- [ ] Use semantic HTML elements
- [ ] Ensure keyboard navigation works
- [ ] Add ARIA labels where needed

## 8. SEO & Metadata
- [ ] Add `<svelte:head>` tags for title, meta, and social sharing
- [ ] Add Open Graph and Twitter Card tags
- [ ] Add sitemap and robots.txt

## 9. Performance & Best Practices
- [ ] Optimize images (compression, modern formats)
- [ ] Use SvelteKit adapters for deployment (Vercel, Netlify, Node, etc.)
- [ ] Enable prerendering for static pages
- [ ] Lazy-load images and components where possible

## 10. Testing
- [ ] Set up unit and component tests (Vitest, Testing Library)
- [ ] Add end-to-end tests (Playwright or Cypress)
- [ ] Add accessibility tests

## 11. Deployment
- [ ] Set up deployment pipeline (CI/CD)
- [ ] Configure environment variables for production
- [ ] Deploy to production (Vercel, Netlify, or custom server)

## 12. Documentation
- [ ] Update README with setup, usage, and deployment instructions
- [ ] Document SvelteKit-specific features and structure
- [ ] Add code comments and usage examples

---

**Progress:**
- [ ] All tasks completed and checked off 