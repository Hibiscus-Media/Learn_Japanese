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

const folderNames = ['Day01', 'Day02', 'Day03', 'Day04', 'Day05', 'Day06', 'Day07', 'Day08', 'Day09', 'Day10'];

folderNames.forEach(folder => {
    const section = document.createElement('div');
    section.innerHTML = `<h2>${folder}</h2><div class='gallery' data-aos='fade-up'></div>`;
    const galleryDiv = section.querySelector('.gallery');

    let imagesFound = 0;
    let imagesProcessed = 0;
    const totalImagesToTry = 5; // Adjust based on the maximum number of images per folder

    // Function to check if all images have been processed
    function checkAndAppendSection() {
        if (imagesProcessed === totalImagesToTry) {
            if (imagesFound > 0) {
                galleryContainer.appendChild(section);
                console.log(`Appended section for ${folder} with ${imagesFound} images.`);
            } else {
                console.log(`No images found for ${folder}, section not appended.`);
            }
        }
    }

    // Attempt to load images
    for (let i = 1; i <= totalImagesToTry; i++) {
        (function(imageIndex) {
            const img = new Image();
            img.alt = `${folder} Image ${imageIndex}`;

            const imagePath = `Phrases/${folder}/${imageIndex}.jpeg`;
            img.src = imagePath;
            console.log(`Attempting to load image: ${img.src}`);

            img.onload = function() {
                console.log(`Successfully loaded image: ${img.src}`);
                galleryDiv.appendChild(img);
                imagesFound++;
                imagesProcessed++;
                checkAndAppendSection();
            };

            img.onerror = function() {
                console.log(`Failed to load image: ${img.src}`);
                imagesProcessed++;
                checkAndAppendSection();
            };
        })(i);
    }
});
