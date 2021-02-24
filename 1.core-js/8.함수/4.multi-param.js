

// 2개의 정수의 합을 구하는 함수
function add(n1, n2){
    return n1+n2;
}
// 3개의 정수의 합을 구하는 함수
function addFor3(n1, n2, n3){
    return n1+n2+n3;
}

// n개의 정수의 합을 구하는 함수
    // 멀티 파라미터 (파라미터를 배열로)
    // spread : ES6 배열문법
    // (배열 앞에 ...을 붙이면 호출 시 인자 값에 '[]' 제외해도 됨)
function addAll(name, ...numbers){
    console.log(`${name}님 안녕~~`);
    var total = 0;
    for(var num of numbers){
        total += num;
    }
    return total;
}

var res = addAll('고길동',10,10,10,50);
console.log(res);