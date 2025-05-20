// 4-4_SH, js

var newArr2 = [10, 20, 30].map(function(index, currentValue) { // 배열 [10, 20, 30]에 map 메서드 적용
  console.log(index, currentValue); // index는 요소 값, currentValue는 인덱스 출력 (순서 반대)
  return currentValue + 5; // 인덱스(currentValue)에 5를 더한 값 반환
});
console.log(newArr2); // map 결과로 생성된 새 배열 출력