# Brand kit — guide d'utilisation (trace7.fr)

**Lis ce fichier avant de réécrire une page.** Le brand kit v1.1 est intégré, prêt à l'emploi.

## État du site

- **Site** : trace7.fr (Hugo, landing publique du logiciel — PAS l'app SaaS app.trace7.fr)
- **Tone** : `tone-soft` (déjà sur `<body>` via `baseof.html`, ne pas toucher)
- **Accent dominant** : orange `#ff6b35` (figé, cohérence holding undust)
- **Mode** : dark only

**Important — pourquoi `tone-soft`** : trace7 cible des PME industrielles B2B. Le registre `tactical` (chamfers, dot grid, letter-spacing fort) masque l'argumentation produit. `tone-soft` redéfinit automatiquement les vars : chamfer=0, letter-spacing modéré, padding card plus généreux. **Aucun composant ne hardcode** — tout passe par les vars de tones.css.

## Brand kit dispo

`static/brand/` → servi à `/brand/...` — **déjà inclus** dans `layouts/partials/head.html`, pas besoin de toucher.
Showcase complet : http://localhost:1314/brand/components/index.html

L'ordre CSS est en sandwich :
1. **Brand kit foundations** (tokens, typography, tones, patterns) chargées AVANT — variables partagées disponibles
2. **Legacy `/css/main.css`** au milieu — prioritaire pour les classes communes (`.site-header`, `.brand`, `.seven`, etc.)
3. **Brand kit composants v1.1** uniques chargés APRÈS — prioritaires (aucune collision possible vu leurs préfixes uniques `hero-composed`, `feature-card`, etc.)

⚠️ **`components.css` (atomes v1.0 : `.btn` `.card` `.badge` `.site-header` `.site-footer`) n'est volontairement PAS chargé sur trace7** — le legacy `main.css` définit son propre header/footer/wordmark Trace7 et le brand kit casserait le layout. Pour un bouton dans une nouvelle page, écris-le directement avec les vars CSS du brand kit (voir exemple plus bas) plutôt que de chercher `.btn--primary`.

## Variables CSS dispo (utilise-les, ne hardcode JAMAIS)

```css
/* Couleurs */
--bg, --bg-elev, --text, --text-muted, --border, --border-dim
--accent (orange #ff6b35), --accent-50..900, --accent-dim, --accent-glow
--teal (#4a7f8a), --teal-300/400/500/700, --teal-dim
--green (#4ade80), --green-dim
--critical (#b84848), --critical-dim

/* Typo */
--font-display (Titillium Web), --font-mono (JetBrains Mono)
--fs-display (56px), --fs-h1 (36), --fs-h2 (28), --fs-h3 (22), --fs-h4 (18)
--fs-body-lg (18), --fs-body (16), --fs-body-sm (14), --fs-caption (12), --fs-eyebrow (12)

/* Spacing — base 4 */
--space-0..32  (0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128 px)

/* Tone-driven (tone-soft override) */
--chamfer (0 en soft), --chamfer-lg (0 en soft, devient radius)
--bg-dotgrid-opacity (0.020), --bg-radial-opacity-warm (0.025)
--letter-spacing-eyebrow (0.16em), --letter-spacing-label (0.14em)
--border-strength (border-dim), --tone-card-padding (2rem)
```

## Composants v1.1 — UNIQUES, à privilégier

Aucune collision avec le CSS legacy. **Utilise ces classes en priorité** :

### hero-composed (hero produit)
```html
<section class="hero-composed hero-composed--ship">
  <span class="hero-eyebrow">Logiciel · Capture · Restitution</span>
  <h1 class="hero-thesis">Le geste de l'expert. <em>Capté.</em> Restitué.</h1>
  <p class="hero-action">Trace7 capture la décision technique en continu, la rend opposable.</p>
  <p class="hero-benefit">Vos exigences passent au crible avant de coûter en production.</p>
</section>
```
Variants : `--ship` / `--simple` × `--teal` / `--critical`

### feature-card (3 piliers / fonctionnalités produit)
```html
<article class="feature-card feature-card--accent feature-card--hover">
  <span class="feature-card__eyebrow">Pilier 01</span>
  <h3 class="feature-card__title">Capture cognitive</h3>
  <p>Audio + transcript + tags ISO GPS automatiques. Aucune saisie manuelle.</p>
</article>
```
Variants : `--accent` / `--teal` / `--critical` / `--muted` × `--lg` / `--hover`

### module-card (modules formation / fonctionnalités SaaS avec statut)
```html
<article class="module-card module-card--active">
  <h4>M1 — Capture en réunion technique</h4>
  <p>Live, transcript continu, extraction décisions.</p>
  <span class="status-badge status-badge--live">Disponible</span>
</article>
```
Variants : `--active` / `--planned` / `--archive` / `--highlight`

### proof-card (cas client : ÷15, ÷30, etc.)
```html
<div class="proof-card proof-card--accent proof-card--stack">
  <span class="proof-card__number tact-number">÷15</span>
  <span class="proof-card__label">prix pièce</span>
  <span class="proof-card__context">Ferroviaire · contrat 8 ans</span>
</div>
```

### testimonial (verbatim qui sélectionne le lecteur)
```html
<blockquote class="testimonial testimonial--teal testimonial--lg">
  <p>« On a remplacé 3 outils de spec en un mois. »</p>
  <footer>— Dir. Industriel, PME ferroviaire</footer>
</blockquote>
```

### section-divider
```html
<div class="section-divider section-divider--accent">
  <span>Cas client · Ferroviaire</span>
</div>
```

### tact-number (gros chiffre silencieux)
```html
<span class="tact-number color-accent">120</span> vers <span class="tact-number color-accent">8</span>
```

### status-badge (modules formation / features)
```html
<span class="status-badge status-badge--live">Disponible</span>
<span class="status-badge status-badge--wip">Bêta</span>
<span class="status-badge status-badge--planned">Q3 2026</span>
```

### faq-item (objections — RSSI, hébergement, prix)
```html
<details class="faq-item">
  <summary>Mes données restent-elles en France ?</summary>
  <p>Oui. Hébergement OVH HDS Strasbourg. Aucune donnée ne sort de l'UE.</p>
</details>
```

### form-embed (démo, formation, communauté)
```html
<form class="form-embed" action="https://lab.undust.co/trace7-demo/inscription" method="POST">
  <input type="text" name="website" tabindex="-1" aria-hidden="true" style="display:none">
  <div class="field">
    <label class="field__label" for="email">Email pro</label>
    <input class="input" type="email" id="email" name="email" required>
  </div>
  <div class="field">
    <label class="field__label" for="company">Entreprise</label>
    <input class="input" type="text" id="company" name="company" required>
  </div>
  <button class="btn btn--primary btn--lg" type="submit">Demander une démo</button>
</form>
```

## Atomes v1.0 — non chargés sur trace7 (collision potentielle avec legacy)

`components.css` n'est PAS chargé. Les classes `.btn`, `.card`, `.badge`, `.site-header`, `.site-footer`, `.input`, `.eyebrow`, `.divider`, `.link` du brand kit ne sont **PAS** disponibles ici.

Pour un bouton dans une nouvelle page, écris-le directement avec les vars CSS :

```html
<a href="/demo/" class="t7-cta-primary">Demander une démo →</a>
```
```css
.t7-cta-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--fs-body-sm);
  font-weight: var(--fw-medium);
  letter-spacing: 0.04em;
  padding: 12px 22px;
  border-radius: var(--radius-md);
  background: var(--accent);
  color: #fff;
  border: 1px solid var(--accent);
  text-decoration: none;
  transition: background var(--t-fast);
}
.t7-cta-primary:hover { background: var(--accent-600); }
```

Pour les composants narratifs (hero, cards de features, témoignages, etc.), **utilise les v1.1 ci-dessus** — ils sont chargés et fonctionnent sans collision.

## Patterns / sections

```html
<section class="bg-dotgrid">…</section>           <!-- subtil en tone-soft (0.020) -->
<section class="bg-gradient-radial">…</section>
<section class="section section--hero">…</section>
<section class="section section--cta">…</section>
```

## Icônes

```html
<svg width="24" height="24"><use href="/brand/icons/icons-symbols.svg#icon-handshake"/></svg>
<svg width="24" height="24"><use href="/brand/icons/icons-symbols-v1.1.svg#icon-linkedin"/></svg>
```

v1.0 (21), v1.1 (12) — voir `/brand/icons/preview.html` pour la liste visuelle.

## Logo & wordmark

```html
<!-- Wordmark "Trace7" en couleur (T initial maj, 7 en orange) -->
<a href="/" class="brand"><strong>Trace</strong><span class="seven">7</span></a>

<!-- Monogramme undust en footer (signature holding) -->
<img src="/brand/logo/monogram-mono-white.svg" alt="undust" width="32">
<span>by undust</span>
```

**Important** : pas "undust · Trace7" en haut. Wordmark Trace7 seul. Le monogramme undust va en footer comme signature holding.

## Architecture cible trace7.fr

```
/                       Hero produit "3 piliers" + cas client + CTA démo
/produit/               Hub fonctionnel
  /produit/capture/
  /produit/restitution/
  /produit/conformite/
/formation/             Modules pédagogiques EMBARQUÉS dans l'app
/communaute/            Plateforme d'échange INTÉGRÉE à l'app
/cas/                   Études de cas publiques
  /cas/120-vers-8/        ÷15 sur prix pièce ferroviaire
/recherche/             Verrou N4 résumé + lien undust.co/recherche/
/pricing/               Grille publique 4 tiers + early bird + affiliation
/affiliation/           Programme d'affiliation détaillé
/securite/              RSSI : OVH France HDS / chiffrement / on-premise
/changelog/             Releases publiques + RSS
/demo/                  Questionnaire pré-démo → lab.undust.co/trace7-demo/inscription
/legal/{4}              Mini canonical undust.co
```

Menu header cible : `Produit ▾ · Formation · Communauté · Cas · Pricing · Démo →`

## Pricing (rappel — voir handoff 2vZr9w8r)

4 tiers + early bird 50 places fondatrices :

| Tier | Inclut | Early bird | Tarif courant | Affiliation |
|---|---|---|---|---|
| Praticien individuel | Logiciel + formation + communauté + 1 cas perso | 39 €/mois | 79 €/mois | 30% sur 12 mois |
| Équipe (5 utilisateurs) | + workspace + support priorité | 149 €/mois | 349 €/mois | 30% sur 12 mois |
| Atlas client | Déploiement complet sur-mesure (mission antifrag) | sur devis | 40-100 k€ | 10% one-shot |
| On-premise | Trace7 + Atlas7 hébergés chez le client | nous contacter | nous contacter | 5% one-shot |

## Pièges à éviter

1. ❌ Ne pas hardcoder de hex — toujours `var(--accent)`, `var(--teal)`, etc.
2. ❌ Ne pas redéfinir `--bg`, `--text`, `--accent` etc. — ça casse le mécanisme tone.
3. ❌ Ne pas utiliser `font-family` en dur — utiliser `var(--font-display)` ou `var(--font-mono)`.
4. ❌ Ne pas mettre `<body class="tone-tactical">` — trace7 est en `tone-soft`. Ne pas dupliquer ni override.
5. ❌ Ne pas confondre avec `app.trace7.fr` (Rails SaaS auth-walled, hors scope brand kit).
6. ❌ Ne pas re-hosting Tally — Tally à dégager. Form via PHP o2switch ou lab.undust.co Rails.
7. ✅ Préférer v1.1 (préfixe unique) avant v1.0 atomes.

## Vérification après écriture

```bash
# Hugo serve déjà actif sur port 1314
hugo serve -D --bind 127.0.0.1 -p 1314 --baseURL http://localhost:1314/ --appendPort=false

# Build production test
hugo --minify --quiet
ls public/

# Pas de hex hardcodé ?
grep -rE '#[0-9a-fA-F]{6}' content/ static/css/ layouts/ | grep -v 'var(' | grep -v '/brand/'
```

## Liens cross-site (footer canonique)

```
undust.co · antifrag.fr · trace7.fr · lucletoffe.com
```

Avec footer trace7 spécifique : `<img src="/brand/logo/monogram-mono-white.svg"> by undust`.
