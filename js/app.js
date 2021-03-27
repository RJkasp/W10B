// This selection.html page should read the cookie with the users selection to get the selection from the page before
// If the selection cookie is not set, the page should give a message to the user informing them to go make a selection.
function selectItem(selectedItem){ //function built to select item store data of what was chosen and send what you chose to the selection.html
    Cookies.set("color", selectedItem); 
    location.href = "/pages/selection.html";//makes it so when user choses an object it goes directly to page 
}
Cookies.set('color', '');//needed this to set for my noooo button if the color has a value it will return the color otherwise it will return an error message that i stated in the else in app2