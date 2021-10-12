/**
 * Author:    Leo Yamasaki
 * Created:   10.04.2021
 *
 * License: Public Domain
 **/
 window.onload = function () {

     // your script here

    // Use getElementById() to find your output <div> and assign it to a variable outputEl (step 1)
    var outputEl = document.getElementById("output");
    console.log("outputEl: ", outputEl);

    // Create a new element with document.createElement("p") and assign it to a variable new1El (step 2)
    var oneEl = document.createElement("p");

    // Change the html attribute of new1El to say "something new.""
    oneEl.innerHTML = "Original Me.";
    oneEl.id = "new-one";

    // Create a new element with document.createElement("p") and assign it to a variable new1El
    var twoEl = document.createElement("p");
    twoEl.id = "new-two";

    // Change the html attribute of new1El to say "something else.""
    twoEl.innerHTML = "Newest Me.";

    // Append both new elements one at a time using appendChild() (step 3)
    outputEl.appendChild(oneEl);
    outputEl.appendChild(twoEl);

    // Change the css attributes of at least two elements of your page
    // we do some stuff
    // new1El.style.color = "blue";
    // outputEl.style.border = "dashed 1px red";
    oneEl.style.backgroundColor = "chartreuse"
    oneEl.style.color = "black";
    oneEl.style.fontSize = "100px";
    twoEl.style.backgroundColor = "darkorchid"
    twoEl.style.color = "white";
    twoEl.style.fontSize = "100px";

 }
