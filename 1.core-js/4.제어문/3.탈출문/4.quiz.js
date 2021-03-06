/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 프로그램 실행 시 0~100사이의 무작위 두 수의 합을 
   물어보는 문제가 지속적으로 출제되게 하세요.
2. 올바른 답을 입력할 시 “정답입니다”를 
   틀린 답을 입력할 시 “오답입니다”를 출력하세요.
3. 사용자가 0을 입력하면 문제 출제를 중단하고 
   누적된 정답 횟수와 오답횟수를 출력하세요.
*/

// 정답 횟수 오답 횟수 저장변수
var cnt1 = 0, cnt2 = 0;


while(true){
    var rn1 = Math.floor(Math.random() * 20) + 1;
    var rn2 = Math.floor(Math.random() * 20) + 1;
    
    // 1234의 랜덤 정수 생성
    var oprn = Math.floor(Math.random() * 4) + 1;
    
    if(oprn === 1){
        oprn = '+';
    }else if(oprn === 2){
        oprn = '-';
    }else if(oprn === 3){
        oprn = '*';
    }else{
        oprn = '/';
    }
    
    // 사용자 답
    var userAnswer = +prompt(`${rn1} ${oprn} ${rn2} = ??`);

    // 탈출 조건 (0입력 시)
    if(userAnswer === 0){
        break;
    }
    
    // 실제 답
    var realAnswer;
    if(oprn === '+'){
        realAnswer =  rn1 + rn2;
    }else if(oprn === '-'){
        realAnswer = rn1 - rn2;
    }else if(oprn === '*'){
        realAnswer = rn1 * rn2;
    }else{
        realAnswer = rn1 / rn2;
    }

    if(userAnswer === realAnswer){
        alert(`정답입니다.`);
        cnt1++;
    }
    
    else{
        alert(`오답입니다.`);
        cnt2++;
    }
}
alert(`프로그램이 종료되었습니다.
#정답 횟수 : ${cnt1} , 오답횟수 : ${cnt2}`);