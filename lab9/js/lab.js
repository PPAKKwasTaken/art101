/*
lab.js

Function: Uses buttons to 
Requirements: jQuery is loaded

Author: Chad Ordonez
Date: 11/1/2024
*/

// adds a button to output section
$(".minor-section").append("<button id='button-minorSection'>PINK-IFY MY TEXT!</button>");

// add a click listener to all minor sections
$("button-minor-section").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".minor-section").toggleClass("special");
});

