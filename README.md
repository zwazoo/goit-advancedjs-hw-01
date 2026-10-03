# Vanilla JS App

A Vite-based vanilla JavaScript project with two pages:

- **Gallery** — renders a photo grid from a hardcoded image list using
  [SimpleLightbox](https://simplelightbox.com/) for fullscreen preview with
  captions.
- **Feedback form** — a form that saves input state to `localStorage` and
  restores it on page reload. Clears state on submit.

## Getting started

1. Install [Node.js LTS](https://nodejs.org/en/) if not already installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project structure

```
src/
  1-gallery.html      # Gallery page
  2-form.html         # Feedback form page
  js/
    1-gallery.js      # Gallery rendering + SimpleLightbox init
    2-form.js         # Form state persistence via localStorage
  css/                # Per-component stylesheets
  partials/           # Shared HTML fragments (header, footer)
  img/                # Images
```

## Deploy

Production build is deployed to GitHub Pages via GitHub Actions on every push to
`main`. The `--base` flag in `package.json` is set to the repository name:

```json
"build": "vite build --base=/goit-advancedjs-hw-01/"
```

## Tech stack

- [Vite](https://vitejs.dev/)
- [SimpleLightbox](https://simplelightbox.com/)
- [vite-plugin-html-inject](https://github.com/donnikitos/vite-plugin-html-inject)
  for HTML partials
