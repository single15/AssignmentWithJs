// Proxy 
// The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.


var object = {
    firstName: 'John',
    lastName: 'Doe'
};

var handler = {
    get(target, prop) {
        if(prop === 'fullname') {
            return `${target.firstName}, ${target.lastName}`;
        }
        return target[prop];
    }
}

var proxyObj = new Proxy(object, handler);

console.log(proxyObj.firstName);
console.log(proxyObj.fullname);