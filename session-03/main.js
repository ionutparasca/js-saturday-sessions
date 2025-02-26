// O functie care simuleaza aruncarea unui zar
// trebuie sa declar o functie
//sa utilizez Math floor si Math random
// sa cer de la utilizator nr de aruncari
//sa verific daca valoarea este un nr si pozitiva
// sa creez conditia
// sa afisez aruncarile

// function rollDice() {
//   return Math.floor(Math.random() * 6) + 1;
// }

// let nrAruncari = prompt("Introduceti nr de aruncari");
// nrAruncari = Number(nrAruncari);

// if (!isNaN(nrAruncari) && nrAruncari > 0) {
//   for (let i = 0; i < nrAruncari; i++) {
//     alert(`Aruncarea ${i + 1}: ${rollDice()}`);
//   }
// } else {
//   alert("Te rog introdu un număr valid mai mare decât 0.");
// }

// function rollDice(sides = 6) {
//   let firstDice = Math.floor(Math.random() * sides) + 1;
//   let secondDice = Math.floor(Math.random() * sides) + 1;
//   console.log(`The numbers are: ${firstDice} si ${secondDice}`);
// }
// rollDice();

// function rollGeneralDice(sides = 6) {
//   return Math.floor(Math.random() * sides) + 1;
// }

// function rollDice() {
//   let firstDice = rollGeneralDice();
//   let secondDice = rollGeneralDice();

//   console.log(`The numbers are: ${firstDice} și ${secondDice}`);
// }

// rollDice();

// O functie care sa genereze o recompensa random
//
// Set de recompense deja declarate
// Trebuie sa declar o constanta cu toate recompensele
// Sa declar o functie in interiorul careia sa aplic conditia
// Mai am nevoie de o variabila careia sa ii fie atribuita recompensa random
// sa afisez recompensa

const recompense = [
  "Iesi la bere cu baietii",
  "Poti sa mergi la fotbal",
  "Mergi la cinema",
  "Poti sa ma scoti in oras ",
  "Un abonament la sală",
];

function genereazaRecompensa() {
  let recompensaRandom =
    recompense[Math.floor(Math.random() * recompense.length)];
  console.log(`Recompensa aleasă este: ${recompensaRandom}`);
}

genereazaRecompensa();
