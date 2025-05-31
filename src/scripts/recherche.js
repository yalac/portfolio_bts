const handleSearch = (event) => {
    // handleSearch -> recherche
    const convert = event.target.value.toLowerCase(); // convertis en minuscule
    const entree = document.querySelectorAll(".vocabulaire-mot"); // selectionne tous les mots qui sont de class .vocabulaire-mot
    entree.forEach((entry) => {
        // pour chaque mots, chaque definition
        const definition = entry.nextElementSibling; // permet d'associer la def en dessous du mots avec son mots
        // Fonction pour supprimer les accents
        const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const texte = normalize(entry.textContent.toLowerCase()); // enlève les accents et met en minuscule
        if (texte.includes(convert)) {
            // Vérifie si le texte contient la requête de recherche
            entry.style.display = ""; // Affiche l'entrée si la requête est trouvée
            if (definition) definition.style.display = ""; // Affiche la définition associée si elle existe
        } else {
            entry.style.display = "none"; // Cache l'entrée si la requête n'est pas trouvée
            if (definition) definition.style.display = "none"; // Cache la définition associée si elle existe
        }
    });
};
window.addEventListener("DOMContentLoaded", () => {
    // Attend que tout le contenu de la page soit chargé
    document.getElementById("vocabulaire-recherche").addEventListener("input", handleSearch);
    // Récupère l'élément avec l'ID "vocabulaire-recherche" et ajoute un écouteur sur l'événement "input" si l'utilisateur saisit du texte cela appelle la fonction handleSearch à chaque modification
});
