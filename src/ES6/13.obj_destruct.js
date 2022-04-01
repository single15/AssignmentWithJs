/**
 * With Spread Operator
 */

var object = {
    fname: 'John',
    lname: 'Doe',
    age: 40,
    occupation: 'Teacher',
    address: {
        city: 'Pune',
        state: 'MH',
        zipCode: '444001'
    }
}


const {fname, lname, age} = object;
const {city, state} = object.address;

console.log(fname);
console.log(lname);
console.log(age);
console.log(city);
console.log(state);

/**
 * With for ... of
 */
console.log('------- WITH FOR ... OF ------------')

 const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
    ];

let sum = 0;

for (const {score} of ratings) {
sum += score;
}

console.log(`Total scores: ${sum}`);