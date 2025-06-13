// 6-10_SH, js

var Grade = function() {
  var args = Array.prototype.slice.call(arguments); // arguments 객체를 배열로 변환
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i]; // 인덱스를 키로 사용해 args[i] 값을 인스턴스 속성에 할당
  }
  this.length = args.length; // 인스턴스의 length 속성에 인자 개수 저장
};

var g = new Grade(100, 80); // g는 0: 100, 1: 80, length: 2