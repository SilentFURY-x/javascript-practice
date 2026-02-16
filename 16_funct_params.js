// function sayMyName() {
//     console.log("S")
//     console.log("K")
//     console.log("I")
//     console.log("P")
//     console.log("P")
//     console.log("E")
//     console.log("R")
// }

// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

// addTwoNumbers(10, 20)

// function addTwoNumbers2(num1, num2) {
//     return num1 + num2
// }

// console.log(`Result is ${addTwoNumbers2(10, 20)}`)

// function loginUserMessage(username) {
//     return `Hello ${username}, welcome to our website`
// }

// // console.log(loginUserMessage("Skipper"))
// console.log(loginUserMessage()) // undefined

// default value
function loginUserMessage2(username = "Sam") {
    return `Hello ${username}, welcome to our website`
}

console.log(loginUserMessage2())