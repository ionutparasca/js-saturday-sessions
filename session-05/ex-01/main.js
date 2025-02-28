let firstNumber = Number(prompt(`introduceti un nr`));
let secondNumber = Number(prompt(`Introduceti al doilea nr`));
let min;
let max;
let primeNumbers = [];

if (firstNumber < secondNumber) {
  min = firstNumber;
  max = secondNumber;
} else {
  min = firstNumber;
  max = secondNumber;
}
function isPrime() {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
for (let i = min; i <= max; i++)
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
alert(
  `Numerele prime dintre ${min} și ${max} sunt: ${primeNumbers.join(", ")}`
);
