/*
lab.js

Function: Prints numbers 1 to 100. Changes numbers that are multiples of 15, 3, or 5 to "Fizz", "Buzz," and "FizzBuzz!"
Requirements: jQuery is loaded
Notes: The following code heavily borrows from the assignment template and a jsbin excercise we did in class.

Author: Chad Ordonez
Date: 11/18/2024
*/


for(let i=1;i<=100;i++){
    //if multiple of 15
    if (i%15 == 0) {
      console.log("FizzBuzz!");
    }
    
    else if (i%3 == 0){
      console.log("Fizz")
    }
    
    else if (i%5 == 0){
      console.log("Buzz");
    }
    
    else{
    console.log(i);
    }
  }
