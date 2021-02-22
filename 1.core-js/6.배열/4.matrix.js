

// 2차원 배열
// 우리반 학생들 4과목(국영수사) 점수 관리
// var kim = [67, 89, 92, 32];
// var park = [55, 72, 66, 22];

var ourStudentScores = [
    [67, 87, 85, 100],
    [45, 41, 52, 99],
    [100, 52, 75, 100],
    [87, 98, 100, 77],
    [100, 100, 100, 100]
];

console.log(ourStudentScores.length);
console.log(ourStudentScores[2]);        // 세번째 줄
console.log(ourStudentScores[0][2]);    // 인덱스 번호대로 찾기

console.log("====================================");

// 학생 번호 count
var studentNumber = 1;
// 우리반 평균 총합 저장할 변수
var ourAverages = 0;
// 국어 점수의 총합 저장할 변수
var korSum = 0;
// 영어 점수의 총합 저장할 변수
var engSum = 0;
// 수학 점수의 총합 저장할 변수
var matSum = 0;
// 사회 점수의 총합 저장할 변수
var socSum = 0;

// 우리반 평균
    // studentScores : 타입 [] 과목 수
    // ourStudentScores : 타입 [][] 학생 수
for(var studentScores of ourStudentScores){
    var eachTotal = 0; // 한 학생의 4과목 총점을 저장할 변수
    for(var score of studentScores){
        eachTotal += score;
    }
    // 한 학생의 평균점수
    var eachAverage = eachTotal / studentScores.length;

    ourAverages  += eachAverage;
    korSum += studentScores[0]; // 국어 점수 총점
    engSum += studentScores[1]; // 영어 점수 총점
    engSum += studentScores[2]; // 수학 점수 총점
    socSum += studentScores[3]; // 사회 점수 총점

    console.log(`${studentNumber}번 학생 총점 : ${eachTotal}점, 평균 : ${eachAverage}점`);
    studentNumber++;
}
console.log("====================================");
// 국어 평균
var korAverage = korSum / ourStudentScores.length;
console.log(`우리반 국어 평균 : ${korAverage}점`);
// 영어 평균
var engAverage = engSum / ourStudentScores.length;
console.log(`우리반 영어 평균 : ${engAverage}점`);
// 수학 평균
var matAverage = matSum / ourStudentScores.length;
console.log(`우리반 수학 평균 : ${matAverage}점`);
// 사회 평균
var socAverage = socSum / ourStudentScores.length;
console.log(`우리반 사회 평균 : ${socAverage}점`);
// 반 평균
var classAverage = ourAverages / ourStudentScores.length;
console.log("====================================");
console.log(`우리반 총 평균 : ${classAverage}점`);
console.log("====================================");
