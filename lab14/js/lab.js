/**
 * Author:    Leo Yamasaki
 * Created:   10.04.2021
 *
 * License: Public Domain
 **/

 // print all the numbers from 1 to 100.
 for (var num=1; num <= 50; num++) {

   // // For numbers which are multiples of both 3 and 5, print “FizzBuzz”
   // if (num % 15 == 0) {
   //   console.log("FizzBuzz");
   // }
   // // If the number is a multiple of 3, print “Fizz” instead of the number.
   // else if (num % 3 == 0) {
   //   console.log("Fizz");
   // }
   // // If the number is a multiple of 5, print “Buzz” instead of the number.
   // else if (num % 5 == 0) {
   //   console.log("Buzz");
   // }
   // else {
   //   console.log(num)
   // }

   var outputStr = ""
   // if multiple of 3, add fizz
   if (num % 3 == 0) {
     outputStr += "Fizz"
     $("#output").append("<p>" + outputStr);
   }
   // if multiple of 5, add buzz
   if (num % 5 == 0) {
     outputStr += "Buzz"
     $("#output").append("<p>" + outputStr);
   }
   // if multiple of 7, add boom
   if (num % 7 == 0) {
     outputStr += "Boom"
     $("#output").append("<p>" + outputStr);
   }
   // if string is still blank, print it
   if (outputStr == "") {
     console.log(num);
     $("#output").append("<p>" + outputStr);
   }
   // otherwise, print str
   else {
     console.log(outputStr + '!');
     $("#output").append("<p>" + outputStr);
   }

 }
