// 5-14_SH, js

var partial = function() { // 부분 적용 함수 생성
  var originalPartialArgs = arguments; // 전달된 인자 저장
  var func = originalPartialArgs[0]; // 첫 번째 인자를 함수로 설정
  if (typeof func !== 'function') { // 첫 번째 인자가 함수인지 확인
    throw new Error('첫 번째 인자가 함수가 아닙니다.'); // 함수가 아니면 에러 발생
  }
  return function() { // 새로운 함수 반환
    var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1); // 첫 번째 인자 제외한 인자 배열
    var restArgs = Array.prototype.slice.call(arguments); // 새로 받은 인자 배열
    return func.apply(this, partialArgs.concat(restArgs)); // 원래 함수에 인자 결합하여 호출
  };
};

var add = function() { // 가변 인자의 합을 계산하는 함수
  var result = 0; // 결과 초기화
  for (var i = 0; i < arguments.length; i++) { // 모든 인자 순회
    result += arguments[i]; // 인자를 결과에 더함
  }
  return result; // 최종 합 반환
};
var addPartial = partial(add, 1, 2, 3, 4, 5); // add 함수에 1,2,3,4,5 고정
console.log(addPartial(6, 7, 8, 9, 10)); // 1+2+3+4+5+6+7+8+9+10=55 출력

var dog = {
  name: '강아지', // 객체 속성 name 설정
  greet: partial(function(prefix, suffix) { // prefix와 suffix를 받아 문자열 생성
    return prefix + this.name + suffix; // prefix + name + suffix 반환
  }, '왈왈, '), // prefix를 '왈왈, '로 고정
};
dog.greet('입니다!'); // greet 호출, '왈왈, 강아지입니다.' 반환