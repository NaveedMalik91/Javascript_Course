//prototype in javascript: Prototypes let JS objects inherit properties from other objects via a hidden [[Prototype]] link;
// every function has a prototype used when creating new instances

let obj = {
    name:"naveed",
    // run :()=>{
    //     alert("self run executed")
    // }
}



let proto_obj={
    name:"malik",
    run:()=>{
        alert("Proto object run executed")
    }
}
obj.__proto__ = proto_obj  //making proto_obj object as prototype of object = obj

obj.run() //if parent object doesn't have run method it will check the proto object




//classes: Blueprint/template of an object
// objects: Instance of an class wrapping all the functions and data members
  // Class definition
class Car {
  constructor(brand, model) {
    this.brand = brand; // property
    this.model = model; // property
  }

  // method
  showDetails() {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  }
}

// Creating objects from the class
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

// Using the objects
car1.showDetails(); // This car is a Toyota Corolla.
car2.showDetails(); // This car is a Honda Civic.