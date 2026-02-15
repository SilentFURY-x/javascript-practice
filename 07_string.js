// const name = "FURY"
// const repoCount = 29

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("FURY")

// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toUpperCase()) // Original value not changed 
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('R'))

const anotherString = gameName.slice(-8, 2)
console.log(anotherString)

const url = "https://www.youtube.com/channel/Silent Fury Gaming"
console.log(url.replaceAll(' ', '-'))

console.log(gameName.__proto__)