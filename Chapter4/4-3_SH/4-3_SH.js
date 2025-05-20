// 4-3_SH, js

var newArr = [10, 20, 30].map(function(currentValue, index) { // 배열 [10, 20, 30]에 map 메서드 적용, 각 요소에 대해 함수 실행
  console.log(currentValue, index); // 현재 요소 값과 인덱스 출력
  return currentValue + 5; // 현재 요소에 5를 더한 값을 반환
});
console.log(newArr); // map 결과로 생성된 새 배열 출력