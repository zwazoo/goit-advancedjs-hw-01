# Vanilla JS App

Vite tabanlı, iki sayfalı bir vanilla JavaScript projesi:

- **Galeri** — sabit kodlanmış bir görsel listesinden fotoğraf ızgarası
  oluşturur; altyazı desteğiyle tam ekran önizleme için
  [SimpleLightbox](https://simplelightbox.com/) kullanır.
- **Geri bildirim formu** — form alanlarının durumunu `localStorage`'a kaydeden
  ve sayfa yenilendiğinde geri yükleyen bir form. Gönderimde verileri temizler.

## Başlarken

1. [Node.js LTS](https://nodejs.org/en/) yüklü değilse yükleyin.
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
4. Tarayıcıda [http://localhost:5173](http://localhost:5173) adresini açın.

## Proje yapısı

```
src/
  1-gallery.html      # Galeri sayfası
  2-form.html         # Geri bildirim formu sayfası
  js/
    1-gallery.js      # Galeri oluşturma + SimpleLightbox başlatma
    2-form.js         # localStorage ile form durumu kalıcılığı
  css/                # Bileşen stil dosyaları
  partials/           # Ortak HTML parçaları (header, footer)
  img/                # Görseller
```

## Dağıtım

Üretim sürümü, GitHub Actions aracılığıyla her `main` push'unda otomatik olarak
oluşturulur ve GitHub Pages'e dağıtılır. `package.json` dosyasındaki `--base`
bayrağı depo adına ayarlanmıştır:

```json
"build": "vite build --base=/goit-advancedjs-hw-01/"
```

## Kullanılan teknolojiler

- [Vite](https://vitejs.dev/)
- [SimpleLightbox](https://simplelightbox.com/)
- [vite-plugin-html-inject](https://github.com/donnikitos/vite-plugin-html-inject)
  — HTML parçaları için
