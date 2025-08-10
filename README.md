# Estimateur de peinture intérieure

Cette application fournit une base pour estimer le coût de projets de peinture intérieure résidentielle au Québec. Tout l’interface utilisateur est dessinée dans un `<canvas>` HTML5 et gérée en TypeScript à l’aide d’un petit moteur de widgets maison. Les calculs de surfaces, heures, gallons et coûts sont implémentés dans des fonctions pures testées avec Vitest.

## Installation

````bash
cd paint-estimator-app
npm install
# Lance le serveur de développement
npm run dev
# Exécute les tests unitaires
npm run test
```

L’application se lance sur `http://localhost:5173` et affiche un formulaire minimal permettant de saisir les dimensions d’une pièce et d’obtenir une estimation simple. La structure du projet est prête à accueillir toutes les fonctionnalités décrites dans le cahier des charges (assistant de création de projet, catalogue de produits, profils de taux, export PDF/CSV, etc.).

## Arborescence

- **index.html** : page d’entrée avec un `<canvas>` plein écran.
- **src/main.ts** : initialisation du canvas, de la boucle de rendu et de quelques widgets de démonstration.
- **src/canvas/ui/** : moteur de widgets. `UIManager` gère le dessin et la distribution des événements ; `Button` et `TextInput` sont des exemples de contrôles.
- **src/domain/calcul.ts** : fonctions pures pour calculer surfaces, heures, gallons et coûts. Les tests unitaires se trouvent dans `calcul.test.ts`.
- **src/state/store.ts** : implémentation d’un petit store applicatif avec actions et sélecteurs. Il charge des données seed (profils de taux, produits, réparations) depuis `src/seeds.ts`.
- **src/export/pdf.ts** : fonctions de génération de PDF via `pdf-lib` (version simplifiée). À enrichir pour produire des devis et des feuilles de route complètes.
- **src/export/csv.ts** : helpers pour exporter des tableaux en CSV.
- **src/persistence/local.ts** : sérialisation et désérialisation de l’état dans `localStorage` et import/export JSON.
- **src/seeds.ts** : données initiales (profils de production, produits, presets de réparations).

## Limites actuelles

Ce dépôt fournit une base opérationnelle mais largement incomplète par rapport aux spécifications finales :

- Seule une estimation très simple d’une pièce est proposée via quelques champs et un bouton.
- Le moteur d’interface ne comprend qu’un bouton et un champ texte, sans gestion avancée du focus, des raccourcis clavier ou des listes déroulantes.
- Les exports PDF et CSV sont des gabarits minimalistes.
- La logique métier ne couvre pas encore toutes les surfaces (plafonds, plinthes, boiseries, portes), les coefficients, les réparations, les taxes, etc.

Néanmoins, l’architecture proposée (séparation entre domaine, UI et état, utilisation de Vite, TypeScript et pdf-lib) fournit une base solide pour développer l’ensemble des fonctionnalités décrites. Les contributions futures devraient suivre cette structure en maintenant les fonctions de calcul pures et testées, en enrichissant progressivement le moteur de widgets et en ajoutant des vues et des écrans supplémentaires.
