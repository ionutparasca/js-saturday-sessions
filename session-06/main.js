function rollDice() {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice-number").textContent = diceValue;
  document.getElementById("dice").src = `images/zar${diceValue}.png`;
  imaginea;
}

document.getElementById("roll-button").addEventListener("click", rollDice);
