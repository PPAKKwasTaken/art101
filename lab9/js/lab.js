/*
lab.js

Function: Uses buttons to 
Requirements: jQuery is loaded

Author: Chad Ordonez
Date: 11/1/2024
*/


// add button to challenge section
$(".minorSection").append("<button id='button-minorSection'>PINK-IFY MY TEXT</button>");

// add a click listener to the challenge button
$("button-minorSection").click(function(){
    // now add (or subtract) the "special" class to the section
    $(".minor-section").addClass("special");
});

