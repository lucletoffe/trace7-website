# Signature mail undust — README

Signature email Luc Létoffé / undust — HTML inline + plain text, compatible Gmail / Outlook / Apple Mail / Thunderbird.

## Fichiers

- `signature.html` — preview avec 3 versions (standard light, standard dark, minimale) + plain text
- `signature.txt` — fallback plain text
- `README.md` — ce fichier

## Versions livrées

| Version | Quand l'utiliser |
|---|---|
| **Standard** | Premiers contacts, prospects, mails formels, RDV CI/clients |
| **Minimale** | Réponses rapides, threads internes, mails de relance |
| **Plain text** | Auto-fallback : la plupart des clients HTML l'utilisent automatiquement quand le HTML est désactivé |

## Comment installer la signature

### Gmail
1. Ouvrir `signature.html` dans Chrome
2. Repérer le bloc **« SIGNATURE STANDARD »** (entre les commentaires HTML)
3. Sélectionner depuis la **première ligne du tableau** jusqu'à la **dernière** (ne pas inclure les commentaires HTML)
4. **Cmd+C** (copier)
5. Gmail → ⚙️ → **Voir tous les paramètres** → onglet **Général** → section **Signature**
6. Créer une nouvelle signature → **Cmd+V** dans le champ
7. Activer "Insérer cette signature dans tous les nouveaux messages"
8. **Enregistrer les modifications** en bas de page

⚠️ Gmail peut "lisser" les marges. Si le rendu est cassé, utiliser l'extension **"Gmail Signature"** ou paramétrer via Google Workspace Admin pour les comptes pro.

### Outlook (Web — outlook.office.com)
1. Idem Gmail : copier le HTML rendu (pas le code source)
2. ⚙️ → **Afficher tous les paramètres** → **Courrier** → **Composer et répondre**
3. Coller dans le champ signature → cocher "Inclure dans tous les messages"

### Outlook (Desktop Windows)
1. Outlook applique le **dark mode automatique** sur les signatures — la version dark est gérée par le client, pas par toi
2. **Fichier** → **Options** → **Courrier** → **Signatures**
3. Nouveau → coller depuis `signature.html` (rendu, pas code)
4. ⚠️ Outlook Desktop peut casser le `<table>` — solution : sauvegarder le HTML rendu dans Word, puis l'utiliser comme template

### Apple Mail (macOS)
1. Mail → **Réglages** → **Signatures**
2. Créer une signature vide
3. Localiser le fichier dans `~/Library/Mail/V[N]/MailData/Signatures/` (ou via "Afficher dans le Finder" depuis le menu)
4. Le remplacer par le contenu de `signature.html` (le bloc table uniquement)
5. Décocher "Toujours conserver mon style par défaut"

### Thunderbird
1. **Préférences** → **Comptes** → sélectionner l'adresse
2. Cocher "Joindre la signature à partir d'un fichier (HTML, texte ou image)"
3. Pointer vers `signature.html` (chemin complet) — Thunderbird supporte le HTML natif

### iOS Mail
1. Réglages → **Mail** → **Signature**
2. Coller la version **plain text** (`signature.txt`) — iOS Mail mobile ne gère pas le HTML proprement

## Couleurs utilisées (hex direct, pas de var CSS)

| Élément | Light | Dark |
|---|---|---|
| Texte principal | `#1a1a1a` | `#e5e7eb` |
| Texte muted | `#4a4a4a` | `#b8b8b0` |
| Accent orange | `#ff6b35` | `#ff7a4a` |
| Vert (Hébergé France) | `#16a34a` | `#4ade80` |
| Séparateurs | `#b0aca0` | `#666` |

Les clients en dark mode (Outlook, iOS Mail) inversent automatiquement les couleurs claires.

## Polices fallback

- Display (nom, wordmark) : `-apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`
- Mono (contacts) : `'SF Mono', 'Menlo', 'Consolas', monospace`

Pas de Titillium Web ni JetBrains Mono — les fonts custom ne sont **pas chargées** dans les clients mail. Les fallbacks système s'en rapprochent (sans-serif moderne + monospace).

## Anti-patterns évités

- ❌ Avatar photo grosse image
- ❌ Liens "Cliquez ici" (toujours sur le texte sémantique)
- ❌ Citation inspirante générique
- ❌ "Sent from my iPhone"
- ❌ Bandeau écolo "Imprimer fait mal aux arbres"
- ❌ Tracking pixel
- ❌ Image externe (bloquées par défaut, alourdissent le mail)

## Itérations possibles

| Demande | Action |
|---|---|
| "Trop chargé" | Utiliser la version minimale |
| "Pas assez signe undust" | Agrandir le wordmark à 22px |
| "Téléphone à retirer" | Supprimer la cellule `<span>+33...</span>` |
| "Outlook casse le rendu" | Régénérer via Outlook Web → copier-coller dans Outlook Desktop |
| "Le SVG n'est pas rendu" | Aucun SVG inline utilisé — uniquement texte stylé (`undust.` orange sur le `.`) |

## Placeholders à remplir avant usage

- `+33 X XX XX XX XX` → numéro réel
- `SIREN XXX XXX XXX` → numéro SIREN une fois la société immatriculée
