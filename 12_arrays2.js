const marvelHeroes = ["thor", "spiderman", "ironman"]
const dcHeroes = ["superman", "flash", "batman"]

// marvelHeroes.push(dcHeroes) // entire array pushed in the array
// console.log(marvelHeroes)

// const allHeroes = marvelHeroes.concat(dcHeroes)

// console.log(allHeroes)

// // using spread operator
// const allNewHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allNewHeroes)

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9]]]

// const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray)

console.log(Array.isArray("Skipper"))
console.log(Array.from("Skipper"))
console.log(Array.from({name: "Skipper"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
