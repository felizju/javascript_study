
var x = 'global';

function foo(y){
    var x = 'local';
    console.log(`x : ${x}`);
}

foo('parameter');
console.log(`x : ${x}`);
console.log(`y : ${y}`);