// 7-12_SH, js

var extendClass2 = (function() {
  var Bridge = function() {}; // 빈 생성자 함수로 프로토타입 브릿지 역할
  return function(SuperClass, SubClass, subMethods) {
    Bridge.prototype = SuperClass.prototype; // Bridge의 프로토타입을 슈퍼클래스 프로토타입에 연결
    SubClass.prototype = new Bridge(); // SubClass의 프로토타입을 Bridge 인스턴스로 교체
    SubClass.prototype.constructor = SubClass;
    Bridge.prototype.constructor = SuperClass; // SuperClass의 constructor 유지
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method]; // subMethods의 메서드를 SubClass.prototype에 복사
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass; // SubClass 생성자 함수 반환
  };
})();