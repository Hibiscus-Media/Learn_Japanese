const folderNames = ['Days_Of_Week']; // You can add more folders here as needed
const contentsList = document.getElementById('contents-list');
const kanjiSections = document.getElementById('kanji-sections');

// Function to generate the content
function generateContent() {
    folderNames.forEach(folder => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#${folder}">${folder.replace(/_/g, ' ')}</a>`;
        contentsList.appendChild(listItem);
        
        const section = document.createElement('div');
        section.id = folder;
        section.innerHTML = `<h3>${folder.replace(/_/g, ' ')}</h3><div class='gallery' data-aos='fade-up'></div>`;
        kanjiSections.appendChild(section);
        
        for (let i = 1; i <= 7; i++) {
            const img = document.createElement('img');
            img.src = `Kanji/${folder}/kanji${i}.jpeg`; // Adjust according to your folder structure
            img.alt = `${folder} Image ${i}`;
            section.querySelector('.gallery').appendChild(img);
        }
    });

    AOS.init(); // Initialize AOS animations
}

// Call the function to generate content
generateContent();

// Dark Mode Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
