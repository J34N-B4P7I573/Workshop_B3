if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    //Ce script crée un objet de reconnaissance vocale, configuré pour transcrire en continu. 
    //Lorsqu'un mot est détecté, un nouveau paragraphe est créé pour chaque mot et la parole est synthétisée via l'API Web Speech. 
    //La reconnaissance vocale est ensuite démarrée.
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const outputElement = document.getElementById('output');

    recognition.continuous = true;

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;

      const paragraph = document.createElement('p');
      paragraph.textContent = transcript;
      outputElement.appendChild(paragraph);

      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(transcript);
      synth.speak(utterance);
    };

    recognition.start();
  } else {
    alert("Désolé, votre navigateur ne prend pas en charge l'API Web Speech.");
  }