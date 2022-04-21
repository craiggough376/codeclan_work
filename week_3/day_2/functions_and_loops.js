function lengthOfString(string){
    var length = string.length
    return length
}

var lengthOfCraig = lengthOfString("Craig")

// console.log(lengthOfCraig)



var myNumbers = [1, 2, 3, 4, 5, 6]
var myNumbers2 = [32, 12, 56, 3, 18]

function totalNumbers(numbers){
    var total = 0
    for(var number of numbers){
        total = number + total
    }
    return total
}

// console.log(totalNumbers(myNumbers))
// console.log(totalNumbers(myNumbers2))

function getEvens(numbers){
    var evens = []
    for(var number of numbers){
        if(number % 2 === 0){
            evens.push(number)
        }
    }
    return evens
}

// console.log(getEvens(myNumbers))
// console.log(getEvens(myNumbers2))

chickens = [
    { "name": "Margaret", "age": 2, "eggs": 0 },
    { "name": "Hetty", "age": 1, "eggs": 2 },
    { "name": "Henrietta", "age": 3, "eggs": 1 },
    { "name": "Audrey", "age": 2, "eggs": 0 },
    { "name": "Mabel", "age": 5, "eggs": 1 },
  ]


function getNames(chickens){
    var names = []
    for(var chicken of chickens){
        names.push(chicken.name)
    }
    return names
}

// console.log(getNames(chickens))


// Make a function that takes in chickens and returns the total amount of eggs

function totalEggs(chickens){
    var totalEggs = 0
    for(var chicken of chickens){
        totalEggs = chicken.eggs + totalEggs
    }
    return totalEggs
}

// console.log(totalEggs(chickens))


var users = [
    {name: "Tom", age: 43, account: "Premium", money: 300},
    {name: "Anna", age: 25, account: "basic", money: 540},
    {name: "Kim", age: 40, account: "basic", money: 120},
    {name: "Billy", age: 68, account: "Premium", money: 80},
    {name: "Estaban", age: 32, account: "basic", money:1000},
    {name: "Gary", age: 73, account: "Premium", money:25},
]

function getUserByName(users, name){
    for(var user of users){
        if(user.name === name){
            return user
        }
    }
    return "Not found"
}

console.log(getUserByName(users, "Gary"))
console.log(getUserByName(users, "Craig"))