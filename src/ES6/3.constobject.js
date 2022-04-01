/**
 * Const Object
 * Can change value of const object property but can not reassign the object.
 */


const object = {
    fname: 'John',
    lname: 'Doe',
    age: 24,
    address: '45 Avenu, street'
}

object.fname = 'Jerry';

object['lname'] = 'Mouse';


console.log(object);


object = {}; //TypeError: Assignment to constant variable.


