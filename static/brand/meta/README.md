# Meta tags & JSON-LD — par stack et par marque

Templates SEO meta + Schema.org JSON-LD pour les 4 sites undust.

## Fichiers

| Fichier | Pour | Usage |
|---|---|---|
| `seo-meta-hugo.html` | undust.co (Hugo) | Partial à copier dans `layouts/partials/` |
| `seo-meta-ghost.hbs` | signal.antifrag.fr (Ghost) | Partial à coller dans le thème ou Code Injection |
| `seo-meta-static.html` | antifrag.fr + lucletoffe.com (static) | Snippet à coller dans `<head>` de chaque page |
| `jsonld-undust.json` | undust.co | Organization + WebSite |
| `jsonld-antifrag.json` | antifrag.fr | Organization (child undust) + WebSite |
| `jsonld-signal.json` | signal.antifrag.fr | Periodical + WebSite — **placeholder ISSN** |
| `jsonld-luc.json` | lucletoffe.com | Person + WebSite |

## Twitter handle

`@lucletoffe` partout (twitter:site + twitter:creator). Une seule voix porte les 4 marques.

## Slots à compléter

### `jsonld-undust.json`
- `vatID` : numéro TVA intracommunautaire (ex: `FR12345678901`) — `{{TBD: VAT}}`

### `jsonld-signal.json`
- `issn` : ISSN BnF — `{{ISSN}}` (voir `seo/signal/ISSN-TODO.md` à créer)

### Tous JSON-LD
- `image` URL : remplacer par l'URL réelle des assets une fois déployés
- Les `sameAs` peuvent être étendus (GitHub, YouTube, Mastodon, Bluesky) selon comptes actifs

## Intégration par stack

### Hugo (undust.co)
```bash
# Copier le partial
cp seo-meta-hugo.html /home/ll/Projects/undust-hugo/layouts/partials/seo-meta.html

# Dans baseof.html, ajouter dans <head> :
{{ partial "seo-meta.html" . }}

# Dans le front matter de chaque page :
---
title: "Titre de la page"
description: "Description 150-160 chars"
ogImage: "/og-page.png"
ogType: "website"  # ou "article"
jsonld: '{"@context":"https://schema.org",...}'  # optionnel, override site-level
---

# Dans config.toml :
[params]
  title = "undust"
  description = "Continuité cognitive industrielle"
  twitter = "lucletoffe"
  locale = "fr_FR"
  jsonld = """ … contenu de jsonld-undust.json (échappé) … """
```

### Ghost (signal.antifrag.fr)
1. Settings → Code Injection → Site Header : coller `seo-meta-ghost.hbs` (sans les `{{!-- --}}` Handlebars qui sont des commentaires)
2. Une fois ISSN reçu : décommenter les balises `<meta name="dcterms.identifier">` + injecter `jsonld-signal.json` dans Code Injection avec ISSN renseigné
3. Vérifier que `{{ghost_head}}` dans `default.hbs` charge bien les meta auto Ghost AVANT ce partial

### Static HTML (antifrag.fr + lucletoffe.com)
Pour chaque page HTML :
1. Coller `seo-meta-static.html` dans le `<head>`
2. Remplacer les placeholders `{{TITLE}}`, `{{DESCRIPTION}}`, etc.
3. Pour `{{JSONLD}}` : minifier le contenu de `jsonld-antifrag.json` ou `jsonld-luc.json` (selon site) en une ligne, ou inclure un fichier JSON séparé via :
   ```html
   <script type="application/ld+json" src="/jsonld.json"></script>
   ```

## Validation

- **Test Schema.org** : https://validator.schema.org/
- **Test Facebook OG** : https://developers.facebook.com/tools/debug/
- **Test Twitter Card** : https://cards-dev.twitter.com/validator (deprecated mais utilisable)
- **Test LinkedIn** : https://www.linkedin.com/post-inspector/
- **Test Rich Results Google** : https://search.google.com/test/rich-results

## Anti-patterns à refuser

- ❌ JSON-LD avec champs hallucinés (SIREN, ISSN, adresse) — utiliser les placeholders `{{TBD: ...}}`
- ❌ Twitter handles différents par marque — TOUJOURS `@lucletoffe`
- ❌ `og:image` < 1200×630px (LinkedIn refuse les images < 600×315 minimum)
- ❌ `description` > 160 chars (Google tronque)
