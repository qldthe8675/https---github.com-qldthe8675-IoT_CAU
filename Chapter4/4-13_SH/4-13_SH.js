// 4-13_SH, js

var coffeeList = ''; // coffeeList를 빈 문자열로 초기화

var addEspresso = function(name) { // name을 받아 coffeeList 설정 및 출력, 다음 함수 호출
  coffeeList = name; // coffeeList를 name('에스프레소')으로 설정
  console.log(coffeeList); // coffeeList 출력
  setTimeout(addAmericano, 500, '아메리카노'); // 500ms 후 addAmericano 호출
};
var addAmericano = function(name) { // name을 받아 coffeeList 추가 및 출력, 다음 함수 호출
  coffeeList += ', ' + name; // coffeeList에 ', 아메리카노' 추가
  console.log(coffeeList); // coffeeList 출력
  setTimeout(addMocha, 500, '카페모카'); // 500ms 후 addMocha 호출
};
var addMocha = function(name) { // name을 받아 coffeeList 추가 및 출력, 다음 함수 호출
  coffeeList += ', ' + name; // coffeeList에 ', 카페모카' 추가
  console.log(coffeeList); // coffeeList 출력
  setTimeout(addLatte, 500, '카페라떼'); // 500ms 후 addLatte 호출
};
var addLatte = function(name) { // name을 받아 coffeeList 추가 및 출력
  coffeeList += ', ' + name; // coffeeList에 ', 카페라떼' 추가
  console.log(coffeeList); // coffeeList 출력
};

setTimeout(addEspresso, 500, '에스프레소'); // 500ms 후 addEspresso 호출, '에스프레소' 전달