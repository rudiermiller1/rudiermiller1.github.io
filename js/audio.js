// Obtiene el elemento de audio por su ID
const audio = document.getElementById('audioFondo');

// Agrega un evento de clic al cuerpo de la página
document.body.addEventListener('click', () => {
    // Verifica si el audio está pausado
    if (audio.paused) {
        // Si está pausado, lo reproduce
        audio.play();
    } else {
        // Si está reproduciéndose, lo pausa
        audio.pause();
    }
});
