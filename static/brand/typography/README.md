# Typographie undust — README

> **Display** : Titillium Web (300 / 400 / 600 / 700 + 300 italic) — Google Fonts, OFL.
> **Body + chiffres** : JetBrains Mono (400 / 500 + italics) — Google Fonts, OFL.

Choix confirmés vs DESIGN-SYSTEM.md. Pas d'alternative retenue : Titillium = lisibilité industrielle géométrique, JetBrains Mono = chiffres tabulaires + caractère "instrument technique". Les deux sont libres en commercial.

## Scale (11 niveaux)

| Niveau       | Famille | Taille     | Line  | Weight | Tracking | Usage |
|--------------|---------|------------|-------|--------|----------|-------|
| `display`    | display | 56px       | 1.10  | 700    | -0.02em  | Slide cover, hero pitch |
| `h1`         | display | 36px       | 1.15  | 700    | -0.015em | Page principale, slide H1 |
| `h2`         | display | 28px       | 1.20  | 600    | -0.01em  | Section, slide H2 |
| `h3`         | display | 22px       | 1.25  | 600    | -0.005em | Sous-section, card title slide |
| `h4`         | display | 18px       | 1.30  | 600    | 0        | Card title web, label fort |
| `body-lg`    | mono    | 18px       | 1.55  | 400    | 0        | Paragraphe principal, lead |
| `body`       | mono    | 16px       | 1.55  | 400    | 0        | Corps standard |
| `body-sm`    | mono    | 14px       | 1.50  | 400    | 0        | Note, footer, meta |
| `caption`    | mono    | 12px       | 1.40  | 400    | 0.02em   | Date, durée, légende |
| `mono-quote` | mono    | 14px ital  | 1.55  | 400    | 0        | Verbatim, citation inline |
| `eyebrow`    | mono    | 12px UPPER | 1.40  | 500    | 0.22em   | Kicker shouting |

★ Pour les **slides 1920×1080**, basculer body sur 22px / h2 sur 56px (cf. `undust.css` Marp existant). La scale ci-dessus est calibrée pour le **web** par défaut.

## Règles dures

- Maximum **2 fonts** chargées (display + mono). Jamais une troisième.
- Maximum **4 weights par font** (300/400/600/700 display, 400/500 mono).
- Body : **min 16px web**, min 22px slide, min 17px effectif visio Teams 80%.
- Eyebrow : toujours **uppercase + tracking 0.22em + couleur muted** ou variant (`shouting` / `shouting-accent` / `shouting-teal`).
- `<em>` orange (héritage `undust.css`) — pas italic standard. Italic réservé aux verbatim et tagline.

## Imports

### HTML head
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,300;0,400;0,600;0,700;1,300&family=JetBrains+Mono:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/brand/typography/typography.css">
```

### Self-host (recommandé pour antifrag.fr / undust.co)
Télécharger les `.woff2` depuis [Fontsource](https://fontsource.org/fonts/titillium-web) et [Fontsource JetBrains Mono](https://fontsource.org/fonts/jetbrains-mono), puis @font-face local. Plus rapide, RGPD-clean (pas d'appel Google).

## Anti-patterns

- ❌ Mélanger Inter, Roboto, Helvetica avec Titillium
- ❌ Body en Titillium (réservé aux titres)
- ❌ Italic standard (utiliser orange `<em>` ou verbatim)
- ❌ 5 niveaux de gras par page (3 max : titre / corps / note)

## Test visio Teams 80%

À 80% de zoom navigateur (config par défaut Teams présentation) :
- body 16px → ~13px effectif → **NOK** sur slide. Sur slide passer à 22px.
- body-sm 14px → ~11px effectif → réservé web header/footer, jamais slide.
- caption 12px → 10px effectif → web only, ne pas projeter.

Cf. règle DESIGN-SYSTEM.md : bullets/corps slide min 17px effectif.
