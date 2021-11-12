/**
 * Author:    Leo Yamasaki
 * Created:   10.04.2021
 *
 * License: Public Domain
 **/
//Car classification
class Car {
  //initialize
  constructor(make, model, year, color, extras, name)
  {
    //set up describe my car
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
    this.name = name;
  }
  //document write in words for the car description
  info() {
    return "Make: " + this.make +
           ", Model: " + this.model +
           ", Year: " + this.year +
           ", Color: " + this.color +
           ", Extras: " + this.extras +
           ", Name:" + this.name;
  }
  //Do a test for the class function
  go() {
    return "VROOM!";
  }
}
//Close class function and start coding in functions to use JS class function
mycar = new Car("Nissan", "Versa", "2016", "Gray", "Blind Spot Mirrors", "Bertha");
console.log(mycar.info());
$("#output").append("<p>" +  mycar.info() + "</p>");
