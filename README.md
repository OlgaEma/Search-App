Search App
This is a simple search application that fetches results from the Google Custom Search API and allows users to download search results as a JSON file.

Features:
- Search using Google Custom Search API
- Display results on the page
- Download results as a .json file
- Includes unit tests with Jest

To run this application you will need Google API key and CX code.

Getting an API Key:
- Go to the Google Cloud Console
- Create a new project
- Enable the Custom Search JSON API
- Generate an API Key

Getting a CX Code:
- Go to the Google Programmable Search Engine
- Create a new search engine
- Copy the Search Engine ID (CX code)

Before running the project, you need to create a config.js file in the root of your project (inside the same folder as index.js).

1️⃣ Create config.js manually
Inside your project directory, create a new file named config.js.

2️⃣ Add the following content to config.js (replace with your own keys):

 const API_KEY = 'your_google_api_key_here';
 const CX = 'your_custom_search_cx_here';
 export { API_KEY, CX };

3️⃣ Save the file and you're ready to go! 🚀



