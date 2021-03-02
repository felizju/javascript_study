/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
       반환하는 함수 calcNumbersTotalAndAverage를 정의하세요.
*/

//360과 90이 리턴되어야 함!
    // 화살표 함수
    /*
var calcNumbersTotalAndAverage (...number) => {
    var total = 0;
    for(var num of numbers){
        total += num;
    }
        var avg = total / numbers.length;
        return{ total, avg };
}
    */

    // 기본형 함수
function calcNumbersTotalAndAverage(...numbers){
    var total = 0;
    for(var num of numbers){
        total += num;
    }
        var avg = total / numbers.length;
    // return {
    //     total:total,
    //     avg:avg
    // }

    // ES6
        // 객체 키:값 이름 같으면 생략가능
    return{ total, avg };
}

var result = calcNumbersTotalAndAverage(100, 100, 80, 85);
console.log(`총합 : ${result.total} , 평균 : ${result.avg}`);









