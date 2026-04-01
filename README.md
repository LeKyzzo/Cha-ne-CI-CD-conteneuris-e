# VitalSync – Application de suivi médical et sportif

## Description

VitalSync est une application composée de :

* Un back-end Node.js/Express exposant une API REST (port 3000)
* Un front-end statique servi par Nginx (port 80)
* Une base de données PostgreSQL

L’objectif est de mettre en place une chaîne CI/CD conteneurisée complète.

---

## Architecture

L’application est composée de trois services conteneurisés :

* Backend → API REST (Node.js)
* Frontend → interface utilisateur (Nginx)
* Database → PostgreSQL

---

## Prérequis

* Docker
* Docker Compose
* Git
* Node.js (optionnel pour tests locaux)

---

## Lancer le projet en local

```bash
docker compose up --build
```

Puis accéder à :

* Frontend → http://localhost
* Backend → http://localhost:3000/health

---

## Pipeline CI/CD

La pipeline GitHub Actions comporte 3 étapes :

### 1. Tests

* Installation des dépendances
* Exécution des tests unitaires (Jest)

### 2. Build

* Construction des images Docker (backend + frontend)
* Tag basé sur le SHA du commit

### 3. Déploiement

* Lancement avec Docker Compose
* Vérification via health check `/health`

---

## Gestion des variables

Les variables d’environnement sont stockées dans un fichier `.env` non versionné.

Un fichier `.env.example` est fourni comme modèle.

---

## Kubernetes

Des manifestes Kubernetes sont fournis dans le dossier `k8s/` :

* Deployment
* Service
* Ingress
* Secret

---

## Choix techniques

* Docker → isolation des services
* Docker Compose → orchestration locale
* GitHub Actions → automatisation CI/CD
* Nginx → serveur web léger
* PostgreSQL → base relationnelle robuste

---

## Supervision

Les outils recommandés :

* Prometheus → collecte métriques
* Grafana → visualisation
* ELK → logs

---

## Auteur

Projet réalisé dans le cadre de l’épreuve E6 – EFREI.
