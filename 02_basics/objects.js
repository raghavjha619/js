//singleton 
// Object.create

//literals

const mysym = Symbol("key1")

const jsUser = {
    email: "raghavjha619@gmail.com",
    name: "Raghav Jha",
    "college name": "Army Institute Of Technology",
    isLoggedin: false,
    lastLoggedInDays: ["Monday", "Wednesday"],
    [mysym]: "mykey1"
}

console.log(jsUser.email);
console.log(jsUser["college name"]);
console.log(jsUser[mysym]);
console.log(typeof jsUser);

jsUser.email = "raghavjha@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "raghavjha@microsoft.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("swarup tmkc");
}
jsUser.greetingtwo = function(){
    console.log(`swarup son of ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());