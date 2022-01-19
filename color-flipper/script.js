const colors = ["green", "lightyellow", "rgba(133, 133, 200)", "#f15025"];

const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomIndex = getRandomNum();
  document.body.style.backgroundColor = colors[randomIndex];
  colorSpan.textContent = colors[randomIndex];
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}

export {};
