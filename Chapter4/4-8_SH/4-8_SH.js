// 4-8_SH, js

var obj1 = {
  name: 'obj1', // 객체 속성 name을 'obj1'로 설정
  func: function() { // func 메서드 정의
    var self = this; // this(obj1)를 self에 저장하여 클로저에서 사용
    return function() { // 내부 함수 반환
      console.log(self.name); // self의 name 속성('obj1') 출력
    };
  },
};
var callback = obj1.func(); // func 호출, 반환된 내부 함수를 callback에 저장
setTimeout(callback, 1000); // 1초 후 callback 함수 실행