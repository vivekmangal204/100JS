const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
const maxPaletteBoxes = 12;
const generatePalette = () => {
    container.innerHTML = "";
    for (let i = 0; i < maxPaletteBoxes; i++) {
        let randomHex = Math.floor(Math.random()*0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        console.log(randomHex);
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = ` <div class="rect-box" style="background:${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`;
        color.addEventListener("click", () => copyColor(color,randomHex));
        container.appendChild(color);
    }
  
}
generatePalette();
const copyColor = (elem, hexvalu) =>{
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexvalu).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() =>
            colorElement.innerText = hexvalu, 1000);
    }).catch(() => alert("failed to copy the color code!"))
}
refreshBtn.addEventListener("click", generatePalette);
