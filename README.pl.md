# Vanilla JS App

Projekt oparty na Vite z dwoma stronami:

- **Galeria** — renderuje siatkę zdjęć z zakodowanej listy obrazów przy użyciu
  [SimpleLightbox](https://simplelightbox.com/) do podglądu pełnoekranowego z
  podpisami.
- **Formularz opinii** — formularz zapisujący stan pól w `localStorage` i
  przywracający go po przeładowaniu strony. Czyści dane po wysłaniu.

## Pierwsze kroki

1. Zainstaluj [Node.js LTS](https://nodejs.org/en/), jeśli nie masz go jeszcze
   zainstalowanego.
2. Zainstaluj zależności:
   ```bash
   npm install
   ```
3. Uruchom serwer deweloperski:
   ```bash
   npm run dev
   ```
4. Otwórz [http://localhost:5173](http://localhost:5173) w przeglądarce.

## Struktura projektu

```
src/
  1-gallery.html      # Strona galerii
  2-form.html         # Strona formularza opinii
  js/
    1-gallery.js      # Renderowanie galerii + inicjalizacja SimpleLightbox
    2-form.js         # Trwałość stanu formularza przez localStorage
  css/                # Arkusze stylów komponentów
  partials/           # Wspólne fragmenty HTML (header, footer)
  img/                # Obrazy
```

## Wdrożenie

Wersja produkcyjna jest automatycznie budowana i wdrażana na GitHub Pages przy
każdym push do `main` za pomocą GitHub Actions. Flaga `--base` w `package.json`
jest ustawiona na nazwę repozytorium:

```json
"build": "vite build --base=/goit-advancedjs-hw-01/"
```

## Stos technologiczny

- [Vite](https://vitejs.dev/)
- [SimpleLightbox](https://simplelightbox.com/)
- [vite-plugin-html-inject](https://github.com/donnikitos/vite-plugin-html-inject)
  do częściowych plików HTML
