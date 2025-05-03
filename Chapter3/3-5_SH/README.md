
사물인터넷

Chapter 3, 예제 5
================================

전역 변수 a, b, window.c, window.d를 선언하고 delete로 삭제 시도, 전역 객체(window)와 this로 접근해 출력함.

var로 선언된 a, b는 삭제 불가로 1, 1, 1과 2, 2, 2, window.c, window.d는 삭제되어 ReferenceError 발생함.