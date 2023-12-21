if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Créer un objet de reconnaissance vocale
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const outputElement = document.getElementById('output');

    // Paramétrer la reconnaissance vocale pour continuer la transcription
    recognition.continuous = true;

    // Événement déclenché lorsque la reconnaissance vocale détecte une parole
    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;

      // Créer un nouveau paragraphe pour chaque mot
      const paragraph = document.createElement('p');
      paragraph.textContent = transcript;
      outputElement.appendChild(paragraph);

      // Utiliser l'API Web Speech pour synthétiser la parole
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(transcript);
      synth.speak(utterance);
    };

    // Démarrer la reconnaissance vocale
    recognition.start();
  } else {
    alert("Désolé, votre navigateur ne prend pas en charge l'API Web Speech.");
  }