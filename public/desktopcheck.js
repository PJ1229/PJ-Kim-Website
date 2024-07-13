let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
const container = document.querySelectorAll('button.container');
const mobile = document.querySelectorAll('button.mobile');

if (isMobileDevice) {
    container.forEach(container => {
        container.style.visibility = "hidden";
    });
    mobile.forEach(mobile => {
        mobile.style.visibility = "visible";
    });
} else {
    container.forEach(container => {
        container.style.visibility = "visible";
    });
    mobile.forEach(mobile => {
        mobile.style.visibility = "hidden";
    });
}
