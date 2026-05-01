# SEO files — Signal Antifragile (signal.antifrag.fr · Ghost)

Pack SEO complet pour la newsletter Ghost.

## Politique AI crawlers

**BLOCK ALL** — newsletter payante, contenu éditorial protégé. 16 user-agents bloqués explicitement (GPTBot, Google-Extended, Bytespider, Amazonbot, ClaudeBot, anthropic-ai, CCBot, PerplexityBot, PerplexityUser, Applebot-Extended, Meta-ExternalAgent, cohere-ai, Diffbot, Omgili, ImagesiftBot, FacebookBot).

Doublé par paywall Ghost (contenu paid invisible aux crawlers non-authentifiés).

## Fichiers

| Fichier | Destination Ghost |
|---|---|
| `robots.txt` | Code Injection ou via reverse-proxy `/robots.txt` |
| `sitemap.xml` | Ghost le génère automatiquement — ce fichier est référence |
| `llms.txt` | Code Injection ou fichier statique uploadé |
| `ai.txt` | Idem |
| `humans.txt` | Idem |
| `security.txt` | `/.well-known/security.txt` (config reverse-proxy) |
| `404.html` | Thème Ghost : `error-404.hbs` (à intégrer comme partial du thème) |
| `410.html` | Thème Ghost : page custom `error-410.hbs` |
| `500.html` | Thème Ghost : `error.hbs` ou `error-500.hbs` |

## Déploiement Ghost

### Option A : via le thème (recommandé)

Intégrer 404/410/500 comme `error-XXX.hbs` dans le thème :

```bash
cp 404.html /home/ll/Projects/signal-ghost-theme/error-404.hbs
cp 410.html /home/ll/Projects/signal-ghost-theme/error-410.hbs
cp 500.html /home/ll/Projects/signal-ghost-theme/error-500.hbs
```

Adapter le markup pour utiliser les helpers Ghost (`{{@site.title}}`, etc.) si voulu.

### Option B : via Code Injection (Settings → Code Injection)

Pour `robots.txt`, `llms.txt`, `ai.txt`, `humans.txt` : difficile via Ghost natif.
**Solution** : configurer le reverse-proxy (Caddy/nginx) devant Ghost pour servir ces fichiers
depuis un dossier statique au niveau du proxy.

Exemple Caddy :
```
signal.antifrag.fr {
    handle /robots.txt {
        root * /var/www/signal-static
        file_server
    }
    handle /llms.txt {
        root * /var/www/signal-static
        file_server
    }
    handle /.well-known/* {
        root * /var/www/signal-static
        file_server
    }
    handle {
        reverse_proxy localhost:2368  # Ghost
    }
}
```

## Slots à compléter

- ISSN BnF (voir `ISSN-TODO.md` à venir dans seo/signal/) — placer dans `humans.txt` une fois reçu
- 404 : adapter URL `/archive/` selon configuration Ghost réelle
- security.txt : créer la page `/security-policy/`

## Tester

- robots : https://signal.antifrag.fr/robots.txt
- llms : https://signal.antifrag.fr/llms.txt
- security : https://signal.antifrag.fr/.well-known/security.txt
- Vérifier le block AI en User-Agent : `curl -A "GPTBot" https://signal.antifrag.fr/ -I`
