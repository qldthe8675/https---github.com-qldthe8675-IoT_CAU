// 6-5_SH, js

var Person = function(name) {
  this.name = name; // 인스턴스 속성 name에 매개변수 name 할당
};
var p1 = new Person('사람1'); // Person { name: "사람1" } 생성
var p1Proto = Object.getPrototypeOf(p1); // p1.__proto__, Person.prototype 반환
var p2 = new Person.prototype.constructor('사람2'); // Person { name: "사람2" } 생성
var p3 = new p1Proto.constructor('사람3'); // Person { name: "사람3" } 생성
var p4 = new p1.__proto__.constructor('사람4'); // Person { name: "사람4" } 생성
var p5 = new p1.constructor('사람5'); // Person { name: "사람5" } 생성

[p1, p2, p3, p4, p5].forEach(function(p) {
  console.log(p, p instanceof Person); // 각 Person 인스턴스와 true 출력
});