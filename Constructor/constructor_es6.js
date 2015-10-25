'use strict';


// The standardization of es6 has made it easier to create 
// objects by mocking the existance of classes in Javascript. 

class Car {

  constructor( model, year, miles ){
    this.model = model;
    this.year = year;
    this.miles = miles;
  }

  toString(){
    return this.model + ' has done ' + this.miles + ' miles.'
  }

}

let civic = new Car('Honda Civic', 2009, 20000);
let mondeo = new Car('Ford Mondeo', 2010, 5000);

// By using this way of defining a constructor for an object,
// it is a lot easier to create objects and their defining
// functions. Be aware that this is only a wrapper around the
// the contructor_with_prototype way of doing things. Lying
// underneath is the same prototype object we used before. 