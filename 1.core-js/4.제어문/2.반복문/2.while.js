
// 1 ~ 10까지 총합을 구하는 로직
var n = 1; // 제어변수 (begin)
var sum = 0; // 반복실행문

while(n <= 10){ // (end)
    sum += n; // 반복실행문
    n++; // 제어변수의 증감식 (step) 예:n+=2 2씩 증가
}
console.log(`총합 : ${sum}`);
console.log("=================================");



// 7~100사이의 정수 중 7의 배수를 모두 출력하기
var num = 7;

while(num <= 100){
    console.log(num);
    num += 7; // num = num + 7
}
console.log("=================================");



// 1 ~ 78사이의 정수 중 13의 배수 모두 출력하기
num = 1;

while(num <= 78){
    if(num % 13 === 0){
        console.log(num);
    }
    num++;
}
console.log("=================================");



// 1 ~ 100 사이의 정수 중 6의 배수이면서 12의 배수가 아닌 수 출력하기
num = 1;

while(num <= 100){
    if(num % 6 === 0 && num % 12 !== 0){
        console.log(num);
    }
    num++;
}

console.log("=================================");

// 1 ~ 4000 사이의 정수 중 9의 배수의 개수를 출력하기
var count = 0;
num = 1;

while(num <= 4000){
    if(num % 9 === 0){
        count++;
    }
    num++;
}
console.log(`count : ${count}`);


