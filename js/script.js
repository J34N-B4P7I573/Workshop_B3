let currentNumber = 0;
let correctCount = 0;

function soulignerLettres() {
    //Ce script traite un texte récupéré depuis une zone de texte. Il commence par séparer ce texte en lettres individuelles. 
    //Ensuite, pour chaque lettre, une balise <span> est créée et une classe CSS spécifique est attribuée en fonction de la nature de la lettre, soit une voyelle ou une consonne. 
    //Finalement, le texte modifié avec ces balises <span> est affiché dans un paragraphe.
    var inputText = document.getElementById("textInput").value;

    var letters = inputText.split("");

    var resultText = "";
    for (var i = 0; i < letters.length; i++) {
        var currentLetter = letters[i].toLowerCase();

        if ("aeiou".indexOf(currentLetter) !== -1) {
            resultText += '<span class="underline">' + letters[i] + '</span>';
        } else if (currentLetter >= 'a' && currentLetter <= 'z') {
            resultText += '<span class="underline-consonant">' + letters[i] + '</span>';
        } else {
            resultText += letters[i];
        }
    }

    document.getElementById("result").innerHTML = resultText;
}

function detecterCaracteres() {

    //Ce script concerne la manipulation d'un tableau dans une interface utilisateur. Premièrement, elle ajoute une ligne vide avec une couleur de fond rouge. Pour maintenir cette cellule vide, un espace non rompu est inséré. 
    //Ensuite, après avoir ajouté des données au tableau, le champ de saisie est automatiquement effacé pour préparer la prochaine entrée. Enfin, l'algorithme alterne les couleurs des lignes du tableau pour améliorer la lisibilité et l'esthétique visuelle.
    //Pour marquer la fin d'une ligne, les symbôles <.:!?> font l'équivalent d'une <Entrer>.
    var inputField = document.getElementById('inputField');
    var inputValue = inputField.value;

    if (/[.!?:]/.test(inputValue)) {
      var tableBody = document.getElementById('tableBody');
      var newRow = tableBody.insertRow(-1);
      var cell = newRow.insertCell(0);
      cell.innerHTML = inputValue;

      var emptyRow = tableBody.insertRow(-1);
      var emptyCell = emptyRow.insertCell(0);
      emptyCell.innerHTML = '&nbsp;';
      emptyRow.classList.add('emptyRow');

      inputField.value = '';

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

      
      var emptyRow = tableBody.insertRow(-1);
      var emptyCell = emptyRow.insertCell(0);
      emptyCell.innerHTML = '&nbsp;';
      emptyRow.classList.add('emptyRow');

      inputField.value = '';

      var rows = tableBody.getElementsByTagName('tr');
      for (var i = 0; i < rows.length; i++) {
        rows[i].style.backgroundColor = i % 2 === 0 ? '#f2f2f2' : 'white';
      }
    }
  }

  function traduireEnLettres() {
    //Pour ce script, le but est de traduire des chiffres en lettres, et ensuite afficher le résultat de cette conversion. 
    //Il s'agit donc d'un processus en deux étapes : premièrement, la traduction numérique en texte, et deuxièmement, la présentation de ce texte traduit à l'utilisateur.
    var inputNumber = document.getElementById('inputNumber').value;
    var outputText = document.getElementById('outputText');

    var traduction = traduireChiffresEnLettres(inputNumber);

    outputText.textContent = "Votre traduction en Lettres : " + traduction;
  }

  function traduireChiffresEnLettres(chiffres) {
    //Ce script convertit des chiffres en leurs équivalents en lettres. Il utilise des dictionnaires définis pour les chiffres de 0 à 19 et pour les dizaines, permettant ainsi une traduction précise des nombres. 
    //Le processus de conversion est appliqué aux nombres dans différentes plages : de 0 à 9, de 10 à 99, de 100 à 999, et de 1000 à 9999. 
    //Une fois la conversion effectuée, le résultat est affiché pour l'utilisateur.
    var chiffresEnLettresJusquA19 = [
      "", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf",
      "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"
    ];

    var dizainesEnLettres = [
      "", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante", "quatre-vingt", "quatre-vingt"
    ];

    var traduction = "";

    if (chiffres.length === 1) {
      var chiffre = parseInt(chiffres[0]);
      if (!isNaN(chiffre)) {
        traduction = chiffresEnLettresJusquA19[chiffre];
      } else {
        traduction = " (non-numérique) ";
      }
    } else if (chiffres.length === 2) {
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
    //Cette fonction génère un nombre aléatoire entre 0 et 99 en utilisant Math.random() et Math.floor(). 
    //Ensuite, elle met à jour le contenu textuel de l'élément HTML avec l'identifiant 'number' en y affichant ce nombre généré. La fonction réinitialise également le texte de l'élément avec l'identifiant 'status', le mettant à une chaîne vide.
    currentNumber = Math.floor(Math.random() * 100);
    document.getElementById('number').innerText = currentNumber;
    document.getElementById('status').innerText = '';
}

//Génération d'un nombre lors du chargement de la page.
window.onload = generateNumber;

function startRecognition() {
    //Ce script initialise la reconnaissance vocale en français et compare le nombre prononcé par l'utilisateur avec un nombre prédéfini. 
    //S'il y'a correspondance, il augmente de +1 le compteur de succès et affiche un message de Succès, puis génère un nouveau nombre après un court délai. 
    //En cas d'erreur, un message d'encouragement pour réessayer est affiché.
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

let voices = [];

function populateVoiceList() {
    voices = speechSynthesis.getVoices();
    let voiceSelect = document.getElementById('voiceSelect');
    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.textContent = voice.name + ' (' + voice.lang + ')';
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
}

speechSynthesis.onvoiceschanged = populateVoiceList;

function speak() {
    let text = document.getElementById('textToSpeak').value;
    let speech = new SpeechSynthesisUtterance(text);
    let selectedVoiceName = document.getElementById('voiceSelect').selectedOptions[0].getAttribute('data-name');
    speech.voice = voices.find(voice => voice.name === selectedVoiceName);
    window.speechSynthesis.speak(speech);
}

function stopSpeaking() {
    window.speechSynthesis.cancel();
}
