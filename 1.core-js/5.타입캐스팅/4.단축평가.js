
// OR 연산 - false:0, true:1
console.log('hello' || 'world');
console.log(0 || '안녕');
console.log('잘가' || 123);

// AND 연산 - false:0, true:1
console.log('hello' && 'world');
console.log(0 && '안녕');
console.log('잘가' && 123);

console.log("==============================");

// 응용 예시
var x = 10;
/*
if(x > 0){
    console.log('x는 0보다 큼');
}
*/
x > 0  &&  console.log('x는 0보다 큼');