// 4-15_SH, js

var addCoffee = function(name) { // 커피 이름을 인자로 받는 함수 정의
  return function(prevName) { // 이전 이름을 인자로 받는 클로저 반환
    return new Promise(function(resolve) { // Promise 반환
      setTimeout(function() { // 500ms 후 실행
        var newName = prevName ? prevName + ', ' + name : name; // prevName이 있으면 ', '와 함께 name 추가, 없으면 name만
        console.log(newName); // 새로운 커피 이름 출력
        resolve(newName); // 새로운 이름 resolve
      }, 500);
    });
  };
};
addCoffee('에스프레소')() // '에스프레소'로 addCoffee 호출, 즉시 실행하여 Promise 반환
  .then(addCoffee('아메리카노')) // 이전 결과에 '아메리카노' 추가
  .then(addCoffee('카페모카')) // 이전 결과에 '카페모카' 추가
  .then(addCoffee('카페라떼')); // 이전 결과에 '카페라떼' 추가