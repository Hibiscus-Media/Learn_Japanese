// Define an array of background colors/gradients
const backgrounds = [
  'linear-gradient(45deg, #ff7e5f, #feb47b)', // Gradient with 45-degree angle
  'linear-gradient(135deg, #6a11cb, #2575fc)', // More prominent gradient
  '#ffcc00', // Solid color
  '#3498db', // Solid color
  'linear-gradient(90deg, #ff758c, #ff7eb3)', // Horizontal gradient
  'linear-gradient(135deg, #42e695, #3bb2b8)', // Gradient with higher contrast
  'linear-gradient(90deg, #f953c6, #b91d73)' // More visible gradient with pinks and purples
];

// Function to assign a random background to each section
const sections = document.querySelectorAll('div.gallery'); // Target all gallery divs

sections.forEach(section => {
  const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  section.style.background = randomBg; // Apply random background
  section.style.backgroundSize = 'cover'; // Ensure the gradient covers the whole section
  section.style.backgroundRepeat = 'no-repeat'; // Prevent repetition of background images
  section.style.padding = '20px'; // Add padding for better appearance
  section.style.minHeight = '250px'; // Set minimum height to ensure gradients display clearly
});
