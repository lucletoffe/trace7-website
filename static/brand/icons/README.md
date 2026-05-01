# undust — Pack icônes

21 icônes line-art cohérentes pour tout l'écosystème undust.

## Spécifications

- **viewBox** : 24×24 (uniforme)
- **stroke-width** : 1.5 (uniforme)
- **stroke** : `currentColor` (héritent la couleur du parent)
- **fill** : `none`
- **stroke-linecap** : `round`
- **stroke-linejoin** : `round`

## Inventaire

| Icône | Usage |
|---|---|
| `users` | équipe, communauté |
| `handshake` | partenariat, collaboration |
| `network` | connectivité, réseau |
| `cog` | système, infrastructure |
| `tools` | atelier, fabrication |
| `beaker` | R&D, recherche |
| `book-open` | manuel, manifeste |
| `magnifying-glass` | recherche, audit |
| `scale` | équilibre, antifragilité |
| `chart-bar` | data, mesure |
| `lightning` | signal, performance |
| `lock` | sécurité, souveraineté |
| `shield-check` | conformité validée |
| `flag` | milestone, version |
| `check` | validation |
| `x-mark` | erreur, refus |
| `cursor-arrow` | action, CTA |
| `chevron-right` | navigation |
| `cube` | composant, atomic |
| `tag` | label, classification |
| `clock` | temps, durée |

## Fichiers

```
brand/icons/
├── svg/                    # 21 SVG individuels
│   ├── users.svg
│   ├── network.svg
│   └── …
├── icons-symbols.svg       # symbol library agrégée
├── preview.html            # galerie HTML
└── README.md               # ce fichier
```

## Intégration

### A — Symbol library (recommandé)

Performance optimale : 1 seul fichier chargé pour toutes les icônes du site.

**Hugo** — `layouts/partials/icons-symbols.html` :

```go-html-template
<div hidden>{{ readFile "static/icons-symbols.svg" | safeHTML }}</div>
```

Inclure une fois en haut du `<body>` du layout principal :

```go-html-template
{{ partial "icons-symbols.html" . }}
```

Puis utiliser n'importe où :

```html
<svg class="icon"><use href="#icon-users"/></svg>
```

**Rails** — `app/views/shared/_icons_symbols.html.erb` :

```erb
<div hidden><%= File.read(Rails.root.join('app/assets/images/icons-symbols.svg')).html_safe %></div>
```

Inclure dans le layout :

```erb
<%= render 'shared/icons_symbols' %>
```

### B — SVG individuel inline

Pour les slides, signatures mail, ou si une seule icône utilisée dans une page :

```html
<svg viewBox="0 0 24 24" width="24" height="24"
     fill="none" stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="5" r="2"/>
  <circle cx="5"  cy="19" r="2"/>
  <circle cx="19" cy="19" r="2"/>
  <path d="M12 7v3M12 10 6.5 17.5M12 10l5.5 7.5M7 19h10"/>
</svg>
```

### CSS minimal

```css
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;   /* aligne sur la baseline du texte */
}
```

`width/height: 1em` fait suivre la taille du `font-size` du parent — l'icône scale avec son contexte sans config supplémentaire.

## Couleur

Comme `stroke="currentColor"`, l'icône hérite la couleur du parent :

```html
<button style="color: #ff6b35">
  <svg class="icon"><use href="#icon-cursor-arrow"/></svg>
  Démarrer
</button>
```

Pour forcer une couleur spécifique :

```html
<svg class="icon" style="color: var(--orange)"><use href="#icon-flag"/></svg>
```

## Tailles recommandées

- **Inline texte** : 1em (suit le `font-size`)
- **Boutons** : 16-20 px
- **Cartes / metadata** : 18-24 px
- **Slides / hero** : 48-64 px

À 24×24 et au-dessus, le trait 1.5px est optimal. En dessous de 16px, préférer des PNG (cf. favicon set, prompt 11).

## Ajouter une icône

1. Créer `brand/icons/svg/<nom>.svg` avec les mêmes attributs (viewBox 24, stroke 1.5, currentColor, round caps).
2. Ajouter le `<symbol id="icon-<nom>">` correspondant dans `icons-symbols.svg`.
3. Ajouter une cellule dans `preview.html`.
