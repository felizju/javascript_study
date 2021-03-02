
// begin부터 end까지의 총합을 구해주는 함수
function calcRangeTotal(begin, end){
    var total = 0;
    for(var n  = begin; n <= end; n++){
        total += n;
    }
    return total;
}


function sayHello(language='한국어'){

    // ~ ES5 단축평가
    // language = language || '한국어';

    if(language === '한국어'){
        console.log('안녕하세요');
    }else if(language === '영어'){
        console.log('Hello~~');
    }else if(language === '일본어'){
        console.log('콘니치와');
    }
}

function selectRandomFood(){
    var rn = Math.random();
    return rn > 0.5 ? '짜장면' : '짬뽕';
}
console.log(`랜덤음식 : ${selectRandomFood()}`);


function multiply(n1, n2){
    // 타입 체크하기
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        console.log('숫자를 전달하세요!');
        return;
    }
    return n1 * n2;
}

var res = multiply('안녕', 20);
console.log(`res : ${res}`);



// 함수 호출
    // begin, end
    // 인자값 1개만 주면 -> begin : 5, end : undefined
    // 인자값 더 많이 주면 -> 무시됨
var result = calcRangeTotal(5);
console.log(`함수 실행 결과 값 : ${result}`);


var result2 = sayHello();
console.log(result2);

