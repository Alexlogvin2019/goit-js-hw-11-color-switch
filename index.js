"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startButton = document.querySelector("[data-action='start']");
const stopButton = document.querySelector("[data-action='stop']");
let setId;

function changeBackground() {
  const color = randomIntegerFromInterval(0, colors.length);
  document.body.style.backgroundColor = `${colors[color]}`;
  //console.log(color);
}
function setChange(e) {
  startButton.removeEventListener("click", setChange);
  setId = setInterval(changeBackground, 1000);
  startButton.disabled = true;
}
function stopChange(e) {
  clearInterval(setId);
  startButton.addEventListener("click", setChange);
  startButton.disabled = false;
}
startButton.addEventListener("click", setChange);
stopButton.addEventListener("click", stopChange);
