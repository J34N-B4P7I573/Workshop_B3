function soulignerLettres() {
    // Récupérer le texte de la zone de texte
    var inputText = document.getElementById("textInput").value;

    // Séparer le texte en lettres individuelles
    var letters = inputText.split("");

    // Créer une nouvelle chaîne avec des balises span pour chaque lettre
    var resultText = "";
    for (var i = 0; i < letters.length; i++) {
        var currentLetter = letters[i].toLowerCase();

        // Ajouter une classe CSS spécifique à la voyelle ou à la consonne
        if ("aeiou".indexOf(currentLetter) !== -1) {
            resultText += '<span class="underline">' + letters[i] + '</span>';
        } else if (currentLetter >= 'a' && currentLetter <= 'z') {
            resultText += '<span class="underline-consonant">' + letters[i] + '</span>';
        } else {
            resultText += letters[i];
        }
    }

    // Afficher le résultat dans le paragraphe
    document.getElementById("result").innerHTML = resultText;
}