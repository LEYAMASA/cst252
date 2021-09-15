/**
 * Summary. (use period)
 *
 * Description. (use period)
 *
 * @link   URL
 * @file   This files defines the MyClass class.
 * @author Leo Yamasaki.
 * @since  2021.13.9
 */

 // Declare variables to hold the make, model, color, and year of your vehicle, example, var year = 2004
var make = "Nissan";
var model = "Nissan Versa";
var color = "Gray";
var year = 2015;
var extras = "Stormtrooper Handwheel, Blind Spot Mirrors";

// Declare a boolean variable ownIt for whether you own it or not.
var ownIt = true;

// Create a new variable age that subtracts the year from the current year
var age = new Date().getFullYear();

// Use document.writeln() to neatly output each of your variables, example, document.writeln("Make: " + make + "<br>");
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Extras: " + extras + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Own it: " + ownIt + "<br>");
document.writeln("Age: " + age + "<br>");

document.writeln("");
