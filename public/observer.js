document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        // Calculate the scroll position relative to the viewport height
        const clampedScrollPosition = Math.max(0, Math.min(1, scrollTop / windowHeight));

        // Apply the opacity based on scroll position
        title.style.opacity = 1 - clampedScrollPosition;
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                console.log(entry);  // Log each entry
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view-arrow");
                    entry.target.classList.remove("out-view-arrow");
                }
                else{
                    entry.target.classList.remove("in-view-arrow");
                    entry.target.classList.add("out-view-arrow");
                }
            });
        }, 
        {
            rootMargin: "0px",
            threshold: [0, 0.1, 1]
        }
    );

    const tags = document.querySelectorAll('figure');
    console.log(tags);  // Log the NodeList of figure elements

    tags.forEach((tag) => {
        observer.observe(tag);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                console.log(entry);  // Log each entry
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view-img");
                    entry.target.classList.remove("out-view-img");
                    const overlay = entry.target.parentNode.querySelector('.overlay');
                    if (overlay) {
                        overlay.classList.add("in-view-overlay");
                        overlay.classList.remove("out-view-overlay");
                    }
                } else {
                    entry.target.classList.remove("in-view-img");
                    entry.target.classList.add("out-view-img");
                    const overlay = entry.target.parentNode.querySelector('.overlay');
                    if (overlay) {
                        overlay.classList.remove("in-view-overlay");
                        overlay.classList.add("out-view-overlay");
                    }
                }
            });
        }, 
        {
            rootMargin: "0px",
            threshold: [0, 0.1, 1]
        }
    );

    const tags = document.querySelectorAll('img.drop-down');
    console.log(tags);  // Log the NodeList of drop-down images

    tags.forEach((tag) => {
        observer.observe(tag);
    });
});
