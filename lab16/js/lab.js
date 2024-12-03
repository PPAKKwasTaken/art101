/*
lab.js

Function:
Requirements: jQuery is loaded
Notes: The following code heavily borrows from the assignment template and a jsbin excercise we did in class.

Author: Chad Ordonez
Date: 12/1/2024
*/


// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.nasa.gov/EPIC/api/natural",
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
            api_key: "h24D7btnC0w7bmAUsbb6ffqpNQ27QpOYeNeeVSw1",
            

          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);

        let pic = data[0];

        pic.imgData = (pic.date.slice(0, 10).replace("-", "/").replace("-","/"));

        $("#output").append("<img id = 'pic' src = 'https://api.nasa.gov/EPIC/archive/natural/" + pic.imgData + "/png/" + pic.image + ".png?api_key=h24D7btnC0w7bmAUsbb6ffqpNQ27QpOYeNeeVSw1'>")

    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})