let currentNumber = 0;
let correctCount = 0;

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

  function traduireEnLettres() {
    var inputNumber = document.getElementById('inputNumber').value;
    var outputText = document.getElementById('outputText');

    // Traduction des chiffres en lettres
    var traduction = traduireChiffresEnLettres(inputNumber);

    // Affichage du résultat
    outputText.textContent = "Votre traduction en Lettres : " + traduction;
  }

  function traduireChiffresEnLettres(chiffres) {
    // Dictionnaire des chiffres en lettres jusqu'à 19
    var chiffresEnLettresJusquA19 = [
      "", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf",
      "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"
    ];

    // Dictionnaire des dizaines en lettres
    var dizainesEnLettres = [
      "", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante", "quatre-vingt", "quatre-vingt"
    ];

    var traduction = "";

    if (chiffres.length === 1) {
      // Pour les chiffres de 0 à 9
      var chiffre = parseInt(chiffres[0]);
      if (!isNaN(chiffre)) {
        traduction = chiffresEnLettresJusquA19[chiffre];
      } else {
        traduction = " (non-numérique) ";
      }
    } else if (chiffres.length === 2) {
      // Pour les chiffres de 10 à 99
      var dizaine = parseInt(chiffres[0]);
      var unite = parseInt(chiffres[1]);

      if (!isNaN(dizaine) && !isNaN(unite)) {
        if (dizaine === 1) {
          traduction = chiffresEnLettresJusquA19[dizaine * 10 + unite];
        } else {
          traduction = dizainesEnLettres[dizaine];
          if (unite > 0) {
            traduction += "-" + chiffresEnLettresJusquA19[unite];
          }
        }
      } else {
        traduction = " (non-numérique) ";
      }
    } else if (chiffres.length === 3) {
      // Pour les chiffres de 100 à 999
      var centaine = parseInt(chiffres[0]);
      var dizaine = parseInt(chiffres[1]);
      var unite = parseInt(chiffres[2]);

      if (!isNaN(centaine) && !isNaN(dizaine) && !isNaN(unite)) {
        traduction = chiffresEnLettresJusquA19[centaine] + " cent";

        if (dizaine > 0 || unite > 0) {
          traduction += " et ";
          if (dizaine === 1) {
            traduction += chiffresEnLettresJusquA19[dizaine * 10 + unite];
          } else {
            traduction += dizainesEnLettres[dizaine];
            if (unite > 0) {
              traduction += "-" + chiffresEnLettresJusquA19[unite];
            }
          }
        }
      } else {
        traduction = " (non-numérique) ";
      }
    } else if (chiffres.length === 4) {
      // Pour les chiffres de 1000 à 9999
      var millier = parseInt(chiffres[0]);
      var centaine = parseInt(chiffres[1]);
      var dizaine = parseInt(chiffres[2]);
      var unite = parseInt(chiffres[3]);

      if (!isNaN(millier) && !isNaN(centaine) && !isNaN(dizaine) && !isNaN(unite)) {
        traduction = chiffresEnLettresJusquA19[millier] + " mille";

        if (centaine > 0 || dizaine > 0 || unite > 0) {
          traduction += " ";
          if (centaine === 0 && (dizaine > 0 || unite > 0)) {
            traduction += "et ";
          }

          if (centaine > 0) {
            traduction += chiffresEnLettresJusquA19[centaine] + " cent";
            if (dizaine > 0 || unite > 0) {
              traduction += " et ";
            }
          }

          if (dizaine > 0) {
            if (dizaine === 1) {
              traduction += chiffresEnLettresJusquA19[dizaine * 10 + unite];
            } else {
              traduction += dizainesEnLettres[dizaine];
              if (unite > 0) {
                traduction += "-" + chiffresEnLettresJusquA19[unite];
              }
            }
          } else if (unite > 0) {
            traduction += chiffresEnLettresJusquA19[unite];
          }
        }
      } else {
        traduction = " (non-numérique) ";
      }
    }

    return traduction.trim();
  }

  function saveTextAsFile() {
    var textToSave = document.getElementById('textInput').value;

    var blob = new Blob([textToSave], { type: 'text/plain;charset=utf-8' });
    var link = document.createElement('a');

    link.href = window.URL.createObjectURL(blob);
    link.download = 'saved_text.txt';
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }

  function generateNumber() {
    currentNumber = Math.floor(Math.random() * 100);
    document.getElementById('number').innerText = currentNumber;
    document.getElementById('status').innerText = '';
}

window.onload = generateNumber;

function startRecognition() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = 'fr-FR';
    recognition.onresult = function(event) {
        let spokenNumber = event.results[0][0].transcript.trim();
        if (parseInt(spokenNumber, 10) === currentNumber) {
            correctCount++;
            document.getElementById('status').innerText = 'Succès!';
            document.getElementById('correctCount').innerText = correctCount;
            setTimeout(generateNumber, 2000);
        } else {
            document.getElementById('status').innerText = 'Essaie encore!';
        }
    };
    recognition.start();
}