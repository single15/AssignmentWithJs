/**
 * Promises
 */

// Use case for why promises needed. 
// consider a function getUsers() {}

function getUsers() {
    let users = [];
    setTimeout(() => {
        users = [
            { name: 'John', email: 'john@test.com' },
            { name: 'Henry', email: 'henry@test.com' }
        ]
    }, 1000)
    return users;
}

function findUser(name) {
    const users = getUsers();
    const user = users.find(user => user.name === name);
    return user;
}

console.log(findUser('John')); // undefined

/**
 * findUser() will return undefined even John is in users list. 
 * due to setTimeout getUsers() function becomes asynchronus and that is why before getting list 
 * next statement in findUser() function get invoke and result in undefined return.
 * We can solve this issue using Callback function but however, it makes the code more difficult to follow. 
 */

/**
 * Solving above scenario with Promises
 * Promises have 3 states:
 * 1. Pending
 * 2. Fullfilled with a value
 * 3. Rejected for a reason
 */
let success = true;
function getUsersUsingPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success) {
                resolve([
                    { name: 'John', email: 'john@test.com' },
                    { name: 'Henry', email: 'henry@test.com' }
                ]);
            } else {
                reject('Failed to load user list.')
            }
            
        }, 1000)
    })
};


function onFulfilled(users) {
    console.log(users);
}
function onRejected(error) {
    console.log(error);
}

const promise = getUsersUsingPromise();
promise
.then(onFulfilled, onRejected);


success = false;

const promise2 = getUsersUsingPromise();
promise2
.catch((error) => {
    console.log(error);
});


/**
 * Promise Chaining
 */

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
        console.log(result); // 10
        return result * 2;
    }).then((result) => {
        console.log(result); // 20
        return result * 3;
    }).then((result) => {
        console.log(result); // 60
        return result * 4;
});



