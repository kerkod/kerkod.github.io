+++
title = "Dernières réalisations"
slug = "portfolio"
+++

TODO: dans posts/blog ?

## Développement d'algorithmes d'optimisation

***Problématique** : optimiser le taux de remplissage des poids-lourds avec des contraintes "lâches"*

Approche : prototypage de la brique de calcul avec plusieurs types d'algorithmes :
- MVP simple : requêtes SQL dans une base géospatiale (PostGIS)
- approche par contrainte (PPC) avec le solveur Choco Solver
- méta-heuristique "Ruin and Recreate" : implémentation et paramétrage de la librairie Java JSprit
- approche naïve : implémentation d'un algorithme Python fait maison

Chaque brique a été encapsulée dans une API, permettant de basculer d'une implémentation à l'autre facilement.

> Ce travail a été valorisé dans le cadre du dispositif CIR (Crédit Impôt Recherche)

TODO: screenshot jsprit

## 2018 - 2020 : Approche agile
Application Fifty Truck

Dans le but de raccourcir au maximum le délai entre l’idée et la mise à disposition de la fonctionnalité à l’utilisateur final, une stratégie de déploiement continu a été mise en place sur Fifty Truck.
En savoir plus


# Internalisation d'API géographiques

***Problématique** : Minimiser les coûts de dépendance à des API externes (GMaps, Mapbox...)*

Approche: identification et implémentation de projets Open Source alternatifs :
- calcul d'itinéraire : OSRM, VROOM, GraphHopper
- géocodage : adressedatagouv, recherche full text PgSQL 

TODO: screenshot xxx

## Industrialisation d'un prototype

***Problématique** : Le prototype développé en Laravel et hébergé sur un serveur dédié PHP ne peut pas monter en charge*

L'infrastructure serveur a été entièrement revue pour être scalable : containerisation des applications, déploiement d'un cluster Docker Swarm, monitoring des services via Datadog, mise en place d'un PRA/PCA.

TODO: screenshot Datadog

L'applicatif Laravel a été séparé pour être réécrit en partie en Python (framework Flask / Celery), langage plus adapté aux tâches de calcul asychrones.

TODO: screenshot Celery

