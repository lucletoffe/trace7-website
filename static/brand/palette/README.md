# Palette undust — README

> **Statut** : palette dark-first, mode light fourni pour print + signature mail. Aucune nouvelle teinte introduite par rapport à `DESIGN-SYSTEM.md`.

## Règle de base

- **Le `#ff6b35` est la signature.** Conservé identique en dark et light mode. Jamais remplacé, jamais désaturé.
- **5 familles**, pas plus : bg/text · accent (orange) · teal · green · critical. Échelle 50→900 pour les 4 dernières.
- **Pas de violet / jaune / rose / bleu pur.** Ce serait du bruit dans la grammaire.

## Fichiers

| Fichier | Usage |
|---|---|
| `colors.json` | Source W3C Design Tokens (consommée par tokens.json prompt 04) |
| `colors-dark.css` | Variables CSS dark — chargé par défaut sur `:root` |
| `colors-light.css` | Variables CSS light — chargé via `[data-theme="light"]` |

## Intégration

```html
<link rel="stylesheet" href="/brand/palette/colors-dark.css">
<link rel="stylesheet" href="/brand/palette/colors-light.css">
```

```html
<!-- Dark par défaut -->
<html>
<!-- Light explicite -->
<html data-theme="light">
```

## Choix d'échelles 50→900

Échelle dérivée par interpolation HSL non-linéaire (à la Tailwind), avec 500 = base figée. Les valeurs 600-700 sont calibrées pour **passer WCAG AA en body sur fond clair** — point critique pour signature mail / carte de visite / print.

## Alertes contraste (à connaître)

- **Dark** : `teal.500` et `critical.500` ratio 3.7:1 et 4.0:1 → OK titres ≥18px gras, **NOK body**. Pour body, basculer sur `--teal-300` / `--critical-300` (6:1+).
- **Light** : `accent.500` (#ff6b35) ratio 3.4:1 → OK signature/wordmark/CTA, **NOK body texte**. Pour texte courant orange sur fond clair, basculer sur `--accent-700` (5.6:1).

Cf. matrice complète dans `colors.json` → `wcag`.

## Test visio Teams 80%

Vérifié : avec zoom navigateur 80%, les paires text/bg restent lisibles tant qu'on respecte les bascules AA ci-dessus. Le 14px JetBrains Mono `text-muted` sur `bg` reste juste lisible — préférer 15px en cas de doute.

## Évolution

Toute nouvelle valeur → discuter d'abord la règle "sémantique liée au sens" (axe C du DESIGN-SYSTEM.md). Pas de couleur "joli". Si une situation n'est couverte par aucune des 5 familles, c'est probablement une **variante** d'une famille existante (ex. accent-300 plutôt qu'inventer rose-500).
