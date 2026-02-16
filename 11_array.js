// Array

// Array is a collection of items

// Can hold different data types

// Resizeable

// Zero based indexing

// Array is an object

// shallow copies

const myArray = [1, 2, 3, 4, 5]
console.log(myArray)

// const myHeros = ["spiderman", "batman", "superman"]
// console.log(myHeros)

// const anotherArray = new Array(6, 7, 8, 9)
// console.log(anotherArray)

// Array Methods

// myArray.push(6)
// console.log(myArray)

// myArray.push(7)
// console.log(myArray)

// myArray.pop()
// console.log(myArray)

// myArray.unshift(9) // insert at the start
// console.log(myArray)

// myArray.shift() // remove from the start
// console.log(myArray)

// const newArray = myArray.join()

// console.log(myArray)
// console.log(newArray)


// slice, splice

console.log("A", myArray)

const myn1 = myArray.slice(1, 3)
console.log(myn1)
console.log("B", myArray)

const myn2 = myArray.splice(1, 3)
console.log(myn2)
console.log("C", myArray)
