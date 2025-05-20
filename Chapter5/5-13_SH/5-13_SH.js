// 5-13_SH, js

var add = function() { // 가변 인자를 받아 합을 계산하는 함수 정의
  var result = 0; // 결과값 초기화
  for (var i = 0; i < arguments.length; i++) { // 모든 인자 순회
    result += arguments[i]; // 인자를 result에 더함
  }
  return result; // 최종 합 반환
};
var addPartial = add.bind(null, 1, 2, 3, 4, 5); // add 함수를 1,2,3,4,5로 부분 적용, this는 null
console.log(addPartial(6, 7, 8, 9, 10)); // addPartial 호출, 1+2+3+4+5+6+7+8+9+10=55 출력