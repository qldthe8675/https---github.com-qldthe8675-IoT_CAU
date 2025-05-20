// 4-1_SH, js

var count = 0; // count 변수를 0으로 초기화
var timer = setInterval(function() { // 300ms마다 함수를 실행하는 타이머 설정
  console.log(count); // 현재 count 값 출력
  if (++count > 4) clearInterval(timer); // count를 증가시키고 4 초과 시 타이머 종료
}, 300); // 300ms 간격으로 실행