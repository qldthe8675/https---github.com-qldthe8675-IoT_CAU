// 5-15_SH, js

Object.defineProperty(window, '_', { // window 객체에 '_' 속성 정의
  value: 'EMPTY_SPACE', // 값은 'EMPTY_SPACE'
  writable: false, // 수정 불가
  configurable: false, // 재구성 불가
  enumerable: false, // 열거 불가
});

var partial2 = function() { // 부분 적용 함수 생성
  var originalPartialArgs = arguments; // 전달된 인자 저장
  var func = originalPartialArgs[0]; // 첫 번째 인자를 함수로 설정
  if (typeof func !== 'function') { // 첫 번째 인자가 함수인지 확인
    throw new Error('첫 번째 인자가 함수가 아닙니다.'); // 함수가 아니면 에러
  }
  return function() { // 새로운 함수 반환
    var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1); // 첫 번째 인자 제외한 인자 배열
    var restArgs = Array.prototype.slice.call(arguments); // 새로 받은 인자 배열
    for (var i = 0; i < partialArgs.length; i++) { // partialArgs 순회
      if (partialArgs[i] === _) { // '_'인 경우
        partialArgs[i] = restArgs.shift(); // restArgs의 첫 번째 값으로 대체
      }
    }
    return func.apply(this, partialArgs.concat(restArgs)); // 원래 함수에 인자 결합하여 호출
  };
};

var add = function() { // 가변 인자의 합 계산
  var result = 0; // 결과 초기화
  for (var i = 0; i < arguments.length; i++) { // 모든 인자 순회
    result += arguments[i]; // 인자를 결과에 더함
  }
  return result; // 최종 합 반환
};
var addPartial = partial2(add, 1, 2, _, 4, 5, _, _, 8, 9); // add에 1,2,_,4,5,_,_,8,9 고정
console.log(addPartial(3, 6, 7, 10)); // _에 3,6,7 대체, 1+2+3+4+5+6+7+8+9+10=55 출력

var dog = {
  name: '강아지', // 객체 속성 name 설정
  greet: partial2(function(prefix, suffix) { // prefix와 suffix로 문자열 생성
    return prefix + this.name + suffix; // prefix + name + suffix 반환
  }, '왈왈, '), // prefix를 '왈왈, '로 고정
};
dog.greet(' 배고파요!'); // '왈왈, 강아지 배고파요!' 반환