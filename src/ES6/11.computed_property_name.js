/**
 * Computed Property Name
 */

let name = 'machine name';
let machine = {
[name]: 'server',
'machine hours': 10000
};

console.log(machine[name]); // server
console.log(machine['machine name']); // server
console.log(machine['machine hours']); // 10000


console.log('----------------------------------------');

let prefix = 'machine';
machine = {
 [prefix + ' name']: 'server',
 [prefix + ' hours']: 10000
};

console.log(machine['machine name']); // server
console.log(machine['machine hours']); // 10000