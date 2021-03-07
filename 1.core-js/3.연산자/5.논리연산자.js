
var t = true, f = false;

// AND 연산 : 양쪽 항이 모두 true 일 때만 true
console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

// OR 연산 : 한쪽 항이라도 true면 true
console.log("====================");
console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

// NOT 연산
console.log("====================");
console.log(!t);
console.log(!f);

/*
if(!foodMenu.contains("짜장면")){
    orderFood();
}
*/

console.log(4%2);