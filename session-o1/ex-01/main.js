/* Programul preia de la utilizator o valoare numerica si afiseaza
   1. intr-un singur mesaj, o secventa de text ce contine: numarului anterior, numarul primit, numarul succesiv (ex. 5 => "4, 5, 6")
   2. opusul numarului (ex. 5 => "opusul numarului 5 este -5", -3 => "opusul numarului -3 este 3")
   3. restul impartirii la 2 (ex. 5 => "restul impartirii lui 5 la 2 este 1")
   4. 2 la puterea valorii (ex. 3 => "2 la puterea 3 este 8")
   */

console.log("main.js loaded....");

let inputNumber = prompt("Input a number");
inputNumber = Number(inputNumber);

let prevNumber = inputNumber - 1;
let nextNumber = inputNumber + 1;

alert(prevNumber + ", " + inputNumber + " , " + nextNumber);

// alert (`${prevNumber}`, `${inputNumber}`,`${nextNumber}`) alta modalitate de a afisa , se numeste interpolare.
