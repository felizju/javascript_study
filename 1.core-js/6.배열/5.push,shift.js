
var foods = ['볶음밥', '닭강정', '피자'];

console.log(foods);

var lastElement = foods.pop(); // 맨 뒷쪽 요소 제거
console.log(foods);
console.log(lastElement);

foods.push('파스타');
foods.push('족발');
console.log(foods);

var firstElem = foods.shift(); // 맨 앞쪽 요소 제거
console.log(foods);
console.log(firstElem);

foods.unshift('떡볶이');
console.log(foods);

