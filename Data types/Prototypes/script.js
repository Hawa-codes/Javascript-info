// Examples 
let userMethods = {
  greet() {
    console.log("Hello");
  }
};

let user1 = {
  name: "A",
  __proto__: userMethods
};

let user2 = {
  name: "B",
  __proto__: userMethods
};

let livingThing = {
  breathe: true
};

let animall = {
  eats: true,
  __proto__: livingThing
};

let dog = {
  barks: true,
  __proto__: animall
};

console.log(dog.breathe); // true

let vehicle = {
  move() {
    console.log("Moving...");
  }
};

let car = {
  wheels: 4,
  __proto__: vehicle
};

// connect them

car.move(); // should work

// 👉 Your task: connect car to vehicle


let animals = {
  sound() {
    console.log("Some sound");
  }
};

let cat = {
  __proto__: animals
};

// connect them

cat.sound();


let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)  true

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)  null

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)   undefined

// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head.
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

let animalss = {
  eat() {
    this.full = true;
  }
};

let rabbitt = {
  __proto__: animalss
};

rabbitt.eat();  // rabbit


// We added one more string (emphasized). What will alert show now?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbi = new Rabbit();

Rabbit.prototype = {};

alert( rabbi.eats ); // ? true

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbii = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbii.eats ); // ? false

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabit = new Rabbit();

delete rabbit.eats;

alert( rabit.eats ); // ?  true

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabet = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabet.eats ); // ?  undefined