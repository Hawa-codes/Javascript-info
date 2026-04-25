/*
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

let user = {};
user.name = "Hawa";
user.surname = "Adediran";
user.name = "Amir";
delete user.name;

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); //       Sum is 390

// What is the result of accessing its ref? Why?
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name );  // error

// Create an object calculator with three methods:
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


//