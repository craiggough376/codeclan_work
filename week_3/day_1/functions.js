function sayHello(name){
    // console.log("Hello " + name)
    var greeting = "Hello " + name
    return greeting
}


var newGreeting = sayHello("Craig")

// console.log(newGreeting)


function timeOfDay(time, date){
    var timeAndDate = "The time is " + time + " on " + date
    return timeAndDate
}

var todaysDate = timeOfDay("10:48", "11th of April")
// console.log(todaysDate)

var todaysDate2 = timeOfDay("11:25", "12th of April")
// console.log(todaysDate2)



// Calculator

function add(firstNumber, secondNumber){
    var result = firstNumber + secondNumber
    return result 
}

var answer = add(1, 4)
// console.log(answer)

// subtract, multiply and divide 

function subtract(num1, num2){
    return num1 - num2
}

function divide(num1, num2){
    return num1 / num2
}

function multipy(num1, num2){
    var result = num1 * num2
    // console.log(result)
}

multipy(3, 4)
multipy(8, 4)


// i want to pass in a string and get returned the length of the string
var name = "Craig"


function lengthOfAString(string){
    var length = string.length
    return length
}

var lengthOfName = lengthOfAString(name)
// console.log(lengthOfName)



// I want the total length of 2 strings added together

var name1 = "Craig"
var name2 = "Gough"

function lengthOf2Strings(string1, string2){
    var total = string1.length + string2.length
    return total
}

console.log(lengthOf2Strings(name1, name2))


