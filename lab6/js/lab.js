// Print myTransport and MyMainRide
// Author: Chad Ordonez
// Date: 10/24/2024



var myMainRide = {
  make: "Honda",
   model: "Odyssey",
    color :"purple",
     year: "2000",
      age: function() {return 2024 - this.year;
}
}

const myTransport = ["E-bike", "Loop Bus", "Metro Bus", "Car"]

document.writeln("My main ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");

document.writeln("My main transport: <pre>", JSON.stringify(myTransport, null, "\t"), "</pre>");

main();
