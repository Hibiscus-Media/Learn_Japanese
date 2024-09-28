// Object to hold the folder names and images dynamically
const folderImages = {
    Days_Of_Week: ['1-Monday.jpeg', '2-Tuesday.jpeg', '3-Wednesday.jpeg', '4-Thursday.jpeg', '5-Friday.jpeg', '6-Saturday.jpeg', '7-Sunday.jpeg']
    // Add more folders and images here if needed
};

// Reference to HTML elements
const contentsList = document.getElementById('contents-list');
const kanjiSections = document.getElementById('kanji-sections');

// Loop through each folder and generate its section and images
Object.keys(folderImages).forEach(folder => {
    // Add a link to the content list
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#${folder}'>${folder.replace(/_/g, ' ')}</a>`;
    contentsList.appendChild(listItem);

    // Create a section for each folder
    const section = document.createElement('div');
    section.id = folder;
    section.innerHTML = `<h2>${folder.replace(/_/g, ' ')}</h2><div class='gallery' data-aos='fade-up'></div>`;
    kanjiSections.appendChild(section);

    // Add images to the section
    folderImages[folder].forEach(image => {
        const img = document.createElement('img');
        img.src = `Kanji/${folder}/${image}`;
        img.alt = `${folder} Image ${image}`;
        section.querySelector('.gallery').appendChild(img);
    });
});

// Initialize AOS (Animate on Scroll) for gallery animations
AOS.init();
