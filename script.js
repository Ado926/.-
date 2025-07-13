// 🔐 Ingreso directo sin validación
function enterAsGuest() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("panel-akirax").style.display = "block";
}

// 🍔 Menú hamburguesa y navegación
const menuBtn = document.querySelector('.menu-icon');
const menuPanel = document.querySelector('.menu-panel');
const contentBox = document.getElementById('dynamic-content');
const mainContent = document.getElementById('main-content');

menuBtn.addEventListener('click', () => {
  menuPanel.classList.toggle('hidden');
});

function hideMainContent() {
  mainContent.style.display = 'none';
  contentBox.style.display = 'block';
}

// 🖥️ Panel de terminal con submenú
function showTerminal() {
  hideMainContent();
  contentBox.innerHTML = `
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

// 📦 Simulación de base de datos
function showDatabase() {
  hideMainContent();
  contentBox.innerHTML = `
    <h2>📦 Crear Base de Datos</h2>
    <p>Esta es una simulación para crear bases de datos.</p>
    <button style="padding:0.7rem 1.2rem; background:var(--accent); border:none; border-radius:8px;">
      Crear nueva base
    </button>
  `;
  menuPanel.classList.add('hidden');
}

// 🎟️ Soporte con redirección telefónica
function supportTicket() {
  window.location.href = "tel:+18293142989";
}

// 🔙 Volver al panel principal
function goBackToMain() {
  document.getElementById("dynamic-content").style.display = "none";
  mainContent.style.display = "block";
  menuPanel.classList.add('hidden');
}

// 💻 Console con input de comandos
function showConsole() {
  contentBox.innerHTML = `
    <h2>🖥️ Consola del servidor</h2>
    <div style="color:#0ff; font-family:monospace; background:#111; padding:1rem; border-radius:10px; margin-bottom:1rem;">
      CPU Load: 0.13%<br>
      Memory: 512MiB<br>
      Network: 1 Byte ↑ / 0 Bytes ↓
    </div>

    <pre id="terminal-output" style="background-color:#000; color:#0ff; padding:1rem; margin-bottom:1rem; border-radius:10px; font-family:monospace;">
root@akirax:~$ node index.js
Starting server...
Server running at port 25565
    </pre>

    <input id="command-input" type="text" placeholder="Escribe un comando..."
      style="padding:0.8rem; width:100%; max-width:500px; border-radius:8px; background:#111; color:#fff; border:1px solid #444;">

    <button onclick="executeCommand()" 
      style="margin-top:1rem; padding:0.6rem 1.2rem; background:var(--accent); color:#000; border:none; font-weight:bold; border-radius:8px;">
      Enviar comando
    </button>
  `;
}

function executeCommand() {
  const input = document.getElementById('command-input');
  const output = document.getElementById('terminal-output');
  const command = input.value.trim();

  if (command) {
    output.innerHTML += `\nroot@akirax:~$ ${command}\nEl código "${command}" no existe o no está registrado en el host\n`;
    input.value = '';
    output.scrollTop = output.scrollHeight;
  }
}

// 📝 Files con textarea editable
function showFiles() {
  contentBox.innerHTML = `
    <h2>📂 Archivos</h2>
    <textarea rows="8" cols="40" style="width:100%; max-width:500px; background:#000; color:#fff; border:1px solid #444; border-radius:10px; padding:1rem;">
Puedes escribir cualquier disparate que se te ocurra...
    </textarea>
  `;
}

// ⚙️ Startup simulando clonación
function showStartup() {
  contentBox.innerHTML = `
    <h2>⚙️ Inicio de proyecto</h2>
    <pre style="background:#111; color:#0f0; padding:1rem; border-radius:10px;">
git clone https://github.com/akirax/panel.git
Cloning into 'panel'...
remote: Enumerating objects...
remote: Counting objects...
Receiving objects: 100% ✔
Panel iniciado correctamente
    </pre>
  `;
}

// 🔧 Settings con opción de reinstalar
function showSettings() {
  contentBox.innerHTML = `
    <h2>⚙️ Configuración del servidor</h2>
    <button onclick="reinstallServer()" style="padding:1rem 2rem; background:var(--accent); color:#000; font-weight:bold; border:none; border-radius:10px;">
      Reinstalar servidor
    </button>
  `;
}

// ⚡ Reinstalación con pantalla completa
function reinstallServer() {
  document.body.innerHTML = `
    <div style="height:100vh; background:#000; color:#fff; display:flex; flex-direction:column; justify-content:center; align-items:center; font-size:2rem;">
      <p>🔁 REINSTALANDO SERVER</p>
      <p>⏳ ESPERA UN MOMENTO...</p>
    </div>
  `;
}

// 🛠️ Mensaje de mantenimiento en Power
function showPower() {
  contentBox.innerHTML = `
    <h2>🛠️ MANTENIMIENTO</h2>
    <p style="font-size:1.2rem;">• Estamos consiguiendo una interfaz lista para esta función del hosting.</p>
  `;
}