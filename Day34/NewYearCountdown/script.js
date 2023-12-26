// preloader script :
const counterEl = document.querySelector(".counter");

const barEl = document.querySelector(".loading-bar-front");

let idx = 0;

document.addEventListener("DOMContentLoaded", function () {
    // Display the loader initially
    document.getElementById('loader').style.display = "block";
    document.getElementById('cont').style.display = "none";

    // Call updateNum to start updating the loader percentage
    updateNum();
});

function updateNum() {
  counterEl.innerText = idx + "%";
  barEl.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    setTimeout(updateNum, 20);
  } else {
    // Allow a delay of 500 milliseconds (adjust as needed) before hiding the loader
    setTimeout(function () {
        document.getElementById('loader').style.display = "none";
        document.getElementById('cont').style.display = "block";
    }, 500);
}

}
// End
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(updateCountdown, 1000)
}
