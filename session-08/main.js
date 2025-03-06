let lights;
let currentIndex = 0;

function initializeLights() {
  lights = document.querySelectorAll(".stopLight span");
}

document.addEventListener("DOMContentLoaded", initializeLights);

function changeLight() {
  lights.forEach(function (light) {
    light.style.backgroundColor = "gray";
  });

  lights[currentIndex].style.backgroundColor = getCurrentColor();

  currentIndex = (currentIndex + 1) % lights.length;
}

function getCurrentColor() {
  if (currentIndex === 0) return "red";
  if (currentIndex === 1) return "yellow";
  return "green";
}

setInterval(changeLight, 2000);
