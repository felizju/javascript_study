
var week = ['월', '화', '수', '목', '금', '토', '일'];

// for - of 문
// for(변수 of 배열){ 실행문 }
// 가독성 좋고 편하지만, 인덱스 제어 불가능함
for(var day of week){
    console.log(day + '요일');
}

/*
for(var i = 0; i < week.length; i++){
    console.log(week[i] + '요일');
}
*/

for(var i = 0; i < week.length; i++){
    if(i % 2 === 0){
        console.log(week[i] + '요일');
    }
}