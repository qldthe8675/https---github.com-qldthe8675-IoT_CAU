// 7-10_SH, js

var Rectangle = function(width, height) {
  this.width = width; // 인스턴스의 width 속성에 매개변수 width 할당
  this.height = height; // 인스턴스의 height 속성에 매개변수 height 할당
};

Rectangle.prototype.getArea = function() {
  return this.width * this.height; // 인스턴스의 width와 height 곱 반환
};

var Square = function(width) {
  Rectangle.call(this, width, width); // Rectangle 생성자를 호출해 width를 width와 height로 설정
};
Square.prototype = Object.create(Rectangle.prototype); // Rectangle.prototype을 기반으로 새 프로토타입 객체 생성
Object.freeze(Square.prototype);
var sq = new Square(5); // sq는 {width: 5, height: 5} 객체, Rectangle.prototype 상속
console.log(sq.getArea()); // 5 * 5 = 25 출력