const folderImages = {
    'Days_Of_Week': ['1-Monday.jpeg', '2-Tuesday.jpeg', '3-Wednesday.jpeg', '4-Thursday.jpeg', '5-Friday.jpeg', '6-Saturday.jpeg', '7-Sunday.jpeg'],
    'Numbers': ['1-One.jpeg', '2-Two.jpeg', '3-Three.jpeg'],  // Add more sections and images as needed
    // Add more sections and images as you add new folders
};

const contentsList = document.getElementById('contents-list');
const kanjiSections = document.getElementById('kanji-sections');

// Loop through each folder in folderImages
Object.keys(folderImages).forEach(folder => {
    // Create a link for each folder in the contents (smooth scrolling)
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#${folder}'>${folder.replace(/_/g, ' ')}</a>`;
    contentsList.appendChild(listItem);

    // Create a section for each folder
    const section = document.createElement('div');
    section.id = folder;
    section.innerHTML = `<h2>${folder.replace(/_/g, ' ')}</h2><div class='gallery' data-aos='fade-up'></div>`;
    kanjiSections.appendChild(section);

    // Loop through the specific filenames for each folder
    folderImages[folder].forEach(image => {
        const img = document.createElement('img');
        img.src = `Kanji/${folder}/${image}`;  // Ensure the path matches your folder structure
        img.alt = `${folder} Image ${image}`;
        
        // Append the image to the gallery
        section.querySelector('.gallery').appendChild(img);
    });
});

// Initialize AOS (Animate on Scroll) for animations
AOS.init();
