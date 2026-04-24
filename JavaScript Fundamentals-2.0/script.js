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

// What will be the result for these expressions?
5 > 4  // true
"apple" > "pineapple"  // false
"2" > "12"  // false
undefined == null  // true
undefined === null // false
null == "\n0\n"  // false
null === +"\n0\n" // false

// Will alert be shown?
if ("0") {
  alert( 'Hello' );
}                    // Yes it will run because "0" is true

// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

let questions = prompt('What is the "official" name of JavaScript?', '');

if (questions = 'ECMAScript'){
    alert('Right!')
}else {
    alert('You don’t know? ECMAScript!')
}


// Using if..else, write the code which gets a number via prompt and then shows in alert:
let numbers = prompt('Number', '');

if (numbers > 0){
    alert(1)
} else if (numbers < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

// Rewrite this if using the conditional operator '?':
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let resultss = (a + b < 4) ? 'Below' : 'Over';

// For readability, it’s recommended to split the code into multiple lines.
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

let messaage = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

// What is the code below going to output?
alert( null || 2 || undefined );  // 2

alert( alert(1) || 2 || alert(3) );  // 2

// What is this code going to show?
alert( 1 && null && 2 );  // null

//What will this code show?
alert( alert(1) && alert(2) );  // 1

// What will the result be?
alert( null || 2 && 3 || 4 ); // 3

//Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
if (age >= 14 && age <= 90);

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
if (!(age >= 14 && age <= 90));

// Which of these alerts are going to execute?
if (-1 || 0) alert( 'first' );  // true
if (-1 && 0) alert( 'second' );  // false
if (null || -1 && 1) alert( 'third' ); // true


let code = prompt('What is the Login', '')

// What is the last value alerted by this code? Why?
let i = 3;

while (i) {
  alert( i-- );  // 1
}                 

//Which values does the while loop show? 
//The prefix form ++i:
let p = 0;
while (++p < 5) alert( p );  // 1,2,3,4

//The postfix form i++
let k = 0;
while (k++ < 5) alert( k );  //1,2,3,4,5

//The postfix form:
for (let i = 0; i < 5; i++) alert( i );  //0,1,2,3,4

//The prefix form:
for (let i = 0; i < 5; ++i) alert( i );  //0,1,2,3,4

// Use the for loop to output even numbers from 2 to 10.
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

//Replace "for" with "while"
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let h = 0;
while(h < 3){
 alert( `number ${i}!` );
 h++;
}

//Write the code using if..else which would correspond to the following switch:
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

// Answer 
if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'|| browser == 'Firefox'|| browser == 'Safari'|| browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

// Rewrite the code below using a single switch statement:
let n = +prompt('n?', '');

if (n == 0) {
  alert( 0 );
}
if (n == 1) {
  alert( 1 );
}

if (n == 2 || n == 3) {
  alert( '2,3' );
}

switch(n){
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' )    
}