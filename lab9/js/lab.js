/*
lab.js

Function: Uses buttons to 
Requirements: jQuery is loaded

Author: Chad Ordonez
Date: 11/1/2024
*/


// add button to challenge section
$(".minor-section").append("<button id='button-minor-section'>PINK-IFY MY TEXT</button>");

// add a click listener to the challenge button
$("#button-minor-section").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".minor-section").toggleClass("special");
});

