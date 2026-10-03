# Vanilla JS App

Proiect bazat pe Vite cu două pagini:

- **Galerie** — afișează o grilă de fotografii dintr-o listă de imagini
  predefinite, folosind [SimpleLightbox](https://simplelightbox.com/) pentru
  previzualizare fullscreen cu legende.
- **Formular de feedback** — un formular care salvează starea câmpurilor în
  `localStorage` și o restaurează la reîncărcarea paginii. Șterge datele la
  trimitere.

## Pornire

1. Instalează [Node.js LTS](https://nodejs.org/en/) dacă nu este deja instalat.
2. Instalează dependențele:
   ```bash
   npm install
   ```
3. Pornește serverul de dezvoltare:
   ```bash
   npm run dev
   ```
4. Deschide [http://localhost:5173](http://localhost:5173) în browser.

## Structura proiectului

```
src/
  1-gallery.html      # Pagina galeriei
  2-form.html         # Pagina formularului de feedback
  js/
    1-gallery.js      # Randarea galeriei + inițializarea SimpleLightbox
    2-form.js         # Persistența stării formularului prin localStorage
  css/                # Foi de stiluri pe componente
  partials/           # Fragmente HTML comune (header, footer)
  img/                # Imagini
```

## Deployment

Versiunea de producție este construită și distribuită automat pe GitHub Pages la
fiecare push pe `main`, prin GitHub Actions. Flag-ul `--base` din `package.json`
este setat la numele repository-ului:

```json
"build": "vite build --base=/goit-advancedjs-hw-01/"
```

## Tehnologii utilizate

- [Vite](https://vitejs.dev/)
- [SimpleLightbox](https://simplelightbox.com/)
- [vite-plugin-html-inject](https://github.com/donnikitos/vite-plugin-html-inject)
  pentru fișiere HTML parțiale
