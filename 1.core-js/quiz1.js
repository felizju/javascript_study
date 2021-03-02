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

let random = Math.floor(Math.random() * 101) + 1;
let count = 0;

while (true) {
   let userAnswer = +prompt("숫자를 입력하세요. [1 ~ 100]");
   if (random !== userAnswer && random > userAnswer) {
      alert(`틀렸습니다. Up!`);
      count++;
   }else if(random !== userAnswer && random < userAnswer){
      alert(`틀렸습니다. Down!`);
      count++;
   }
    else if (random === userAnswer) {
      alert(`정답입니다. ${count}번만에 정답`);
      break;
   }
}