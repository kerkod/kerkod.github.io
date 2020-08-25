+++
date = "2020-05-25"
title = "Développement d'algorithmes d'optimisation"
description = "The post demonstrates Twemoji support"
series = ["Theme", "Hugo"]
+++

**Problématique** : optimiser le taux de remplissage des poids-lourds avec des contraintes "lâches"

Approche : prototypage de la brique de calcul avec plusieurs types d'algorithmes :
- MVP simple : requêtes SQL dans une base géospatiale (PostGIS)
- approche par contrainte (PPC) avec le solveur Choco Solver
- méta-heuristique "Ruin and Recreate" : implémentation et paramétrage de la librairie Java JSprit
- approche naïve : implémentation d'un algorithme Python fait maison

Chaque brique a été encapsulée dans une API, permettant de basculer d'une implémentation à l'autre facilement.

> Ce travail a été valorisé dans le cadre du dispositif CIR (Crédit Impôt Recherche)

TODO: screenshot jsprit

*[Retour aux réalisations]({{< ref "realisations" >}})*
