/**
 * Arrow Function
 */

// Regular function to add 
function add(x, y) {
    return x+y;
}

console.log(add(1, 24)) // 25

/**
 * Add Function using arrow function 
 */

let addNumbers = (x, y) => x + y;

console.log(addNumbers(1, 26)); // 27

/**
 * Arrow function with multiple parameters
 */

let numbers = [4,2,6];
numbers.sort((a,b) => b - a);
console.log(numbers); // [6,4,2]

/**
 * Arrow function with map 
 */

let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);
console.log(lengths); // [4,3,5]

/**
 * Wrong syntax
 * let multiply = (x,y)
 * => x * y; 
 * 
 * will return syntax error
 */


/**
 * WHEN NOT TO USE ARROW FUNCTION
 * 1. EVENT HANDLERS
 * 2. OBJECT METHODS
 * 3. PROTOTYPE METHODS
 * 4. FUNCTIONS THAT USE THE ARGUMENTS OBJECT
 */
 