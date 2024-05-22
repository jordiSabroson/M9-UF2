let volumeRange = document.getElementById('volumeRange');
let volumeDisplay = document.getElementById('volumeDisplay');

// Función para actualizar el valor de volumen mostrado
function updateVolumeDisplay() {
    volumeDisplay.textContent = volumeRange.value;
}

// Llamar a la función cuando el valor del rango cambie
volumeRange.addEventListener('input', updateVolumeDisplay);

// Llamar a la función al cargar la página para inicializar el valor
updateVolumeDisplay();

let playBtn = document.getElementById('playBtn');