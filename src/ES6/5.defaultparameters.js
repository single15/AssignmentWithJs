/**
 * Default Parameters
 */

function call(name = 'John') {
    console.log(`Hello ${name}!!`)
}


call('Jerry'); // Hello Jerry!!
call(''); // Hello !!
call(undefined); // Hello John!!
call(); // Hello John!!


/**
 * Argument + Default Parameter
 */
console.log('-------------------------------');
function funcWithArgs(x, y=20){
    return x+y;
}

console.log(funcWithArgs(10)); // 30
console.log(funcWithArgs(10, 30)); // 40


/**
 * Ternary Operator
 */

 console.log('-------------------------------');
 function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
say(); // 'Hi'