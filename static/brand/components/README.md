# Composants UI undust — README

Bibliothèque de composants HTML/CSS bas-niveau (vanilla, pas de framework). Dépend exclusivement de `brand/tokens/tokens.css`.

## Inventaire

| Composant | Variants | Usage |
|---|---|---|
| `.btn` | primary, ghost, quiet, critical · sm/md/lg | CTA, actions |
| `.card` | neutre + accent/teal/critical/green border-left · `.card--hover` | Cas client, méthode, étude |
| `.badge` | accent, teal, green, critical, muted | Statut, tag, durée |
| `.input` `.textarea` `.select` | + `.field` wrapper avec label/hint/error | Formulaires |
| `.link` | standard, accent, mono | Inline + footer |
| `.eyebrow` | standard, accent, teal | Kicker section/card |
| `.divider` | solid, dashed | Séparateur |
| `.site-header` | brand + nav | Header pages |
| `.site-footer` | 4 cols + legal | Footer pages |

## Intégration

```html
<link rel="stylesheet" href="/brand/tokens/tokens.css">
<link rel="stylesheet" href="/brand/components/components.css">
<html data-theme="dark">
```

## Règles

- **Pas de couleur en dur** dans un composant. Toujours `var(--*)`.
- **Pas de marge externe** sur les composants — c'est au layout parent de gérer.
- **Border-left 4px** réservé aux cards à statut narratif (cas, méthode, alerte).
- **Eyebrow** toujours UPPERCASE + tracking 0.22em.
- **Focus-visible** : tous les éléments interactifs ont un outline accent + offset 2px.

## Anti-patterns

- ❌ Utiliser `.btn` sans variant (toujours préciser `--primary` etc.)
- ❌ Mettre du body 14px dans une `.card` (rester en `--fs-body-sm` 14px ou `--fs-body` 16px)
- ❌ Stacker plus de 2 badges côte-à-côte (illisible)
- ❌ Cards `--accent` ET `--hover` sur des cas non cliquables (mensonge UX)

## À venir (v1.1)

- Tabs, accordion, tooltip, modal — non couverts par les besoins actuels antifrag.fr / undust.co
- Variants slide (versions 1920×1080 des cards, badges, eyebrow) — couvert par prompt 08
