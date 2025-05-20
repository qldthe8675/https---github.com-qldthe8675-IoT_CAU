// 5-7_SH, js

var fruits = ['apple', 'banana', 'peach']; // 과일 이름을 담은 배열 생성
var $ul = document.createElement('ul'); // ul 요소 생성

var alertFruit = function(fruit) { // 과일 이름을 받아 알림을 표시하는 함수
  alert('your choice is ' + fruit); // 'your choice is [fruit]' 알림 표시
};
fruits.forEach(function(fruit) { // fruits 배열의 각 요소에 대해 반복
  var $li = document.createElement('li'); // li 요소 생성
  $li.innerText = fruit; // li의 텍스트를 현재 fruit으로 설정
  $li.addEventListener('click', alertFruit); // li에 클릭 시 alertFruit 호출하는 이벤트 리스너 추가
  $ul.appendChild($li); // li를 ul에 추가
});
document.body.appendChild($ul); // ul을 문서 body에 추가
alertFruit(fruits[1]); // fruits[1]('banana')로 alertFruit 호출