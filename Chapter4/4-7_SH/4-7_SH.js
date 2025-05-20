// 4-7_SH, js

var obj = {
  vals: [1, 2, 3], // 배열 [1, 2, 3]을 속성으로 가짐
  logValues: function(v, i) { // v와 i를 인자로 받아 this, v, i를 출력함
    console.log(this, v, i);
  },
};
obj.logValues(1, 2); // obj의 logValues 메서드 호출, this는 obj, v는 1, i는 2
[4, 5, 6].forEach(obj.logValues); // 배열 [4, 5, 6]의 각 요소에 obj.logValues 적용