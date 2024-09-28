const folderNames = ['Days_Of_Week'];
const contentsList = document.getElementById('contents-list');
const kanjiSections = document.getElementById('kanji-sections');
folderNames.forEach(folder => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#${folder}'>${folder.replace(/_/g, ' ')}</a>`;
    contentsList.appendChild(listItem);
    const section = document.createElement('div');
    section.id = folder;
    section.innerHTML = `<h2>${folder.replace(/_/g, ' ')}</h2><div class='gallery' data-aos='fade-up'></div>`;
    kanjiSections.appendChild(section);
    for (let i = 1; i <= 7; i++) {
        const img = document.createElement('img');
        img.src = `Kanji/${folder}/kanji${i}.jpeg`;
        img.alt = `${folder} Image ${i}`;
        section.querySelector('.gallery').appendChild(img);
    }
});
AOS.init();
