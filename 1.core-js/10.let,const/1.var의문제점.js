
// var의 문제점
// 1. 중복 선언 허용
var x = 1;
var x = 100;
console.log(x);

// 2. 블록레벨 스코프를 지원하지 않음
var i = 1;

for(var i = 0; i < 10; i++){}

console.log(`i : ${i}`);

// 3. 변수 호이스팅 : 선언을 아래에 해도 알아서 위로 올려줌
    // y선언 하지 않고 초기화만 해도 인식해줌
y = 100;
console.log(`y : ${y}`);

var y;