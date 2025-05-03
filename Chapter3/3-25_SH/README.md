
사물인터넷

Chapter 3, 예제 25
================================

this와 인자 a, b, c, d를 출력. bindFunc1은 this를 {x: 1}로 고정, bindFunc2는 this를 {x: 1}, a=4, b=5로 고정함.

func(1,2,3,4)는 window, 1,2,3,4, bindFunc1(5,6,7,8)는 {x: 1}, 5,6,7,8, bindFunc2(6,7)는 {x: 1}, 4,5,6,7, bindFunc2(8,9)는 {x: 1}, 4,5,8,9 출력함.