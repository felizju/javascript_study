/*
# 4의 배수 :  n % 4 === 0
- Quiz. 아래 요구사항에 맞는 코드를 작성하고 
        브라우저에서 실행하여 테스트하세요.
- 요구사항 
1. 사용자는 정수를 입력할 수 있어야 함.
2. 프로그램은 정수를 입력하고 엔터를 누르면 조건에 따라 다른 결과를 출력해야 함.
3. 입력한 정수가 7의 배수라면 “입력하신 숫자는 7의 배수입니다.”를 출력할 것.
4. 입력한 정수가 7의 배수가 아니라면 “입력하신 숫자는 7의 배수가 아닙니다.”를 출력할 것.
5. 입력한 정수가 0이라면 “입력한 숫자는 0입니다.”를 출력할 것.
<힌트> 다중 분기 조건문의 순서에 주의할 것!
*/

var int = +prompt("정수를 입력하세요.");


if(int === 0){
    alert("입력하신 숫자는 0입니다.");
}else if(int % 7 === 0){
    alert("입력하신 숫자는 7의 배수입니다.");
}else{
    alert("입력하신 숫자는 7의 배수가 아닙니다.");
}

/*
if(int % 7 === 0 && int !== 0){
    alert("입력하신 숫자는 7의 배수입니다.");
}else if(int === 0){
    alert("입력하신 숫자는 0입니다.");
}else{
    alert("입력하신 숫자는 7의 배수가 아닙니다.");
}
*/