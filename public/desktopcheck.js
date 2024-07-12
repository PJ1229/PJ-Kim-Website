/* Storing user's device details in a variable*/
let details = navigator.userAgent; 
  
/* Creating a regular expression  
containing some mobile devices keywords  
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i; 
  
/* Using test() method to search regexp in details 
it returns boolean value*/
let isMobileDevice = regexp.test(details); 
const container = document.querySelectorAll('button.container');
const mobile = document.querySelectorAll('button.mobile');
  
if (isMobileDevice) { 
    container.forEach((container) => {
        container.style.visibility = "hidden";
    });
    mobile.forEach((mobile) => {
        mobile.style.visibility = "visible";
    });
   
} else { 
    container.forEach((container) => {
        container.style.visibility = "visible";
    });
    mobile.forEach((mobile) => {
        mobile.style.visibility = "hidden";
    });
}