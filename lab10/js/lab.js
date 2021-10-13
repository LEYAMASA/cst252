/**
 * Author:    Leo Yamasaki
 * Created:   10.04.2021
 *
 * License: Public Domain
 **/

 buttonEl = document.getElementById("my-button");
 console.log("button element:", buttonEl);
 // find the form element
 inputEl = document.getElementById("user-name");
 console.log("input element:", inputEl);
 // find output element
 outputEl = document.getElementById("output");
 console.log("output element:", outputEl);

// add an event listener to button
function sortText(text) {
  return text.split('').sort().reverse().join('');
}

buttonEl.addEventListener("click", function() {
  var inputEl = document.getElementById("input");

  var name = inputEl.value;

  var newName = sortText(name);

  var newText = "Hello, " + newName + "!";

  var heading = document.getElementById("greet");

  document.getElementById("output").innerHTML = newText;
});
