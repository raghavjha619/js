let name = "Raghav"
let goals = 2

// console.log(name + " scored "+ goals + " goals");

console.log(`${name} scored ${goals} goals`);

const game = new String("valorant riot")
console.log(game);
// console.log(game[8]);
// console.log(game.__proto__);
// console.log(game.toUpperCase());
// console.log(game.indexOf("t"));
// console.log(game.charAt(4));


const newGame = game.substring(0,4)
console.log(newGame);

const newgame = game.slice(-12,4)
console.log(newgame);
const url = "https://raghav.com%20jha"

console.log(url.replace('%20',' '));
console.log(game.split(' '));