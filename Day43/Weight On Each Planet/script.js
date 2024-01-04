//Gravitational acceleration on each planet (in m/s^2)
const gravitationalAccelerations = {
    mercury: 3.7,
    venus: 8.87,
    earth: 9.81,
    mars: 3.71,
    jupiter: 24.79,
    saturn: 10.44,
    uranus: 8.69,
    neptune: 11.15,
  };
  
  //Function to calculate weight on each planet
  function calculateWeightOnPlanets(weightOnEarth) {
    const weightsOnPlanets = {};
    for (const planet in gravitationalAccelerations) {
      const gravityOnPlanet = gravitationalAccelerations[planet];
      const weightOnPlanet =
        (weightOnEarth * gravityOnPlanet) / gravitationalAccelerations.earth;
      weightsOnPlanets[planet] = weightOnPlanet;
    }
    return weightsOnPlanets;
  }
  
  //Function to handle button click and display results
  function calculateWeights() {
    const earthWeightInput = document.getElementById("earthWeight");
    const resultDiv = document.getElementById("result");
  
    const weightOnEarth = parseFloat(earthWeightInput.value);
  
    if (!isNaN(weightOnEarth)) {
      const weightsOnPlanets = calculateWeightOnPlanets(weightOnEarth);
      let resultText = ``;
      for (const planet in weightsOnPlanets) {
        resultText += `<div class="planet-box">
          <img src=${planet}.png>
          <p>${
            planet.charAt(0).toUpperCase() + planet.slice(1)
          }<br>${weightsOnPlanets[planet].toFixed(2)}kg</p>
          </div>`;
      }
      resultDiv.innerHTML = resultText;
    } else {
      resultDiv.innerHTML = "<p>Please enter a valid weight.</p>";
    }
  }