// Select the container and heart elements from the DOM
const container = document.querySelector(".container"),
  heart = document.querySelector(".heart");

// Add a double-click event listener to the container
container.addEventListener("dblclick", (e) => {
  // Calculate the x and y position of the double-click event
  let xValue = e.clientX - e.target.offsetLeft,
    yValue = e.clientY - e.target.offsetTop;

  // Set the position of the heart element using the x and y values
  heart.style.left = `${xValue}px`;
  heart.style.top = `${yValue}px`;

  // Add the active class to the heart element to animate it
  heart.classList.add("active");

  // Remove the active class after 1 second
  setTimeout(() => {
    heart.classList.remove("active");
  }, 1000);
});