
/*
function showNumbers(n){
    for(var i = 0; i <= n; i++){
        console.log(i);
    }
}

function showEvenNumbers(n){
    for(var i = 0; i <= n; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

function showOddNumbers(n){
    for(var i = 0; i <= n; i++){
        if(i % 2 === 1){
            console.log(i);
        }
    }
}
*/

//콜백 함수
function showNumbers(n, func) {
    for (var i = 1; i <= n; i++) {
        func(i);
    }
}

showNumbers(10, function(i) {
    if (i % 3 === 0) {
        console.log(i);
    }
});

showNumbers(30, n => {
    if (n % 5 === 0) {
        console.log(n + ' Hello!');
    }
});
console.log("=========================");




var numbers = [1,2,3,4,5,6,7,8,9,10];

// var filtered = numbers.filter(n => n % 2 === 1);
// === 위에 코드 구현
function filter(arr, condition){
    var filtered = [];
    for(var n of arr){
        if(condition(n)){
            filtered.push(n);
        }
    }
    return filtered;
}

var filtered = filter(numbers, n => n % 3 === 0);
console.log(filtered);

// var mapped = numbers.map(n => n ** 2);

/*
var mapped = [];
for (var n of numbers) {
    mapped.push(n ** 2);
}
*/

// console.log(filtered);
// console.log(mapped);


