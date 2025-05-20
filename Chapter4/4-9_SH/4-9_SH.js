// 4-9_SH, js

var obj1 = {
  name: 'obj1', // 객체 속성 name을 'obj1'로 설정
  func: function() { // func 메서드 정의
    console.log(obj1.name); // obj1의 name 속성('obj1') 출력
  },
};
setTimeout(obj1.func, 1000); // 1초 후 obj1.func 함수 실행