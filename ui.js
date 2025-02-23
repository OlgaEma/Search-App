function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results
    data.items.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<a href=${item.link}>${item.htmlTitle}</a><p>${item.htmlSnippet}</p>`;
        resultsContainer.appendChild(div);
    });
}

function displayError(error) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
}

export { displayResults, displayError };