/*
lab.js

Function: Sorts a text input into an alphetized anagram
Requirements: jQuery is loaded
Notes: The following code heavily borrows from the assignment template.

Author: Chad Ordonez
Date: 11/11/2024
*/


// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
  // get value of input field
const userName = $("#user-name").val();

// Calls the sortString function to sort the string
userNameSorted = sortString(userName);

// Appends a new div to the output div
$("#output").html('<h2 id="magic-name">' + userNameSorted + '</h2>');

});

