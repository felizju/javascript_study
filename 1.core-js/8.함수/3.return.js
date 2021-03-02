

function add(n1, n2){
    // return : 결과값 반드시 가지고 올 때
    return n1 + n2;
}


// void 함수 : 리턴값이 없는 함수
// void 함수는 단독 호출해서 사용할 뿐, 다른 함수의 인자로 전달할 수 없음
function sub(n1, n2){
    // 결과값 없이 출력만 보여줄 때
   console.log(`${n1} - ${n2} = ${n1-n2}`);
}


function greeting(nickname){
    badNick = ['쓰레기', '바보', '양아치'];
    if(badNick.includes(nickname)){
        console.log('나쁜말 금지!');
        return; // break 역할로 아래 로그 찍히지 않게 함
    }
    console.log(`${nickname}님 안녕하세요!`);
}


function testFunc(){
    while(true){
        if(true){
            // break;
            return;
        }
    }
    var a = 10; // return 이면 이 코드 실행 안함, break 이면 이 코드 실행 함
}


function operationAll(n1, n2){
    return {
        plus : add(n1 + n2),
        minus : n1 - n2,
        multi : n1 * n2,
        divide : n1 / n2
    }
    // return은 무조건 하나만, 여러개 사용하고 싶다면 배열 혹은 객체로 사용
    return n1+n2;
    return n1-n2; 

}

var results = operationAll(10,2);
console.log(operationAll.plus);
console.log(operationAll.minus);
console.log(operationAll.multi);
console.log(operationAll.divide);


greeting('바보');
console.log("============================");


var res1 = add(add(5,5), add(add(10,10), add(50,5))); // 안쪽부터 실행
console.log(`res1 : ${res1}`);

sub(add(add(5,5), add(add(10,10), add(50,5))), 10);

console.log("============================");

var res = sub(30,17);
console.log(res); // 값을 받아온 것이 아님 : return으로 받지 않았기 때문

var result = add(5,3);
var result2 = add(result,result*2);
console.log(result2);