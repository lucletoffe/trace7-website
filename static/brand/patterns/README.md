# brand/patterns — v1.1

Patterns de fond et de section pour les sites undust.

## Fichiers

- `bg-dotgrid.css` — dot grid SVG inline, 24px de pas, opacité tonale (`--bg-dotgrid-opacity`)
- `bg-gradient-radial.css` — radial chaud (accent) + froid (teal), opacité tonale (`--bg-radial-opacity-warm` / `--bg-radial-opacity-cool`)
- `section-types.css` — variantes de section : `.section`, `--compact`, `--hero`, `--cta`, `--bordered`, `--elev`
- `patterns.preview.html` — showcase autonome de toutes les variantes

## Règles strictes

1. **Dot OU rien.** Jamais de line-grid concurrent.
2. **Opacité radial ≤ 6%.** C'est un scan zone, pas une décoration.
3. **`min-height: 100vh` interdit** sur `.section--hero` — plafonné à `max-height: 80vh` (cassait l'UX scroll de trace7).
4. **Toutes les opacités passent par `var(--bg-*-opacity)`** pour respecter le mécanisme `.tone-tactical` / `.tone-soft`. Ne jamais hardcoder.

## Combos validés

```html
<section class="section bg-dotgrid bg-gradient-radial">…</section>
<section class="section section--hero bg-gradient-radial">…</section>
<section class="section section--cta bg-gradient-radial--accent-only">…</section>
```

## Tonalité — opacités effectives

| Pattern         | tone-tactical | tone-soft |
|-----------------|---------------|-----------|
| dotgrid default | 3.5%          | 2.0%      |
| radial warm     | 4.5%          | 2.5%      |
| radial cool     | 3.5%          | 2.0%      |
