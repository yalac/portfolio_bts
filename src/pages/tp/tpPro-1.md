---
layout: ../../layouts/MarkdownLayout.astro

titre: "Site laboratoire de biotechnologie"
date: "Réalisé du 26/05/2025 au 27/06/2025"
---

## Contexte

Dans le cadre de mon **_stage au Lycée Galilée_**, établissement public d'enseignement secondaire et supérieur, j'ai été affecté au service de contrôle qualité en biotechnologie, où je me suis consacré au développement d'un site internet afin de faciliter la gestion du stock de matériel pour la filière BTS BIOALC, que ce soit pour les professeurs ou les élèves.

## Mise en application

Le projet vise à créer un site web pour le Lycée Galilée afin de faciliter la gestion et la traçabilité du stock de matériel de biotechnologie, conformément à la réglementation des BTS BIOALC. Ce site permet d’identifier rapidement les matériels manquants, de savoir qui a signalé le manque, à quelle date, et de quel matériel il s’agit. Il offre aussi la possibilité de réinitialiser l’état du stock lors du réassort. Les utilisateurs ciblés sont les élèves, les techniciens et les professeurs.

Le développement s’est appuyé sur une feuille de suivi existante et des Google Forms, mais il a nécessité la création d’un site dédié intégrant ces outils et ajoutant les fonctionnalités demandées.

## Fonctionnalités principales

1. <span style="text-align:left; display:block">**Gestion du stock par salle et rangement pour la microbiologie**</span>

    <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Saisie des quantités de matériel restant, catégorisation par salle et rangement, affichage des manques avec des codes couleurs et indication de la date du dernier réassort.<br>
    <span style="color:red">_Réalisation :_</span> Création de pages HTML et PHP pour la saisie et l’affichage dynamique des stocks avec codes couleurs ainsi qu'une ligne pour la date et le nom du dernier réassort.</span>

2. <span style="text-align:left; display:block">**Préparation du matériel pour les séances**</span>

    <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Saisie par les professeurs du matériel nécessaire pour la prochaine séance, anticipation de la préparation par les techniciens.<br>
    <span style="color:red">_Réalisation :_</span> Mise en place d’un tableau dédié pour les demandes des professeurs, avec gestion des quantités et visualisation par les techniciens.</span>

3. <span style="text-align:left; display:block">**Gestion spécifique pour la biochimie**</span>

    <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Adaptation de la gestion du stock selon la nouvelle réglementation pour la biochimie.<br>
    <span style="color:red">_Réalisation :_</span> Reprise de la structure existante pour la microbiologie, adaptation pour la biochimie, utilisation du JSON pour simplifier la gestion.</span>

4. <span style="text-align:left; display:block">**Amélioration de l’ergonomie**</span>

    <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Lisibilité et navigation facilitées entre les pages, menus et boutons intuitifs.<br>
    <span style="color:red">_Réalisation :_</span> Utilisation de CSS spécifique pour chaque page, ajout de menus et vérification de la conformité avec le W3C.</span>

5. <span style="text-align:left; display:block">**Zone de demande personnalisée**</span>

    <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Ajout d’un champ « Autre demande » pour les besoins spécifiques.<br>
    <span style="color:red">_Réalisation :_</span> Intégration d’une zone texte libre à la fin du formulaire avant de valider.</span>

6. <span style="text-align:left; display:block">**Signalement de la verrerie endommagée**</span>

    <span style="text-align:left; display:block"><span style="color:yellow">_Demande :_</span> Saisie de la verrerie endommagée ou cassée avec le nom et la date de la personne qui signale afin d'assurer la traçabilité.<br>
    <span style="color:red">_Réalisation :_</span> Création d’un tableau pour signaler la casse ou l’ébréchure de la verrerie, avec suivi nominatif et daté.</span>

Chaque fonctionnalité a été développée en concertation et validée par le maître de stage, afin de répondre précisément aux besoins.

## Compétences concernées

Les compétences concernées sont

[Gérer le patrimoine informatique](../realPro/) (1.2 et 1.5)\
[Développer la présence en ligne de l’organisation](../realPro/) (3.2)\
[Travailler en mode projet](../realPro/) (4.1, 4.2 et 4.3)\
[Mettre à disposition des utilisateurs un service informatique](../realPro/) (5.2)

## Environnement technologique

Pour réaliser le site, j'ai utilisé Visual Studio Code pour la programmation en HTML, CSS, PHP et JSON. De plus, j'ai utilisé Wamp afin de visualiser en local ce que je faisais en temps réel, l'hébergeur FreeHostingNoAds et Paint pour réaliser des schémas et visualiser ce que je voulais faire avant de passer à la réalisation.

## Preuves

_Le site que j'ai créé_\
![Site](../../../public/imgs/Preuve/siteCree.png)
_Le logiciel Visual Studio Code_\
![Visual Studio Code](../../../public/imgs/Preuve/visualStudioCode.png)
_Plusieurs exemples du code utilisé_\
![Exemple de code HTML](../../../public/imgs/Preuve/codeStageHTML.png)
![Exemple de code CSS](../../../public/imgs/Preuve/codeStageCSS.png)
![Exemple de code PHP](../../../public/imgs/Preuve/codeStagePHP.png)\
_Schéma réalisé avec Paint_\
![Exemple de paint](../../../public/imgs/Preuve/schemaPaint.png)
