// objects cont.

// const tinderUser = new Object() // singleton

const tinderUser = {}   

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Skipper",
            lastName: "Arjun"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} // objects inside objects
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2) // optional empty parentheses to act as target
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

// Array of objects from DB
const users = [
    {
        id: 1,
        name: "Skipper"
    },
    {
        id: 2,
        name: "Arjun"
    }
]

// console.log(users[1].name)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))