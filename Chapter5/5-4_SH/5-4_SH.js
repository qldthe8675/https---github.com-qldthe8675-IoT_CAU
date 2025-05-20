// 5-4_SH, js

(function() { // 즉시 실행 함수(IIFE) 정의 및 실행
  var a = 0; // 지역 변수 a를 0으로 초기화
  var intervalId = null; // intervalId를 null로 초기화
  var inner = function() { // inner 함수 정의
    if (++a >= 10) { // a를 증가시키고 10 이상이면
      clearInterval(intervalId); // 타이머 종료
    }
    console.log(a); // 현재 a 값 출력
  };
  intervalId = setInterval(inner, 1000); // 1초마다 inner 함수 실행, intervalId 저장
})();

(function() { // 즉시 실행 함수(IIFE) 정의 및 실행
  var count = 0; // 지역 변수 count를 0으로 초기화
  var button = document.createElement('button'); // 버튼 요소 생성
  button.innerText = 'click'; // 버튼 텍스트를 'click'으로 설정
  button.addEventListener('click', function() { // 클릭 이벤트 리스너 추가
    console.log(++count, 'times clicked'); // count 증가 후 클릭 횟수 출력
  });
  document.body.appendChild(button); // 버튼을 body에 추가
})();