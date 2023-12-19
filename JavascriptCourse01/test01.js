let data = "names"

let userOne = {
    name: "Jack",
    phone: 10101
}

let userTwo = {
    name: "John",
    phone: 45639
}

console.log(userOne)
userOne = userTwo
userTwo.phone = 9999
console.log(userOne)

console.log(data);