---
layout: ../../../layouts/MarkdownLayout.astro

titre: "Application de gestion et suivi de stage"
date: "Réalisé du 03/03/2026 au 13/05/2026"
---

## Contexte

Dans le cadre de ma deuxième année de BTS SIO, j’ai participé à un projet en équipe de 3 ayant pour objectif de développer une application web de gestion et de suivi de stage pour les étudiants de BTS SIO. Ce projet a été réalisé à partir d’un cahier des charges fourni par notre professeur et avait pour but de centraliser les informations liées aux élèves, aux entreprises, aux stages et au suivi pédagogique. 

Cette réalisation s’inscrit dans un contexte de conception et développement d’application, avec une organisation en équipe et l’utilisation d’outils de gestion de projet, de maquettage, de documentation et de versioning.

## Mise en application

Le projet a consisté à développer une application web sous Symfony permettant de gérer les stages des étudiants. L’application propose une authentification, un tableau de bord, la gestion des utilisateurs, des élèves, des entreprises et des stages, ainsi qu’un module de suivi et visite et un historique des modifications. 

Le projet a suivi plusieurs étapes :

- Analyse des besoins à partir du cahier des charges
- Création de maquettes avec Figma
- Conception de la base de données avec MCD/MPD sous WinDesign
- Création du dépôt Github
- Développement des fonctionnalités principales
- Documentation des fonctionnalités
- Tests manuels et corrections de bugs.

## Environnement technologique

Pour cette réalisation, plusieurs outils et ressources ont été utilisés :

- **Framework :** Symfony
- **Langages / technologies :** PHP, HTML, CSS, base de données relationnelle
- **IDE :** Visual Studio Code
- **Serveur local :** WAMP
- **Gestion de projet :** Trello
- **Maquettage :** Figma
- **Partage documentaire :** Google Drive
- **Communication :** Discord
- **Versioning :** Github
- **Assistance au développement :** Github Copilot
- **Autres ressources :** Classroom et recherches Internet sur certaines fonctionnalités et packages Symfony.

## Fonctionnalités principales

1. <span style="text-align:left; display:block">**Authentification et gestion des accès**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Permettre aux utilisateurs de se connecter à l’application et d’accéder aux fonctionnalités selon leur rôle.<br>
   <span style="color:red">_Réalisation :_</span> Mise en place d’une page de connexion avec identifiant et mot de passe. Une fois connecté, l’utilisateur accède aux pages selon son rôle. Certaines fonctionnalités sont réservées à l’administrateur, comme la gestion des utilisateurs, des entreprises, des stages et de l’historique.</span>

2. <span style="text-align:left; display:block">**Gestion des élèves et des utilisateurs**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Gérer les élèves, les professeurs et les administrateurs dans une interface centralisée.<br>
   <span style="color:red">_Réalisation :_</span> Développement d’une page utilisateur contenant un tableau des élèves et un tableau des professeurs / administrateurs. Mise en place des formulaires de création, modification et suppression pour les élèves et les utilisateurs, avec les champs nécessaires comme le nom, le prénom, l’option, la promotion, l’email, le mot de passe et le rôle.</span>

3. <span style="text-align:left; display:block">**Gestion des entreprises**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Permettre l’enregistrement et la gestion des entreprises accueillant les étudiants en stage.<br>
   <span style="color:red">_Réalisation :_</span> Création d’une page listant les entreprises avec leurs informations principales : nom, adresse, ville, code postal, tuteur, téléphone et mail. Mise en place des formulaires de création, modification et suppression d’entreprise.</span>

4. <span style="text-align:left; display:block">**Gestion des stages**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Suivre précisément les stages des étudiants avec les informations associées.<br>
   <span style="color:red">_Réalisation :_</span> Création d’une page de stages permettant d’afficher les informations principales : élève, entreprise, professeur référent, professeur visite, remarque, dates et durée. Mise en place des formulaires de création, modification et suppression d’un stage.</span>

5. <span style="text-align:left; display:block">**Tableau de bord**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Donner une vue synthétique de l’activité de l’application dès l’arrivée sur la page d’accueil.<br>
   <span style="color:red">_Réalisation :_</span> Développement d’un dashboard affichant notamment le nombre d’étudiants, le nombre d’entreprises et le nombre de stages enregistrés.</span>

6. <span style="text-align:left; display:block">**Suivi & Visite**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Permettre le suivi des visites et des documents liés au stage.<br>
   <span style="color:red">_Réalisation :_</span> Mise en place d’une page “Suivi & Visite” affichant l’étudiant, sa filière, l’entreprise, la période, le professeur référent, le professeur visite et un commentaire indiquant l’état de certains documents ou éléments de suivi. Une interface de modification de commentaire a également été développée.</span>

7. <span style="text-align:left; display:block">**Historique des modifications**</span>

   <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Garder une trace des modifications importantes réalisées dans l’application.<br>
   <span style="color:red">_Réalisation :_</span> Développement d’une page d’historique permettant d’afficher la date, le type d’action, l’auteur et les changements réalisés sur les stages, les élèves, les utilisateurs et les entreprises.</span>

Chaque fonctionnalité a été développée à partir du besoin défini dans le cahier des charges et testée manuellement au fur et à mesure du développement.

## Productions réalisées

Les productions réalisées dans le cadre du projet sont :

- Une application web Symfony fonctionnelle
- Une base de données relationnelle
- Une documentation technique complète
- Des diagrammes UML
- Des jeux de test et de données
- Une présentation du projet
- Des maquettes Figma
- Un MCD et un MPD
- Un use case général
- Un use case détaillé

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
![MCD](/images/preuves/projetsuivistage/mcd.png)

_Use case général_  
![Use case général](/images/preuves/projetsuivistage/useCaseGeneral.png)

_Tableau de bord_  
![Dashboard](/images/preuves/projetsuivistage/dashboard.png)

## Bilan

Ce projet m’a permis de participer à la conception et au développement d’une application web complète répondant à un besoin concret de gestion des stages. J’ai pu consolider mes compétences en développement applicatif, en conception de base de données, en organisation de projet et en travail en équipe.

Cette réalisation m’a aussi permis de mieux comprendre la structuration d’une application Symfony avec plusieurs modules de gestion, l’importance du suivi des données.