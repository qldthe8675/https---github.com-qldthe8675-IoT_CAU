// 7-3_SH, js

var Grade = function() {
  var args = Array.prototype.slice.call(arguments); // arguments 객체를 배열로 변환
  for (var i = 0; i < args.length; i++) {
    this[i] = args[i]; // 인덱스를 키로 사용해 args[i] 값을 인스턴스 속성에 할당
  }
  this.length = args.length; // 인스턴스의 length 속성에 인자 개수 저장
};

Grade.prototype = []; // Grade 인스턴스의 프로토타입을 빈 배열로 설정
var g = new Grade(100, 80); // g는 0: 100, 1: 80, length: 2
g.push(90); // Array.prototype.push로 g[2] = 90 추가, length를 3으로 증가
console.log(g); // Grade {0: 100, 1: 80, 2: 90, length: 3} 출력
delete g.length; // g의 length 속성 제거
g.push(70); // Array.prototype.push로 g[0] = 70 추가
console.log(g); // Grade {0: 70, 1: 80, 2: 90, length: 1} 출력