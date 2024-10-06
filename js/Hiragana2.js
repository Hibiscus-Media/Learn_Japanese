console.log('Hiragana.js is loaded!');

// Typed.js functionality for Hiragana page
const options = {
    strings: [
        "Hiragana Practice"
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: false,
    cursorChar: '|'
};

const typed = new Typed("#typed-text", options);

// Function to generate the Hiragana grid (already exists in your file)
createHiraganaGrid();
