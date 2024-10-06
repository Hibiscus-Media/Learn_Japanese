// Initialize AOS (Animate On Scroll) for scroll animations
AOS.init();

// Typed.js functionality for Katakana page
const options = {
    strings: [
        "Katakana Practice"
    ],
    typeSpeed: 100,        // Speed of typing
    backSpeed: 50,         // Speed of deleting
    loop: false,           // Type only once
    cursorChar: '|'
};

// Create a new Typed instance for the hero section heading
const typed = new Typed("#typed-text", options);

// Dark mode toggle functionality for Katakana page
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
    console.log("Dark mode toggled: ", toggle.checked);
});

// Function to dynamically generate the Katakana grid
function createKatakanaGrid() {
    const gridContainer = document.querySelector('.katakana-grid'); // Changed to katakana-grid
    
    if (!gridContainer) {
        console.error('Katakana grid container not found!');
        return;
    }

    console.log('Katakana grid found, generating images...');
    
    // Clear any existing content before generating the grid
    gridContainer.innerHTML = '';

    // Loop to generate 47 images (for the Katakana characters)
    for (let i = 1; i <= 47; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('katakana-item'); // Changed to katakana-item
        
        const img = document.createElement('img');
        img.src = `Katakana/${i}.jpg`;  // Ensure the path and filenames are correct
        img.alt = `Katakana Character ${i}`;
        
        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
    }

    console.log('Katakana grid generated successfully.');
}

// Ensure the function is called once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createKatakanaGrid);
