---
title: "Sécurité — architecture souveraine et opposabilité"
description: "Hébergement France HDS ou on-premise. Chiffrement bout-en-bout. SSO SAML / OIDC, MFA, RBAC granulaire. Mistral fournit l'infra, nous fournissons le métier. Aucun transit hyperscaler étranger."
weight: 80
---

## Hébergement — France ou chez vous

**Cloud France HDS (option par défaut).** Trace7 est hébergé chez **OVHcloud** sur des infrastructures certifiées **Hébergeur de Données de Santé** (HDS) — niveau de sécurité supérieur à la simple ISO 27001, exigé par la régulation française pour les données les plus sensibles. Datacenters Roubaix et Strasbourg, redondance complète, RTO < 4 h, RPO < 15 min.

**On-premise (offre dédiée).** Pour les clients ferroviaire / défense / nucléaire / agroalimentaire critiques, Trace7 est livrable **chez vous**, sur votre infrastructure, sans aucune connexion internet sortante. Le moteur de capture, le moteur de recherche sémantique, les modèles d'IA — tout tourne en local. Le code source du moteur est livré sous **séquestre** pour garantir la pérennité.

## Architecture LLM — Mistral fournit l'infra, nous fournissons le métier

Trace7 utilise des modèles d'IA pour la transcription vocale, l'embedding sémantique métier et la classification des décisions. Notre stack LLM par défaut s'appuie sur **Mistral Workflows** (orchestration souveraine) et des modèles **embedding spécialisés hardware critique** entraînés en interne.

Aucun appel n'est routé vers un hyperscaler étranger. Aucun token de votre métier ne transite par OpenAI, Anthropic, Google, AWS ou Azure. Le périmètre est entièrement français — Mistral pour l'infra LLM, OVH pour l'hébergement, Antifragile Hardware pour le métier.

> *« Mistral fournit l'infra. Nous fournissons le métier. »*

## Chiffrement

- **At rest** : AES-256-GCM sur tous les volumes de données (PostgreSQL, stockage objet, sauvegardes).
- **In transit** : TLS 1.3 minimum, suites cryptographiques limitées aux profils PFS modernes. HSTS forced. Préchargement HSTS sur tous les domaines.
- **Pièces jointes confidentielles** : chiffrement applicatif supplémentaire (clé client) sur demande pour les Praticiens Atlas et On-premise.
- **Sauvegardes** : chiffrées avec une clé séparée, stockées dans un second datacenter français.

## Authentification & autorisations

- **SSO** : SAML 2.0 et OIDC supportés (compatible Okta, Azure AD, Google Workspace, Keycloak).
- **MFA** : obligatoire par défaut sur les comptes Atlas et On-premise. Recommandé sur Praticien et Équipe (TOTP, WebAuthn).
- **RBAC** : 6 rôles natifs (Lecteur, Praticien, Validateur, Admin BE, Admin Tenant, Auditeur). Granularité jusqu'à la décision unitaire pour les clients Atlas.
- **Journal d'accès** : tous les accès lecture / écriture / suppression sont journalisés et exportables. Mode auditeur disponible pour les missions de conformité externes.

## Sauvegarde et continuité

- **RPO** : 15 minutes (sauvegarde différentielle continue).
- **RTO** : 4 heures (cloud France HDS) ou 24 heures (on-premise selon SLA contractualisé).
- **Test PRA** : mensuel sur cloud France HDS, semestriel sur les déploiements on-premise (test contractualisé en mission Atlas).
- **Rétention** : 90 jours par défaut, jusqu'à 10 ans sur option (exigences AI Act et conformité ferroviaire).

## RGPD

Trace7 est un **sous-traitant** au sens du RGPD pour ses clients Praticien / Équipe / Atlas. Contrat sous-traitance disponible (DPA standard), AIPD réalisée et publiée sur demande. **Aucun transfert hors UE** sur le cloud France HDS — garantie contractuelle. Pour les clients on-premise, le statut DPO est conservé entièrement chez le client.

## Charte IA souveraine

La doctrine IA d'Antifragile Hardware (transparence, traçabilité, droit, gouvernance) est consultable sur la **maison-mère** : → [undust.co/charte-ia/](https://undust.co/charte-ia/)

## Contact RSSI

Pour toute question architecture, sécurité, audit, contrat de sous-traitance — Luc Letoffé reste joignable directement : **rssi@trace7.fr** ou via [Cal.com 30 min](https://cal.com/luc-letoffe/rssi).
