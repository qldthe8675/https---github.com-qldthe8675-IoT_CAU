
사물인터넷

Chapter 3, 예제 28
================================

llogThisLater1: 500ms 후 logThis를 호출하지만, this가 글로벌 객체로 설정되어 객체 obj가 아닌 window를 출력.

logThisLater2: 1000ms 후 logThis를 bind로 obj에 고정하여 호출, this가 obj로 유지되어 obj를 출력.
