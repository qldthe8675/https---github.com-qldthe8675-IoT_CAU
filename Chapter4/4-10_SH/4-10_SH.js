// 4-10_SH, js

var obj1 = {
  name: 'obj1', // 객체 속성 name을 'obj1'로 설정
  func: function() { // func 메서드 정의
    console.log(obj1.name); // obj1의 name 속성('obj1') 출력
  },
};
var obj2 = {
  name: 'obj2', // 객체 속성 name을 'obj2'로 설정
  func: obj1.func, // obj1의 func 메서드를 참조
};
var callback2 = obj2.func(); // obj2.func 호출, undefined 반환 (콘솔에 'obj1' 출력)
setTimeout(callback2, 1500); // 1.5초 후 callback2

var obj3 = { name: 'obj3' }; // 객체 속성 name을 'obj3'로 설정
var callback3 = obj1.func.call(obj3); // obj1.func를 obj3 컨텍스트로 호출, undefined 반환 (콘솔에 'obj1' 출력)
setTimeout(callback3, 2000); // 2초 후 callback3