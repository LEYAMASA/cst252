/**
 * Author:    Leo Yamasaki
 * Created:   10.04.2021
 *
 * License: Public Domain
 **/
function Vehicle(make, model, year, color, extras, name){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  this.name = name;
  this.info = function() {
    var str = "It's a " + color + " " + year + " " + make + " " + model + " with " + extras + " called " + name + ".";
    return str
  }

}

var car = new Vehicle("Nissan", "Versa", "2016", "Gray", "Blind Spot Mirrors", "Bertha");
$("#output").append("<p>" +  car.info() + "</p>");
