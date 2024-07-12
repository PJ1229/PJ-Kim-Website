document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const bottomSection = document.querySelector('.bottom-section');

    // Define your opacity multiplier here
    const opacityMultiplier = 0.75; // Change this value to adjust the fade rate (1 is a full range from 1 to 0)
    const translationMultiplier = 0.5; // Adjust this for background position movement
    const bottomTranslationMultiplier = -0.5; // Adjust this for background position movement for the bottom section

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        // Calculate the scroll position relative to the viewport height
        const clampedScrollPosition = Math.max(0, Math.min(1, scrollTop / windowHeight));

        // Adjust opacity based on scroll position for the top section
        const opacity = 1 - (clampedScrollPosition * opacityMultiplier);
        title.style.opacity = opacity;

        // Debug log to check opacity value
        console.log('Opacity:', opacity);

        // Adjust background position based on scroll for the top section
        const translateY = scrollTop * translationMultiplier;
        title.style.backgroundPositionY = `-${translateY}px`;

        // Adjust opacity based on scroll position for the bottom section
        const bottomScrollStart = windowHeight * .675; // Start point for bottom section to begin appearing
        const bottomScrollPosition = Math.max(0, scrollTop - bottomScrollStart);
        const bottomScrollProgress = Math.min(1, bottomScrollPosition / windowHeight);
        const bottomSectionOpacity = bottomScrollProgress;
        bottomSection.style.opacity = bottomSectionOpacity;

        // Debug log to check bottom section opacity value
        console.log('Bottom Section Opacity:', bottomSectionOpacity);

        // Adjust background position based on scroll for the bottom section
        if (bottomScrollPosition >= 0) {
            const bottomTranslateY = bottomScrollPosition * bottomTranslationMultiplier;
            bottomSection.style.backgroundPositionY = `-${bottomTranslateY}px`;
        }
    });
});







document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelector('.buttons');

    // Define your translation multiplier here
    const translationMultiplier = -1.75; // Change this value to adjust the speed of the scrolling effect

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;

        // Calculate the translation based on scroll position and the translation multiplier
        const translateY = scrollTop * translationMultiplier; 

        // Apply the translation using transform property
        if (buttons) {
            buttons.style.transform = `translateY(${translateY}px)`;
        }
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
