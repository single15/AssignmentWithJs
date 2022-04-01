/**
 * Set
 */

 const mySet1 = new Set()

 mySet1.add(1)           // Set [ 1 ]
 mySet1.add(5)           // Set [ 1, 5 ]
 mySet1.add(5)           // Set [ 1, 5 ]
 mySet1.add('some text') // Set [ 1, 5, 'some text' ]

 console.log(mySet1);


 const o = {a: 1, b: 2}
 mySet1.add(o)
 
 mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay
 
 console.log('has 1', mySet1.has(1))              // true
 console.log('has 3', mySet1.has(3))              // false, since 3 has not been added to the set
 console.log('has 5', mySet1.has(5))              // true
 console.log('has sqrt 25', mySet1.has(Math.sqrt(25)))  // true
 console.log('has some text', mySet1.has('Some Text'.toLowerCase())) // true
 console.log('has o', mySet1.has(o))       // true
 
 console.log('Size', mySet1.size);         // 5
 
 mySet1.delete(5)    // removes 5 from the set
 mySet1.has(5)       // false, 5 has been removed
 
 console.log('Size After delete 5 ', mySet1.size);         // 4, since we just removed one value
 
 console.log(mySet1)
 // logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
 // logs Set(4) { 1, "some text", {…}, {…} } in Chrome

 /**
  * Weak Set
  */

 console.log('-------- Weak Set -----------')

  const ws = new WeakSet();
  const foo = {};
  const bar = {};
  
  ws.add(foo);
  ws.add(bar);
  
  console.log(ws.has(foo));    // true
  console.log(ws.has(bar));    // true
  
  ws.delete(foo); // removes foo from the set
  console.log(ws.has(foo));    // false, foo has been removed
  console.log(ws.has(bar));    // true, bar is retained