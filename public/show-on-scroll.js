
  document.addEventListener('scroll', function() {
    var button = document.getElementById('scrollToTopButton');
    if (window.scrollY > window.innerHeight) {
      button.style.opacity = '1'; // Fully visible
    } else {
      button.style.opacity = '0'; // Fully transparent
    }
  });
  
document.addEventListener('scroll', function() {
    const button = document.getElementById('scrollButton');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 500) { // Adjust this value as needed
        button.classList.add('visible');
        button.classList.remove('faded');
    } else {
        button.classList.add('faded');
        button.classList.remove('visible');
    }
});
