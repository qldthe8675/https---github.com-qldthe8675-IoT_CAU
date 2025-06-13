// 6-4_SH, js

var NewConstructor = function() {
  console.log('this is new constuctor!'); // 콘솔에 메시지 출력
};

var dataTypes = [
  1,
  'test',
  true,
  {},
  [],
  function() {}, 
  /test/, 
  new Number(), 
  new String(), 
  new Boolean(), 
  new Object(), 
  new Array(), 
  new Function(), 
  new RegExp(), 
  new Date(), 
  new Error(),
];

dataTypes.forEach(function(d) {
  d.constructor = NewConstructor; // 각 요소의 constructor 속성을 NewConstructor로 설정
  console.log(d.constructor.name, '&', d instanceof NewConstructor); // constructor 이름과 instanceof 결과 출력
});