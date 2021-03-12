
// 함수 정의
// 함수 이름은 동사적 기능이 내포될 수 있게 지어주세요.

function calculateTotal(x){
    console.log("함수 call!");
    
    var total = 0;
    for(var n = 1; n <= x; n++){
        total += n;
    }
    return total;
}

// 기본
function add1(n1, n2){
    return n1+n2;
}

// 함수 리터럴
var add2 = function(n1,n2){
    return n1+n2;
};

// 화살표 함수 (ES6)
var add3 = (n1, n2) => n1+n2;

console.log(add1(10, 20));
console.log(add2(10, 20));
console.log(add3(10, 20));


// 함수의 호출()
var result = calculateTotal(10);
console.log(result);

var result2 = calculateTotal(50);
console.log(result2);

var result3 = calculateTotal(100);
console.log(result3);


// 함수를 변수에 할당가능
var ct = calculateTotal;    // calculateTotal -> ct로 변경

var result4 = ct(200);
console.log(result4);