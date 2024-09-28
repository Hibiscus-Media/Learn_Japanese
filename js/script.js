window.onload = function() {
    console.log('DOM fully loaded and parsed');

    // Initialize AOS (Animate On Scroll) for scroll animations
    try {
        AOS.init();
        console.log('AOS initialized');
    } catch (error) {
        console.error('AOS failed to initialize', error);
    }

    // Typed.js functionality
    try {
        const options = {
            strings: [
                "Welcome to Daily Japanese Phrases!", 
                "Master Japanese with daily practice!", 
                "Enhance your language skills!"
            ],
            typeSpeed: 100,        // Speed of typing
            backSpeed: 50,         // Speed of deleting
            loop: true,            // Loop the animation
            cursorChar: '|'        // Cursor character
        };

        const typed = new Typed("#typed-text", options);
        console.log('Typed.js initialized');
    } catch (error) {
        console.error('Typed.js failed to initialize', error);
    }

    // Dark mode toggle functionality
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode', toggle.checked);
            console.log('Dark mode toggled');
        });
    } else {
        console.error('Dark mode toggle button not found');
    }
};
