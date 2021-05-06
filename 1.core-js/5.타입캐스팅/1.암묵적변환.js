
// +는 문자열로 바꾸고, -/*는 숫자로 바꾼다.

var ex = 10 + '20';
console.log(ex);        // String

ex = 10 * '3';
console.log(ex);        // number

var ex2 = 100 + '';     // String
var ex3 = +'550';       // number

var ex4 = true + '';    // String
var ex5 = +false;       // number
console.log(ex5);