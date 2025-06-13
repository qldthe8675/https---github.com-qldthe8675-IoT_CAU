// 6-2_SH, js

var Constructor = function(name) {
  this.name = name; // 인스턴스 속성 name에 매개변수 name 할당
};

Constructor.prototype.method1 = function() {}; // 프로토타입에 method1 메서드 정의

// Constructor.prototype에 property1 속성 추가, 문자열 값 할당
Constructor.prototype.property1 = 'Constructor Prototype Property'; // 프로토타입에 property1 속성 설정

// Constructor를 사용해 instance 인스턴스 생성, 'Instance' 문자열 전달
var instance = new Constructor('Instance'); // 새로운 인스턴스 생성, name 속성에 'Instance' 저장

console.dir(Constructor); // Constructor 함수의 속성과 프로토타입 정보 출력

console.dir(instance); // instance의 속성과 프로토타입 체인 정보 출력