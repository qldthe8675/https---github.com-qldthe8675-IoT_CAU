// 6-3_SH, js

var arr = [1, 2]; // [1, 2]로 초기화된 배열 생성
Array.prototype.constructor === Array; // Array.prototype의 constructor는 Array 생성자 함수
arr.__proto__.constructor === Array; // arr의 프로토타입 객체의 constructor는 Array
arr.constructor === Array; // arr의 constructor 속성은 Array
var arr2 = new arr.constructor(3, 4); // new Array(3, 4)로 [3, 4] 배열 생성
console.log(arr2); // [3, 4] 출력