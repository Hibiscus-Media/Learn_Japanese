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
const folderNames = ['Day01', 'Day02', 'Day03', 'Day04', 'Day05'];  // Update as needed

folderNames.forEach(folder => {
    const section = document.createElement('div');
    section.innerHTML = `<h2>${folder}</h2><div class='gallery' data-aos='fade-up'></div>`;

    let imagesLoaded = 0;  // Counter for successfully loaded images
    const totalImages = 2; // Total number of images expected per folder

    // Function to check if all images are processed
    const checkAndAppendSection = () => {
        if (imagesLoaded > 0) {
            galleryContainer.appendChild(section);
        }
    };

    // Add images for each folder
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement('img');
        let imageSrc = `Phrases/${folder}/${i}.jpeg`;
        img.src = imageSrc;
        img.alt = `${folder} Image ${i}`;

        img.onload = function () {
            section.querySelector('.gallery').appendChild(img);
            imagesLoaded++;
            if (imagesLoaded === totalImages) {
                checkAndAppendSection();
            }
        };

        img.onerror = function () {
            // Try loading the .jpg version
            img.src = `Phrases/${folder}/${i}.jpg`;
            img.onload = function () {
                section.querySelector('.gallery').appendChild(img);
                imagesLoaded++;
                if (imagesLoaded === totalImages) {
                    checkAndAppendSection();
                }
            };
            img.onerror = function () {
                // Image doesn't exist; decrement totalImages
                totalImages--;
                if (imagesLoaded === totalImages) {
                    checkAndAppendSection();
                }
            };
        }
    }
});
