/**
 * Author:    Leo Yamasaki
 * Created:   10.04.2021
 *
 * License: Public Domain
 **/

//var outputEl = document.getElementById("output");
//console.log("outputEl: ", outputEl);
var greetingMessage = "Hello";

$("#output").html("<button class=button>Press Me")

$(".button").click(function(){
  var newButton = $("#output").append(alert(greetingMessage));
  var newButton = $(".button").css("color", "green");
});
