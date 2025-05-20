// 4-6_SH, js

setTimeout(function() {
  console.log(this); // 300ms 후 함수 실행, this는 기본적으로 Window 객체
}, 300);

[1, 2, 3, 4, 5].forEach(function(x) {
  console.log(this); // 배열 각 요소마다 함수 실행, this는 기본적으로 Window 객체
});

document.body.innerHTML += '<button id="a">클릭</button>'; // body에 버튼 요소 추가
document.body.querySelector('#a').addEventListener(
  'click',
  function(e) {
    console.log(this, e);  // 클릭 시 this는 버튼 요소, e는 클릭 이벤트 객체
  }
);