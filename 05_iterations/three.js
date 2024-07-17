// for of

const arr = [1, 2, 4, 5];
for (const num of arr) {
    // console.log(num);
}
const greetings = 'HELLO WORLD'
for (const greet of greetings) {
    // console.log(`each value of the array is: ${greet}`);
}

//maps

const myMap = new Map()
myMap.set('IN','India')
myMap.set('USA','United States of America')
myMap.set('FR','France')
myMap.set('IN','Bharat')

for (const [key,value] of myMap) {
    console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'Tomb Raider',
//     game2: 'Valorant'
// }
// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }