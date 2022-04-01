/**
 * Spread Operator
 */

 const odd = [1,3,5];
 const combined = [2,4,6, ...odd];
 console.log(combined);
 

 var obj1 = {
     fname: 'John',
     lname: 'Doe'
 }

 var obj2 = {
     age: 20,
     address: '45 Avenu street'
 }

 var obj3 = {...obj1, ...obj2 };

 console.log(obj3);