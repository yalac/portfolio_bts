---
layout: ../../../layouts/MarkdownLayout.astro

titre: "Application de gestion de trajet"
date: "Réalisé du 03/03/2026 au 13/05/2026"
---

## Contexte

Dans le cadre de ma deuxième année de BTS SIO, j’ai participé à un projet en équipe de 3 ayant pour objectif de développer une application Windows de gestion de trajets. Ce projet a été réalisé à partir d’un cahier des charges fourni par notre professeur et visait à concevoir une application permettant de gérer les utilisateurs, les trajets, les lieux et les moyens de transport dans un environnement C# MAUI avec base de données SQL Server.

Cette réalisation s’inscrit dans une démarche complète de conception et développement d’application, avec une organisation en équipe, des phases de maquettage, de modélisation, de développement, de tests et de documentation.

## Mise en application

Le projet a consisté à développer une application Windows en C# avec MAUI, reliée à une base de données SQL Server, afin de gérer des trajets. L’application permet l’authentification, l’affichage d’un tableau de bord, la gestion des utilisateurs, la gestion des trajets, la gestion des lieux, la gestion des transports, ainsi qu’un espace de consultation appelé “Mes trajets”.

Le projet a suivi plusieurs étapes :

- Analyse des besoins à partir du cahier des charges
- Création de maquettes avec Figma
- Conception de la base de données avec MCD/MPD sous WinDesign
- Création du dépôt sur Github
- Documentation des fonctionnalités au fur et à mesure
- Développement des fonctionnalités principales
- Tests manuels et corrections de bugs.

## Environnement technologique

Pour cette réalisation, plusieurs outils et ressources ont été utilisés :

- **Langage :** C#
- **Framework :** .NET MAUI
- **Base de données :** SQL Server
- **Outil base de données :** SSMS
- **IDE :** Rider
- **Gestion de projet :** Trello
- **Maquettage :** Figma
- **Partage documentaire :** Google Drive
- **Communication :** Discord
- **Versioning :** Github
- **Assistance au développement :** Github Copilot
- **Autres ressources :** Classroom et recherches Internet sur certaines fonctionnalités et fonctions en C# et MAUI.

## Fonctionnalités principales

1. <span style="text-align:left; display:block">**Authentification et gestion des accès**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Permettre à l’utilisateur de se connecter à l’application et d’accéder aux fonctionnalités selon son rôle.<br>
   <span style="color:red">_Réalisation :_</span> Mise en place d’une page de connexion avec nom d’utilisateur et mot de passe. Une fois authentifié, l’utilisateur accède à différentes pages selon son rôle. Le gestionnaire dispose d’un accès complet à l’ensemble des fonctionnalités d’administration.</span>

2. <span style="text-align:left; display:block">**Tableau de bord**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Fournir une vue d’ensemble de l’application dès la page d’accueil.<br>
   <span style="color:red">_Réalisation :_</span> Développement d’une page d’accueil affichant un résumé des trajets avec le nombre total de trajets, le nombre de trajets en cours, le nombre de trajets terminés, les moyens de transport disponibles et une liste des trajets récents.</span>

3. <span style="text-align:left; display:block">**Gestion des utilisateurs**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Gérer les comptes utilisateurs dans l’application.<br>
   <span style="color:red">_Réalisation :_</span> Mise en place d’un module de gestion des utilisateurs avec affichage en tableau des informations telles que nom, prénom, email, téléphone, adresse, code postal, ville et statut gestionnaire. Création d’un formulaire complet pour ajouter, modifier ou supprimer un utilisateur.</span>

4. <span style="text-align:left; display:block">**Gestion des trajets**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Permettre l’administration complète des trajets enregistrés dans l’application.<br>
   <span style="color:red">_Réalisation :_</span> Développement d’une interface d’administration regroupant les trajets enregistrés avec leurs dates, heures, statut, lieux de départ et d’arrivée ainsi que le transport utilisé. Mise en place des opérations de création, modification et suppression.</span>

5. <span style="text-align:left; display:block">**Gestion des lieux**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Centraliser les lieux utilisés dans les trajets.<br>
   <span style="color:red">_Réalisation :_</span> Mise en place d’une gestion des lieux enregistrés avec nom, adresse, code postal, ville et pays. Développement des formulaires de création, modification et suppression.</span>

6. <span style="text-align:left; display:block">**Gestion des transports**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Gérer les moyens de transport utilisés dans les trajets.<br>
   <span style="color:red">_Réalisation :_</span> Développement d’un espace d’administration des transports avec type de transport, capacité, immatriculation et description, ainsi que les formulaires de création, modification et suppression.</span>

7. <span style="text-align:left; display:block">**Mes trajets**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Permettre à l’utilisateur de consulter les trajets qui le concernent.<br>
   <span style="color:red">_Réalisation :_</span> Mise en place d’une page “Mes trajets” qui affiche les trajets liés à l’utilisateur connecté lorsqu’il est voyageur, ou l’ensemble des trajets lorsqu’il est administrateur. Une page de détail permet également de consulter les informations complètes d’un trajet, du transport et du lieu d’arrivée.</span>

8. <span style="text-align:left; display:block">**Paramètres utilisateur**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Donner accès aux informations du compte connecté et permettre la déconnexion.<br>
   <span style="color:red">_Réalisation :_</span> Développement d’une page paramètres affichant les informations personnelles de l’utilisateur telles que le nom, le prénom, l’email, l’adresse, le code postal et la ville, avec un bouton de déconnexion.</span>

Chaque fonctionnalité a été développée à partir du besoin défini dans le cahier des charges, puis testée manuellement afin de vérifier son bon fonctionnement.

## Productions réalisées

Les productions réalisées dans le cadre du projet sont :

- Une application Windows MAUI en C# fonctionnelle
- Une base de données relationnelle
- Une documentation technique complète
- Des diagrammes UML
- Des jeux de test et de données
- Une présentation du projet
- Des maquettes Figma
- Un MCD et un MPD
- Un use case général
- Un use case détaillé.

## Compétences concernées

Les compétences concernées sont :

[Concevoir et développer une solution applicative](/portfolio/realPro/)  
<span style="color: #858383">_Concevoir une solution applicative_</span>  
<span style="color: #858383">_Développer une solution applicative_</span>  

[Assurer la maintenance corrective ou évolutive d’une solution applicative](/portfolio/realPro/)  
<span style="color: #858383">_Corriger un dysfonctionnement_</span>  
<span style="color: #858383">_Faire évoluer une solution applicative_</span>  

[Gérer les données](/portfolio/realPro/)  
<span style="color: #858383">_Concevoir et exploiter une base de données_</span>  

[Gérer les projets informatiques](/portfolio/realPro/)  
<span style="color: #858383">_Planifier les activités_</span>  
<span style="color: #858383">_Travailler en mode projet_</span>  

## Preuves

_MCD_  
![MCD](/images/preuves/fdrpdeux/mcd.png)

_Use case général_  
![Use case général](/images/preuves/fdrpdeux/useCaseGeneral.png)

_Page d'accueil_  
![Accueil](/images/preuves/fdrpdeux/accueil.png)

## Bilan

Ce projet m’a permis de participer à la conception et au développement d’une application de bureau avec C# MAUI et SQL Server répondant à un besoin concret de gestion de trajets. J’ai pu consolider mes compétences en développement applicatif, en structuration d’interface, en modélisation des données et en organisation de projet en équipe.

Cette réalisation m’a également permis de mieux comprendre la mise en place d’un système de rôles utilisateurs, la gestion de données métier dans une base relationnelle, ainsi que l’intégration d’un parcours utilisateur complet dans une application MAUI.