# SEO files — Luc Létoffé (lucletoffe.com)

Pack SEO complet pour le site personnel static HTML.

**Tone** : `tone-soft` (paper background `#fafaf7` au lieu de noir mat) — registre posé, voix perso.

## Fichiers

| Fichier | Destination |
|---|---|
| `robots.txt` | `/robots.txt` |
| `sitemap.xml` | `/sitemap.xml` |
| `llms.txt` | `/llms.txt` |
| `ai.txt` | `/ai.txt` |
| `humans.txt` | `/humans.txt` |
| `security.txt` | `/.well-known/security.txt` |
| `404.html` | `/404.html` |
| `410.html` | `/410.html` |
| `500.html` | `/500.html` |

## Politique AI crawlers

**ALLOW ALL** — visibilité maximale. Profil personnel public.

## Déploiement

```bash
# À la racine du repo
cp robots.txt llms.txt ai.txt humans.txt 404.html 410.html 500.html /home/ll/Projects/lucletoffe-website/
mkdir -p /home/ll/Projects/lucletoffe-website/.well-known
cp security.txt /home/ll/Projects/lucletoffe-website/.well-known/

# Si .htaccess existe, ajouter :
#   ErrorDocument 404 /404.html
#   ErrorDocument 410 /410.html
#   ErrorDocument 500 /500.html
```

## Slots à compléter

- `sitemap.xml` : déjà 3 URLs (/, /parcours.html, /cv.html). Ajouter d'autres pages si créées.
- `security.txt` : créer `/security-policy/` ou retirer la ligne `Policy:` si pas de page

## Tester

- robots : https://lucletoffe.com/robots.txt
- llms : https://lucletoffe.com/llms.txt
- security : https://lucletoffe.com/.well-known/security.txt
- 404 : https://lucletoffe.com/page-qui-existe-pas
