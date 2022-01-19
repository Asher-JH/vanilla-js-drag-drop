const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = getRandomIndex();
    hexColor += hex[randomIndex].toString();
  }
  document.body.style.backgroundColor = hexColor;
  colorSpan.textContent = hexColor;
});

function getRandomIndex() {
  return Math.floor(Math.random() * hex.length);
}

export {};
