const marvelh = ["thor", "ironman", "captain-america", "hulk"];
const dch = ["batman", "superman", "wonderwomen"];
// marvelh.push(dch)
// console.log(marvelh);
// console.log(marvelh[4][0]);

const allh = marvelh.concat(dch);
console.log(allh);

const allnh = [...marvelh, ...dch]; //prefered over concat as we can add many arrays
console.log(allnh);

const anotherarray = [1, 2, 3, 4, 5, [9, 7], [11, [46, 65]]];
const realanotherarray = anotherarray.flat(Infinity)
console.log(realanotherarray);

console.log(Array.isArray("Raghav"));
console.log(Array.from("Raghav"));
console.log(Array.from({name: "Raghav"})); // intersting

let score1 = 63
let score2 = 68
let score3 = 61

console.log(Array.of(score1,score2,score3));