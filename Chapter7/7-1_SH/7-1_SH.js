// 7-1_SH, js

var Rectangle = function(width, height) {
  this.width = width; // 인스턴스의 width 속성에 매개변수 width 할당
  this.height = height; // 인스턴스의 height 속성에 매개변수 height 할당
};

Rectangle.prototype.getArea = function() {
  return this.width * this.height; // 인스턴스의 width와 height 곱 반환
};

Rectangle.isRectangle = function(instance) {
  return (
    instance instanceof Rectangle && // 인스턴스가 Rectangle 타입인지 확인
    instance.width > 0 && // width가 0보다 큰지 확인
    instance.height > 0 // height가 0보다 큰지 확인
  );
};

var rect1 = new Rectangle(3, 4); // rect1은 {width: 3, height: 4} 객체
console.log(rect1.getArea()); // 3 * 4 = 12 출력
console.log(rect1.isRectangle(rect1)); // TypeError: rect1.isRectangle is not a function
console.log(Rectangle.isRectangle(rect1)); // true (rect1은 유효한 Rectangle 인스턴스)