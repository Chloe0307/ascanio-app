Première étape : 

    Initialiser le projet avec "npx create-react Mon-app"
    Install "react-bootstrap-typeahead": "^5.1.4",
    Lier le projet local avec un repo distant sur github
    Premier commit d'initialisation sur la branche master.


Deuxième étape : 

    Faire l'intégration statique du projet : 
        - composant header
        - composant CreateList
        - composant Search
    Architecture des fichiers, CSS, données statiques.

Troisième étape : 

    J'ai crée une fonction qui permet de créer une div dans le DOM avec récupération du titre dynamiquement.

    J'ai initialisé un server avec node/express pour la partie backend.

    Créer l'autocomplete était ma priorité car je n'en avais jamais fait: 
        - installation react-typeahead
        - intégration du composant natif AsyncTypeahead
        - adapter à mon code et relier l'API 
        - Etant le composant enfant (search), je passe les props  utiles au composant parent (createList)
        - Gros blocage : au moment de récupérer la valeur de la ville que je récupère bien dans Search mais qui reste undifined dans createList (objet vide). je récupère quand même très bien ma fonction handleGetValue() dans le composant enfant.
    Pour en arriver là j'ai crée un codesanbox ce qui m'a permis d'avancer un peu plus vite.

https://codesandbox.io/s/keen-breeze-j6sf6?file=/src/components/Search/index.js:2336-2404

Quatrième étape : 

J'ai installé et initialisé firebase dans un répertoire utils>firebase.js pour la sauvegarde des listes des utilisateurs.

Création d'une fonction qui envoie les datas en bdd.

installation react router dom pour accéder à la liste des zones créées par les utilisateurs. 

mise en place d'un bouton de suppresion