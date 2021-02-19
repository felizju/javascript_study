
// 0 ~ 5까지의 랜덤정수
while(true){
    var rn = Math.floor(Math.random() * 6);
    console.log(`랜덤 값 : ${rn}`);

    if(rn === 3){
        console.log("반복문 종료");
        break;
    }
}

