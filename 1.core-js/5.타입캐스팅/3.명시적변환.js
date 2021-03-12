
// 명시적 문자열 변환
var a = 10, b = 20;
    // 첫번째 방법 : String()
var result1 = String(a) + String(b);

    // 두번째 방법 : .toString
var result2 = a.toString + b.toString;

    // 세번째 방법 : + ''
var result3 = a + '' + b;

console.log(`String : ${result1}`);
console.log(`toString : ${result2}`);
console.log(`+ '' : ${result3}`);
console.log("=================================");



// 명시적 숫자 변환
var m = '100' , n = '3.14';
    // 첫번재 방법 : Number()
var res1 = Number(m) + Number(n);
console.log(`Number변환 : ${res1}`);

    // 두번째 방법 : parseInt()
var res2 = parseInt(m) + parseFloat(n);
console.log(`parseInt + parseFloat로 변환 : ${res2}`);

    // 세번째 변환
var res3 = (+m) + (+n);
console.log(`(+)변환 : ${res3}`);
console.log("=================================");



// 명시적 논리 변환
var ex1 = !!'hello';
var ex2 = Boolean(undefined);
console.log(`ex1 : ${ex1} , ex2 : ${ex2}`);