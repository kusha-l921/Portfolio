// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
let darkMode = true;

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    darkMode = !darkMode;
    toggleBtn.textContent = darkMode ? "🌙" : "☀️";
});