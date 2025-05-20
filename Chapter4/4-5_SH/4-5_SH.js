// 4-5_SH, js

Array.prototype.map = function(callback, thisArg) { // Array.prototype.map에 새로운 함수 정의, callback과 선택적 thisArg 인자 받음
  var mappedArr = []; // 결과를 저장할 빈 배열 생성
  for (var i = 0; i < this.length; i++) { // 배열의 각 요소를 순회
    var mappedValue = callback.call(thisArg || window, this[i], i, this); // callback을 호출해 현재 요소, 인덱스, 배열을 인자로 전달하고 thisArg로 this 설정
    mappedArr[i] = mappedValue; // 반환된 값을 새 배열에 저장
  }
  return mappedArr; // 변환된 배열 반환
};