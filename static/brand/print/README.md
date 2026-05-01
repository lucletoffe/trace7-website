# Carte de visite undust — README

Carte de visite professionnelle Luc Létoffé / undust — format **85 × 55 mm** standard France.

## Fichiers

- `business-card.html` — source HTML print-ready (2 variantes A/B affichées côte à côte)
- `README.md` — ce fichier (specs imprimeur)

## Variantes proposées

| Var | Recto | Verso | Recommandation |
|---|---|---|---|
| **A** | Papier blanc cassé `#fafaf7` + bande orange + texte anthracite | Anthracite `#1a1a1a` + wordmark blanc + accent orange | ✅ Recommandée — plus lisible, classique, casse moins à l'usure |
| **B** | Anthracite `#1a1a1a` + bande orange + texte blanc | Identique au verso A | Plus brutaliste, "monolithe" — pour un pitch design-forward |

## Contenu (recto)

- **Nom** : Luc Létoffé (Titillium Web 700, 14pt)
- **Rôle** : "Fondateur undust" (JetBrains Mono 7pt orange uppercase)
- **Contacts** (JetBrains Mono 7pt) :
  - `luc@undust.co`
  - `+33 X XX XX XX XX` ← **placeholder à remplir**
  - `/in/lucletoffe` (LinkedIn)
  - `lucletoffe.com`
- **Filigrane** : monogramme U-GD&T bas-droite à 12-18% d'opacité

## Contenu (verso)

- **Wordmark** `undust.` 38pt centré (orange sur le `.`)
- **Tagline** : *« On dépoussière l'expertise. On la rend transmissible. »* (italique 8pt)
- **Catégorie** bas : `CONTINUITÉ COGNITIVE INDUSTRIELLE` (orange tracking 0.3em)
- **Mention légale** : `undust.co · Hébergé en France · SIREN XXX XXX XXX` ← **placeholder à remplir**
- **Pattern** : grille teal 4mm en arrière-plan, fade radial vers les bords

## Specs imprimeur

| Param | Valeur |
|---|---|
| Format final | **85 × 55 mm** paysage |
| Format avec bleeds | **91 × 61 mm** (3 mm fond perdu × 4 côtés) |
| Zone de sécurité texte | 5 mm depuis bord final |
| Papier | **350 g/m²** finition **soft-touch** (mat velouté) ou mat épais |
| Profil couleur | CMJN · ISO Coated v2 (Fogra39) |
| Résolution | 300 dpi |
| Format export | PDF/X-3 ou PDF/X-4 |
| Repères de coupe | Inclus (4 coins, traits noirs en print) |

## Couleur orange — équivalence CMJN

Le RGB `#ff6b35` ne se reproduit pas tel quel en CMJN. Référence Pantone à indiquer à l'imprimeur :

- **Pantone 166 C** (référence officielle)
- Équivalent CMJN approximatif : **C0 M68 J85 N0**
- Si l'imprimeur ne fait que du quadri sans Pantone, valider un BAT (Bon À Tirer) avant de lancer le tirage.

## Workflow d'impression

1. Ouvrir `business-card.html` dans Chrome
2. **Cmd+P** → "Save as PDF"
3. Régler **format papier custom : 91 × 61 mm**, marges **None**, **Background graphics ON**
4. Cocher "More settings" → "Paper size: custom 91mm × 61mm"
5. Une page = 1 face. Pour avoir recto+verso dans le même PDF :
   - Soit imprimer face par face (4 pages : recto A, verso A, recto B, verso B)
   - Soit éditer le HTML pour ne garder qu'une seule variante (A recommandée), puis imprimer
6. Upload sur **Pixartprinting** / **Vistaprint** / imprimeur local en sélectionnant :
   - Type : **Carte de visite paysage 85×55 mm**
   - Bleeds : **3 mm**
   - Verso différent du recto : **Oui**
   - Papier : **350g soft-touch** ou équivalent

## Itérations possibles

- "Texte trop petit" → augmenter contacts à 8pt
- "Bande orange trop épaisse" → réduire à 4mm
- "Pas assez de blanc" → retirer monogramme filigrane
- "Verso trop chargé" → retirer la grille teal en arrière-plan

## Notes

- Aucun QR code (préférence : contact direct)
- Aucun emoji
- Téléphone gardé en placeholder mais facilement retirable (variante minimale possible avec juste mail + LinkedIn)
- SIREN à compléter une fois la société immatriculée
