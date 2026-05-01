# Tokens undust — README

Source unique pour tous les sites/apps undust : `tokens.json` (W3C Design Tokens) → `tokens.css` (CSS custom properties) + `tailwind.config.js` (preset Tailwind v4).

## Fichiers

| Fichier | Format | Pour |
|---|---|---|
| `tokens.json` | W3C Design Tokens | Source unique, à régénérer le reste depuis ici |
| `tokens.css` | CSS custom properties (`:root`) | Hugo, Rails ERB, HTML statique |
| `tailwind.config.js` | Preset Tailwind v4 | Projets React/Next, antifrag.fr |

## Couvre

- **Color** : palette dark + light (5 familles, échelles 50→900)
- **Typography** : 11 niveaux + 2 fonts + 5 weights
- **Spacing** : base 4px, 14 paliers (0 → 128px)
- **Radius** : 6 paliers (0 → 9999px)
- **Border-width** : 3 paliers (1/2/4px)
- **Shadow** : 5 niveaux dont 2 glow accent/teal
- **Z-index** : 8 paliers nommés
- **Transition** : 3 durées + cubic-bezier undust

## Intégration

### Hugo (undust.co, antifrag.fr)
```html
<!-- layouts/partials/head.html -->
<link rel="stylesheet" href="{{ "brand/tokens/tokens.css" | relURL }}">
<html data-theme="dark">
```
Copier `tokens.css` dans `static/brand/tokens/`. Build Hugo le sert tel quel.

### Rails (trace7, ec2r-app)
```ruby
# config/initializers/assets.rb
Rails.application.config.assets.precompile += %w[brand/tokens.css]
```
```erb
<%= stylesheet_link_tag 'brand/tokens', 'data-turbo-track': 'reload' %>
<html data-theme="dark">
```

### Next.js / React (lucletoffe.com)
```js
// tailwind.config.js
const undust = require('./brand/tokens/tailwind.config.js');
module.exports = { presets: [undust], content: ['./src/**/*.{js,jsx,ts,tsx}'] };
```
```js
// _app.tsx
import '/brand/tokens/tokens.css';
```

## Conventions de naming

- CSS : `kebab-case` avec préfixe famille (`--accent-500`, `--space-4`, `--fs-h1`)
- JS Tailwind : `kebab-case` côté classes (`bg-accent-500`, `text-h1`)
- JSON : `camelCase` ou `kebab-case` selon W3C — non normalisé, on suit la lecture

## Évolution

1. Modifier d'abord `tokens.json` (source de vérité)
2. Régénérer `tokens.css` et `tailwind.config.js` (manuellement v1, plus tard via Style Dictionary)
3. Commiter en un seul commit `tokens: <change>`
4. Bumper version dans le header de `tokens.json`

## Anti-patterns

- ❌ Définir `--my-color: #foobar` dans un fichier de composant
- ❌ Utiliser une valeur hex en dur dans un composant — passer par les tokens
- ❌ Ajouter une nouvelle teinte sans passer par DESIGN-SYSTEM.md
- ❌ Override `--accent` (la signature undust)
