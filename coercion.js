// string coercion

// + operatorn

/* number + number = number
   number + string = string
   string+ string = string 
    */

// - operator

/* 
     number - string = number
 */

var a = 3;
var b = "3";
var c = a + b
console.log(c)   // 33
console.log(typeof ((c)))   // string

var x = 7;
var y = "hello";
var z = x + y;
console.log(z)         // 7hello
console.log(typeof (z))   // string

// - Operator

var c = 6;
var d = "4";
var e = c - d;
console.log(e);          // 2
console.log(typeof(e))   // number
