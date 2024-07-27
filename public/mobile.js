let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
const desktop = document.querySelectorAll('.desktop');
const mobile = document.querySelectorAll('.mobile');

if (isMobileDevice) {
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
