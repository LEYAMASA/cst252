/**
 * Author:    Leo Yamasaki
 * Created:   10.04.2021
 *
 * License: Public Domain
 **/
var outputEl = document.getElementById("output");

function add5(n){
  return (n + 5);
}

console.log("5 + 1 = ", add5 + 1);

array = [1, 2, 3, 4, 5];
console.log("My array: ", array);

var newEl = document.createElement("p");
newEl.innerHTML = "Original Numbers:" + JSON.stringify(array);
outputEl.appendChild(newEl);

var result = array.map(add5);
console.log("Adding Fives to the array:", result);

var newEl = document.createElement("p");
newEl.innerHTML = "New Fives:" + JSON.stringify(result);
outputEl.appendChild(newEl);

var result = array.map(function(n){
 return "Hello Number " + n;
})

console.log("Introducing each number:", result);

var newEl = document.createElement("p");
newEl.innerHTML = "Introducing each number:" + JSON.stringify(result);
outputEl.appendChild(newEl);
