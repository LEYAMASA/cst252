/**
 * Author:    Leo Yamasaki
 * Created:   10.04.2021
 *
 * License: Public Domain
 **/

//var outputEl = document.getElementById("output");
//console.log("outputEl: ", outputEl);

$("#problem-button").click(function(){
  // action goes here!!
  $("#problem").removeClass("purple-text");
  $("#problem").removeClass("yellow-text");
  $("#problem").toggleClass("green-text");
});

$("#challenge-button").click(function(){
  // action goes here!!
  $("#challenge").removeClass("green-text");
  $("#challenge").removeClass("yellow-text");
  $("#challenge").toggleClass("purple-text");
});

$("#result-button").click(function(){
  // action goes here!!
  $("#result").removeClass("green-text");
  $("#result").removeClass("purple-text");
  $("#result").toggleClass("yellow-text");
});
