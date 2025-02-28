function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeColor() {
  let randomColor = getRandomColor();
  square.style.backgroundColor = randomColor;
  colorCode.textContent = `Culoare: ${randomColor}`;
}

let square = document.getElementById("square");
let colorCode = document.getElementById("color-code");
let button = document.getElementById("change-color");

changeColor();

button.addEventListener("click", changeColor);
