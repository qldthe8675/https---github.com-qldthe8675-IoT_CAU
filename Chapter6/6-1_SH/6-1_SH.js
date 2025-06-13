// 6-1_SH, js

// Person 생성자 함수 정의, 이름 매개변수 받아 인스턴스 속성 _name에 저장
var Person = function(name) {
  this._name = name; // 인스턴스 속성 _name에 name 값을 할당
};

// Person.prototype에 getName 메서드 추가, _name 속성 반환
Person.prototype.getName = function() {
  return this._name; // 현재 인스턴스의 _name 값 반환
};