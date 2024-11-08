/*
lab.js

Function: appends new elements to an output div to create "dialogue"
Requirements: jQuery is loaded

Author: Chad Ordonez
Date: 11/7/2024
*/


//Creates random dialogue. Template taken from lab 10 assignment page
function generateRandomText() {
    const text = "Don't touch my pizza, don't touch my jelly. I don't like blue cheese 'cause it is really smelly. If you touch my pizza, you're gonna have to die. Start writing your farewells and saying your goodbyes. Is it your birthday? Think I forgot it. Since it's not over, let's go to Hot Topic! I'm sorry, Granny, for pushing you down the stairs. I apologized, don't know why you think I don't care. I'm stuck in my freezer, turning into a Klondike bar. I don't know where I'm going. But I know I'm going far. I'm stuck in my freezer, turning into a Klondike bar. I don't know where I'm going, but I know I'm going far!Just a reminder, don't touch my pizza. Or you'll regret it, you really will! I'll keep my composure, things will get out of hand! Don't know what I'm doing, I made this at 4AM. Just be yourself, man, it'll be alright. Don't let them test you, you gotta put up a good fight! I'm really sleepy so it is time to rest! I'm ending this song now! I hope you have a good night!";

    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

  // click listener for button
$("#make-convo").click(function(){

// append a new div to our output div
$("#output").append('<div class="text"><p>' + generateRandomText() + '</p></div>');

});

// get new fake dialogue
const newText = generateRandomText();

