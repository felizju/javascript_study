
// countinue == skip

for(var i = 1; i < 11; i++){
    if(i % 2 === 0){
        continue;
        // continue : if조건문이 true인 값 skip
        // break;
        // break : 2일때 break 만나서 1만 찍힘
    }
    console.log(i);
}
while(true){
    var n = +prompt("정수를 입력하세요."); // 정수 입력하면 메롱메롱
    
    if(n === 0) break;  // break 일 경우 아예 종료, 메롱메롱도 x
    else if(n === 1) continue;  //  countinue --> 반복
    
    alert('메롱메롱')
}