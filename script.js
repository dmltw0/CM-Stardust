// script.js

// Declare a boolean variable equal to false
let isGreeting = false;

// Find in the DOM the porta filter img using the "porta-filter-img" id
let imageElem  = document.getElementById("porta-filter-img");

// Call this function when user click on the image
imageElem.onclick = function() {
    isGreeting = !isGreeting;

    let heyP = document.getElementById("greeting");
    if(isGreeting) {
        heyP.innerHTML = "Cool Beans"
    }
    else {
        heyP.innerHTML = ""
    }
};
