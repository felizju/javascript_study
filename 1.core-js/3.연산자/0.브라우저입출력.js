
// 브라우저에서만 지원하는 함수 (입력창)
    // prompt는 String타입, 형변환을 위해 '+' 기호 붙인다.
var number1 = +prompt("첫번째 숫자를 입력하세요!");
var number2 = +prompt("두번째 숫자를 입력하세요!");

// alert : 브라우저에서 알림창 띄운다. (알림창)
alert(`입력한 숫자 합: ${number1 + number2}`);
