// 5-18_SH, js

var curry5 = function(func) { // 5개 인자를 커링하는 함수 정의
  return function(a) { // 첫 번째 인자를 받는 함수 반환
    return function(b) { // 두 번째 인자를 받는 함수 반환
      return function(c) { // 세 번째 인자를 받는 함수 반환
        return function(d) { // 네 번째 인자를 받는 함수 반환
          return function(e) { // 다섯 번째 인자를 받는 함수 반환
            return func(a, b, c, d, e); // func에 5개 인자 적용해 결과 반환
          };
        };
      };
    };
  };
};
var getMax = curry5(Math.max); // Math.max를 5단계 커링 함수로 변환
console.log(getMax(1)(2)(3)(4)(5)); // 1,2,3,4,5 중 최대값 5 출력