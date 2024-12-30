document.addEventListener("DOMContentLoaded", () => {
  const tabellone = document.getElementById("tabellone");
  const estraiBtn = document.getElementById("estrai");
  const numeroEstratto = document.getElementById("numero-estratto");
  const numeriEstratti = [];
  const tuttiINumeri = Array.from({ length: 90 }, (_, i) => i + 1);

  // Crea il tabellone
  tuttiINumeri.forEach(numero => {
    const cella = document.createElement("div");
    cella.textContent = numero;
    cella.className = "numero";
    cella.id = `numero-${numero}`;
    tabellone.appendChild(cella);
  });

  // Funzione per estrarre un numero casuale
  const estraiNumero = () => {
    if (numeriEstratti.length === 90) {
      alert("Tutti i numeri sono stati estratti!");
      return;
    }
    let numero;
    do {
      numero = Math.floor(Math.random() * 90) + 1;
    } while (numeriEstratti.includes(numero));
    numeriEstratti.push(numero);

    // Aggiorna il tabellone e mostra il numero estratto
    document.getElementById(`numero-${numero}`).classList.add("estratto");
    numeroEstratto.textContent = `Numero estratto: ${numero}`;
    leggiNumero(numero);
  };

  // Funzione per leggere il numero estratto
  const leggiNumero = (numero) => {
    const synth = window.speechSynthesis;
    const voce = new SpeechSynthesisUtterance(`Numero ${numero}`);
    voce.lang = "it-IT";
    synth.speak(voce);
  };

  // Assegna l'evento al pulsante
  estraiBtn.addEventListener("click", estraiNumero);
});
