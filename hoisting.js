
// Hoisting Variable

// 1.
a = 9;
console.log(a)   // output : 9
var a;

// 2. 
// x=3
// console.log(x);   // output : reference error.
// let x;

// 3.
var y;
console.log(y);   // output :undefined
y=6

// Hoisting Function

// 1.
// hoistingFunction()

function hoistingFunction(){
    console.log("Hello World");      // output : Hello World
}

// 2. 
function doSomething(){
    x=3;
    console.log(x);
    var x                      // output : 3
}
doSomething()


// Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

"use strict";
 x=7;
 let x