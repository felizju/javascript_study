/* 
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고 
  약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
   나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/

var divCount = calcDivisor(24);
console.log(`약수의 개수: ${divCount}개`);


// 방법1
function calcDivisor(num){
    // 약수 넣을 배열
    var divisor = [];
    
    for(var n = 1; n <= num; n++){
        if((num % n) === 0){
            divisor.push(n);
        }
    }
    
    console.log(`${num}의 약수 : [${divisor}]`);
    return divisor.length;
}



// 방법 2
/*
var divCount = calcDivisor(24);
console.log(`약수의 개수: ${divCount}개`);

function calcDivisor(num){
    
    var divCount = 0;
    var results = [];
    for(var n = 1; n <= num; n++){
        if(num %  n === 0){
            divCount++;
            results += n +' ';
        }
    }
    console.log(results);
    return divCount;
}
*/