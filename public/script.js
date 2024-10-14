const API_URL = 'http://localhost:3000/api/latest-log';

function fetchLatestLog() {
    console.log('Fetching latest log...'); // Log before fetch

    fetch(API_URL)
        .then(response => {
            console.log('Response status:', response.status); // Log the response status

            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text(); // Return the response text
        })
        .then(data => {
            console.log('Fetched data:', data); // Log the fetched data
            document.getElementById('log-content').innerText = data || 'No log data available';
        })
        .catch(error => {
            console.error('Error fetching log data:', error); // Log any fetch errors
            document.getElementById('log-content').innerText = 'Error loading log data.';
        });
}

// Set interval to fetch the latest log every 2 seconds and call it immediately
setInterval(fetchLatestLog, 2000);
fetchLatestLog();
