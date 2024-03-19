

function volume_sphere(event) {
  event.preventDefault(); // Prevent form submission

  // Get references to the form elements
  const radiusInput = document.getElementById("radius");
  const volumeInput = document.getElementById("volume");
  // Calculate the volume
  const radius = parseFloat(radiusInput.value); // Ensure numerical value
  console.log(typeof radius)
  if (isNaN(radius) || radius <= 0 || typeof radius !== "number" ) { // Validate radius
    volumeInput.value = "NaN";
    return;
  }
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  const volumeRounded = volume.toFixed(4);

  volumeInput.value = volumeRounded;

  
  console.log(volumeRounded);
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
