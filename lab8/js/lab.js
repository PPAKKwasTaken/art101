//Operation functions
//Some functions that perform multiplication and division
//Author: Chad Ordonez
//Creat3d: 10/31/2024

//Multiplies x
function doubleIt(x){
    var results = (x * 2)
    return results;
}

//display results in console:
console.log("If you double 2, you get:", doubleIt(2));
console.log("If you double 5, you get:", doubleIt(5));

//An array of numbers
array = [1, 25, 63, 47, 100, 89, 57, 3.14]
console.log("My array:", array);

//divides x by 2
array.map(function(x){
    return (x / 2);
})

//display results in console, again:
var result = (array.map(function(x){
    return x / 2;
}));

console.log("Dividing these numbers by 2 makes:", result);