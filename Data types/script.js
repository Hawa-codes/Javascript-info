"use strict"
// Create a script that prompts the visitor to enter two numbers and then shows their sum.
let a = +prompt("number1?", "");
let b = +prompt("number2?", "");

alert( a + b );

// According to the documentation Math.round and toFixed both round to the nearest number: 0..4 lead down while 5..9 lead up.

// This loop is infinite. It never ends. Why?


// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

//Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '...' :
    str;
}

//Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
function extractCurrencyValue(str) {
    return +str.slice(1)
}

// What is this code going to show?
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;

shoppingCart.push("Banana");  // "Apples", "Pear", "Orange", "Banana"
alert( fruits.length ); // 4

/*
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
*/
let items = ["Jazz", "Blues"];

items.push("Rock-n-Roll");

let middleIndex = Math.floor(items.length / 2);
items[middleIndex] = "Classics";

items.shift();

items.unshift("Rap", "Reggae")

//What is the result? Why?
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // this

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
function camelize(str) {
  return str.split('-') 
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 
}


function filterRange(arrr, a, b) {
  return arrr.filter(item => (a <= item && item <= b));
}

let arrr = [5, 3, 8, 1];
let filtered = filterRange(arrr, 1, 4);

alert( filtered ); 
alert( arrr );

// Sort in decreasing order
let array = [5, 2, 1, -10, 8];

array.sort((a, b) => b - a);

alert( array );