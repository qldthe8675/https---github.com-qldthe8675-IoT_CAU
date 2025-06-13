// 7-6_SH, js

var Rectangle = function(width, height) {
  this.width = width; // 인스턴스의 width 속성에 매개변수 width 할당
  this.height = height; // 인스턴스의 height 속성에 매개변수 height 할당
};
Rectangle.prototype.getArea = function() {
  return this.width * this.height; // 인스턴스의 width와 height 곱 반환
};
var rect = new Rectangle(3, 4); // rect는 {width: 3, height: 4} 객체
console.log(rect.getArea()); // 3 * 4 = 12 출력

var Square = function(width) {
  this.width = width; // 인스턴스의 width 속성에 매개변수 width 할당
  this.height = width; // 인스턴스의 height 속성에도 width 할당
};
Square.prototype.getArea = function() {
  return this.width * this.height; // 인스턴스의 width와 height 곱 반환 (width * width)
};
var sq = new Square(5); // sq는 {width: 5, height: 5} 객체
console.log(sq.getArea()); // 5 * 5 = 25 출력