
var foods = ['떡볶이', '오뎅', '김말이', '닭꼬치'];

// indexOf() : 배열 요소의 인덱스를 알려줌
    // 탐색 실패 시 -1 반환
var index = foods.indexOf('순대');
console.log(`찾은 인덱스 번호 : ${index}`);

// includes() : 배열 요소의 존재 여부 확인
var includes = foods.includes('닭꼬치');
console.log(`includes 탐색 결과 : ${includes}`);

//slice() : 배열을 잘라냄 (부분 추출 시 사용)
    // 시작 값 , 종료 값 (종료 값은 포함되지 않음)
    // 원본은 변하지 않는다. 복사 추출임
var arr = [0,1,2,3,4,5,6,7,8,9];
var slicedArr = arr.slice(3, 8);
console.log(slicedArr);
console.log(foods);
console.log(foods.slice(1,3));
console.log(arr.slice(6));  // 6번부터 끝까지 잘라냄

// reverse() : 배열 역순으로 재배치
    // 원본 변화시킴
var copyArr = arr.slice(0); // 원본 복사
copyArr.reverse();

console.log(copyArr);

// join() : 배열의 요소들을 연결한 문자열로 변환
    // 구분자 작성하지 않으면 기본 , 콤마로 들어감
var foodStr = foods.join("+++");
console.log(foodStr);


// concat() : 배열을 결함
    // 원본은 변하지 않는다. 복사 추출임
    var arr1 = [10, 20, 30];
var arr2 = [500, 600, 700];

var concatedArr = arr1.concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(concatedArr); // 두개 합쳐서 새로운 배열 만든다
