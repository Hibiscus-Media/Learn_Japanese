#!/bin/bash

image_dir="Phrases/"
html_file="index.html"

# Start building the HTML content, but keep the toggle button, header, and scripts intact
echo "<!DOCTYPE html>" > $html_file
echo "<html lang='en'>" >> $html_file
echo "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'>" >> $html_file
echo "<title>Daily Japanese Phrases</title>" >> $html_file

# Link to Google Fonts and external CSS
echo "<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap' rel='stylesheet'>" >> $html_file
echo "<link rel='stylesheet' href='css/styles.css'>" >> $html_file

# Add AOS (scroll animation) styles
echo "<link href='https://unpkg.com/aos@2.3.1/dist/aos.css' rel='stylesheet'>" >> $html_file

echo "</head><body><h1>Daily Japanese Phrases</h1>" >> $html_file

# Light/Dark Mode Toggle button
echo "<button id='theme-toggle'>Toggle Dark Mode</button>" >> $html_file

# Loop through each day's folder and add images dynamically
for folder in "$image_dir"*; do
  day=$(basename "$folder")  # Extract folder name (e.g., Day1)
  echo "<h2>$day</h2><div class='gallery' data-aos='fade-up'>" >> $html_file
  
  # Loop through each .jpg and .jpeg file in the folder
  for img in "$folder"/*.jpg "$folder"/*.jpeg; do
    if [[ -f "$img" ]]; then  # Only process if it's a file
      img_filename=$(basename "$img")  # Extract image file name
      echo "<img src='$folder/$img_filename' alt='Phrase Image'>" >> $html_file  # Add image tag to HTML
    fi
  done

  echo "</div>" >> $html_file
done

# Closing body section
echo "<!-- AOS JavaScript for scroll animations -->" >> $html_file
echo "<script src='https://unpkg.com/aos@2.3.1/dist/aos.js'></script>" >> $html_file
echo "<script>AOS.init();</script>" >> $html_file

# JavaScript for Light/Dark Mode Toggle
echo "<script>
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
</script>" >> $html_file

echo "</body></html>" >> $html_file

# Stage and commit the updated HTML file
git add $html_file
git commit -m "Updated index.html with new images and preserved features"
git push origin main
