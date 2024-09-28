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

// Add image folders manually
const imageFolders = ['Day01', 'Day02', 'Day03', 'Day04', 'Day05', 'Day06', 'Day07', 'Day08', 'Day09', 'Day10'];
const galleryContainer = document.getElementById('gallery-container');

// Dynamically add images from the folders
imageFolders.forEach(folder => {
    const section = document.createElement('section');
    section.innerHTML = `<h2>${folder}</h2><div class="gallery" data-aos="fade-up"></div>`;
    galleryContainer.appendChild(section);

    // Dynamically load images from each folder
    for (let i = 1; i <= 2; i++) {
        const img = document.createElement('img');
        img.src = `Phrases/${folder}/${i}.jpeg`;
        img.alt = `Phrase Image ${i}`;
        section.querySelector('.gallery').appendChild(img);
    }
});
