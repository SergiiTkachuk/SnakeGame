let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 28;
let snake = [];

snake[0] = {
  x: 8 * box,
  y: 8 * box,
};
let direction; // game starts stopped, it only starts moving when the player presses a direction arrow
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};
let score = 0;
let level = 1;
let vel = 150;
let border = false;
let fim = false;
