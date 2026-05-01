# SEO files — undust (undust.co)

Pack SEO complet. À copier à la racine du site Hugo.

## Fichiers

| Fichier | Destination serveur web |
|---|---|
| `robots.txt` | `/robots.txt` |
| `sitemap.xml` | `/sitemap.xml` (ou généré dynamiquement par Hugo) |
| `llms.txt` | `/llms.txt` |
| `ai.txt` | `/ai.txt` |
| `humans.txt` | `/humans.txt` |
| `security.txt` | `/.well-known/security.txt` (créer le dossier) |
| `404.html` | layout Hugo `/layouts/404.html` |
| `410.html` | layout Hugo (statut HTTP via config server) |
| `500.html` | layout Hugo (statut HTTP via config server) |

## Politique AI crawlers

**ALLOW ALL** — visibilité maximale, alignement portage doctrine via crawl.

## Slots à compléter

- `sitemap.xml` : ajouter les vraies URLs du site (Hugo génère normalement /sitemap.xml depuis le content)
- `404/410/500.html` : adapter les liens utiles selon la structure réelle du site
- `security.txt` : créer la page `/security-policy/` si voulue

## Déploiement Hugo

```bash
# Copier dans /static/ pour que Hugo les serve à la racine
cp robots.txt llms.txt ai.txt humans.txt /home/ll/Projects/undust-hugo/static/
mkdir -p /home/ll/Projects/undust-hugo/static/.well-known
cp security.txt /home/ll/Projects/undust-hugo/static/.well-known/

# 404 → layout
cp 404.html /home/ll/Projects/undust-hugo/layouts/

# sitemap.xml → laisser Hugo le générer (ne pas copier)
```

## Tester

- robots : https://undust.co/robots.txt
- llms : https://undust.co/llms.txt
- security : https://undust.co/.well-known/security.txt
- 404 : tester avec une URL inexistante
