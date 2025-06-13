// 7-15_SH, js

var ES5 = function(name) {
  this.name = name; // 인스턴스의 name 속성에 매개변수 name 할당
};
ES5.staticMethod = function() {
  return this.name + ' staticMethod'; // this는 ES5 함수, name 속성 참조
};
ES5.prototype.method = function() {
  return this.name + ' method'; // this는 인스턴스, name 속성 참조
};
var es5Instance = new ES5('es5'); // es5Instance는 {name: 'es5'} 객체
console.log(ES5.staticMethod()); // "es5 staticMethod" 출력
console.log(es5Instance.method()); // "es5 method" 출력

var ES6 = class {
  constructor(name) {
    this.name = name; // 인스턴스의 name 속성에 매개변수 name 할당
  }
  static staticMethod() {
    return this.name + ' staticMethod'; // this는 ES6 클래스, name은 클래스 이름
  }
  method() {
    return this.name + ' method'; // this는 인스턴스, name 속성 참조
  }
};

var es6Instance = new ES6('es6'); // es6Instance는 {name: 'es6'} 객체
console.log(ES6.staticMethod()); // "ES6 staticMethod" 출력 
console.log(es6Instance.method()); // "es6 method" 출력