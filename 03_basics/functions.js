
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Raghav",
    Price: 199
}

function handleObject(anyobject){
    console.log(`${anyobject.username } is the username and the price is ${anyobject.Price}`);
}

// handleObject(user)

handleObject({
    username: "Raghav",
    Price: 199
})

const myNewArray = [200,400,100,699]
function returnSecondValue(anyarray){
    console.log(anyarray[1]);
}

returnSecondValue(myNewArray)