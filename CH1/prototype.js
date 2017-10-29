/**
 * 原型
 * https://github.com/mqyqingfeng/Blog/issues/2
 */
'use strict';

var assert = require('assert');


// object._proto_ === object.prototype

function Person(){}

describe("对象的_proto_和prototype属性", function(){
  it("实例的_proto_属性应该等于实例的prototype属性", function(){
    var person = new Person();
    assert.strictEqual(person._proto_, person.prototype);
  });

  it("实例的__proto__属性应该等于构造函数的prototype属性(原型),亦称构造函数的原型", function(){
    var person = new Person();
    assert.strictEqual(person.__proto__, Person.prototype)
  });

  it("构造函数应该等于构造函数原型的constructor属性", function(){
    assert.strictEqual(Person, Person.prototype.constructor);
  });

  it("实例的__proto__.__proto__即Object的prototype", function(){
    var person = new Person();
    assert.strictEqual(person.__proto__.__proto__, Object.prototype);
  });

  /**
   * 当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到constructor 属性时，
   * 会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性，所以：
   */
  it("实例的构造函数和构造函数的原型的构造函数", function(){
    var person = new Person();
    assert(person.constructor === Person.prototype.constructor);
    assert(person.hasOwnProperty('constructor') === false);
    assert(Person.prototype.hasOwnProperty('constructor') === true);
  });

  /**
   * person中并没有__proto__属性, person.__proto__实际上调用了Object.getPrototypeOf(person)
   * Person.prototype.__proto__ 实际上调用了 Object.getPrototypeOf(Person.prototype)
   */
  it("__prot__是由Object.getPrototypeOf( instance )返回的", function(){
    var person = new Person();
    assert( person.hasOwnProperty('__proto__') === false );
    assert( person.__proto__ === Object.getPrototypeOf(person) );
  });

  it("一些额外的测试", function(){
    var obj = new Object();
    assert(obj.__proto__ === Object.prototype);
    assert(Person.prototype.__proto__ === Object.prototype);
  });

  it("Function.__proto__ === Function.prototype", function(){
    assert( Function.__proto__ === Function.prototype );
    assert( Function.hasOwnProperty('__proto__') === false );
    // console.log( Function.__proto__, Function.prototype, Object.getPrototypeOf(Function) );
  });
});