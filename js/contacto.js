// Obtiene elementos del DOM y los asigna a constantes.
const banner = document.getElementById("banner");
const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");
const loginToggle = document.getElementById("login-form-toggler");
const signupToggle = document.getElementById("signup-form-toggler");

// Muestra el formulario de registro y oculta el de inicio de sesión al hacer clic en 'signupToggle'.
signupToggle.addEventListener("click", () => {
  banner.style.transform = "translateX(-100%)"; // Mueve el banner a la izquierda.
  loginContainer.style.transform = "scale(0)"; // Oculta el contenedor de inicio de sesión.
  signupContainer.style.transform = "scale(1)"; // Muestra el contenedor de registro.
});

// Muestra el formulario de inicio de sesión y oculta el de registro al hacer clic en 'loginToggle'.
loginToggle.addEventListener("click", () => {
  banner.style.transform = "translateX(0%)"; // Restaura la posición del banner.
  signupContainer.style.transform = "scale(0)"; // Oculta el contenedor de registro.
  loginContainer.style.transform = "scale(1)"; // Muestra el contenedor de inicio de sesión.
});

