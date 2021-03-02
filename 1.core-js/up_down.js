/*
# UP & DOWN 게임
1. 1~100사이의 정수 난수를 발생시켜 해당 값을 사용자가 맞추게 
   하는 게임입니다.
2. 사용자가 입력한 값이 정답값보다 큰지 작은지 사용자에게 
알려주어 사용자가 지속해서 범위를 좁혀가며 답을 찾을 수 있도록 합니다.
3. 정답을 맞췄을 때 프로그램이 종료되도록 프로그램을 구성해보세요.
4. 사용자가 정답을 맞췄을 때 몇번만에 정답을 맞췄는지 
   출력하는 로직을 추가하세요.
*/



//필요한 데이터: 랜덤숫자, 횟수카운트, 카운트다운, 최소값, 최대값

// 최대범위를 저장할 변수
const MAX = 250;

//게임에 필요한 데이터 객체
const gameDatas = {
   secretNumber: Math.floor(Math.random() * MAX) + 1,
   count: 0,
   countDown: 6,
   min: 1,
   max: MAX
};



//함수 정의부

// 무한루프 종료를 확인해주는 함수
function isGameFinish(){

   return inputNumber();
}


//사용자의 입력을 수행하는 함수
function inputNumber() {
   const {min, max} = gameDatas;
   gameDatas.answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);
   
   gameDatas.count++;
   gameDatas.countDown--;
   

   // return checkNumber();
   const flag = checkNumber(); // true
   return flag;

}


//사용자의 입력값을 검증하는 함수
function checkNumber() {    
   
   //객체 디스트럭쳐링 (ES6): 데이터 참조시에만 사용, 수정, 추가시엔 사용불가
   const {secretNumber, count, answer, countDown} = gameDatas;
   
   // console.log(gameDatas);

   if (secretNumber === answer) {
       alert(`정답입니다!! ${count}번만에 맞추셨군요!!`);
       checkCountDown(countDown);
       return true;
   } else if (secretNumber > answer) {
       alert('UP!!');
       gameDatas.min = answer;
   } else {
       alert('DOWN!!');
       gameDatas.max = answer;
   }
   alertCountDown(countDown);
   return false;
}



function checkCountDown(countDown){
   if(countDown >= 0){
      alert(`YOU WIN!!`);
   }else{
      alert(`YOU LOSE!!`);
   }
}



function alertCountDown(countDown){
   if(countDown > 0){
      alert(`정답 기회 ${countDown}번 남음!`);
   }else{
      alert(`정답 기회 모두 소진! 문제를 계속 풀어주세요!`);
   }
}


//핵심 실행부
(function() {
   alert(`[UP & DOWN 게임 - 1~${MAX}사이의 숫자를 맞춰보세요!]`);


   // while(!isGameFinish()) {}
   while (true) {

      // if (isGameFinish()) break;
      const flag = isGameFinish(); // true
         if(flag === true) break;
   }
} ());