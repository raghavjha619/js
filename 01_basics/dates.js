// Dates

let dates = new Date()
// console.log(dates);
// console.log(dates.toString());
// console.log(dates.toLocaleDateString());
// console.log(dates.toLocaleString());

// let myCreatedDate = new Date(2024, 6, 3)
let myCreatedDate = new Date(2003, 11, 27, 5, 53, 41)
// let myCreatedDate = new Date("2024-07-03")
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

console.log(myCreatedDate.toLocaleString('default', {
    weekday: "long"
}))