// 6-6_SH, js

var Person = function(name) {
  this.name = name; // 인스턴스 속성 name에 매개변수 name 할당
};
Person.prototype.getName = function() {
  return this.name; // 현재 인스턴스의 name 값 반환
};

var iu = new Person('지금'); // Person { name: "지금" } 생성
iu.getName = function() {
  return '바로 ' + this.name; // 인스턴스 고유 메서드로 "바로 지금" 반환
};
console.log(iu.getName()); // "바로 지금" 출력