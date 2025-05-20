// 5-10_SH, js

var car = {
  fuel: Math.ceil(Math.random() * 10 + 10), // 11~20L 사이의 랜덤 연료량 설정
  power: Math.ceil(Math.random() * 3 + 2), // 3~5km/L 사이의 랜덤 연비 설정
  moved: 0, // 총 이동거리 초기화
  run: function() { // 차량 이동 메서드
    var km = Math.ceil(Math.random() * 6); // 1~6km 사이의 랜덤 이동거리 생성
    var wasteFuel = km / this.power; // 이동에 필요한 연료 계산
    if (this.fuel < wasteFuel) { // 연료 부족 시
      console.log('이동불가'); // '이동불가' 출력 후 종료
      return;
    }
    this.fuel -= wasteFuel; // 연료 소모
    this.moved += km; // 이동거리 추가
    console.log(km + 'km 이동 (총 ' + this.moved + 'km)'); // 이동 정보 출력
  },
};