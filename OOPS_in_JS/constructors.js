// A constructor function is a special type of function in JavaScript that is used to create and initialize objects.
//it doesnot have return type and donot return values

class student {
    constructor(name, age) {
        this.age = age;
        this.name=name;
    }

    getdetails(){
        alert(`The name of student is ${this.name} and age is ${this.age}`)
    }
}

const obj = new student("naveed malik", 23)
obj.getdetails()