// 1 ~ 10까지 총합을 구하는 로직
var total = 0; // 반복실행문

for(var n = 1; n <= 10; n++){
    total += n; // 반복실행문
}
console.log(`총합 : ${total}`);
console.log("=================================");



// 7~100사이의 정수 중 7의 배수를 모두 출력하기
for(var num = 7; num <=100; num += 7){
    console.log(num);
}
console.log("=================================");


// 1 ~ 78사이의 정수 중 13의 배수 모두 출력하기
for(var num = 1; num <= 78; num++){
    if(num % 13 === 0){
        console.log(num);
    }
}
console.log("=================================");

