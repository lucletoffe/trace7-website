# undust — Favicon set

Pack favicon complet généré à partir du monogramme datum [U] (prompt 01).

## Fichiers

| Fichier | Taille | Usage |
|---|---|---|
| `favicon.svg` | vectoriel | Browsers modernes (auto clair/sombre via `prefers-color-scheme`) |
| `favicon.ico` | 16/32/48 | Legacy IE / Edge / fallback universel |
| `favicon-16x16.png` | 16×16 | Browser tab (version simplifiée — sans rectangle datum) |
| `favicon-32x32.png` | 32×32 | Bookmark, address bar |
| `favicon-48x48.png` | 48×48 | Windows site icon |
| `favicon-96x96.png` | 96×96 | Android Chrome |
| `favicon-192x192.png` | 192×192 | Android home screen |
| `favicon-512x512.png` | 512×512 | PWA splash |
| `apple-touch-icon.png` | 180×180 | iOS home screen — fond paper rempli |
| `apple-touch-icon-orange.png` | 180×180 | Variante alternative — fond orange |
| `safari-pinned-tab.svg` | vectoriel mono | Safari pinned tab (recoloré par CSS) |
| `manifest.webmanifest` | JSON | PWA manifest (theme `#ff6b35`) |
| `head-snippet.html` | HTML | À copier-coller dans `<head>` |

## Stratégie de simplification

À 16×16, le monogram complet (rectangle datum + cloison + U + point) devient illisible. La version `favicon-16x16.png` utilise donc une **variante simplifiée** : juste le **U + le point orange**, sans le cadre. Le glyphe reste reconnaissable et la cohérence de marque est préservée par le point orange.

À partir de 32×32, le monogram complet est utilisé.

## Installation

### Hugo

```bash
cp brand/favicon/* static/
```

Puis ajouter dans `layouts/_default/baseof.html` :

```go-html-template
{{ partial "favicon.html" . }}
```

Avec `layouts/partials/favicon.html` = contenu de `head-snippet.html`.

### Rails

```bash
cp brand/favicon/* public/
```

Inclure le contenu de `head-snippet.html` dans `app/views/layouts/application.html.erb` dans le `<head>`.

### Static / autre

Copier tous les fichiers à la racine du site (même niveau que `index.html`), puis coller le contenu de `head-snippet.html` dans le `<head>`.

## Validation

- ✅ Tous les PNG aux dimensions exactes
- ✅ favicon.ico contient 16/32/48 (PNG-in-ICO, Vista+)
- ✅ apple-touch-icon avec fond rempli (`#fafaf7` paper) — pas transparent
- ✅ manifest.webmanifest valide (`theme_color: #ff6b35`)
- ✅ 16×16 lisible (variante simplifiée U + point)
- ✅ Safari pinned tab monochrome noir (recoloré par `mask-icon color`)
- ✅ HTML snippet prêt à coller

## Tester

Ouvrir `brand/favicon/preview.html` pour voir tous les rendus côte-à-côte.

Pour tester le mode sombre du SVG adaptatif :

- macOS : Préférences → Apparence → Sombre
- DevTools : F12 → Rendering → "Emulate CSS media feature prefers-color-scheme: dark"
