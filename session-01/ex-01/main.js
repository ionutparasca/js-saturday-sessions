/*Programul preia de la utilizator o valoare numerica si afiseaza
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

alert(
  `${prevNumber}`,
  `${inputNumber}`,
  `${nextNumber}`
); /* alta modalitate de a afisa , se numeste interpolare.*/

alert("The opposite of" + inputNumber + " is: " + -inputNumber);

alert(`The remainder of ${inputNumber} divided by 2 is ${inputNumber % 2}`);

alert(`2 to the power of` + inputNumber + `equals` + 2 ** inputNumber);

/*## CHALLENGE 2: Basic Arithmetic Operations
The user enters two numeric values. The program displays:
1. Their sum,
2. Their difference,
3. Their product,
4. Their division,
5. Their arithmetic mean,
6. The remainder of the division of the first number by the second,
7. The first number raised to the power of the second. */

let inputSecondNumber = prompt("Input second number");
inputSecondNumber = Number(inputSecondNumber);

alert(
  `Sum of the two numbers ${inputNumber} + ${inputSecondNumber} equals ${
    inputNumber + inputSecondNumber
  }`
);

alert(
  `Difference of the two numbers ${inputNumber} - ${inputSecondNumber} equals ${
    inputNumber - inputSecondNumber
  }`
);

alert(
  `The product of the two numbers ${inputNumber} * ${inputSecondNumber} equals ${
    inputNumber * inputSecondNumber
  }`
);

alert(
  `The division of the two numbers ${inputNumber} / ${inputSecondNumber} equals ${
    inputNumber / inputSecondNumber
  }`
);

alert(
  `The arithmetic of the two numbers (${inputNumber} + ${inputSecondNumber}) / 2 equals ${
    (inputNumber + inputSecondNumber) / 2
  }`
);

alert(
  `The rimainder of the divisin of the first number by the second ${inputNumber} % ${inputSecondNumber} equals ${
    inputNumber % inputSecondNumber
  }`
);

alert(
  `The power of numbers ${inputNumber} ** ${inputSecondNumber} equals ${
    inputNumber ** inputSecondNumber
  }`
);

/* ## CHALLENGE 3: Final Grade Calculation
 A student receives three grades. The program calculates and displays the final average.*/

let FirstGrade = prompt("Input your first grade");
FirstGrade = Number(FirstGrade);

let SecondGrade = prompt("Input your second grade");
SecondGrade = Number(SecondGrade);

let ThirdGrade = prompt("Input your third grade");
ThirdGrade = Number(ThirdGrade);

alert(
  `The average grade (${FirstGrade} + ${SecondGrade} + ${ThirdGrade}) / 3 equals ${
    (FirstGrade + SecondGrade + ThirdGrade) / 3
  }  `
);

/* ## CHALLENGE 5: Currency Conversion
The user enters an amount in one currency and an exchange rate. The program calculates and displays the converted amount.*/

let euro = prompt("Input euro");
euro = Number(euro);

const SchimbEuroRon = 4.6;

alert(
  `The result of conversion ${euro} * ${SchimbEuroRon} equals ${
    euro * SchimbEuroRon
  }`
);

/* ## CHALLENGE 6: Dice Roll Simulation
The program generates and displays a random number between 1 and 6, simulating the roll of a six-sided die. */

const roll = document.getElementById("btn");
const result1 = document.querySelector(".result");
roll.addEventListener("click", () => {
  let zar = Math.random();
  let result;

  if (zar >= 0 && zar <= 0.166) {
    result = 1;
  } else if (zar > 0.166 && zar <= 0.32) {
    result = 2;
  } else if (zar > 0.32 && zar <= 0.48) {
    result = 2;
  } else if (zar > 0.48 && zar <= 0.66) {
    result = 4;
  } else if (zar > 0.66 && zar <= 0.88) {
    result = 5;
  } else {
    result = 6;
  }
  result1.innerHTML = result;
});

Math.floor(6.8); // rotunjeste in jos
Math.ceil(6.8); // in sus
