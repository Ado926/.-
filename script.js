const menuBtn = document.querySelector('.menu-icon');
const menuPanel = document.querySelector('.menu-panel');
const contentBox = document.getElementById('dynamic-content');

menuBtn.addEventListener('click', () => {
  menuPanel.classList.toggle('hidden');
});

function showTerminal() {
  contentBox.innerHTML = `
    <h2>Terminal Simulada</h2>
    <div style="background-color:#111; padding:1rem; border-radius:8px; color:#0ff; font-family:monospace;">
      <p>root@akirax:~$ echo "Bienvenido a tu servidor virtual"</p>
      <p>Bienvenido a tu servidor virtual</p>
    </div>
  `;
  menuPanel.classList.add('hidden');
}

function showDatabase() {
  contentBox.innerHTML = `
    <h2>Crear Base de Datos</h2>
    <p>📁 Base de dstos creada con éxito.</p>
    <button style="padding:0.5rem 1rem; border:none; background-color:var(--accent); color:#000; font-weight:bold;">
      Crear nueva base
    </button>
  `;
  menuPanel.classList.add('hidden');
}

function supportTicket() {
  window.location.href = "tel:+18293142989";
  }
