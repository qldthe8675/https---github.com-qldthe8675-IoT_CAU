// 7-11_SH, js

var extendClass1 = function(SuperClass, SubClass, subMethods) {
  SubClass.prototype = new SuperClass(); // SubClass.prototype을 SuperClass 인스턴스로 교체
  for (var prop in SubClass.prototype) {
    if (SubClass.prototype.hasOwnProperty(prop)) {
      delete SubClass.prototype[prop]; // SubClass.prototype의 자체 속성 삭제
    }
  }

  SubClass.prototype.constructor = SubClass; // SubClass.prototype의 생성자를 SubClass로 설정
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method]; // subMethods의 메서드를 SubClass.prototype에 복사
    }
  }

  Object.freeze(SubClass.prototype);
  return SubClass; // SubClass 생성자 함수 반환
};