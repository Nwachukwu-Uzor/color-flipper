const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const container = document.querySelector(".container h2");
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

const generateRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};

const generateRandomColor = () => {
  let color = "#";
  for (let i = 0; color.length < 7; i++) {
    color += hex[generateRandomNumber()];
  }
  return color;
};

btn.addEventListener("click", () => {
  const randomColor = generateRandomColor();
  container.style.backgroundColor = randomColor;
  color.innerText = randomColor;
});
