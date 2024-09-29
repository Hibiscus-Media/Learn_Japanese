// Initialize AOS (Animate On Scroll) for scroll animations
AOS.init();

// Typed.js functionality for Kanji page
const options = {
    strings: [
        "Kanji Practice"
    ],
    typeSpeed: 100,        // Speed of typing
    backSpeed: 50,         // Speed of deleting
    loop: false,           // Type only once
    cursorChar: '|'
};

// Create a new Typed instance for the hero section heading
const typed = new Typed("#typed-text", options);

// Dark mode toggle functionality for Kanji page
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
});

// Add any additional Kanji-specific JavaScript below this line
