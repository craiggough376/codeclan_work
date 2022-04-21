
var users = [
    {name: "Harry", age: 23, money: 59, account: "basic"},
    {name: "Mary", age: 54, money: 12, account: "premium"},
    {name: "Steve", age: 29, money: 8, account: "basic"},
    {name: "William", age: 49, money: 100, account: "premium"},
    {name: "Lisa", age: 33, money: 120, account: "premium"},
    {name: "Tim", age: 20, money: 120, account: "basic"},
]

// 1. Loop through the users and console log each user object

for(var user of users){
    console.log(user);
}

// 2. Loop through the users and console log both their name and age

for(var user of users){
    console.log(user.name, user.age);
}

// 3. Get the total amount of money for all the users

var total = 0
for(var user of users){
    total += user.money;
}
console.log(total);

// 4. Console log only the users that are over the age of 30

for(var user of users){
    if(user.age > 30){
        console.log(user);
    }
}

// 4. Console log only the users that have less than £100

for(var user of users){
    if(user.money < 100){
        console.log(user);
    }
}

// 5. Console log the users who are under the age of 30 AND have more than £10

for(var user of users){
    if(user.money > 10 && user.age < 30){
        console.log(user);
    }
}

// 6. Console log the users who have a premier account OR at least £100 in their account

for(var user of users){
    if(user.money >= 100 || user.account === "premium"){
        console.log(user);
    }
}

// 7. Change everyone who has a "basic" account to have a "standard" account

for(var user of users){
    if(user.account === "basic"){
        user.account = "standard";
    }
}
console.log(users);

// 8. Premium account owners should get a bonus. Add 10 to their money

for(var user of users){
    if(user.account === "premium"){
        user.money += 10;
    }
}
console.log(users);