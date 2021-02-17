
// 단항,이항,삼항연산자
console.log(27 % 5);
console.log(4 % 10);

var num = 3;
console.log(num**3); // ES7문법
console.log(Math.pow(num, 3)); // ES7문법 이전

console.log(Math.pow(Math.pow(num, 3),4)); // 중첩이 심해져서 업그레이드

// 단항 산술 연산자 ++, --
console.log("==============================");

var x = 3;
x++;
x++;
x--;
console.log(`x : ${x}`);

// 전위 연산(prefix), 후위 연산(postfix)
console.log("==============================");

var a =10, result;
// 후위연산 : 선 할당 후 연산
result = a++;
console.log(`result : ${result}, a : ${a}`); // 10 11

 // 전위연산 : 선 연산 후 할당
result = ++a;
console.log(`result : ${result}, a : ${a}`); // 12 12

result = a--; 
console.log(`result : ${result}, a : ${a}`); // 12 11

result = --a; 
console.log(`result : ${result}, a : ${a}`); // 10 10

