/**
 * For .... in loop
 * 
 */
let scores = [10,20,30];
scores.message = 'score';

for(let score in scores) {
    console.log(score);
}


/**
 * for ... of loop
 */

for(let score of scores) {
    console.log(score);
}


/**
 * 
 * Iterating over Map Object
 */

 let colors = new Map();
 colors.set('red', '#ff0000');
 colors.set('green', '#00ff00');
 colors.set('blue', '#0000ff');
 
 console.log(colors);

 for (let color of colors) {
 console.log(color);
 }

/**
 * Iterating  over Set Objects
 */

 let nums = new Set([1, 2, 3]);
 console.log(nums);

 
 for (let num of nums) {
 console.log(num);
 }