// 5-3_SH, js

var outer = function() { // outer 함수 정의
  var a = 1; // 지역 변수 a를 1로 초기화
  var inner = function() { // inner 함수 정의
    return ++a; // a를 증가시킨 후 반환
  };
  return inner; // inner 함수 자체 반환
};
var outer2 = outer(); // outer 호출, inner 함수를 outer2에 저장
console.log(outer2()); // outer2 호출, a 증가 후 2 출력
console.log(outer2()); // outer2 다시 호출, a 증가 후 3 출력