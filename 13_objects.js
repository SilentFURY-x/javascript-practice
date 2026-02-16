// objects

// singleton (contructor makes singleton)
// object literal doesn't make singleton


// using constructor
// const mySingleton = new Object()
// console.log(mySingleton)

// // OR

// Object.create()

// using object literal

const mySymbol = Symbol("key1")

const myObject = {
    name: "Skipper", // key processed as string
    age: 21,
    isStudent: true,    
    [mySymbol]: "mySymbol",
}


// console.log(myObject)
// console.log(myObject.name)
// console.log(myObject["name"])
// console.log(myObject["age"])
// console.log(myObject[mySymbol])

// myObject.name = "Arjun"
// console.log(myObject["name"])

// Object.freeze(myObject)

// myObject.name = "Skipper"
// console.log(myObject["name"])

myObject.greeting = function() {
    console.log(`Hello JS, my name is ${this.name}`)
}

console.log(myObject.greeting())

