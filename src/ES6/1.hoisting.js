// Var and function are hoisted on the top of the file

call();

function call() {
    console.log(myname);
    var myname = "swapnil";
};

//expected output: undefined

// --------------------------------------------------------------
// Let are not hoisted so callLet() will give an ReferenceError

callLet();

function callLet() {
    console.log(myname);
    let myname = "swapnil";
};


// Expected Output: ReferenceError: myname is not defined