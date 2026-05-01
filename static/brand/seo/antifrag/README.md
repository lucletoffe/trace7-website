# SEO files — Antifragile Hardware (antifrag.fr)

Pack SEO complet. À copier à la racine du site static HTML.

## Note migration

Le site actuel tourne sur `antifragilehardware.fr`. La migration vers `antifrag.fr` est planifiée. En attendant :
- Configurer un redirect 301 de `antifragilehardware.fr/*` → `antifrag.fr/*` une fois le DNS basculé
- Garder ces fichiers servis sur les deux domaines pendant la période de transition

## Fichiers

| Fichier | Destination |
|---|---|
| `robots.txt` | `/robots.txt` |
| `sitemap.xml` | `/sitemap.xml` |
| `llms.txt` | `/llms.txt` |
| `ai.txt` | `/ai.txt` |
| `humans.txt` | `/humans.txt` |
| `security.txt` | `/.well-known/security.txt` |
| `404.html` | `/404.html` (config Apache via `.htaccess`) |
| `410.html` | `/410.html` |
| `500.html` | `/500.html` |

## Politique AI crawlers

**ALLOW ALL** — visibilité maximale. Mouvement public, doctrine à porter.

## Déploiement

```bash
# Copier à la racine du repo
cp robots.txt llms.txt ai.txt humans.txt 404.html 410.html 500.html /home/ll/Projects/Antifragile-Hardware-website/
mkdir -p /home/ll/Projects/Antifragile-Hardware-website/.well-known
cp security.txt /home/ll/Projects/Antifragile-Hardware-website/.well-known/

# .htaccess (à vérifier — peut-être déjà fait)
# Ajouter :
#   ErrorDocument 404 /404.html
#   ErrorDocument 410 /410.html
#   ErrorDocument 500 /500.html
```

## Slots à compléter

- `sitemap.xml` : ajouter `/probleme/`, `/resultats/`, `/qui/`, `/entreprise/`, `/apprendre/`, `/cercle/`, `/faq/`, `/newsletter/`, `/trace7/`
- Liens dans 404/410/500 : adapter aux ancres réelles du site (single-page)

## Tester

- robots : https://antifrag.fr/robots.txt
- llms : https://antifrag.fr/llms.txt
- security : https://antifrag.fr/.well-known/security.txt
- 404 : https://antifrag.fr/page-qui-existe-pas
