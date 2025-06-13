// 6-8_SH, js

var arr = [1, 2]; // arr는 [1, 2] 배열 생성
Array.prototype.toString.call(arr); // "1,2" 반환
Object.prototype.toString.call(arr); // "[object Array]" 반환 
arr.toString(); // "1,2" 반환 
arr.toString = function() {
  return this.join('_'); // 배열 요소를 '_'로 연결
};
arr.toString(); // "1_2" 반환