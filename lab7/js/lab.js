//Name Sorter
//Accepts a user's name as input, then alphabetizes it.
//Author: Chad Ordonez
//Date: 10/28/2024

function userNameAlphabetize() {
    var userName = window.prompt("What is your name?");
    //Asks user for their name.

    sortName = userName.toLowerCase().split('').sort().join('');
    //Turns a name into an array, makes it lowercase, sorts it and joins it back together

    return sortName;
}

function userNameCapitalize(name){
    var userName = name;
    //Takes the name the user originally typed

    splitName = userName.split('');
    //splits the name

    properName = splitName[0].toUpperCase().join('');
    //capitalizes the first letter in splitName, then recombines the list into a new name!
    

}

//output
document.writeln("I've fixed your name without your permission! Here you go!: ",
    userNameAlphabetize(), "</br>");

    document.writeln("Oh wait. I forgot to capitalize it!: ",
        userNameCapitalize(userNameAlphabetize), "</br>");