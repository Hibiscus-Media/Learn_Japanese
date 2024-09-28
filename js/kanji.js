const folderNames = ['Days_Of_Week', 'Numbers']; // Add more folder names as needed
const contentsList = document.getElementById('contents-list');
const kanjiSections = document.getElementById('kanji-sections');

folderNames.forEach(folder => {
    // Create list item for the contents (links for smooth scrolling)
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#${folder}'>${folder.replace(/_/g, ' ')}</a>`; // Replace underscores with spaces
    contentsList.appendChild(listItem);
    
    // Create section for Kanji
    const section = document.createElement('div');
    section.id = folder;
    section.innerHTML = `<h2>${folder.replace(/_/g, ' ')}</h2><div class='gallery' data-aos='fade-up'></div>`;
    kanjiSections.appendChild(section);
    
    // Loop through images in the folder (assumes up to 7 images)
    for (let i = 1; i <= 7; i++) {
        const img = document.createElement('img');
        img.src = `Kanji/${folder}/kanji${i}.jpeg`; // Adjust if the image naming convention is different
        img.alt = `${folder} Image ${i}`;
        section.querySelector('.gallery').appendChild(img);
    }
});

// Initialize AOS (Animate on Scroll) for animations
AOS.init();
