//Method overriding in js defined as, when a subclass defines a same method
//as that of parent class with exact same definition and replacing the original 
//behaviour of parent class method.

//By using super keyword in base class we can override the parent class
//and we can perform updations on that. when we are using super keyword
// it calls the base class method and override its implementation

class employee {
    constructor(name,leaves) {
        this.name = name
        this.leaves = leaves
    }
    getleaves(){
        console.log("You are given "+this.leaves+" leaves-auto-approved")
    }
}

class programmer extends employee{
    getleaves(){
        console.log("Base class method invoked")
        super.getleaves()
        console.log("You are given  leaves (one extra)")
    }
}

const obj = new employee("naveed", 5)
obj.getleaves();

const obj2 = new programmer("naveed", 5)
obj2.getleaves();




//Constructor overriding: In sub class we can use super keyword in the constructor of
//sub class to override the base class constructor

//When we derive a class it is mandatory to call base class constructor with super

class school {
    constructor(name) {
        console.log("WELCOME TO UNITED PUBLIC HR.SEC. SCHOOL")
        
    }
}
class student extends school{
    constructor(name, age){
        super(name) //will invoke the base class constructor and perform updations to override the constructor
        this.name = name;
        this.age = age
    }
    getdetails(){
        console.log("The student belongs to "+this.name+" school")
        console.log("The age of student is ",this.age)
    }
}

const naveed = new student("United public hr. sec.", 15)
naveed.getdetails();


