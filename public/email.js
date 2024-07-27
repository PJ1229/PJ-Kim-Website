function handleSubmit(event) {
    event.preventDefault();

    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");

    // Show the loading screen and hide the content
    loadingScreen.style.display = "flex";
    content.style.display = "none";

    const formData = new FormData(event.target);
    fetch('https://script.google.com/macros/s/AKfycbwlPVKlHnN8w4F_Z-fZCptvk0CEFDd-Np42I6gDKDsSQUxQCPUd8VTw8YsiXY9YwUTGTA/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        location.replace("index.html"); //change to newsletter.html once finished
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Submission failed. Please try again.');
        
        loadingScreen.style.display = "none";
        content.style.display = "block";
    });
}
