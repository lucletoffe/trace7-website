---
title: "Changelog — releases publiques"
description: "Suivi public des évolutions de Trace7. Flux RSS disponible. Politique : aucune publication d'amélioration sans cas client documenté."
weight: 90
---

## Politique de release

Trace7 ne publie pas de nouvelle version sans **cas client documenté**. Chaque feature ou amélioration listée ci-dessous a été déployée d'abord chez un Praticien fondateur, validée pendant au moins 14 jours d'usage réel, puis généralisée. Pas de release "feature flag" qui dort six mois avant d'être enlevée silencieusement.

Flux RSS : [https://trace7.fr/changelog/index.xml](/changelog/index.xml)

---

## v0.4.0 — Capture vocale ferroviaire ISO GPS · 2026-04-28

- **Capture vocale enrichie** : reconnaissance des 240 termes métier ISO GPS / EN 50128 fréquents dans le signaling ferroviaire (cote pivot, contre-épaulement, palier de roue, etc.). Précision transcription mesurée à 96,3 % sur le cas hero 120→8.
- **Vue timeline par cote** améliorée : zoom granulaire ≤ 5 décisions, navigation clavier complète.
- **Trace7 CAD Bridge SolidWorks** : capture micro-décisionnelle au moment de la modification d'une cote — déclenchement < 200 ms.
- **Bug fixes** : 14 corrections sur les exports PDF de timeline (rendu Unicode dans les ratios de tolérance).

## v0.3.0 — Conformité AI Act § 9 · 2026-04-12

- **Bundle Conformité AI Act** : génération automatique des artefacts articles 9, 10, 11, 12 à partir de la base capturée.
- **Mode auditeur** : accès lecture seule filtré par rôle, journal d'accès tracé, export horodaté.
- **RBAC granulaire** : 6 rôles natifs (Lecteur, Praticien, Validateur, Admin BE, Admin Tenant, Auditeur).

## v0.2.0 — Recherche sémantique métier · 2026-03-20

- **Embedding spécialisé hardware critique** : modèle entraîné sur le vocabulaire ISO GPS, EN, IATF, AI Act. Recall@10 mesuré à 89 % sur banque de tests métier interne.
- **Recherche en langage naturel** : *« pourquoi le H7 sur la cote pivot »* renvoie les décisions historiques pertinentes.
- **Index local** : aucune requête ne quitte le périmètre client. Modèle servi en local (8 Go RAM minimum recommandés en on-premise).

## v0.1.0 — Première release Praticien fondateur · 2026-02-15

- **Capture vocale** de base avec transcription Whisper local.
- **Stockage des décisions** liées à pièces, cotes, dossiers de spec.
- **Vue timeline par cote** version initiale.
- **Connecteur SolidWorks** lecture seule.
- **Authentification** SSO SAML / OIDC, MFA TOTP.
- **Hébergement** OVH France HDS par défaut.

---

## À venir (roadmap publique)

- **v0.5 (mai 2026)** — Connecteur CATIA en écriture, Trace7 Compliance Pack EN 50128 complet.
- **v0.6 (juin 2026)** — Trace7 Rules en no-code complet (configurateur graphique des règles métier).
- **v0.7 (été 2026)** — Mode on-premise air-gap (déploiement sans aucune connexion réseau sortante).
- **v0.8 (rentrée 2026)** — Connecteur ENOVIA + Trace7 Compliance Pack IATF 16949.

Roadmap déterminée par les **demandes des Praticiens fondateurs**. Si une feature est dans la roadmap publique, c'est qu'elle a été demandée par au moins 3 Praticiens actifs.
