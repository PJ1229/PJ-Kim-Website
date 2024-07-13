function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    fetch('https://script.google.com/macros/s/AKfycbwlPVKlHnN8w4F_Z-fZCptvk0CEFDd-Np42I6gDKDsSQUxQCPUd8VTw8YsiXY9YwUTGTA/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        location.replace("index.html#home");
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Submission failed. Please try again.');
    });
}