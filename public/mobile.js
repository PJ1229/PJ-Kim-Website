let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
let isPortrait = window.matchMedia("(orientation: portrait)").matches;
const desktop = document.querySelectorAll('.desktop');
const mobile = document.querySelectorAll('.mobile');

function updateVisibility() {
    if (isMobileDevice && isPortrait) {
        desktop.forEach(desktop => {
            desktop.style.visibility = "hidden";
        });
        mobile.forEach(mobile => {
            mobile.style.visibility = "visible";
        });
    } else {
        desktop.forEach(desktop => {
            desktop.style.visibility = "visible";
        });
        mobile.forEach(mobile => {
            mobile.style.visibility = "hidden";
        });
    }
}

updateVisibility();

window.addEventListener("orientationchange", () => {
    location.reload();
});
