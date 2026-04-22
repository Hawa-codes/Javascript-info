"use strict"

alert("I'm JavaScript!");

// 2.4
let name = 'John';
let admin = name;

alert(admin)

//Create a variable with the name of our planet. How would you name such a variable?
const planet = 'Earth';

//Create a variable to store the name of a current visitor to a website. How would you name that variable?
let currentVisitor = "Hawa";

//Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // we can, because it is constant

// const AGE = someCode(BIRTHDAY); 
// we can't, because we need to calculate it


//What is the output of the script?
let name1 = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name1"}` ); // hello name

alert( `hello ${name1}` ); //  hello Ilya

// Create a web-page that asks for a name and outputs it.
let question = prompt('What is your name');
alert(question);

// What are the final values of all variables a, b, c and d after the code below?
let a = 1, b = 1;

let c = ++a; // 2  a = 2
let d = b++; // 1  b = 2

// What are the values of e and x after the code below?
let e = 2;

let x = 1 + (e *= 2);  // e = 4   x = 5

//What are results of these expressions?

"" + 1 + 0  // "10"
"" - 1 + 0  // "-1"
true + false  // 1
6 / "3"  // 2
"2" * "3"  // 6
4 + 5 + "px"  // "9px"
"$" + 4 + 5   // "$45"
"4" - 2   // 2
"4px" - 2  // NaN - 2 = NaN  = NaN
"  -9  " + 5  // "-95" 
"  -9  " - 5  // "-14"
null + 1   // 1
undefined + 1  // NaN + 1 = NaN
" \t \n" - 2   // 0 - -2 = -2


// Fix the addition
let f = prompt("First number?", 1);
let j = prompt("Second number?", 2);

alert(+f + +j); // 3