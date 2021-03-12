
// splice() : 배열의 특정 요소 제거
    // 인덱스번호 , 삭제할 요소 갯수
var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

console.log(foods);

var delFoods = foods.splice(1,2);
console.log(foods);
console.log(delFoods);  // 삭제한 요소들 다시 활용 가능

foods.splice(0, 1, '치킨', '파스타'); // 떡볶이 삭제 후 그 위치에 치킨, 파스타 추가
console.log(foods);

// 2번 인덱스 위치에 피자 삽입
foods.splice(2, 0, '피자'); // 중간 삽입으로 활용할 수도 있음
console.log(foods);

// 2번 인덱스부터 끝까지 삭제
foods.splice(2);
console.log(foods);

foods.push('보쌈', '닭발');
console.log(foods);

// 사용자의 삭제 요구 데이터
var input = '치킨';

if(foods.includes(input)){
    var delFood = foods.splice(foods.indexOf(input),1);
    console.log(`${input} 삭제완료`);
}else{
    console.log('메뉴없음');
}