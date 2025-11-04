const USERS = {
  trabajador1: '12345',
  trabajador2: '67890',
};

function validateLogin(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username in USERS && USERS[username] === password) {
    sessionStorage.setItem('empleadoActual', username);
    window.location.href = 'mesas.html';
  } else {
    alert('Credenciales incorrectas. Intenta nuevamente.');
  }
}

function logout() {
  sessionStorage.removeItem('empleadoActual');
  window.location.href = 'sesion.html';
}

function verificarSesion() {
  const empleado = sessionStorage.getItem('empleadoActual');
  if (!empleado) {
    window.location.href = 'sesion.html';
  } else {
    const span = document.getElementById('empleadoActivo');
    if (span) {
      span.textContent = `Empleado: ${empleado}`;
    }
  }
}

if (window.location.pathname.includes('mesas.html')) {
  verificarSesion();
}

