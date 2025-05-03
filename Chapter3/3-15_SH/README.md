
사물인터넷

Chapter 3, 예제 15
================================

this.a와 인자 x, y를 출력, 일반 호출은 obj의 a, call은 지정된 객체의 a 사용함.

obj.method(2, 3)는 1, 2, 3, obj.method.call({a: 4}, 5, 6)은 4, 5, 6 출력함.