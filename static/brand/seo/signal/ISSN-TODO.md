# ISSN Signal Antifragile — Action BnF

## Contexte

Signal Antifragile (ANT-7) est une newsletter hebdomadaire éditée par undust. Pour renforcer la crédibilité éditoriale et permettre l'indexation dans Google News / Apple News / bases académiques, obtenir un **ISSN** auprès de la BnF (Bibliothèque nationale de France) — Centre français de l'ISSN.

Format ISSN : `XXXX-XXXX` (8 chiffres, dont une clé de contrôle).

## Procédure

### 1. Demande en ligne

**URL formulaire BnF** : https://www.bnf.fr/fr/issn-international-standard-serial-number
**URL formulaire CIEPS** : https://www.cieps.org/services/online-issn-request/

Les deux conduisent au même résultat. Le BnF est compétent pour les éditeurs français.

### 2. Informations à fournir

| Champ | Valeur |
|---|---|
| Titre de la publication | Signal Antifragile |
| Titre abrégé / clé | ANT-7 |
| Éditeur | undust |
| SIREN éditeur | 792 722 449 |
| Adresse éditeur | {{TBD: ADDRESS}} |
| Directeur de publication | Luc Létoffé |
| Rédacteur en chef | Luc Létoffé |
| URL du site | https://signal.antifrag.fr |
| Périodicité | Hebdomadaire (lundi) |
| Langue | Français |
| Public cible | Ingénieurs industriels, hardware critique (défense, aéro, ferroviaire, médical, énergie) |
| Description | Newsletter hebdomadaire sur l'industrie critique. Veille technique, retours d'expérience, doctrine "filiation pas disruption". |
| Date de début de publication | {{TBD: date numéro 1}} |
| Support | Ressource en ligne (newsletter email + archives web) |

### 3. Documents à joindre

- Copie du **premier numéro** (PDF ou capture URL)
- Extrait **KBIS** ou avis SIRENE de undust (SIREN 792 722 449)
- Si plusieurs numéros déjà publiés : preuves de publication régulière (URLs, captures)

### 4. Délai

- **2 à 4 semaines** en moyenne
- **Gratuit** — aucun frais d'attribution

## Une fois l'ISSN reçu : 5 emplacements à mettre à jour

### A. JSON-LD Periodical
**Fichier** : `/home/ll/Projects/undust/brand/meta/jsonld-signal.json`
Remplacer `"issn": "{{ISSN}}"` par `"issn": "XXXX-XXXX"`.

### B. Meta tags Ghost
**Fichier** : `/home/ll/Projects/undust/brand/meta/seo-meta-ghost.hbs`
Décommenter la ligne :
```html
<meta name="dcterms.identifier" content="urn:issn:XXXX-XXXX">
```
ET intégrer le JSON-LD via Settings → Code Injection → Site Header.

### C. Footer Signal
**Fichier** : `/home/ll/Projects/undust/brand/legal/footer-block.html` (ou bloc footer Ghost)
Ajouter dans la colonne Trust :
```html
<li>ISSN XXXX-XXXX</li>
<li>Dépôt légal BnF</li>
```

### D. Mentions légales Signal
**Fichier** : `/home/ll/Projects/undust/brand/legal/signal/mentions-legales.html`
Remplacer :
```html
ISSN&nbsp;: <span data-issn>{{ISSN}}</span> (en cours d'obtention auprès de la BnF)
```
par :
```html
ISSN&nbsp;: <span data-issn>XXXX-XXXX</span>
```
Et compléter le numéro de dépôt légal.

### E. humans.txt Signal
**Fichier** : `/home/ll/Projects/undust/brand/seo/signal/humans.txt`
Remplacer la ligne `ISSN : à venir...` par `ISSN : XXXX-XXXX`.

## Bénéfices

1. **Crédibilité éditoriale** — reconnaissance officielle comme publication périodique
2. **Google News** — éligibilité à l'indexation Google News
3. **Apple News** — éligibilité Apple News (en France via Apple News+ français)
4. **Bases académiques** — indexation WorldCat, OpenURL, bases CNRS
5. **Dépôt légal BnF** — archivage national pérenne (obligation légale en France pour publications)
6. **Citation académique** — citation possible avec ISSN (norme ISO 690)
7. **Crédibilité juridique** — facilite la défense de la propriété intellectuelle

## Contact BnF

- Email : issn@bnf.fr
- Téléphone : 01 53 79 41 00
- Documentation : https://www.bnf.fr/fr/issn-international-standard-serial-number

## Checklist

- [ ] Publier le numéro 1 de Signal (URL accessible publiquement, même paywall)
- [ ] Préparer extrait KBIS ou avis SIRENE undust
- [ ] Remplir le formulaire ISSN en ligne (BnF ou CIEPS)
- [ ] Joindre le numéro 1 + KBIS
- [ ] Attendre réception (2-4 semaines)
- [ ] Mettre à jour les 5 emplacements ci-dessus
- [ ] Déclarer le dépôt légal numérique sur https://depotlegal.bnf.fr (si requis pour le support)
- [ ] Cocher cette TODO
