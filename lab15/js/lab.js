/*
lab.js

Function: Prints numbers 1 to 100. Changes numbers that are multiples of 15, 3, or 5 to "Fizz," "Buzz," "Boom" and a combination of the words 
Requirements: jQuery is loaded
Notes: The following code heavily borrows from the assignment template and a jsbin excercise we did in class.

Author: Chad Ordonez
Date: 11/25/2024
*/




//Click listener
$("#button").click(function(){
    // Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.chucknorris.io/jokes/random",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
            icon_url: "https://api.chucknorris.io/img/avatar/chuck-norris.png",
            id: "",
            url: "",
            value: ""
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    datatype : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        $("#output div").html("<p> " + data.value + "</p>");
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})
});