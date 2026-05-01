# Logo undust — README

> **Wordmark** : `undust.` (toujours minuscule, point final orange).
> **Monogramme** : Datum [U] — cadre GD&T à deux cases, U centré à gauche, point orange centré à droite.

## Fichiers

| Fichier | Usage |
|---|---|
| `wordmark-color.svg` | Site, slides, signature mail (fond clair) |
| `wordmark-mono-black.svg` | Print N&B, fax, doc admin |
| `wordmark-mono-white.svg` | Fond sombre #1a1a1a, badge LinkedIn |
| `wordmark-stacked.svg` | Footer site, slide cover, carte de visite verso |
| `monogram-{color,mono-black,mono-white}.svg` | Favicon, avatar app, badge social |

## Concept monogramme — Datum [U]

Cadre **Datum (ISO 5459)** à deux cases carrées 24×24, séparées par un trait vertical. Case gauche : lettre `U` centrée. Case droite : point orange centré (signature qui fait écho au point final du wordmark).

Lecture : *« undust = ta référence »*. C'est la signature métier la plus directe — un Datum, c'est par définition ce sur quoi on s'appuie pour mesurer le reste.

L'orange est réservé au point dans la case droite. Le cadre et le U héritent de la couleur d'encre du contexte.

## Règles d'usage

- **Wordmark > monogramme** dès qu'on a la place. Le wordmark est la signature.
- **Monogramme** uniquement quand l'espace est carré et serré : favicon, avatar, badge.
- **Le point orange** est intouchable. Jamais blanc, jamais noir, jamais retiré.
- **Jamais Undust ni UNDUST**. Toujours `undust.` minuscule + point.
- **Espace de protection** : au moins la hauteur d'un `u` autour du wordmark.
- **Taille minimale wordmark** : 80 px de large à l'écran, 18 mm en print.
- **Taille minimale monogramme** : 16 px (favicon) — testé lisible.

## Couleurs

```
ink      #1a1a1a   /* trait par défaut, fond clair */
white    #ffffff   /* trait sur fond sombre */
accent   #ff6b35   /* point final wordmark, cuvette U monogramme */
```

## Intégration

```html
<!-- Hugo / static -->
<img src="/brand/logo/wordmark-color.svg" alt="undust." width="160">

<!-- React -->
import Wordmark from '/brand/logo/wordmark-color.svg';

<!-- Inline (héritage couleur) — utiliser les variants mono et currentColor -->
<svg class="logo" style="color: var(--text);">
  <use href="/brand/logo/monogram-position-mono-black.svg#root"/>
</svg>
```

## Décisions figées

- Wordmark : Titillium Web 700, letter-spacing -3.5px, point final #ff6b35.
- Monogramme principal : Position ⌖ ISO 1101 + cuvette U orange.
- Monogramme alt : Datum frame [U] + tick orange.
- Pas de gradient, pas de fill complexe, pas de drop-shadow. Trait uniforme.
