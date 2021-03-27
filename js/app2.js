let color = Cookies.get("color")
    if (color.length>0) {  //if color length is grerater than 0 go with code in the middle and the function in app.js
let selectionColor = document.getElementById('selectionColor');
    selectionColor.innerHTML = `<p>You choose: ${color}</p>`;
    // a cookie should be set to the value of the option they have selected.
    image = document.createElement("img");
    selectionColor.append(image);
    // This selection.html page should read the cookie with the users selection to get the selection from the page before    
       if(color === "redC63"){
           image.setAttribute("src", "/img/redC63.jpg");
       }else if(color === "blueC63"){
           image.setAttribute("src", "/img/blueC63.jpg");
       }else if(color === "greenC63"){
           image.setAttribute("src", "/img/greenC63.jpg");
       }
    }
   // If the selection cookie is not set, the page should give a message to the user informing them to go make a selection 
    else{
           document.write('Please pick a color') //else it sends you to the selection page and tells you to pick a color because of the Cookie i set with a color and no value in app.js
        }
// the rest of this is essentially code i got from you on thursday.