// 5-17_SH, js

var curry3 = function(func) { // 함수를 커링하는 함수 정의
  return function(a) { // 첫 번째 인자를 받는 함수 반환
    return function(b) { // 두 번째 인자를 받는 함수 반환
      return func(a, b); // func에 a, b를 적용해 결과 반환
    };
  };
};

var getMaxWith10 = curry3(Math.max)(10); // Math.max를 커링하고 10을 첫 인자로 고정
console.log(getMaxWith10(8)); // 10과 8 중 최대값 10 출력
console.log(getMaxWith10(25)); // 10과 25 중 최대값 25 출력

var getMinWith10 = curry3(Math.min)(10); // Math.min을 커링하고 10을 첫 인자로 고정
console.log(getMinWith10(8)); // 10과 8 중 최소값 8 출력
console.log(getMinWith10(25)); // 10과 25 중 최소값 10 출력