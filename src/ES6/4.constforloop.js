/**
 * Const in for loop
 * const can be unsed in for loop  
 */


 var object = {
    fname: 'John',
    lname: 'Doe',
    age: 24,
    address: '45 Avenu, street'
}


for(const key in object) {
    console.log(key);
}

console.log('----------------------------');


let arr = [0, 1, 2, 3, 4];

// TypeError: Assignment to constant variable.
for(const i = 0; i < 6; i++) {
    console.log(i);
}

