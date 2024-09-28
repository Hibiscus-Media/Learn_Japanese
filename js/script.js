// Initialize AOS (Animate On Scroll) for scroll animations
AOS.init();

// Typed.js functionality
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

// Create a new Typed instance for the hero section heading
const typed = new Typed("#typed-text", options);

// Dark mode toggle functionality
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', toggle.checked);
});

// Populate the gallery with images dynamically from the 'Phrases' folder
const galleryContainer = document.getElementById('gallery-container');
const folderNames = ['Day01', 'Day02', 'Day03', 'Day04', 'Day05'];  // Add the folder names you have

folderNames.forEach(folder => {
    const section = document.createElement('div');
    section.innerHTML = `<h2>${folder}</h2><div class='gallery' data-aos='fade-up'></div>`;
    galleryContainer.appendChild(section);

    // Add images for each day
    for (let i = 1; i <= 2; i++) {  // Assuming 2 images per folder (adjust based on your setup)
        const img = document.createElement('img');
        img.src = `Phrases/${folder}/${i}.jpeg`;  // Adjust the image paths as necessary
        img.alt = `${folder} Image ${i}`;
        section.querySelector('.gallery').appendChild(img);
    }
});
