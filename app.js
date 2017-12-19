var my_module = require('./mathlib')();
// that means const MathLibrary = require("./mathlib");
//const math = new MathLibrary();
console.log(my_module)
my_module.add(2,3);
my_module.multiply(3,5);
my_module.square(5);
my_module.random(1,35);



///--other way
// const MathLibrary = require("./mathlib");
// const math = new MathLibrary();

// const a = 1;
// const b = 35;

// console.log("\nSum of " + a + " and " + b + " is: ", math.add(a, b));
// console.log("Product of " + a + " and " + b + " is: ", math.multiply(a, b));
// console.log("Square of " + a + " is: ", math.square(a));
// console.log("Random number between " + a + " and " + b + ": ", math.random(a, b));