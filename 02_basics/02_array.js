const marvel_heroes = ["thor", "ironman", "loki"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes)
// array k andar aaray aajayega instead of merge

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

//push existing array pe psuh krta hai
// concat naya array create krta hai

// generally use spread
const all_new_heros = [...marvel_heroes,...dc_heroes]

//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// gives all in one single array

console.log(real_another_array);

console.log(Array.isArray("Jago"))
console.log(Array.from("Jago"));
console.log(Array.from({name: "Jago"}));
//interesting case keys se array batanaa padega

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));


