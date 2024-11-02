/*
lab.js

Function: Uses buttons to 
Requirements: jQuery is loaded

Author: Chad Ordonez
Date: 11/1/2024
*/


// add button to challenge section
$(".minor-section").append("<button class='button-minor-section'><span>PINK</span>-IFY MY TEXT!</button>");

//$(".button-minor-section")

// add a click listener to the challenge button
$(".button-minor-section").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).parent().toggleClass("special");
    console.log($(this).parent());

    //Changes the message (and color) of text on the button.
    if ($(this).html() == "UNPINK-IFY MY TEXT!" ){
        $(this).html("<span>PINK</span>-IFY MY TEXT!")
    }
    else {
        $(this).html("UNPINK-IFY MY TEXT!")
    }
});
