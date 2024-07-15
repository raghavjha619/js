const user = {
    username:  "Raghav",
    price: 499,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcomne to the website`);
        console.log(this);
    },
}
 
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);

// function man(){
//     let fullusername =  "Raghav"
//     console.log(this);
// }
// const man = function () {
//     let fullusername =  "Raghav"
//     console.log(this);
// }
// man()

// const man = () => {
//     console.log(this);
// }

// const man = (num1, num2) => {
//     return num1 + num2
// }
// const man = (num1,num2) => (num1+num2)
const man = (num1,num2) => ({username: "Raghav"})
console.log(man(4,4))

