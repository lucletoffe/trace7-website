# Slide template undust — README

Template HTML standalone pour tous les pitchs undust (Trace7, Forge7, conférences, futur livre).

## Format

- **1920 × 1080** fixe (auto-scale au viewport)
- **Mode dark par défaut** — toggle light pour impressions
- **8 slides types** démontrées :
  1. **Cover** — logo + h1 + tagline + meta auteur/date
  2. **Section divider** — fond anthracite, numéro de partie, titre énorme
  3. **Bullets** — h2 + 3-5 puces ▸ orange numérotées
  4. **Stat hero** — 1 chiffre énorme orange + caption + source
  5. **Comparatif** — 2 colonnes avant (rouge) / après (orange)
  6. **Image full bleed** — visuel 1920×1080 + caption sur fond
  7. **Quote** — guillemet typo orange + citation 72px + attribution
  8. **Credentials** — photo 480×600 + nom + rôle + bio + 3 highlights

## Navigation clavier

| Touche | Action |
|---|---|
| `←` / `PageUp` / `K` | Slide précédente |
| `→` / `Espace` / `PageDown` / `J` | Slide suivante |
| `Home` / `End` | Première / dernière |
| `F` | Plein écran |
| `D` | Toggle dark/light |
| `T` | Start/pause timer (dblclick = reset) |

## Réutilisation pour un nouveau pitch

1. **Copier** `template.html` → `pitch-{nom}-{date}.html`
2. **Modifier l'ordre des sections** : chaque slide est une `<section class="slide ...">` indépendante
3. **Ajouter une slide** : copier-coller un bloc `<section>`, mettre à jour `id="sN"` et le `<div class="pagenum"><span class="current">NN</span> / TT</div>`
4. **Mettre à jour le total** : changer `<span id="navTotal">8</span>` → nombre de slides
5. **Charte respectée** : ne pas modifier les variables CSS dans `:root` et `[data-theme="dark"]` — elles sont alignées sur les tokens `brand/tokens/tokens.css`

## Slides types — quand utiliser

| Type | Quand |
|---|---|
| **Cover** | Toujours en slide 01 |
| **Section divider** | Toutes les 4-6 slides pour rythmer un pitch long (>15 slides) |
| **Bullets** | Énumérations courtes (3-5 items max), méthodologies, features |
| **Stat hero** | Une fois maximum par pitch — le chiffre qui retient |
| **Comparatif** | Avant/après, problème/solution, eux/nous |
| **Image fullbleed** | Respiration visuelle, terrain, atmosphère |
| **Quote** | Témoignage client, citation forte, validation externe |
| **Credentials** | Slide "qui parle", "qui sommes-nous", page bio |

## Composants utilitaires inclus

- `.kicker` — eyebrow orange au-dessus des h2
- `.accent` / `.teal` / `.strong` — colorations inline
- `.slide-footer` — wordmark undust + label slide bas-gauche
- `.pagenum` — NN / TT bas-droite (orange sur courant)
- `.theme-toggle` / `.timer-box` / `.nav` — chrome fixe (caché en print)

## Export PDF

`Cmd+P` → Save as PDF → 1920×1080 paysage. Le `@media print` cache la nav et force `transform: none`.

## Export PowerPoint

Utiliser le skill **"Export as PPTX (screenshots)"** (PNG par slide, fidèle au pixel) ou **"Export as PPTX (editable)"** (texte natif PowerPoint, éditable).

## Couleurs (alignées sur tokens.css)

| Token | Light | Dark |
|---|---|---|
| `--accent` | `#ff6b35` | `#ff7a4a` |
| `--teal` | `#4A7F8A` | `#6BA3B0` |
| `--critical` | `#B84848` | `#e57373` |
| `--green` | `#16a34a` | `#4ade80` |
| `--bg` | `#faf8f3` | `#1a1a1a` |
| `--text` | `#1a1a1a` | `#e5e7eb` |

## Typo

- **Display** : `Titillium Web` (300, 400, 600, 700)
- **Mono / corps** : `JetBrains Mono` (400, 500, 600)
- Tailles minimales : **24px** corps · **14px** meta — lisibles en visio Teams 80%

## Règles d'or

- ✅ Wordmark `undust.` toujours en bas-gauche footer
- ✅ Numéro slide bas-droite en JetBrains Mono (orange sur courant)
- ✅ "7" en orange dans tout nom produit (Trace7, Forge7, Atlas7, Fractal7)
- ✅ Pas d'animation (Luc préfère slide nette, pas de flying bullets)
- ❌ Pas de gradient bling, pas d'emoji décoratif
