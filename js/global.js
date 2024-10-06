// Dark mode toggle functionality (shared across all pages)
const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check localStorage for dark mode preference
if (localStorage.getItem('dark-mode') === 'true') {
    body.classList.add('dark-mode');
    toggle.checked = true;
}

// Dark mode toggle event
toggle.addEventListener('change', () => {
    const isDarkMode = toggle.checked;
    body.classList.toggle('dark-mode', isDarkMode);
    // Save preference to localStorage
    localStorage.setItem('dark-mode', isDarkMode);
});
