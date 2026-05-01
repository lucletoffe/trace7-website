# Legal — Trust & mentions légales

Pages légales RGPD-compliant pour les 4 marques de l'écosystème undust.

## Arborescence

```
legal/
├── footer-block.html               — Bloc footer commun (slots {{MONOGRAM}}, {{ACCENT}}, {{TONE_CLASS}})
├── undust/
│   ├── mentions-legales.html
│   ├── privacy.html                — RGPD complet (canonique)
│   ├── cgu.html                    — Site éditorial standard
│   └── cookies.html
├── antifrag/
│   ├── mentions-legales.html       — Marque "Antifragile Hardware (porté par undust)"
│   ├── privacy.html                — Identique undust (RGPD commun)
│   ├── cgu.html                    — SPÉCIFIQUE : Le Cercle 79€/mois + 40% affiliation + résiliation
│   └── cookies.html
├── signal/
│   ├── mentions-legales.html       — AVEC ISSN placeholder + dépôt légal BnF
│   ├── privacy.html                — Identique undust
│   ├── cgu.html                    — SPÉCIFIQUE : paywall + magic link + résiliation immédiate
│   └── cookies.html
├── lucletoffe/
│   ├── mentions-legales.html
│   ├── privacy.html                — Identique undust
│   ├── cgu.html                    — Site personnel (CGU minimaliste)
│   └── cookies.html
└── README.md
```

## Footer block — comment l'utiliser

Le fichier `footer-block.html` est un template avec 3 placeholders :

| Placeholder | undust | antifrag | signal | lucletoffe |
|---|---|---|---|---|
| `{{MONOGRAM}}` | `[U·]` | `[A·]` | `[S◎]` | `[LL]+⌖` |
| `{{ACCENT}}` | `#ff6b35` | `#4A7F8A` | `#ff6b35` | `#4A7F8A` |
| `{{TONE_CLASS}}` | `tone-tactical` | `tone-tactical` | `tone-tactical` | `tone-soft` |

Au moment de copier dans le repo cible, remplacer les 3 placeholders. Le CSS embedded est minimal — adapter à la grille existante du site.

## Slots {{TBD}} à compléter (avant déploiement prod)

### Tous sites (16 occurrences)
- `{{TBD: ADDRESS}}` — adresse postale (mentions-legales × 4)
- `{{TBD: DATE}}` — date dernière mise à jour (4 fichiers × 4 sites = 16)

### Signal spécifique
- `{{ISSN}}` — ISSN BnF (mentions-legales/signal + jsonld-signal.json + footer Signal)
- `{{TBD: numéro dépôt légal BnF}}` — mentions-legales/signal (post-ISSN)
- `{{TBD: 9-15€/mois ou inclus dans Le Cercle 79€/mois}}` — cgu/signal + editorial/signal/linkedin-about

### Antifrag spécifique (à valider)
- Tarif Le Cercle 79€/mois — confirmer que c'est le tarif final
- Affiliation 40% — confirmer que c'est le pourcentage retenu

## Déploiement par stack

### Hugo (undust.co)
```bash
mkdir -p /home/ll/Projects/undust-hugo/content/legal/
cp legal/undust/*.html /home/ll/Projects/undust-hugo/content/legal/
# URLs servies : /legal/mentions-legales/, /legal/privacy/, /legal/cgu/, /legal/cookies/
```

### Static (antifrag.fr + lucletoffe.com)
```bash
# AFHW (à adapter selon migration antifragilehardware.fr → antifrag.fr)
mkdir -p /home/ll/Projects/Antifragile-Hardware-website/legal/
cp legal/antifrag/*.html /home/ll/Projects/Antifragile-Hardware-website/legal/

# Luc
mkdir -p /home/ll/Projects/lucletoffe-website/legal/
cp legal/lucletoffe/*.html /home/ll/Projects/lucletoffe-website/legal/
```

### Ghost (signal.antifrag.fr)
- Créer 4 pages Ghost (Settings → Pages → New page) avec le contenu HTML de chaque fichier
- URL slugs recommandés : `/mentions-legales`, `/privacy`, `/cgu`, `/cookies`
- Coller le contenu dans la vue HTML (pas le rich editor — pour préserver les balises `<table>` etc.)

## Checklist juridique (à valider avant prod)

- [ ] Adresse postale `{{TBD: ADDRESS}}` complétée (ou retirée si Luc préfère ne pas la rendre publique — légal pour micro-entreprise)
- [ ] DPO `luc@undust.co` confirmé (sinon désigner DPO externe)
- [ ] Cookies listés correspondent au déploiement réel (Matomo self-hosted en l'occurrence — sinon adapter)
- [ ] Durées RGPD (3 ans, 26 mois, 13 mois) cohérentes avec ton CRM/email/analytics
- [ ] CGU Le Cercle (79€/mois, 40% affiliation, 14j rétractation) validées par un juriste si gros volume attendu
- [ ] CGU Signal (paywall, magic link traçable, résiliation immédiate) validées
- [ ] Footer SIREN, hébergeur, CrowdSec mentions présentes sur toutes les pages des 4 sites
- [ ] Liens footer testés (mentions, privacy, cgu, cookies)
- [ ] ISSN BnF demandé pour Signal (voir `seo/signal/ISSN-TODO.md`)

## RGPD — Points clés

1. Consentement opt-in obligatoire pour analytics non essentiels
2. Droits utilisateurs : accès, rectification, effacement, opposition, portabilité, limitation
3. Délai de réponse : 1 mois maximum
4. Conservation : 3 ans formulaires, 26 mois analytics, 12 mois consentement cookies
5. Transferts hors UE : **AUCUN** (souveraineté garantie via o2switch + Matomo self-hosted)
6. DPO : `luc@undust.co`
7. Réclamation CNIL : lien fourni dans `privacy.html`

## Trust footer — Vérifier sur tous les sites

- "Hébergé en France" (o2switch Clermont-Ferrand)
- "Protégé par CrowdSec" (threat intelligence community-driven)
- "SIREN 792 722 449"
- 4 liens : Mentions légales · Privacy · CGU · Cookies
