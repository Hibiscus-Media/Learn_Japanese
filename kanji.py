import os

# Directory containing Kanji folders
kanji_dir = "Kanji_Folders"
output_file = "kanji.html"

# Start building the HTML content
html_content = """
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Kanji Practice</title>
    <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap' rel='stylesheet'>
    <link rel='stylesheet' href='css/styles.css'>
    <link href='https://unpkg.com/aos@2.3.1/dist/aos.css' rel='stylesheet'>
</head>
<body class='light'>
    <div class='hero'>
        <h1 id='typed-text'></h1>
    </div>
    <div class='toggle-container'>
        <span class='toggle-label'>Light Mode</span>
        <label class='switch'>
            <input type='checkbox' id='darkModeToggle'>
            <span class='slider'></span>
        </label>
        <span class='toggle-label'>Dark Mode</span>
    </div>
    <div class='container'>
        <h1>Kanji Practice</h1>
        <h2>Table of Contents</h2>
        <ul>
"""

# Get folder names and sort them
folders = sorted(os.listdir(kanji_dir))

# Create the table of contents with links to each section
for folder in folders:
    if os.path.isdir(os.path.join(kanji_dir, folder)):
        clean_name = folder.replace("_", " ")  # Replace underscores with spaces for clean display
        html_content += f"<li><a href='#{folder}'>{clean_name}</a></li>\n"

html_content += "</ul>\n"

# Create sections for each folder
for folder in folders:
    folder_path = os.path.join(kanji_dir, folder)
    if os.path.isdir(folder_path):
        clean_name = folder.replace("_", " ")  # Clean the folder name for the heading
        html_content += f"<h2 id='{folder}'>{clean_name}</h2>\n<div class='gallery' data-aos='fade-up'>\n"

        # Get image files, sort by filename, and append them in order
        images = sorted([img for img in os.listdir(folder_path) if img.endswith(('.jpeg', '.jpg'))])

        for img in images:
            img_path = os.path.join(folder_path, img).replace("\\", "/")
            html_content += f"<img src='{img_path}' alt='{clean_name} image'>\n"

        html_content += "</div>\n"

# Close the HTML body and add scripts
html_content += """
    </div>
    <!-- AOS JavaScript for scroll animations -->
    <script src='https://unpkg.com/aos@2.3.1/dist/aos.js'></script>
    <script>AOS.init();</script>

    <!-- Typed.js for typing animation -->
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

    <!-- Main JavaScript File -->
    <script src='js/kanji.js'></script>
</body>
</html>
"""

# Write the HTML content to the file
with open(output_file, "w") as f:
    f.write(html_content)

print(f"HTML file '{output_file}' has been generated successfully.")
