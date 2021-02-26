
// 상수의 이름은 관례적으로 대문자로만 지정
const EARTH_RADIUS = 40201.12;

// x = 100;
    // TypeError: Assignment to constant variable.
    // 상수의 값 변경할 수 없다

var y;
console.log(y);

let z;
console.log(z);


// const와 객체(객체, 배열, 함수)
const person = {
    name : 'park',
    age : 20
};

person.name = 'kim';
console.log(person);
    // 내부인 프로퍼티는 변경 가능하지만 객체 자체를 바꿀 수는 없다
