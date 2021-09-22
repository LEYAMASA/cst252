/**
 * Author:    Leo Yamasaki
 * Created:   09.21.2021
 * 
 * License: Public Domain
 **/
myTransport = ["Nissan Versa", "Zed Sport Bike", "MST Bus", "Electronic Scooter"];

myMainRide = {
    make: "Nissan",
    model : "Versa",
    color : "Gray",
    year : 2015,
    age : function() {
        return 2019 - this.year;
    }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("The age of my ", myMainRide.model, " is ", myMainRide.age(), " years.");
