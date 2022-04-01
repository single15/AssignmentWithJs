/**
 * Map
 */

 let colors = new Map();

 colors.set('red', '#ff0000');
 colors.set('green', '#00ff00');
 colors.set('blue', '#0000ff');

 console.log(colors.get('red')); 
 // #ff0000

 colors.set('red', '#000');
 console.log(colors.get('red'));
 // #000

 console.log(colors.size);
 // 3

 colors.delete('blue');

 console.log(colors.size);
 // 2


/**
 * WeakMap
 */

 const wm1 = new WeakMap();
 const wm2 = new WeakMap();
 const wm3 = new WeakMap();

 const o1 = {};
 const o2 = function() {};
 const o3 = [];

wm1.set(o1, 37);
wm1.set(o2, 'azerty');
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

console.log(wm1.get(o2)); // "azerty"
console.log(wm2.get(o2)); // undefined, because there is no key for o2 on wm2
console.log(wm2.get(o3)); // undefined, because that is the set value

console.log(wm1.has(o2)); // true
console.log(wm2.has(o2)); // false
console.log(wm2.has(o3)); // true (even if the value itself is 'undefined')

wm3.set(o1, 37);
console.log(wm3.get(o1)); // 37

console.log(wm1.has(o1)); // true
wm1.delete(o1);
console.log(wm1.has(o1)); // false