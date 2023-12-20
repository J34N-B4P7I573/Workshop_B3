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

function detecterCaracteres() {
    var inputField = document.getElementById('inputField');
    var inputValue = inputField.value;

    if (/[.!?:]/.test(inputValue)) {
      var tableBody = document.getElementById('tableBody');
      var newRow = tableBody.insertRow(-1);
      var cell = newRow.insertCell(0);
      cell.innerHTML = inputValue;

      // Ajoute une ligne vide avec la couleur rouge
      var emptyRow = tableBody.insertRow(-1);
      var emptyCell = emptyRow.insertCell(0);
      emptyCell.innerHTML = '&nbsp;'; // Ajoute un espace non rompu pour maintenir la cellule vide
      emptyRow.classList.add('emptyRow');

      // Efface le champ de saisie après l'ajout au tableau
      inputField.value = '';

      // Alterne les couleurs des lignes
      var rows = tableBody.getElementsByTagName('tr');
      for (var i = 0; i < rows.length; i++) {
        rows[i].style.backgroundColor = i % 2 === 0 ? '#f2f2f2' : 'white';
      }
    }
  }

  function detecterCaracteres2() {
    var inputField = document.getElementById('inputField');
    var inputValue = inputField.value;

    if (/[.!?;]/.test(inputValue)) {
      var tableBody = document.getElementById('tableBody');
      var lignes = inputValue.split(/[.!?;]/);

      lignes = lignes.filter(function (ligne) {
        return ligne.trim() !== '';
      });

      lignes.forEach(function (ligne) {
        var newRow = tableBody.insertRow(-1);
        var cell = newRow.insertCell(0);
        cell.innerHTML = ligne.trim();
      });

      // Ajoute une ligne vide avec la couleur rouge
      var emptyRow = tableBody.insertRow(-1);
      var emptyCell = emptyRow.insertCell(0);
      emptyCell.innerHTML = '&nbsp;'; // Ajoute un espace non rompu pour maintenir la cellule vide
      emptyRow.classList.add('emptyRow');

      // Efface le champ de saisie après l'ajout au tableau
      inputField.value = '';

      // Alterne les couleurs des lignes
      var rows = tableBody.getElementsByTagName('tr');
      for (var i = 0; i < rows.length; i++) {
        rows[i].style.backgroundColor = i % 2 === 0 ? '#f2f2f2' : 'white';
      }
    }
  }