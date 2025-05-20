
사물인터넷

Chapter 4, 예제 7
================================

obj 객체의 logValues 메서드는 this, 값, 인덱스를 출력하며, 직접 호출 시 this는 obj, forEach 사용 시 this는 Window를 참조함

첫 호출은 {vals: [1, 2, 3], logValues: f}, 1, 2, forEach는 각 요소마다 Window, 4, 0, Window, 5, 1, Window, 6, 2 출력