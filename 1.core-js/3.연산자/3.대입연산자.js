
var x = 10;
console.log(`x : ${x}`);

x += 5; // x = x + 5
console.log(`x : ${x}`); // 15

x -= 3; // x = x - 3
console.log(`x : ${x}`); // 12

x *= 2; // x = x * 2
console.log(`x : ${x}`); // 24

x /= 4; // x = x / 4;
console.log(`x : ${x}`);

x %= 4; // x = x % 4;
console.log(`x : ${x}`);

x **= 3; // x = x**3;
// x ** 3 --> x는 2이다. 아직 대입 안 했기때문
console.log(`x : ${x}`);


console.log("=============================");


var a = 5;
a =+ 10; // 거꾸로 쓰면 + 양수 기호를 대입하는 것으로 인식함
console.log(`a : ${a}`);

a += 1;
a++;