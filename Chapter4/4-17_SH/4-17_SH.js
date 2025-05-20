// 4-17_SH, js

var addCoffee = function(name) { // 커피 이름을 받아 Promise로 반환
  return new Promise(function(resolve) { // Promise 생성
    setTimeout(function() { // 500ms 후 실행
      resolve(name); // 이름 resolve
    }, 500);
  });
};
var coffeeMaker = async function() { // 비동기 함수 정의
  var coffeeList = ''; // coffeeList 초기화
  var _addCoffee = async function(name) { // 비동기 커피 추가 함수
    coffeeList += (coffeeList ? ',' : '') + (await addCoffee(name)); // coffeeList에 이름 추가 (첫 번째는 쉼표 없이)
  };
  await _addCoffee('에스프레소'); // '에스프레소' 추가
  console.log(coffeeList); // coffeeList 출력 ('에스프레소')
  await _addCoffee('아메리카노'); // '아메리카노' 추가
  console.log(coffeeList); // coffeeList 출력 ('에스프레소,아메리카노')
  await _addCoffee('카페모카'); // '카페모카' 추가
  console.log(coffeeList); // coffeeList 출력 ('에스프레소,아메리카노,카페모카')
  await _addCoffee('카페라떼'); // '카페라떼' 추가
  console.log(coffeeList); // coffeeList 출력 ('에스프레소,아메리카노,카페모카,카페라떼')
};
coffeeMaker(); // coffeeMaker 실행