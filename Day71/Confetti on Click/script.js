let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;
let clicked = false;
let displayButton = document.getElementById("display-confetti");
let particles = [];
let colors = ["#141b41", "306bac", "#6f9ceb", "#98b9f2", "#918ef4"];

//Events object
let events = {
  mouse: {
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
  },
  touch: {
    down: "touchstart",
    move: "touchmovve",
    up: "touchend",
  },
};

let deviceType = "";
//Detect touch device
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

//For using request animationFrame on all browsers
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequesetAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

//Random number between range
function randomNumberGenerator(min, max) {
  return Math.random() * (max - min) + min;
}

function startConfetti() {
  let current = [];
  context.fillStyle = "rgba(255,255,255,1)";
  context.fillRect(0, 0, width, height);
  if (clicked) {
    createConfetti();
  }
  for (let i in particles) {
    particles[i].draw();
    if (particles[i].move()) {
      current.push(particles[i]);
    }
  }

  particles = current;
  window.requestAnimationFrame(startConfetti);
}

function createConfetti() {
  //Increase range for bigger confetti;
  let numberOfParticles = randomNumberGenerator(10, 20);
  let color = colors[Math.floor(randomNumberGenerator(0, colors.length))];
  for (let i = 0; i < numberOfParticles; i++) {
    let particle = new Particle();
    particle.color = color;
    particles.push(particle);
  }
}

function Particle() {
  let buttonBounds = displayButton.getBoundingClientRect();
  this.width = randomNumberGenerator(0.1, 0.9) * 5;
  this.height = randomNumberGenerator(0.1, 0.9) * 5;
  this.x = buttonBounds.x + buttonBounds.width / 2;
  this.y = buttonBounds.y + buttonBounds.height / 2;
  let angle = Math.random() * Math.PI * 2;
  let speed = randomNumberGenerator(1, 5);
  this.vx = Math.cos(angle) * speed;
  this.vy = Math.sin(angle) * speed;
}

Particle.prototype = {
  move: function () {
    if (this.x >= canvas.width || this.y >= canvas.height) {
      return false;
    }
    return true;
  },
  draw: function () {
    this.x += this.vx;
    this.y += this.vy;
    context.save();
    context.beginPath();
    context.translate(this.x, this.y);
    context.arc(0, 0, this.width, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.closePath();
    context.fill();
    context.restore();
  },
};

isTouchDevice();
displayButton.addEventListener(events[deviceType].down, function (e) {
  e.preventDefault();
  clicked = true;
});

displayButton.addEventListener(events[deviceType].up, function (e) {
  e.preventDefault();
  clicked = false;
});

window.onload = () => {
  canvas.width = width;
  canvas.height = height;
  window.requestAnimationFrame(startConfetti);
};