// 5-16_SH, js

var debounce = function(eventName, func, wait) { // 디바운스 함수 정의, 이벤트 이름, 함수, 대기 시간 인자 받음
  var timeoutId = null; // 타이머 ID 초기화
  return function(event) { // 이벤트 객체를 받는 함수 반환
    var self = this; // 현재 this 저장
    console.log(eventName, 'event 발생'); // 이벤트 발생 로그 출력
    clearTimeout(timeoutId); // 기존 타이머 제거
    timeoutId = setTimeout(func.bind(self, event), wait); // wait ms 후 func 호출하도록 타이머 설정
  };
};

var moveHandler = function(e) { // mousemove 이벤트 핸들러
  console.log('move event 처리'); // 'move event 처리' 출력
};
var wheelHandler = function(e) { // mousewheel 이벤트 핸들러
  console.log('wheel event 처리'); // 'wheel event 처리' 출력
};
document.body.addEventListener('mousemove', debounce('move', moveHandler, 500)); // mousemove 이벤트에 500ms 디바운스 적용
document.body.addEventListener('mousewheel', debounce('wheel', wheelHandler, 700)); // mousewheel 이벤트에 700ms 디바운스 적용