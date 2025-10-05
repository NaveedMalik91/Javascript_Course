//Static methods are those methods which are created using static keyword
//such methods doesn't belong to a particular object but it belongs to whole class
//Accesed by using the classname along
class animal {
    constructor(name) {
        this.name = name
    }

    //static method to make first letters capital of any object's name field
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }

    getname(){
        console.log("The name of animal is "+ animal.capitalize(this.name))
    }
}

const obj1 = new animal("zebra")
const obj2 = new  animal("lion")

obj1.getname()
obj2.getname()