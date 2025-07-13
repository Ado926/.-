// Elementos
const menuBtn = document.querySelector('.menu-icon');
const menuPanel = document.querySelector('.menu-panel');
const contentBox = document.getElementById('dynamic-content');
const mainContent = document.getElementById('main-content');

// Abrir/cerrar menú principal
menuBtn.addEventListener('click', () => {
  menuPanel.classList.toggle('hidden');
});

// Ocultar pantalla principal y mostrar dinámico
function hideMainContent() {
  mainContent.style.display = 'none';
  contentBox.style.display = 'block';
}

// MENÚ: Servidores
function showTerminal() {
  hideMainContent();
  contentBox.innerHTML = `
    <div style="padding: 1rem; color: #0ff;">
      <h2>🔧 Terminal del servidor</h2>
      <p><strong>CPU Load:</strong> 0.13%</br>
         <strong>Memory:</strong> 500MiB</br>
         <strong>Network:</strong> 1 Byte ↑ / 0 Bytes ↓</p>
    </div>

    <div class="sub-menu">
      <button onclick="showConsole()">Console</button>
      <button onclick="showFiles()">Files</button>
      <button onclick="showStartup()">Startup</button>
      <button onclick="showSettings()">Settings</button>
      <button onclick="showPower()">Power</button>
    </div>

    <div id="sub-section" style="padding:1rem;"></div>
  `;
  menuPanel.classList.add('hidden');
}

// MENÚ: Almacenar
function showDatabase() {
  hideMainContent();
  contentBox.innerHTML = `
    <h2>Crear Base de Datos</h2>
    <p>📁 Esta es una sección simulada para la creación de bases de datos.</p>
    <button style="padding:0.5rem 1rem; border:none; background-color:var(--accent); color:#000; font-weight:bold;">
      Crear nueva base
    </button>
  `;
  menuPanel.classList.add('hidden');
}

// MENÚ: Soporte
function supportTicket() {
  window.location.href = "tel:+18293142989";
}

// SUBMENÚ: Console
function showConsole() {
  document.getElementById('sub-section').innerHTML = `
    <pre style="background-color:#111; color:#0ff; padding:1rem; font-family:monospace; border-radius:10px;">
root@akirax:~$ node index.js
Starting server...
Server running at port 25565
    </pre>
  `;
}

// SUBMENÚ: Files
function showFiles() {
  document.getElementById('sub-section').innerHTML = `
    <h3>📂 Editor de archivos</h3>
    <textarea rows="6" cols="40" style="padding:1rem; border-radius:8px; background:#000; color:#fff; border:1px solid #444;">
Aquí puedes escribir cualquier disparate que se te ocurra...
    </textarea>
  `;
}

// SUBMENÚ: Startup
function showStartup() {
  document.getElementById('sub-section').innerHTML = `
    <h3>⚙️ Iniciando repositorio</h3>
    <pre style="background:#111; color:#0f0; padding:1rem; border-radius:10px;">
git clone https://github.com/akirax/panel.git
Cloning into 'panel'...
remote: Enumerating objects...
remote: Counting objects...
Receiving objects: 100% 
Panel iniciado correctamente ✔
    </pre>
  `;
}

// SUBMENÚ: Settings
function showSettings() {
  document.getElementById('sub-section').innerHTML = `
    <h3>⚙️ Configuración</h3>
    <button onclick="reinstallServer()" style="padding:1rem; font-size:1rem; background:var(--accent); border:none; border-radius:10px;">
      Reinstalar servidor
    </button>
  `;
}

// Acción de reinstalación dramática
function reinstallServer() {
  document.body.innerHTML = `
    <div style="height:100vh; background-color:#000; color:#fff; display:flex; flex-direction:column; justify-content:center; align-items:center; font-size:2rem; text-align:center;">
      <p>🔁 REINSTALANDO SERVER</p>
      <p>⏳ ESPERA UN MOMENTO...</p>
    </div>
  `;
}

// SUBMENÚ: Power (Placeholder)
function showPower() {
  document.getElementById('sub-section').innerHTML = `
    <h3>🔌 Función Power futura</h3>
    <p>Puedes agregar lógica aquí más adelante para encender o apagar el servidor.</p>
  `;
}