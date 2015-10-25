'use strict';
/*
  Modules are ways for us to implement namespacing for parts 
  of our code. This means that we keep the global namespace
  clean and we control what parts of our code is accessible
  to other functions and variables outside of our module. 

*/

// Barbones implementation of a module

var myNamespace = (function(){

  // Closure prevents these variable from interfering with 
  // outside code or being accessed by any members not 
  // contained within 'myNamespace' 

  // Private Variable
  var myPrivateVar = 0;

  // Private Method
  var myPrivateMethod = function ( foo ){
    console.log(foo);
  }

  // Below we determine which variables and methods
  // will be accessible by the public by returning an
  // object with the properties we desire. Each of the
  // properties here have access to our private members
  // because they are still within the scope of 'myNamespace'.

  return {
    
    myPublicVar: 'foo',

    myPublicMethod: function( bar ) {
      myPrivateVar++;

      myPrivateMethod(bar);
    },

    getMyPrivateVar: function(){
      console.log(myPrivateVar);
    }
  };

})();


// USAGE

var gloabalVar = myNamespace.myPublicVar; // 'foo'
myNamespace.myPublicMethod('Calling from Inside myNamespace');
myNamespace.getMyPrivateVar(); // '1'