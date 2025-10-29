// --- Verificar sesión de usuario ---
(function verificarSesion() {
  const empleado = sessionStorage.getItem('empleadoActual');
  if (!empleado) {
    window.location.href = 'login.html';
  } else {
    const span = document.getElementById('empleadoActivo');
    if (span) span.textContent = `Empleado: ${empleado}`;
  }
})();

// --- Configuración de mesas ---
const TABLAS_CONFIG = [
  { id: 'M1',  type: '4', img: '../imagenes/mesa4.png' },
  { id: 'M2',  type: '4', img: '../imagenes/mesa4.png' },
  { id: 'M3',  type: '2', img: '../imagenes/mesa2.png' },
  { id: 'M4',  type: '2', img: '../imagenes/mesa2.png' },
  { id: 'M5',  type: '1', img: '../imagenes/mesa1.png' },
  { id: 'M6',  type: '4', img: '../imagenes/mesa4.png' },
  { id: 'M7',  type: '2', img: '../imagenes/mesa2.png' },
  { id: 'M8',  type: '1', img: '../imagenes/mesa1.png' },
  { id: 'M9',  type: '4', img: '../imagenes/mesa4.png' },
  { id: 'M10', type: '2', img: '../imagenes/mesa2.png' },
  { id: 'M11', type: '4', img: '../imagenes/mesa4.png' },
  { id: 'M12', type: '1', img: '../imagenes/mesa1.png' },
  // Agrega más mesas si lo necesitas...
];

// --- Cargar y guardar estado ---
const STORAGE_KEY = 'estadoMesasDemo';

function loadEstado() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) return JSON.parse(raw);
  const init = {};
  TABLAS_CONFIG.forEach(t => {
    init[t.id] = { estado: 'disponible', by: null, at: null };
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(init));
  return init;
}

function saveEstado(estado) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

// Renderizar mesas
function renderMesas() {
  const cont = document.getElementById('gridMesas');
  const estado = loadEstado();
  const empleado = sessionStorage.getItem('empleadoActual') || '—';

  cont.innerHTML = '';

  TABLAS_CONFIG.forEach(t => {
    const isDisponible = estado[t.id].estado === 'disponible';
    const ultima = estado[t.id].at ? `Actualizado por ${estado[t.id].by} • ${new Date(estado[t.id].at).toLocaleString()}` : 'Sin cambios';

    const card = document.createElement('div');
    card.className = 'col-12 col-sm-6 col-md-4 col-lg-3';

    card.innerHTML = `
      <div class="card mesa-card shadow-sm h-100">
        <div class="card-body d-flex flex-column align-items-center text-center">
          <div class="mesa-img-wrapper mb-3">
            <img src="${t.img}" alt="Mesa ${t.id}" class="mesa-img" />
          </div>
          <h5 class="card-title text-dark mb-1">${t.id} • ${t.type === '4' ? 'Para 4' : t.type === '2' ? 'Para 2' : 'Personal'}</h5>
          <span class="badge ${isDisponible ? 'bg-success' : 'bg-danger'} mb-3">${isDisponible ? 'Disponible' : 'Ocupada'}</span>

          <div class="d-grid w-100 gap-2">
            <button class="btn ${isDisponible ? 'btn-danger' : 'btn-success'} toggle-btn" data-id="${t.id}">
              ${isDisponible ? 'Marcar como Ocupada' : 'Marcar como Disponible'}
            </button>
          </div>

          <small class="text-muted mt-3">${ultima}</small>
        </div>
      </div>
    `;

    cont.appendChild(card);

    // Lógica para cambiar el estado
    card.querySelector('.toggle-btn').addEventListener('click', () => {
      const curr = loadEstado();
      const nuevo = curr[t.id].estado === 'disponible' ? 'ocupada' : 'disponible';
      curr[t.id] = { estado: nuevo, by: empleado, at: new Date().toISOString() };
      saveEstado(curr);
      renderMesas(); // Re-renderizar
    });
  });
}

// Cargar mesas al iniciar
document.addEventListener('DOMContentLoaded', renderMesas);

