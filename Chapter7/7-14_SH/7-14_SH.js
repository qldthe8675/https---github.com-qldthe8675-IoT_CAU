// 7-14_SH, js

var extendClass = function(SuperClass, SubClass, subMethods) {
  SubClass.prototype = Object.create(SuperClass.prototype); // SuperClass.prototype을 상속받는 새 객체로 설정
  SubClass.prototype.constructor = SubClass; // SubClass.prototype의 constructor를 SubClass로 복원
  SubClass.prototype.super = function(propName) {
    var self = this; // 현재 인스턴스 참조 저장
    if (!propName) // propName이 없으면 슈퍼클래스 생성자 호출
      return function() {
        SuperClass.apply(self, arguments); // SuperClass 생성자를 self에 적용
      };
    var prop = SuperClass.prototype[propName]; // SuperClass.prototype에서 propName 속성 가져오기
    if (typeof prop !== 'function') return prop; // 함수가 아니면 속성 값 반환
    return function() {
      return prop.apply(self, arguments); // 슈퍼클래스 메서드를 self에 적용
    };
  };

  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method]; // subMethods의 메서드를 SubClass.prototype에 복사
    }
  }

  Object.freeze(SubClass.prototype); // SubClass.prototype을 동결해 변경 방지
  return SubClass; // SubClass 생성자 함수 반환
};

var Rectangle = function(width, height) {
  this.width = width; // 인스턴스의 width 속성에 매개변수 width 할당
  this.height = height; // 인스턴스의 height 속성에 매개변수 height 할당
};

Rectangle.prototype.getArea = function() {
  return this.width * this.height; // width와 height의 곱 반환
};

var Square = extendClass(
  Rectangle,
  function(width) {
    this.super()(width, width); // super를 사용해 Rectangle 생성자 호출, width를 width와 height로 설정
  },
  {
    getArea: function() {
      console.log('size is :', this.super('getArea')()); // super로 Rectangle의 getArea 호출, 결과 출력
    },
  }
);

var sq = new Square(10); // sq는 {width: 10, height: 10} 객체, Rectangle.prototype 상속

sq.getArea(); // "size is : 100" 출력
console.log(sq.super('getArea')()); // 100 출력