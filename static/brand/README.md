# undust brand kit — v1.1

**Date** : 2026-04-29
**Owner** : Luc Létoffé
**Statut** : v1.0 (atomes) + v1.1 (couche narrative) — couvre les 3 sites publics undust : `undust.co`, `antifrag.fr`, `trace7.fr`.

---

## Architecture

```
brand/
├── tokens/             [v1.0]  variables CSS unifiées (palette, typo, spacing, radius, shadow)
├── typography/         [v1.0]  Titillium Web + JetBrains Mono + utility classes
├── tones/              [v1.1]  mécanisme .tone-tactical / .tone-soft
├── components/         [v1.0 + v1.1]  atomes + molécules narratives
├── patterns/           [v1.1]  bg-dotgrid, bg-gradient-radial, section-types
├── icons/              [v1.0 + v1.1]  symbol-library Heroicons stroke 1.5
├── logo/               [v1.0]  wordmark + monogramme
├── palette/            [v1.0]  W3C tokens + previews
├── favicon/            [v1.0]  ico + png + svg + manifest
├── linkedin/           [v1.0]  banner, avatars, cards
├── email/              [v1.0]  signature mail
├── slides/             [v1.0]  template présentation
├── print/              [v1.0]  carte de visite
├── photos/             [v1.0]  photo Luc avatar + bandeau
└── clients/            [v1.0]  logos clients (référence)
```

## Ordre d'inclusion CSS canonique

```html
<link rel="stylesheet" href="/brand/tokens/tokens.css">
<link rel="stylesheet" href="/brand/typography/typography.css">
<link rel="stylesheet" href="/brand/tones/tones.css">
<!-- patterns -->
<link rel="stylesheet" href="/brand/patterns/bg-dotgrid.css">
<link rel="stylesheet" href="/brand/patterns/bg-gradient-radial.css">
<link rel="stylesheet" href="/brand/patterns/section-types.css">
<!-- atomes v1.0 -->
<link rel="stylesheet" href="/brand/components/components.css">
<!-- molécules v1.1 (charger seulement ce qui est utilisé) -->
<link rel="stylesheet" href="/brand/components/hero-composed.css">
<link rel="stylesheet" href="/brand/components/feature-card.css">
<link rel="stylesheet" href="/brand/components/module-card.css">
<link rel="stylesheet" href="/brand/components/proof-card.css">
<link rel="stylesheet" href="/brand/components/testimonial.css">
<link rel="stylesheet" href="/brand/components/section-divider.css">
<link rel="stylesheet" href="/brand/components/tact-number.css">
<link rel="stylesheet" href="/brand/components/status-badge.css">
<link rel="stylesheet" href="/brand/components/faq-item.css">
<link rel="stylesheet" href="/brand/components/form-embed.css">
```

Puis sur `<body>` : `<body class="tone-tactical">` (undust.co, antifrag.fr) ou `<body class="tone-soft">` (trace7.fr).

---

## Mécanisme de tonalité (v1.1)

**Décision actée Q1 2026-04-29** : implémenter le registre tactical/soft via une **classe sur `<body>`** qui redéfinit un set de variables CSS héritées par tous les composants. Aucune duplication de classes `--tactical` / `--soft` sur les composants — tout passe par les vars.

### Variables redéfinies par tonalité (liste exhaustive)

| Variable                       | tone-tactical (default) | tone-soft       |
|--------------------------------|-------------------------|-----------------|
| `--chamfer`                    | 6px                     | 0               |
| `--chamfer-lg`                 | 12px                    | 0               |
| `--bg-dotgrid-opacity`         | 0.035                   | 0.020           |
| `--bg-radial-opacity-warm`     | 0.045                   | 0.025           |
| `--bg-radial-opacity-cool`     | 0.035                   | 0.020           |
| `--letter-spacing-eyebrow`     | 0.22em                  | 0.16em          |
| `--letter-spacing-label`       | 0.18em                  | 0.14em          |
| `--letter-spacing-display`     | -0.02em                 | -0.015em        |
| `--border-strength`            | 1px solid var(--border) | 1px solid var(--border-dim) |
| `--border-strength-dim`        | 1px solid var(--border-dim) | 1px solid var(--border-dim) |
| `--tone-card-padding`          | 1.75rem                 | 2rem            |
| `--tone-section-padding-y`     | clamp(3rem, 8vw, 5rem)  | clamp(3rem, 7vw, 4.5rem) |
| `--tone-divider-tracking`      | 0.22em                  | 0.14em          |

**Règle** : tout composant v1.1 consomme **exclusivement** ces variables, jamais de valeurs en dur. Toute fuite (valeur hardcodée) casse le mécanisme.

### Affectation par site

| Site            | Tonalité       | Justification |
|-----------------|----------------|---------------|
| undust.co       | `tone-tactical` | Holding · registre signature |
| antifrag.fr     | `tone-tactical` | Média/manifeste · registre signature |
| trace7.fr       | `tone-soft`     | SaaS B2B PME industrielles · registre posé, "produit de combat" masquait l'argumentation |
| lucletoffe.com  | _en attente_   | Hors scope T7 |

---

## Catalogue des composants v1.1

| Composant         | Moment cognitif servi              | Variantes principales                        | Réf SSOT |
|-------------------|------------------------------------|----------------------------------------------|----------|
| **hero-composed** | #1 identité + #2 thèse + #3 action + #4 bénéfice | `--ship` (4 strates) / `--simple` (l2 seul) · `--teal` / `--critical` | §5 `.these` |
| **feature-card**  | #2 thèse + preuve courte           | `--accent` / `--teal` / `--critical` / `--muted` · `--lg` · `--hover` | §5 `.offer-card` |
| **module-card**   | #6 fonctionnalité + statut         | `--active` / `--planned` / `--archive` / `--highlight` | §5 |
| **proof-card**    | #2bis preuve par chiffre           | `--accent` / `--teal` / `--critical` / `--muted` · `--stack` | §5 `.tact-number` |
| **testimonial**   | #5 self-sélection par verbatim     | `--teal` (default) / `--accent` / `--critical` · `--lg` | §5 `.shouting` |
| **section-divider** | Respiration + étiquetage axe A   | `--accent` / `--teal` / `--green` / `--critical` / `--muted` · `--bare` | §5 `.section-divider` |
| **tact-number**   | Hiérarchie silencieuse             | `--soft` / default / `--strong` · `.color-*` | §5 `.tact-number` |
| **status-badge**  | #7 qu'est-ce qui bouge (axe C)     | `--live` (pulsante) / `--wip` (=`--active`) / `--planned` / `--archive` | §5 `.status-badge` |
| **faq-item**      | Levée d'objection                  | accordion natif `<details>` | – |
| **form-embed**    | Conversion souveraine              | endpoint-agnostic — `action="{{ENDPOINT_URL}}"` | – |

---

## Patterns v1.1

- `bg-dotgrid.css` — dot grid 24px, opacité tonale
- `bg-gradient-radial.css` — radial chaud + froid, opacité tonale (jamais > 6%)
- `section-types.css` — `.section`, `--compact`, `--hero` (max 80vh, jamais 100vh), `--cta`, `--bordered`, `--elev`

Voir `brand/patterns/README.md` pour les règles strictes.

---

## Form embed — backends souverains (Q2 2026-04-29)

Le brand kit livre un **pattern HTML générique avec endpoint placeholder**, pas un endpoint figé. Chaque site branche le backend qui correspond à ses contraintes.

### Backend 1 — PHP natif sur o2switch (recommandé · le plus souverain)

`form.php` à la racine du site :

```php
<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }
if (!empty($_POST['website'])) { exit; } // honeypot
$email   = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$company = htmlspecialchars($_POST['company'] ?? '');
$context = htmlspecialchars($_POST['context'] ?? '');
if (!$email) { http_response_code(400); exit; }
$to = 'luc@undust.co';
$subject = '[waitlist] '.$company;
$body = "Email: $email\nEntreprise: $company\n\n$context";
$headers = "From: site@undust.co\r\nReply-To: $email\r\n";
mail($to, $subject, $body, $headers);
header('Location: /merci.html');
```

Form : `<form class="form-embed" action="/form.php" method="POST">…</form>`
- ✅ FR, hébergement souverain, déjà en prod chez Luc
- ✅ Zéro dépendance JS, GDPR-natif
- ⚠️ Pas de double opt-in built-in (à ajouter si newsletter)

### Backend 2 — Cabin Forms (UK, GDPR-compliant, paid)

```html
<form class="form-embed" action="https://withcabin.com/forms/{FORM_ID}/submit" method="POST">…</form>
```
- ✅ UK + GDPR + privacy-first
- ✅ Dashboard intégré, double opt-in, anti-spam
- ⚠️ Plan payant (~£10/mo)

### Backend 3 — FormSpree (US, fallback rapide)

```html
<form class="form-embed" action="https://formspree.io/f/{FORM_ID}" method="POST">…</form>
```
- ✅ Setup en 2 minutes
- ✅ Plan gratuit (50 soumissions/mois)
- ⚠️ Hébergement US — pas idéal pour souveraineté
- 👉 Fallback uniquement, ou prototypage

**Recommandation par site** :
- `undust.co`, `antifrag.fr` → Backend 1 (PHP o2switch)
- `trace7.fr` → Backend 1 (PHP o2switch) · remplace Tally à dégager
- Prototypes / landing temporaires → Backend 3

---

## Décisions design tranchées (référence brief v1.1)

### §4.1 — Registre visuel : modulé par site via `.tone-*`

**Décision** : option (C) au service de (B). Mécanisme `.tone-tactical` / `.tone-soft` sur `<body>`. Voir section "Mécanisme de tonalité" ci-dessus.

### §4.2 — Couleurs accent par site

| Site            | Accent dominant         | Statut |
|-----------------|-------------------------|--------|
| undust.co       | `#ff6b35` (orange)      | Figé · signature holding |
| antifrag.fr     | _en attente skin T/O_   | À trancher après handoff T7 |
| trace7.fr       | `#ff6b35` (orange)      | Figé · cohérence holding |
| lucletoffe.com  | _en attente_            | Hors scope |

### §4.3 — Wordmark

Forme canonique : **"Trace7"** (T initial maj, reste minuscule, **7 en orange**). Pas d'uppercase.
Identique pour : Fractal7, Atlas7, Forge7.
Le wordmark holding **"undust"** reste en minuscules (pas de capitalisation).

### §4.4 — Iconographie

Pack étendu : `icons-symbols.svg` (v1.0, 21 icons) + `icons-symbols-v1.1.svg` (v1.1, 12 icons cross-site).

Extensions v1.1 : `icon-linkedin`, `icon-github`, `icon-youtube`, `icon-mail`, `icon-calendar`, `icon-map-pin`, `icon-external-link`, `icon-whatsapp`, `icon-search`, `icon-menu`, `icon-sun`, `icon-moon`.

Style : Heroicons stroke 1.5, currentColor, viewBox 24×24. Charger les deux fichiers dans le `<head>` :
```html
<svg style="display:none"><use href="/brand/icons/icons-symbols.svg"/></svg>
<svg style="display:none"><use href="/brand/icons/icons-symbols-v1.1.svg"/></svg>
```

---

## Critères d'acceptation v1.1

- [x] 8 composants narratifs livrés avec preview HTML autonome
- [x] 3 patterns (dot grid + gradient radial + section-types) livrés
- [x] FAQ + form embed livrés
- [x] README.md mis à jour
- [x] Aucun composant ne dépend d'autre chose que tokens.css + typography.css + tones.css
- [x] Toutes les preview.html ouvrent en local sans build et affichent tous les variants
- [x] 4 décisions design tranchées et documentées
- [x] Mécanisme `.tone-*` testable via `index.html` (toggle sticky live)

---

## Liens

- Brief v1.0 : `GzRUfJBc`
- Brief v1.1 : *cette livraison*
- Charte v1.0 : `c6RiVhwV`
- Brand canonique : `rK5zlK4K`
- DESIGN-SYSTEM.md SSOT : `9iOb1gLz`
- Page index v1.1 (showcase complet) : `brand/components/index.html`

---

**Pause obligatoire après livraison** : valider visuellement chaque preview avec Luc avant intégration sites. Le mécanisme `.tone-*` doit être testé sur trace7.fr (port 8004) en bascule live avant d'être figé.
