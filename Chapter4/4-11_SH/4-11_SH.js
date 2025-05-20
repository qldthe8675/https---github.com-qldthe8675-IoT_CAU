// 4-11_SH, js

var obj1 = {
  name: 'obj1', // 객체 속성 name을 'obj1'로 설정
  func: function() { // func 메서드 정의
    console.log(this.name); // this의 name 속성 출력
  },
};
setTimeout(obj1.func.bind(obj1), 1000); // obj1.func를 obj1 컨텍스트로 바인딩, 1초 후 실행

var obj2 = { name: 'obj2' }; // 객체 속성 name을 'obj2'로 설정
setTimeout(obj1.func.bind(obj2), 1500); // obj1.func를 obj2 컨텍스트로 바인딩, 1.5초 후 실행