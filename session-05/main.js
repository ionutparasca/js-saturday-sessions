let number = prompt("introduceti un nr");
number = Number(number);

// if (number % 2 === 0) {
//   alert(`Numarul  ${number}  est par`);
// } else {
//   alert(`Numarul  ${number}  est impar`);
// }

function verificaParitate() {
  if (number % 2 === 0) {
    alert(`Numarul  ${number}  est par`);
  } else {
    alert(`Numarul  ${number}  est impar`);
  }
}
verificaParitate();

let firstNumber = prompt("Introduceti primul numar");
let secondNumber = prompt("Introduceti al doilea numar");
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);
let min = firstNumber;
let max = secondNumber;
let sum = 0;

// if (firstNumber < secondNumber) {
//   firstNumber = min;
//   secondNumber = max;
// } else {
//   firstNumber = max;
//   secondNumber = min;
// }

// for (let i = min; i <= max; i++) {
//   sum = sum + i;
// }
// alert(`Suma numerelor este ${sum}`);

function sumNumbers(firstNumber, secondNumber) {
  let min, max;

  if (firstNumber < secondNumber) {
    min = firstNumber;
    max = secondNumber;
  } else {
    min = secondNumber;
    max = firstNumber;
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}
alert(
  `Suma numerelor dintre ${firstNumber} și ${secondNumber} este: ${sumNumbers(
    firstNumber,
    secondNumber
  )}`
);
