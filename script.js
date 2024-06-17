
    document.getElementById('testButton').addEventListener('click', () => {
        fetch('http://52.184.64.194/api/v1/documents', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('result').textContent = 'Error: ' + error;
        });
    });
