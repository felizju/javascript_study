
for(var i = 0; i < 10; i++){
    if(i === 5){
        break;      
        // if 조건이 true가 되고 break되면 for문 괄호까지 모두 박살 
    }
    console.log(i);
}
console.log("반복문 종료!");
console.log("==============");


for(var i = 0; i < 3; i++){
    for(var j = 0; j < 2; j++){
        if(i === j) break;
        console.log(`${i}, ${j}`);
    }
}

console.log("==============");

for(var i = 0; i < 3; i++){
    for(var j = 0; j < 2; j++){
        if(i === j) break;
        console.log(`${i}, ${j}`);
    }
    if(i===1) break;
}