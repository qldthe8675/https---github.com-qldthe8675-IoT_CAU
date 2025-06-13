// 7-16_SH, js

var Rectangle = class {
  constructor(width, height) {
    this.width = width; // 인스턴스의 width 속성에 매개변수 width 할당
    this.height = height; // 인스턴스의 height 속성에 매개변수 height 할당
  }
  getArea() {
    return this.width * this.height; // 인스턴스의 width와 height 곱 반환
  }
};

var Square = class extends Rectangle {
  constructor(width) {
    super(width, width); // Rectangle 생성자를 호출해 width를 width와 height로 설정
  }
  getArea() {
    console.log('size is :', super.getArea()); // super로 Rectangle의 getArea 호출, 결과 출력
  }
};