

var integer = 100;
var float = 3.14;

// typeof 연산자 : 데이터의 타입을 문자열로 알려줌
console.log(typeof integer);
console.log(typeof float);

// 값 앞에 ob를 붙이면 2진수로 인식 binary
var bin = 0b01000010; 
console.log(bin); 

// 값 앞에 0o를 붙이면 8진수로 인식
var oct = 0o102;
console.log(oct);

// 값 앞에 0x를 붙이면 16진수로 인식
var hex = 0xAC00;
console.log(hex);

// 자바스크립트에서는 숫자타입을 모두 실수로 처리함 (자바에서 정수/정수는 2로 인식)
console.log(10/4);

console.log(30/"메롱");

var notaNum = NaN;
