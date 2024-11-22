/*
lab.js

Function: Prints numbers 1 to 100. Changes numbers that are multiples of 15, 3, or 5 to "Fizz," "Buzz," "Boom" and a combination of the words 
Requirements: jQuery is loaded
Notes: The following code heavily borrows from the assignment template and a jsbin excercise we did in class.

Author: Chad Ordonez
Date: 11/18/2024
*/

let longString = 0;
let output = 0;

for(let i=1;i<=200;i++){

  //if multiple of 105
  if (i%105 == 0) {
    console.log("FizzBuzzBoom!");
    output = "FizzbuzzBoom!";
  } 

    //if multiple of 21
  if (i%21 == 0) {
    console.log("FizzBoom!");
    output = "FizzBoom!";
  } 

    //if multiple of 21
    if (i%35 == 0) {
    console.log("BuzzBoom!");
    output = "FizzBoom!";
  } 

  //if multiple of 15
  if (i%15 == 0) {
    console.log("FizzBuzz!");
    output = "FizzBuzz!";
  }
  
  //if multiple of 3
  else if (i%3 == 0){
    console.log("Fizz!");
    output = "Fizz!";
  }
  
  //if multiple of 5
  else if (i%5 == 0){
    console.log("Buzz!");
    output = "Buzz!";
  }

  else if (i%7 == 0){
    console.log("Boom!")
    output = "Boom";
  }
  
  //prints the number as-is if it doesn't fit the other conditions
  else{
    console.log(i);
    output = i;
  }

  $("#output").append("<p>" + output + "</p>");
}
