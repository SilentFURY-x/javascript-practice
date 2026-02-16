// DAtes

let myDate = new Date()
//console.log(myDate)
//console.log(myDate.toString())
//console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2023, 0, 23, 5 ,3)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate2 = new Date("2023-01-23")

// console.log(myCreatedDate2.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myDate.getTime)

let newDate = new Date()
console.log(newDate.toLocaleString('default', { weekday: 'long' }))