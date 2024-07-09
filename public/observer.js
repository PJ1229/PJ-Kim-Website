document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                console.log(entry);  // Log each entry
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    entry.target.classList.remove("out-view");
                }
                else{
                    entry.target.classList.remove("in-view");
                    entry.target.classList.add("out-view");
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
