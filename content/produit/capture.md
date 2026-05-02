---
title: "Capture — comment Trace7 capte les gestes et les décisions sans friction"
description: "Capture vocale, contextuelle, structurée par règles métier. Le raisonnement technique est enregistré pendant l'arbitrage, pas après. Pas un agent qui tourne dans le dos — un module qui documente la décision pendant qu'elle se prend."
weight: 1
---

## Le problème — le raisonnement technique meurt à l'arbitrage

Un ingénieur principal arbitre une cotation critique en 4 minutes au-dessus du plan papier. Quatre minutes qui valent 80 % du coût pièce sur les dix prochaines années. Et qui ne sont écrites nulle part.

C'est le scénario type de l'industrie hardware : la décision se prend rapidement, par un expert qui sait, dans un contexte qui n'est pas documenté. Une fois la décision prise, le contexte s'évapore. Le successeur — junior, alternant, repreneur, audit AI Act — n'aura jamais accès au pourquoi. Seulement au quoi.

## Comment Trace7 le résout

Trace7 capte le raisonnement **pendant** qu'il se prend. Pas après — après c'est trop tard, l'expert s'est déjà déplacé sur le sujet suivant. Trois mécanismes complémentaires :

### 1. Capture vocale contextualisée

Activation par mot-clé ou par bouton. L'expert parle 30 à 90 secondes — *« Là j'ai mis du H7 parce que la spec client 2008 demandait du H6 mais comme on a sécurisé l'angle du contre-épaulement à J7 le H7 suffit dans la chaîne de cotes »*. Trace7 transcrit, structure, et lie automatiquement la note à la cote concernée. La transcription est consultable, modifiable, validable en 30 secondes.

### 2. Capture contextuelle (modification CAO ou plan)

Quand un ingénieur modifie une cote, une tolérance, un état de surface dans son outil CAO (SolidWorks, CATIA, Creo, NX), Trace7 propose **immédiatement** une fenêtre de capture micro-décisionnelle. *« Pourquoi ce changement ? »* — choix entre 6 raisons typiques pré-modélisées + champ libre. 5 secondes par modification.

### 3. Capture par règles métier

Pour les arbitrages récurrents (choix matériau, état de surface, tolérance type), Trace7 applique des règles métier configurables. *« Si pièce de classe SIL4 et matériau acier inox 316L → état de surface Ra 0,8 par défaut, justification : exigence EN 50128 §4.3.2. »* La règle évite la capture manuelle quand la décision est déterministe — et déclenche une capture exceptionnelle quand un expert s'écarte de la règle.

## Modules concernés

- **Trace7 Voice** — moteur de capture vocale, embarqué dans l'application.
- **Trace7 CAD Bridge** — connecteurs natifs SolidWorks, CATIA, Creo, NX.
- **Trace7 Rules** — moteur de règles métier configurables (no-code pour 80 % des cas).
- **Trace7 Search** — utilisé surtout dans [Restitution](/produit/restitution/), mais il indexe en continu ce qui est capturé ici.

## Cas appliqué

Le cas hero **120 → 8 ferroviaire** repose entièrement sur la capture rétrospective de l'expert retraité — 4 séances de 90 minutes ont permis d'identifier 23 décisions obsolètes encore appliquées. Si la capture avait été faite *au moment de la décision* en 2008, l'obsolescence aurait été détectée en 2014 et 470 k€/an auraient été économisés en continu pendant 11 ans. → [Lire le cas](/cas/120-vers-8/)

## CTA

→ [Réserver une démo Trace7 Capture](/demo/) — 30 minutes, on capte une décision sur une pièce que vous nous montrez.
