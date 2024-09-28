const folderNames = ['Days_Of_Week', 'Numbers', 'Common_Expressions']; // Add new sections here
const contentsList = document.getElementById('contents-list');
const kanjiSections = document.getElementById('kanji-sections');

folderNames.forEach(folder => {
    // Create list item for the contents
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#${folder}">${folder.replace(/_/g, ' ')}</a>`;
    contentsList.appendChild(listItem);
    
    // Create section for Kanji
    const section = document.createElement('div');
    section.id = folder;
    section.innerHTML = `<h3>${folder.replace(/_/g, ' ')}</h3><div class='gallery' data-aos='fade-up'></div>`;
    kanjiSections.appendChild(section);
    
    // Loop to create images (assuming a specific number of images)
    for (let i = 1; i <= 7; i++) { // Adjust this number based on the images in each folder
        const img = document.createElement('img');
        img.src = `Kanji/${folder}/kanji${i}.jpeg`; // Update according to your folder structure
        img.alt = `${folder} Image ${i}`;
        section.querySelector('.gallery').appendChild(img);
    }
});

// Initialize AOS
AOS.init();

// Dark Mode Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
