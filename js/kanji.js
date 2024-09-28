const folderImages = {
    'Days_Of_Week': [
        '*.jpg',
        '1-Monday.jpeg',
        '2-Tuesday.jpeg',
        '3-Wednesday.jpeg',
        '4-Thusday.jpeg',
        '5-Friday.jpeg',
        '6-Saturday.jpeg',
        '7-Sunday.jpeg',
        'Banner.jpeg',
    ],
};
const contentsList = document.getElementById('contents-list');
const kanjiSections = document.getElementById('kanji-sections');
Object.keys(folderImages).forEach(folder => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#${folder}'>${folder.replace(/_/g, ' ')}</a>`;
    contentsList.appendChild(listItem);
    const section = document.createElement('div');
    section.id = folder;
    section.innerHTML = `<h2>${folder.replace(/_/g, ' ')}</h2><div class='gallery' data-aos='fade-up'></div>`;
    kanjiSections.appendChild(section);
    folderImages[folder].forEach(image => {
        const img = document.createElement('img');
        img.src = `Kanji/${folder}/${image}`;
        img.alt = `${folder} Image ${image}`;
        section.querySelector('.gallery').appendChild(img);
    });
});
AOS.init();
