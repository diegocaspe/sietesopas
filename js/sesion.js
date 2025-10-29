// --- Configuración de credenciales demo ---
const USERS = {
  trabajador1: '12345',
  trabajador2: '67890',
};

// --- Validación del login ---
function validateLogin(event) {
  event.preventDefault();  // Prevenir el envío del formulario

  const username = document.getElementById('username').value.trim(); // Obtener el valor del usuario
  const password = document.getElementById('password').value.trim(); // Obtener el valor de la contraseña

  // Validación de las credenciales
  if (username in USERS && USERS[username] === password) {
    // Guardamos el nombre de usuario activo en la sesión
    sessionStorage.setItem('empleadoActual', username);

    // Redirigimos a la página de gestión de mesas
    window.location.href = 'mesas.html';
  } else {
    // Si las credenciales son incorrectas, mostramos un mensaje de error
    alert('Credenciales incorrectas. Intenta nuevamente.');
  }
}

// --- Función para cerrar sesión ---
function logout() {
  // Eliminamos el usuario actual de la sesión
  sessionStorage.removeItem('empleadoActual');

  // Redirigimos al usuario a la página de inicio de sesión
  window.location.href = 'sesion.html';
}

// --- Verificar si el usuario está autenticado ---
function verificarSesion() {
  const empleado = sessionStorage.getItem('empleadoActual');
  if (!empleado) {
    // Si no hay sesión activa, redirigir al login
    window.location.href = 'sesion.html';
  } else {
    // Si el usuario está logueado, mostrar el nombre del empleado activo
    const span = document.getElementById('empleadoActivo');
    if (span) {
      span.textContent = `Empleado: ${empleado}`;
    }
  }
}

// Ejecutar la verificación al cargar la página de mesas
if (window.location.pathname.includes('mesas.html')) {
  verificarSesion();
}

