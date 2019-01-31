//prototype allows to add properties and functions dynamically.

function Bike(model,color){
    this.model = model,
    this.color = color
  }

  var bikeObj2 = new Bike('BMW','White');
  
  console.log(bikeObj2.getDetails()); // will throw error , As function is not registered yet
  console.log(bikeObj2.price);// will return undefined , As property is not registered yet

  Bike.prototype.getDetails = function(){
   return this.model+' bike is '+this.color;
  }
  Bike.prototype.price=1000;

  var bikeObj1 = new Bike('BMW','Black');
  console.log(bikeObj1.getDetails());