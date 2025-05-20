// 4-2_SH, js

var count = 0; // count 변수를 0으로 초기화
var cbFunc = function() { // 타이머에서 실행할 콜백 함수 정의
  console.log(count); // 현재 count 값 출력
  if (++count > 4) clearInterval(timer); // count 증가 후 4 초과 시 타이머 종료
};
var timer = setInterval(cbFunc, 300); // 300ms마다 cbFunc 실행하는 타이머 설정