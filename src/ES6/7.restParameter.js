/**
 * Rest Parameter
 * function fn(a,b,...args) {
 * //...
 * }
 */

function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}
console.log(sum(1, 2, 3));


/**
 * Rest Parameter and Arrow Function
 */

 const combine = (...args) => {
    return args.reduce(function (prev, curr) {
        return prev + ' ' + curr;
    });
};

let message = combine('JavaScript', 'Rest', 'Parameters');
console.log(message);

/**
 * Parameter in a dynamic function
 */

 var showNumbers = new Function('...numbers', 'console.log(numbers)');
 showNumbers(1, 2, 3);
 