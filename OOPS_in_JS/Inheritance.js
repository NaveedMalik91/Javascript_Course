// Inheritance: Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class or object to derive properties and behaviours from another.
//In Javascript we can achieve inheritance using extends keyword

class animal {
    constructor(name, color) {
        this.name = name
        this.color = color
        
    }
    run(){
        console.log(this.name + " is running")
    }

    shout(){
        console.log(this.name + " is shouting")

    }
}

class monkey extends animal{
    eatbanana(){
        console.log(this.name+" is eating banana")
    }
}

const obj = new animal("bruno","black")
obj.run()
const obj2 = new monkey("bandar","grey")
obj2.eatbanana()
obj2.run()