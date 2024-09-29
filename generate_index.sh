#!/bin/bash

image_dir="Phrases/"
html_file="index.html"
temp_html="temp_index.html"  # Temporary file to hold the updated content

# Start building the HTML content, but keep the toggle button, header, and scripts intact
echo "<!DOCTYPE html>" > $temp_html
echo "<html lang='en'>" >> $temp_html
echo "<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'>" >> $temp_html
echo "<title>Daily Japanese Phrases</title>" >> $temp_html
echo "<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap' rel='stylesheet'>" >> $temp_html
echo "<link rel='stylesheet' href='css/styles.css'>" >> $temp_html
echo "<link href='https://unpkg.com/aos@2.3.1/dist/aos.css' rel='stylesheet'>" >> $temp_html
echo "</head><body class='light'>" >> $temp_html

# Hero Section and Dark Mode toggle
echo "<div class='hero'><h1 id='typed-text'></h1></div>" >> $temp_html
echo "<div class='toggle-container'><span class='toggle-label'>Light Mode</span>" >> $temp_html
echo "<label class='switch'><input type='checkbox' id='darkModeToggle'><span class='slider'></span></label>" >> $temp_html
echo "<span class='toggle-label'>Dark Mode</span></div>" >> $temp_html

# Begin gallery section
echo "<div id='gallery-container'>" >> $temp_html

# Loop through each day's folder and add .jpeg and .jpg images dynamically
for folder in "$image_dir"Day*; do
  day=$(basename "$folder")  # Extract folder name (e.g., Day01)
  
  # Only proceed if there are .jpeg or .jpg files in the folder
  if ls "$folder"/*.jpeg "$folder"/*.jpg 1> /dev/null 2>&1; then
    echo "<h2>$day</h2><div class='gallery' data-aos='fade-up'>" >> $temp_html
    
    # Loop through each .jpeg and .jpg file in the folder
    for img in "$folder"/*.jpeg "$folder"/*.jpg; do
      if [[ -f "$img" ]]; then  # Only process if it's a file
        img_filename=$(basename "$img")  # Extract image file name
        echo "<img src='$folder/$img_filename' alt='Phrase Image'>" >> $temp_html  # Add image tag to HTML
      fi
    done
    
    echo "</div>" >> $temp_html
  fi
done

# Close the gallery container div
echo "</div>" >> $temp_html

# Add the scripts at the bottom of the HTML
echo "<!-- AOS JavaScript for scroll animations -->" >> $temp_html
echo "<script src='https://unpkg.com/aos@2.3.1/dist/aos.js'></script>" >> $temp_html
echo "<script>AOS.init();</script>" >> $temp_html

echo "<!-- Typed.js for typing animation -->" >> $temp_html
echo "<script src='https://cdn.jsdelivr.net/npm/typed.js@2.0.12'></script>" >> $temp_html

echo "<!-- Main JavaScript File -->" >> $temp_html
echo "<script src='js/script.js'></script>" >> $temp_html
echo "</body></html>" >> $temp_html

# Replace the original index.html with the updated temp_index.html
mv $temp_html $html_file

# Stage and commit the updated HTML file
git add $html_file
git commit -m "Updated index.html with new images and cleared old content"
git push origin main
