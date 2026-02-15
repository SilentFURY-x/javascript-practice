// Primitive

// 7 types :
// 1. string
// 2. number
// 3. bigint
// 4. boolean
// 5. undefined
// 6. symbol
// 7. null


// Reference (Non-Primitive)

// Arrays, Objects, Functions

// Array

const arr = ["Hello", "World"]

// Object
const obj = {
  greeting: "Hello",
  location: "World"
}

// Function
// const myFunction = function() {
//     console.log("Hello, World!");
// }

// console.log(typeof arr) // object
// console.log(typeof obj) // object
// console.log(typeof myFunction) // function






// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non - Primitive)

let myName = "FURY"
let anotherName = "youtube"
anotherName = "Something else"

console.log(myName)
console.log(anotherName)


// // stored in heap, so same reference
// let userOne = {
//     email: "example.com",
//     UPI: 30
// }

// let userTwo = userOne
// userTwo.email = "newemail.com"

// console.log(userOne.email)
// console.log(userTwo.email)
