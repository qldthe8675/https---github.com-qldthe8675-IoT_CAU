// 4-14_SH, js

new Promise(function(resolve) { // 첫 번째 Promise 생성
  setTimeout(function() { // 500ms 후 실행
    var name = '에스프레소'; // name을 '에스프레소'로 설정
    console.log(name); // '에스프레소' 출력
    resolve(name); // '에스프레소'를 다음 then으로 전달
  }, 500);
})
  .then(function(prevName) { // 첫 번째 Promise의 결과 처리
    return new Promise(function(resolve) { // 두 번째 Promise 반환
      setTimeout(function() { // 500ms 후 실행
        var name = prevName + ', 아메리카노'; // 이전 name에 ', 아메리카노' 추가
        console.log(name); // '에스프레소, 아메리카노' 출력
        resolve(name); // 결과를 다음 then으로 전달
      }, 500);
    });
  })
  .then(function(prevName) { // 두 번째 Promise의 결과 처리
    return new Promise(function(resolve) { // 세 번째 Promise 반환
      setTimeout(function() { // 500ms 후 실행
        var name = prevName + ', 카페모카'; // 이전 name에 ', 카페모카' 추가
        console.log(name); // '에스프레소, 아메리카노, 카페모카' 출력
        resolve(name); // 결과를 다음 then으로 전달
      }, 500);
    });
  })
  .then(function(prevName) { // 세 번째 Promise의 결과 처리
    return new Promise(function(resolve) { // 네 번째 Promise 반환
      setTimeout(function() { // 500ms 후 실행
        var name = prevName + ', 카페라떼'; // 이전 name에 ', 카페라떼' 추가
        console.log(name); // '에스프레소, 아메리카노, 카페모카, 카페라떼' 출력
        resolve(name); // 최종 결과 전달
      }, 500);
    });
  });