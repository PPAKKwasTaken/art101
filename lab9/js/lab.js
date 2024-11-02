/*
lab.js

Function: Uses buttons to 
Requirements: jQuery is loaded

Author: Chad Ordonez
Date: 11/1/2024
*/

// adds a button to output section
$("#output").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the output button
$("button-output").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#output").toggleClass("special");
});
