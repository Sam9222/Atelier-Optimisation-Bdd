## Requêtes

Les requêtes sont présentes dans le dossier "Pages"

## Collection Favory

Afin de gérer l'enregistrement des favoris, nous avons créer une nouvelle collection.

Celle-ci se compose des champs suivants :

    id : id du favori généré automatiquement
    movie_id : id du film ajouté en favori
    users_id : id de l'utilisateur associé
    date : date de l'ajout du favori 

## Ajout de commentaire 

Pour l'ajout de commentaire nous avons décidé d'utiliser les 4 champs de la table en paramètre (inscrit dans le body) de notre endpoint.
Nous avons cherché à n'utiliser que l'id de l'utilateur pour ensuite récupérer son nom et son mail directement dans la collection users mais n'avons pas réussi à filtrer les champs récupérés dans la requête avec find ou findOne malgré de très nombreuses recherches.

La fonction find permet normalement d'exclure des champs d'une collection de la manière suivante : collection.find({},_{champ: 1}_) 
Quand un champ est à l'état un il est affiché, quand il est à 0 il est exclu.

## Endpoints

Nous avons décidé d'utiliser plusieurs endpoints, 1 par requête. Il est cependant possible (préférable) d'utiliser un seul endpoint et de faire des liens afin d'optimiser les requêtes.
Après avoir chercher nous sommes restés sur le choix de plusieurs endpoints car les liens mis en place ne fonctionnaient pas.
