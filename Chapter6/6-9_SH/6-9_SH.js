// 6-9_SH, js

Object.prototype.getEntries = function() {
  var res = []; // 결과 배열 초기화
  for (var prop in this) { 
    if (this.hasOwnProperty(prop)) { 
      res.push([prop, this[prop]]); // [속성명, 속성값] 쌍을 결과 배열에 추가
    }
  }
  return res; // [키, 값] 쌍 배열 반환
};

var data = [
  ['object', { a: 1, b: 2, c: 3 }],
  ['number', 345], 
  ['string', 'abc'], 
  ['boolean', false], 
  ['func', function() {}], 
  ['array', [1, 2, 3]], 
];

data.forEach(function(datum) {
  console.log(datum[1].getEntries()); // datum[1]에 대해 getEntries 호출, 결과 출력
});