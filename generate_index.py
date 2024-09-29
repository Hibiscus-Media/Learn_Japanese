import os

# Path to your image directories
image_dir = "Phrases/"
html_file = "index.html"

# Start building the HTML content
html_content = """
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Daily Japanese Phrases</title>
    <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap' rel='stylesheet'>
    <link rel='stylesheet' href='css/styles.css'>
    <link href='https://unpkg.com/aos@2.3.1/dist/aos.css' rel='stylesheet'>
</head>
<body class='light'>
    <!-- Hero Section with Typed.js Animation -->
    <div class='hero'>
        <h1 id='typed-text'></h1>
    </div>

    <!-- Light/Dark Mode Toggle -->
    <div class='toggle-container'>
        <span class='toggle-label'>Light Mode</span>
        <label class='switch'>
            <input type='checkbox' id='darkModeToggle'>
            <span class='slider'></span>
        </label>
        <span class='toggle-label'>Dark Mode</span>
    </div>

    <!-- Gallery container -->
    <div id="gallery-container">
"""

# Loop through each folder in the Phrases directory
for folder in sorted(os.listdir(image_dir)):
    folder_path = os.path.join(image_dir, folder)
    if os.path.isdir(folder_path):
        # Check for images (.jpeg, .jpg) in each folder
        images = sorted([img for img in os.listdir(folder_path) if img.endswith(('.jpeg', '.jpg'))])
        if images:
            html_content += f"<h2>{folder}</h2><div class='gallery' data-aos='fade-up'>\n"
            for image in images:
                img_path = os.path.join(folder_path, image)
                html_content += f"<img src='{img_path}' alt='Phrase Image'>\n"
            html_content += "</div>\n"

# Close the gallery container and add the scripts at the bottom of the HTML
html_content += """
    </div>

    <!-- AOS JavaScript for scroll animations -->
    <script src='https://unpkg.com/aos@2.3.1/dist/aos.js'></script>
    <script>AOS.init();</script>

    <!-- Typed.js for typing animation -->
    <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

    <!-- Main JavaScript File -->
    <script src='js/script.js'></script>
</body>
</html>
"""

# Write the HTML content to index.html
with open(html_file, "w") as f:
    f.write(html_content)

print("index.html has been updated.")
