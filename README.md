Search App
This is a simple search application that fetches results from the Google Custom Search API and allows users to download search results as a JSON file.

✨ Features:
✔️ Search using Google Custom Search API
✔️ Display results dynamically on the page
✔️ Download search results as a .json file
✔️ Includes unit tests with Jest for API calls and error handling

📌 Setup
1️⃣ Get a Google API Key
Go to Google Cloud Console
Create a new project
Enable the Custom Search JSON API
Generate an API Key
2️⃣ Get a CX Code
Go to Google Programmable Search Engine
Create a new search engine
Copy the Search Engine ID (CX Code)
⚙️ Configuration
Before running the project, you need to create a config.js file in the root directory (inside the same folder as index.js).

1️⃣ Create config.js manually
Inside your project directory, create a new file named config.js.

2️⃣ Add the following content to config.js (Replace with your own keys):

js
Copy
Edit
const API_KEY = 'your_google_api_key_here';
const CX = 'your_custom_search_cx_here';
export { API_KEY, CX };
 Save the file and you're ready to go! 🚀

 Running the Project
 Install Dependencies
Run the following command in the terminal:

sh
Copy
Edit
npm install
 Run a Local Server
To use the app in the browser, you need to run a local server (such as Apache, http-server, or a similar option).

 Running Tests
To execute unit tests, run:

sh
Copy
Edit
npm test
This will run Jest tests for API calls and error handling.

 Notes:
Ensure you have Node.js installed before running npm install.
The config.js file is ignored in Git for security reasons. You must create it manually.
If you experience CORS issues, ensure you are running the project on a local server.
 Enjoy building and improving the app!


