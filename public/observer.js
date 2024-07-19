document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const opacityMultiplier = 0.5;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const clampedScrollPosition = Math.max(0, Math.min(1, scrollTop / windowHeight));
        const opacity = 1 - (clampedScrollPosition * opacityMultiplier);
        title.style.opacity = opacity;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelector('.buttons');
    const translationMultiplier = -1.75;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const translateY = scrollTop * translationMultiplier; 
        if (buttons) {
            buttons.style.transform = `translateY(${translateY}px)`;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view-arrow");
                    entry.target.classList.remove("out-view-arrow");
                } else {
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
    tags.forEach((tag) => {
        observer.observe(tag);
    });
});