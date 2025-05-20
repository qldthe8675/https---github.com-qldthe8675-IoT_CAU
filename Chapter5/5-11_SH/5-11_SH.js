// 5-11_SH, js

var createCar = function() { // 차량 객체를 생성하는 함수 정의
  var fuel = Math.ceil(Math.random() * 10 + 10); // 11~20L 사이의 랜덤 연료량 설정
  var power = Math.ceil(Math.random() * 3 + 2); // 3~5km/L 사이의 랜덤 연비 설정
  var moved = 0; // 총 이동거리 초기화
  return {
    get moved() { // moved 속성의 getter 정의
      return moved; // 현재 이동거리 반환
    },
    run: function() { // 차량 이동 메서드
      var km = Math.ceil(Math.random() * 6); // 1~6km 사이의 랜덤 이동거리 생성
      var wasteFuel = km / power; // 이동에 필요한 연료 계산
      if (fuel < wasteFuel) { // 연료 부족 시
        console.log('이동불가'); // '이동불가' 출력 후 종료
        return;
      }
      fuel -= wasteFuel; // 연료 소모
      moved += km; // 이동거리 추가
      console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: ' + fuel); // 이동 정보와 남은 연료 출력
    },
  };
};
var car = createCar(); // createCar 호출하여 차량 객체 생성