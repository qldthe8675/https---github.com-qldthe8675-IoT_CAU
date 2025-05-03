// 1-12_SH, js

var copyObject = function(target) { // 함수 작성
  var result = {};
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};