function Car(model, year, miles){

  this.model = model;
  this.year = year;
  this.miles = miles;

}

// Add any methods that should be a part of the object
// to the prototype. This is done so that the functions
// are not redefined everytime an instance of Car is 
// created. 

Car.prototype.toString() = function (){
  return this.model + ' has done ' + this.miles + ' miles.';
}

// Usage

var civic = new Car('Honda Civic', 2009, 20000);
var mondeo = new Car('Ford Mondeo', 2010, 5000);


console.log( civic.toString() );
console.log( mondeo.toString() );

// A single instance of toString() will be shared among all
// of the Car objects. You can make changes to the toString()
// method directly and it will reflect across all Car objects.