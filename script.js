'use strict'; //strict mode: catch silly errors

//code goes here!

console.log("Hello world!"); 

var x = 4; //create and assign variable
var y = x; //create and assign variable
x = 5;     //assign variable

console.log(x+', '+y);

//create a variable (not assigned)
var hoursSlept; 
console.log(hoursSlept); //=> undefined

//Make a new string variable for the value "The iSchool is my school"
var motto = "The iSchool is my school";

//Log out the string
console.log(motto);

//Convert the string to upper case, replacing the previous string
//Log out the changed variable
var motto = motto.toUpperCase();
console.log(motto);

//Use the slice method to extract characters 2 through 10 (inclusive) 
//into a new variable, and log that variable
var part = motto.slice(2,11);
console.log(part);

//Use the indexOf method to see if the word "cool" is in your string
var index = motto.indexOf("cool");
console.log(index);
