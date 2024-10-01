// Initialize AOS (Animate On Scroll) for scroll animations
AOS.init();

// Typed.js functionality for Hiragana page
const options = {
    strings: [
        "Hiragana Practice"
    ],
    typeSpeed: 100,        // Speed of typing
    backSpeed: 50,         // Speed of deleting
    loop: false,           // Type only once (set to true if you want continuous looping)
    cursorChar: '|'
};

// Create a new Typed instance for the hero section heading
const typed = new Typed("#typed-text", options);

// Dark mode toggle functionality for Hiragana page
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark', toggle.checked); // Ensure class name matches your CSS
    console.log("Dark mode toggled: ", toggle.checked);
});

// Function to dynamically generate the Hiragana grid
function createHiraganaGrid() {
    const gridContainer = document.querySelector('.hiragana-grid');
    
    if (!gridContainer) {
        console.error('Hiragana grid container not found!');
        return;
    }

    console.log('Hiragana grid found, generating images...');
    
    for (let i = 1; i <= 47; i++) {
        const gridItem = `
            <div>
                <img src="Hiragana/${i}.jpg" alt="Hiragana Character ${i}">
                <p>Character ${i}</p>
            </div>
        `;
        gridContainer.innerHTML += gridItem;
    }

    console.log('Hiragana grid generated successfully.');
}

// Ensure the function is called once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createHiraganaGrid);
