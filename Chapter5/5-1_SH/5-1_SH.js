// 5-1_SH, js

var outer = function() { // outer 함수 정의
  var a = 1; // 지역 변수 a를 1로 초기화
  var inner = function() { // inner 함수 정의
    console.log(++a); // a를 증가시킨 후 출력
  };
  inner(); // inner 함수 호출
};
outer(); // outer 함수 호출