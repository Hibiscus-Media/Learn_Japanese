// Initialize AOS (Animate On Scroll) for scroll animations
AOS.init();

// Typed.js functionality
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

// Gallery Section: Populate dynamically with images from folders
const galleryContainer = document.getElementById('gallery-container');
const folderNames = ['Day01', 'Day02', 'Day03', 'Day04', 'Day05']; // Add all folder names

folderNames.forEach(folder => {
    const section = document.createElement('div');
    section.innerHTML = `<h2>${folder}</h2><div class='gallery' data-aos='fade-up'></div>`;
    galleryContainer.appendChild(section);

    // Add images for each folder
    for (let i = 1; i <= 2; i++) {  // Adjust number of images if needed
        const img = document.createElement('img');
        
        // Try .jpeg first, then fallback to .jpg
        let imageSrc = `Phrases/${folder}/${i}.jpeg`;
        let imageAlt = `${folder} Image ${i}`;
        img.src = imageSrc;
        img.alt = imageAlt;
        
        // Check if the .jpeg exists first
        img.onerror = () => {
            img.src = `Phrases/${folder}/${i}.jpg`;  // Fallback to .jpg if .jpeg not found
        };

        section.querySelector('.gallery').appendChild(img);
    }
});
