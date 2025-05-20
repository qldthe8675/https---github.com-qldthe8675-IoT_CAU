// 5-9_SH, js

var fruits = ['apple', 'banana', 'peach']; // 과일 이름을 담은 배열 생성
var $ul = document.createElement('ul'); // ul 요소 생성

var alertFruitBuilder = function(fruit) { // 과일 이름을 받아 클로저 함수를 반환
  return function() { // 내부 함수 반환
    alert('your choice is ' + fruit); // 클릭 시 해당 과일 이름 알림 표시
  };
};
fruits.forEach(function(fruit) { // fruits 배열의 각 요소에 대해 반복
  var $li = document.createElement('li'); // li 요소 생성
  $li.innerText = fruit; // li의 텍스트를 현재 fruit으로 설정
  $li.addEventListener('click', alertFruitBuilder(fruit)); // li에 클릭 시 alertFruitBuilder로 생성한 함수 바인딩
  $ul.appendChild($li); // li를 ul에 추가
});
document.body.appendChild($ul); // ul을 문서 body에 추가