document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");

    window.addEventListener("load", function() {
        // Ensure a minimum loading time to improve user experience
        setTimeout(() => {
            loadingScreen.style.display = "none";
            content.style.display = "block";
        }, 0); // Adjust this value to set a minimum delay, e.g., 1000ms (1 second)
    });
});
