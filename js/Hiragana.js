console.log('Hiragana.js is loaded!');

// Initialize AOS (Animate On Scroll) for scroll animations
AOS.init();

// Typed.js functionality for Hiragana page
const options = {
    strings: [
        "Hiragana Practice"
    ],
    typeSpeed: 100,        // Speed of typing
    backSpeed: 50,         // Speed of deleting
    loop: false,           // Type only once
    cursorChar: '|'
};

// Create a new Typed instance for the hero section heading
const typed = new Typed("#typed-text", options);

// Dark mode toggle functionality for Hiragana page
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
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
    
    // Clear any existing content before generating the grid
    gridContainer.innerHTML = '';

    // Loop to generate 47 images
    for (let i = 1; i <= 47; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('hiragana-item');
        
        const img = document.createElement('img');
        img.src = `Hiragana/${i}.jpg`;
        img.alt = `Hiragana Character ${i}`;
        
        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
    }

    console.log('Hiragana grid generated successfully.');
}

// Ensure the function is called once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createHiraganaGrid);
