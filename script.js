const menuBtn = document.querySelector('.menu-icon');
const menuPanel = document.querySelector('.menu-panel');
const contentBox = document.getElementById('dynamic-content');

menuBtn.addEventListener('click', () => {
  menuPanel.classList.toggle('hidden');
});

function hideMainContent() {
  document.getElementById('main-content').style.display = 'none';
  contentBox.style.display = 'block';
}

function showTerminal() {
  hideMain