let inputBox = document.getElementById("input-box");
let resultBox = document.getElementById("result-box");

let changeColor = () => {
    let input = inputBox.value;
    resultBox.style.backgroundColor = input;
};
inputBox.addEventListener("input",changeColor);
window.addEventListener("load",changeColor)