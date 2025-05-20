// 4-16_SH, js

var addCoffee = function(prevName, name) { // 이전 이름과 새 이름으로 커피 추가
  setTimeout(function() { // 500ms 후 실행
    coffeeMaker.next(prevName ? prevName + ', ' + name : name); // 제너레이터에 다음 값 전달
  }, 500);
};
var coffeeGenerator = function*() { // 제너레이터 함수 정의
  var espresso = yield addCoffee('', '에스프레소'); // 첫 번째 yield, 에스프레소 추가
  console.log(espresso); // '에스프레소' 출력
  var americano = yield addCoffee(espresso, '아메리카노'); // 두 번째 yield, 아메리카노 추가
  console.log(americano); // '에스프레소, 아메리카노' 출력
  var mocha = yield addCoffee(americano, '카페모카'); // 세 번째 yield, 카페모카 추가
  console.log(mocha); // '에스프레소, 아메리카노, 카페모카' 출력
  var latte = yield addCoffee(mocha, '카페라떼'); // 네 번째 yield, 카페라떼 추가
  console.log(latte); // '에스프레소, 아메리카노, 카페모카, 카페라떼' 출력
};
var coffeeMaker = coffeeGenerator(); // 제너레이터 객체 생성
coffeeMaker.next(); // 제너레이터 시작, 첫 번째 yield까지 실행