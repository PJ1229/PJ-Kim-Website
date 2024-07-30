document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");

    // Add no-scroll class to body
    document.body.classList.add('no-scroll');

    window.addEventListener("load", function() {
      // Ensure a minimum loading time to improve user experience
      setTimeout(() => {
        loadingScreen.style.display = "none";
        content.style.display = "block";
        // Remove no-scroll class from body
        document.body.classList.remove('no-scroll');
      }, 3000); // Adjust this value to set a minimum delay, e.g., 1000ms (1 second)
    });
  });