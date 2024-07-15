const tinder = new Object()

tinder.id = "1234"
tinder.name = "ronnie"
tinder.isLoggedIn = false

// console.log(tinder);

const regularuser = {
    email: "raghavjha619@gmail.com",
    fullname: {
        userfullname: {
            check: {
                empty: "emptykey",
            },
            firstname: "Raghav",
            lastname: "Jha"
        },
        developerfullname: {
            firstname: "confidential"
        }
    }
}

// console.log(regularuser.fullname.userfullname.lastname);
// console.table(regularuser)

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj3 = { 5: "a", 6: "b"}
// const objn = {obj1,obj2,obj3}
// const objn = Object.assign({}, obj1, obj2, obj3)

const objn = {...obj1, ...obj2,...obj3}

console.log(objn);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(tinder);

console.log(Object.keys(tinder)[1]);
console.log(Object.values(tinder));
console.log(Object.entries(tinder));
// returns value in array

console.log(tinder.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Raghav"
}

const {courseInstructor} = course
const {coursename: name} = course

console.log(courseInstructor);
console.log(name);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
//json file syntax