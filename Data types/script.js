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

// There’s an array of messages as in the previous task. The situation is similar.
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum; // 650
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) );

//  Write a function count(obj) that returns the number of properties in the object:
let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

function count(obj) {
  return Object.keys(obj).length;
}

/*
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)
*/
let users = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = users;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );

// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); 
alert( getWeekDay(date) );

// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// Turn the user into JSON and then read it back into another variable.
let userss = {
  name: "John Smith",
  age: 35
};

let user2 = JSON.parse(JSON.stringify(userss));