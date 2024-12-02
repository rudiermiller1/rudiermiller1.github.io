const video = document.getElementById('video');
const subtitles = document.getElementById('subtitles');
const playPause = document.getElementById('playPause');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const volumeControl = document.getElementById('volumeControl');
const volumeIcon = document.getElementById('volumeIcon');

// Guarda el estado de reproducción
let isPlaying = false;

// Variable para saber si los subtítulos están activados o no
let subtitlesEnabled = false;

// Actualiza la duración cuando se carga el video
video.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(video.duration); // Muestra la duración total
    progress.max = video.duration; // Define el valor máximo de la barra de progreso
});

// Reproduce o pausa el video
playPause.addEventListener('click', () => {
    if (isPlaying) {
        video.pause();
        playIcon.classList.remove('d-none');
        pauseIcon.classList.add('d-none');
    } else {
        video.play();
        playIcon.classList.add('d-none');
        pauseIcon.classList.remove('d-none');
    }
    isPlaying = !isPlaying; // Cambia el estado de reproducción
});

// Actualiza la barra de progreso y el tiempo actual
video.addEventListener('timeupdate', () => {
    progress.value = video.currentTime; // Actualiza la posición de la barra de progreso
    currentTimeDisplay.textContent = formatTime(video.currentTime); // Muestra el tiempo actual

    // Si el video termina, pausa y actualiza los íconos
    if (video.currentTime >= video.duration) {
        video.pause();
        playIcon.classList.remove('d-none');
        pauseIcon.classList.add('d-none');
        isPlaying = false;
    }
});

// Cambia el tiempo del video cuando se mueve la barra
progress.addEventListener('input', () => {
    video.currentTime = progress.value; // Cambia el tiempo de reproducción
});

// Formatea el tiempo en minutos y segundos
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Funcionalidad de subtítulos
document.getElementById('card').addEventListener('click', () => {
    subtitlesEnabled = !subtitlesEnabled;
    subtitles.track.mode = subtitlesEnabled ? 'showing' : 'disabled';
});

// Activa la pantalla completa
document.getElementById('fullscreen').addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari y Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
});

// Controla el volumen del video
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value; // Cambia el volumen

    // Cambia el ícono de volumen dependiendo del nivel
    if (video.volume === 0) {
        volumeIcon.classList.remove('fa-volume-up');
        volumeIcon.classList.add('fa-volume-mute');
    } else {
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-up');
    }
});

// Inicializa el volumen del video al cargar
video.volume = volumeControl.value;

// Menú emergente de configuraciones
const configMenu = document.getElementById('configMenu');
const qualitySelect = document.getElementById('qualitySelect');
const speedSelect = document.getElementById('speedSelect');

// Mostrar u ocultar el menú de configuración
document.getElementById('settings').addEventListener('click', () => {
    configMenu.classList.toggle('d-none');
});

// Cambiar la velocidad de reproducción
speedSelect.addEventListener('change', () => {
    video.playbackRate = parseFloat(speedSelect.value);
});

// Cambiar la calidad del video (solo visual, no cambia el video real)
qualitySelect.addEventListener('change', () => {
    const selectedQuality = qualitySelect.value;
    console.log(`Calidad seleccionada: ${selectedQuality}p`); // Solo muestra en consola sin alertas
});
