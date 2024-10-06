// Initialize AOS (Animate On Scroll) for scroll animations
AOS.init();

// Typed.js functionality for Greetings page
const options = {
    strings: [
        "Greetings Practice"
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: false,           // Type only once
    cursorChar: '|'
};

// Create a new Typed instance for the hero section heading
const typed = new Typed("#typed-text", options);

// Dark mode toggle functionality
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
});

// Function to dynamically generate the Greetings grid
function createGreetingsGrid() {
    const gridContainer = document.querySelector('.greetings-grid');
    
    if (!gridContainer) {
        console.error('Greetings grid container not found!');
        return;
    }

    console.log('Greetings grid found, generating images...');
    
    // Clear any existing content before generating the grid
    gridContainer.innerHTML = '';

    // Loop to generate 45 images for the greetings
    const greetings = 45;  // Ensure the number matches your available images
    for (let i = 1; i <= greetings; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('greetings-item');
        
        const img = document.createElement('img');
        img.src = `Greetings/${i}.jpg`;  // Adjust this if your images have a different format
        img.alt = `Greeting ${i}`;
        
        img.onerror = () => {
            console.error(`Failed to load image: Greetings/${i}.jpg`);
        };

        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
    }

    console.log('Greetings grid generated successfully.');
}

// Ensure the function is called once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createGreetingsGrid);
