// 4-12_SH, js

setTimeout(
  function(name) { // 500ms 후 실행, name은 '에스프레소'
    var coffeeList = name; // coffeeList를 name으로 초기화
    console.log(coffeeList); // coffeeList('에스프레소') 출력

    setTimeout(
      function(name) { // 500ms 후 실행, name은 '아메리카노'
        coffeeList += ', ' + name; // coffeeList에 ', 아메리카노' 추가
        console.log(coffeeList); // coffeeList('에스프레소, 아메리카노') 출력

        setTimeout(
          function(name) { // 500ms 후 실행, name은 '카페모카'
            coffeeList += ', ' + name; // coffeeList에 ', 카페모카' 추가
            console.log(coffeeList); // coffeeList('에스프레소, 아메리카노, 카페모카') 출력

            setTimeout(
              function(name) { // 500ms 후 실행, name은 '카페라떼'
                coffeeList += ', ' + name; // coffeeList에 ', 카페라떼' 추가
                console.log(coffeeList); // coffeeList('에스프레소, 아메리카노, 카페모카, 카페라떼') 출력
              },
              500,
              '카페라떼' // 인자로 '카페라떼' 전달
            );
          },
          500,
          '카페모카' // 인자로 '카페모카' 전달
        );
      },
      500,
      '아메리카노' // 인자로 '아메리카노' 전달
    );
  },
  500,
  '에스프레소' // 인자로 '에스프레소' 전달
);