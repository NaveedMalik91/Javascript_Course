// The getter uses the get keyword and the
// setter uses the set keyword to modify and retrieve the values.
class getter {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

const res1 = new getter('Anjali');
console.log(res1.name);


class setter {
    constructor(name) {
        this._name = name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const res2 = new setter('Anjali');
res2.name = 'Ayushi'; // Using the setter to change the name
console.log(res2._name); // Output: Ayushi


console.log(res2 instanceof setter) //true
console.log(res1 instanceof setter) //false