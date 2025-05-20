// 5-5_SH, js

var outer = (function() { // 즉시 실행 함수(IIFE) 정의 및 실행
  var a = 1; // 지역 변수 a를 1로 초기화
  var inner = function() { // inner 함수 정의
    return ++a; // a를 증가시키고 반환
  };
  return inner; // inner 함수 반환
})();
console.log(outer()); // outer(inner) 호출, a 증가 후 2 출력
console.log(outer()); // outer(inner) 다시 호출, a 증가 후 3 출력
outer = null; // outer의 inner 함수 참조 해제, 메모리 해제 가능

(function() { // 즉시 실행 함수(IIFE) 정의 및 실행
  var a = 0; // 지역 변수 a를 0으로 초기화
  var intervalId = null; // intervalId를 null로 초기화
  var inner = function() { // inner 함수 정의
    if (++a >= 10) { // a를 증가시키고 10 이상이면
      clearInterval(intervalId); // 타이머 종료
      inner = null; // inner 함수 참조 해제, 메모리 해제 가능
    }
    console.log(a); // 현재 a 값 출력
  };
  intervalId = setInterval(inner, 1000); // 1초마다 inner 실행
})();

(function() { // 즉시 실행 함수(IIFE) 정의 및 실행
  var count = 0; // 지역 변수 count를 0으로 초기화
  var button = document.createElement('button'); // 버튼 요소 생성
  button.innerText = 'click'; // 버튼 텍스트를 'click'으로 설정
  var clickHandler = function() { // clickHandler 함수 정의
    console.log(++count, 'times clicked'); // count 증가 후 클릭 횟수 출력
    if (count >= 10) { // count가 10 이상이면
      button.removeEventListener('click', clickHandler); // 이벤트 리스너 제거
      clickHandler = null; // clickHandler 참조 해제, 메모리 해제 가능
    }
  };
  button.addEventListener('click', clickHandler); // 클릭 이벤트 리스너 추가
  document.body.appendChild(button); // 버튼을 body에 추가
})();