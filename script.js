async function search() {
    const query = document.getElementById('searchInput').value;
    if (!query) return;

    const response = await fetch('YOUR_GOOGLE_COLAB_API_ENDPOINT', { // Replace with your Colab API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
    });

    const results = await response.json();
    displayResults(results);
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    results.forEach(result => {
        const p = document.createElement('p');
        p.textContent = `${result.score.toFixed(2)}: ${result.text}`;
        resultsDiv.appendChild(p);
    });
}
