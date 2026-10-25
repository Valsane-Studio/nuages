# NUAGES — Apprendre à lire le ciel

Application web progressive (PWA) indépendante, dans l'esprit graphique de VIVANT. 10 genres de nuages selon l'Organisation météorologique mondiale (OMM).

## Fonctionnalités

- Explorer par étage (élevés, moyens, bas, développement vertical), forme ou nom.
- Fiches détaillées : aspect visuel, critères de reconnaissance, temps et stabilité, physique et température, conditions et géographie.
- Outil de reconnaissance guidée utilisant trois indices visuels. Ce n'est pas un système de reconnaissance de photographies.
- Grandes photographies choisies sur Wikimedia Commons, liens vers auteurs et licences, sources météorologiques.
- Favoris enregistrés localement, installation PWA, textes disponibles hors ligne après première visite sur HTTPS.

## Publication

1. Créer un nouveau dépôt GitHub, par exemple `Valsane-Studio/nuages` (indépendant de `VIVANT`).
2. Ajouter **le contenu** de ce dossier à la racine du nouveau dépôt (pas le dossier contenant lui-même).
3. Dans GitHub > Settings > Pages, sélectionner `Deploy from a branch`, branche `main`, dossier `/ (root)`.
4. Ouvrir l'URL `https://valsane-studio.github.io/nuages/` quand la publication sera active.
5. Depuis Chrome Android, utiliser le bouton `Installer` de l'application. iOS utilise Safari et `Sur l'écran d'accueil`.

## Photos et connexion

Les textes et l'interface ne dépendent d'aucun serveur. Les photos viennent de fichiers identifiés sur Wikimedia Commons, chargées à la demande, et exigent une connexion pour leur premier affichage. Leur attribution et leur licence sont visibles en suivant le lien sous la photo ; la fiche essaie aussi d'afficher l'auteur et la licence renvoyés par l'API Commons. Si une photographie est indisponible, l'interface affiche un fond de remplacement plutôt qu'une image incorrecte.

## Références

- OMM / WMO : https://cloudatlas.wmo.int/en/clouds-definitions.html
- Météo-France : https://meteofrance.com/meteo-a-z/les-differents-types-de-nuages
- NOAA JetStream : https://www.noaa.gov/jetstream/clouds/ten-basic-clouds

Les altitudes sont celles des latitudes tempérées, en ordre de grandeur. La météo associée est indicative, jamais une prédiction certaine.