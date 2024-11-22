/*
lab.js

Function: Takes an input and places the user in 1 of 4 groups depending on its length
Requirements: jQuery is loaded
Notes: The following code heavily borrows from the assignment template.

Author: Chad Ordonez
Date: 11/14/2024
*/

function sortingHat(str){
    let length = str.length;
    let mod = length % 4;
    let output = 0

    if  (mod == 0){
        output = "They were a human! I don't know what circumstances led them to going through my garbage. But I won't judge! Hopefully they didn't try eating anything...";
    }

    else if (mod == 1) {
        output = "They were a possum. I should secure the lid of my bins with something heavy next time! Perhaps a cinder block would suffice?";
    }

    else if (mod == 2){
        output = "They were a gnome! I hate gnomes, they keep digging up my yard. They're probably using my junk to make something that will dig up the whole neighborhood!";
    }

    else {
        output = "They were an elf! Woah, I gotta be careful! Elves who've come into human society develop a nasty sweet tooth. My pantry might be dragged off into the woods.";
    }

    $("#output").append("<p> " + output + "</p>");
}

$("#submit").click(function(){ sortingHat($("#user-input").val())});