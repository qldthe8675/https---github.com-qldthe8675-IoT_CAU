// 7-13_SH, js

var extendClass3 = function(SuperClass, SubClass, subMethods) {
  SubClass.prototype = Object.create(SuperClass.prototype); // SuperClass.prototype을 상속받는 새 객체로 설정
  SubClass.prototype.constructor = SubClass; // SubClass.prototype의 constructor를 SubClass로 복원
  if (subMethods) {
    for (var method in subMethods) {
      SubClass.prototype[method] = subMethods[method]; // subMethods의 메서드를 SubClass.prototype에 복사
    }
  }
  Object.freeze(SubClass.prototype);
  return SubClass; // SubClass 생성자 함수 반환
};