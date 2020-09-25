+++
date = "2020-05-25"
title = "Algorithmes d'optimisation de remplissage en temps réel"
description = "Développement d'algorithmes d'optimisation de tournées de véhicules"
series = ["Theme", "Hugo"]
+++

*[<- Retour aux réalisations]({{< ref "portfolio" >}})*

**Description** : optimiser le taux de remplissage des poids-lourds avec des contraintes "lâches"

**Approche** : prototypage de la brique de calcul avec plusieurs types d'algorithmes :
- MVP simple : requêtes SQL dans une base géospatiale (PostGIS)
- approche par contrainte (PPC) avec le solveur Choco Solver
- méta-heuristique "[Ruin and recreate](https://pdfs.semanticscholar.org/4f80/e70e51e368858c3df0787f05c3aa2b9650b4.pdf)" : implémentation et paramétrage de la librairie Java JSprit
- approche naïve : implémentation d'un algorithme Python spécifique

**Management** d'un stagiaire en recherche (INSA Rennes) et d'un groupe d'étudiants (Centrale Paris).

*** 

**Technologies mises en oeuvre :**
- jsprit / Java Sprint Boot
- PostGIS / PgSQL
- Choco Solver / Java Sprint Boot
- Python / numpy

![jsprit, solveur de problèmes TSP](/images/jsprit.png "jsprit")

> Ce travail a été valorisé dans le cadre du dispositif CIR (Crédit Impôt Recherche)

*[<- Retour aux réalisations]({{< ref "portfolio" >}})*
