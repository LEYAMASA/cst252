/**
 * Author:    Leo Yamasaki
 * Created:   10.04.2021
 *
 * License: Public Domain
 **/

    // your script here

   // Use getElementById() to find your output <div> and assign it to a variable outputEl (step 1)
  var outputEl = document.getElementById("output");

   // Create a new element with document.createElement("p") and assign it to a variable new1El (step 2)
   var oneEl = document.createElement("button");
   var twoEl = document.createElement("button");

   // Change the html attribute of new1El to say "something new.""
   oneEl.id = "new-one"
   oneEl.innerHTML = "Something old.";
   // Create a new element with document.createElement("p") and assign it to a variable new1El
   twoEl.id = "new-two";
   twoEl.innerHTML = "Something new.";
   // Change the html attribute of new1El to say "something else.""
   document.body.appendChild(button);

   // Append both new elements one at a time using appendChild() (step 3)
   outputEl.appendChild(oneEl);
   outputEl.appendChild(twoEl);

   // Change the css attributes of at least two elements of your page
   document.getElementById("body").style.color="blue";
   document.getElementById("div").style.position = "absolute";

   // we do some stuff
   // new1El.style.color = "blue";
   // outputEl.style.border = "dashed 1px red";
   outputEl.className = "changed";

}
