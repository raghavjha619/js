// arrays

const myArray  = [0, 1, 2, 3, 4, 5, true, "anyDatatype"]
const heroes = ["Thor", "spidy"]
const myArray2 = new Array(1, 2, 3, 4, 5, 6, 7)

console.log(myArray[6]);

//Array methods

myArray2.push(6)
myArray2.pop()
myArray2.unshift(9)
//adds element to the beginning of the array , not prefered as it changes the index of all the elements suceeding it, so it is not prefferd 

console.log(myArray2);
console.log(myArray2.includes(2));
// gives true or false

const Arr = myArray.join()
console.log(Arr);


const mna = myArray2.slice(1,3)
console.log(`sliced ${mna}`);
console.log(`original array ${myArray2}`);
// slice does not affect the original array

const mna2 = myArray2.splice(1,3)
console.log(`spliced ${mna2}`);
console.log(`original ${myArray2}`);
//splice affects the original array as well and inludes both the ranges
