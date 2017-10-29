/**
 * 词法作用域
 */

var assert = require("assert");

describe("js的变量作用域是词法作用域,也就是说在书写代码的时候变量作用域就确定了", function(){

  it("例子1", function(){
    var scope = "global scope";
    function foo(){
      return scope;
    }

    assert( foo() === "global scope" );
  });

  it("例子2", function(){
    var scope = "global";
    function foo(){
      var scope = "local scope";
      function goo(){
        return scope;
      }
      return goo();
    }

    assert( foo() === "local scope" );
  });

  it("例子3", function(){
    var scope = "global scope";
    function foo(){
      var scope = "local scope";
      function goo(){
        return scope;
      }
      return goo;
    }

    assert( foo()() === "local scope" );
  });


  it("例子4:涉及变量提升和函数提升", function(){
    assert( foo() === undefined );
    var scope = "local scope";
    function foo() { return scope; }

  });
});