import { fetchData } from './api';

document.getElementById('searchQuery').addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        try {
            const query = document.getElementById('searchQuery').value;
            const data = await fetchData(query);
            // Call function to update UI with data
        } catch (error) {
            console.error('Error fetching data:', error);
            // Call function to display error in UI
        }
    }
});