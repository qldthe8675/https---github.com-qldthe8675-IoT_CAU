// 5-2_SH, js

var outer = function() { // outer 함수 정의
  var a = 1; // 지역 변수 a를 1로 초기화
  var inner = function() { // inner 함수 정의
    return ++a; // a를 증가시킨 후 반환
  };
  return inner(); // inner 함수 호출 결과 반환
};
var outer2 = outer(); // outer 함수 호출 결과를 outer2에 저장
console.log(outer2); // outer2 값 출력 (2)