

var x = 'global x'; // 전역변수 : 최소화시켜야 함

function outer(x){ // outer local x 가 지역변수로 온다
    var y = 'outer local y';
    console.log(x);
    console.log(y);

    function inner() {
        var x = 'inner local x';
        var z = 'inner local z';
        console.log(x);
        console.log(y);
        console.log(z);
    }

    inner();
}

outer('outer local x');
console.log(x);