// Initialize AOS (Animate On Scroll) for scroll animations
AOS.init();

// Typed.js functionality for Daily Phrases page
const options = {
    strings: [
        "Welcome to Daily Japanese Phrases!",
        "Master Japanese with daily practice!",
        "Enhance your language skills!"
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    cursorChar: '|'
};

// Create a new Typed instance for the hero section heading
const typed = new Typed("#typed-text", options);

// Dark mode toggle functionality
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
});
