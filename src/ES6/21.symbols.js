/**
 * Symbols
 */

 let sym1 = Symbol()
 let sym2 = Symbol('foo')
 let sym3 = Symbol('foo')

 
 console.log(Symbol('foo') === Symbol('foo')); // false

 

let sym = Symbol('foo')
console.log(typeof sym); // "symbol"
let symObj = Object(sym)
console.log(typeof symObj); // "object"


// let sym = new Symbol()  // TypeError

/**
 * Using symbols as Unique value
 */


let statuses = {
OPEN: Symbol('Open'),
IN_PROGRESS: Symbol('In progress'),
COMPLETED: Symbol('Completed'),
HOLD: Symbol('On hold'),
CANCELED: Symbol('Canceled')
};

let task = {
    status: statuses.OPEN,
    description: 'Learn ES6 Symbol',
    setStatus: function(value) {
        this.status = value;
    }
};

// complete a task
task.setStatus(statuses.COMPLETED); 

console.log(task);

   