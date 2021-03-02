
/*
for (var floor = 2; floor <= 9; floor++){
    for(var line = 1; line <= 9; line++){
        console.log(`${floor} * ${line} = ${floor*line}`);
    }
    console.log("======================================");
}
*/

var num = 1;

for(var i = 0; i < 5; i++){     // 5번 반복
    for(var j = 0; j < 3; j++){     // 5번 반복안에 * 3번 반복 = 15번
        for(var k =0; k < 2; k++){         // 5번 반복안에 * 3번 반복에 * 2번 반복 = 15번 * 2번 = 30번
            console.log("num : " + num);
            num++;
        }
    }
}