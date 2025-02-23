import { fetchData } from './api.js';
import { displayResults, displayError } from './ui.js';

let currentData = null; // Declare first

const downloadFile = () => {
    if (!currentData) {
        alert('No data to download');
        return;
    }
    const blob = new Blob([JSON.stringify(currentData)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${document.getElementById('searchQuery').value}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};


document.getElementById('downloadButton').addEventListener('click', downloadFile);

document.getElementById('searchQuery').addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        const query = document.getElementById('searchQuery').value;
        try {
            currentData = await fetchData(query); 
            displayResults(currentData);
        } catch (error) {
            console.error('Fetch error:', error.message);
            displayError(error);
        }
    }
});

