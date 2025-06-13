// 7-8_SH, js

var extendClass1 = function(SuperClass, SubClass, subMethods) {
  SubClass.prototype = new SuperClass(); // SubClass.prototype을 SuperClass 인스턴스로 교체
  for (var prop in SubClass.prototype) {
    if (SubClass.prototype.hasOwnProperty(prop)) {
      delete SubClass.prototype[prop]; // SubClass.prototype의 자체 속성 삭제
    }
  }
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method]; // subMethods의 메서드를 SubClass.prototype에 복사
    }
  }
  Object.freeze(SubClass.prototype); // SubClass.prototype을 동결해 변경 방지
  // 구성된 SubClass 반환
  return SubClass; // SubClass 생성자 함수 반환
};

var Rectangle = function(width, height) {
  this.width = width; // 인스턴스의 width 속성에 매개변수 width 할당
  this.height = height; // 인스턴스의 height 속성에 매개변수 height 할당
};

Rectangle.prototype.getArea = function() {
  return this.width * this.height; // width와 height의 곱 반환
};

var Square = extendClass1(Rectangle, function(width) {
  Rectangle.call(this, width, width); // Rectangle 생성자를 호출해 width를 width와 height로 설정
}); // subMethods는 없으므로 기본 상속만 수행함

var sq = new Square(5); // sq는 {width: 5, height: 5} 객체, Rectangle.prototype 상속
console.log(sq.getArea()); // 5 * 5 = 25 출력