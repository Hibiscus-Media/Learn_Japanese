import os

# Directories for CSS and JS
css_dir = "css/"
js_dir = "js/"

# List of pages to generate (add more as needed)
pages = [
    {"name": "Index", "title": "Daily Japanese Phrases", "content": "<!-- Add specific content for Index here -->"},
    {"name": "Kanji", "title": "Kanji Practice", "content": "<!-- Add specific content for Kanji here -->"},
    {"name": "Hiragana", "title": "Hiragana Practice", "content": "<!-- Add specific content for Hiragana here -->"}
    # Add more pages as needed
]

# Function to generate HTML files for each page
def generate_html(page_name, page_title, page_content):
    # Convert page name to lowercase for CSS and JS file names
    page_name_lower = page_name.lower()

    # Build the HTML content
    html_content = f"""
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>{page_title}</title>
        
        <!-- Global CSS -->
        <link rel='stylesheet' href='{css_dir}global.css'>
        
        <!-- Page-Specific CSS -->
        <link rel='stylesheet' href='{css_dir}{page_name_lower}.css'>
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

        <!-- Page Content -->
        <div id="page-content">
            {page_content}
        </div>

        <!-- AOS JavaScript for scroll animations -->
        <script src='https://unpkg.com/aos@2.3.1/dist/aos.js'></script>
        <script>AOS.init();</script>

        <!-- Global JS -->
        <script src='{js_dir}global.js' defer></script>

        <!-- Page-Specific JS -->
        <script src='{js_dir}{page_name_lower}.js' defer></script>
    </body>
    </html>
    """

    # Write the HTML file for the current page
    with open(f"{page_name_lower}.html", "w") as f:
        f.write(html_content)
    print(f"{page_name_lower}.html has been generated.")

# Loop through each page and generate the corresponding HTML file
for page in pages:
    generate_html(page['name'], page['title'], page['content'])
