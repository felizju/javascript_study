
// countinue == skip

for(var i = 1; i < 11; i++){
    if(i % 2 === 0){
        // continue;
        break;
        // continue : skip만 하고 마지막 i는 출력
        // break : for문 아예 박살, i출력 안함
    }
    console.log(i);
}

while(true){
    var n = +prompt("정수를 입력하세요."); // 정수 입력하면 메롱메롱
    
    if(n === 0) break;  // break 일 경우 아예 종료, 메롱메롱도 x
    else if(n === 1) continue;  //  countinue --> 반복
    
    alert('메롱메롱')
}
