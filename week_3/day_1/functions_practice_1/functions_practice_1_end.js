// Functions Practice! 

// Complete each question by console logging the result of the function
// Think about what your functions and variable names should be called.
// Remember to comment out previous answers so variable names dont clash!


// 1. Create a function that can take a string as an argument, and will return the length of the string
// Eg. Takes in "CodeClan" as an argument and returns 8

function lengthOfString(string){
    return string.length
}
// console.log(lengthOfString("CodeClan"));


// 2. Create a function that can take 3 strings as an argument and will return the total length of all 3 strings
// Eg. Takes in "Code", "Clan", "Glasgow" and returns 15

function lengthOf3Strings(string1, string2, string3){
    return string1.length + string2.length + string3.length
}
// console.log(lengthOf3Strings("Code", "Clan", "Glasgow"))


// 3. Create a function that takes in a string and returns the string in upper case 
// Eg. Takes in "CodeClan" and returns "CODECLAN"

function upperCaseString(string){
    return string.toUpperCase()
}
// console.log(upperCaseString("CodeClan"));

// 4. Create a function that takes in a string and returns the string in lower case 
// Eg. Takes in "CodeClan" and returns "codeclan"

function lowerCaseString(string){
    return string.toLowerCase()
}
// console.log(lowerCaseString("CodeClan"))

// 5. Create a function that takes in a string and returns the first letter (Strings can work like arrays!)
// Eg. Takes in "CodeClan" and returns "C"

function firstLetter(string){
    return string[0]
}
// console.log(firstLetter("CodeClan"));

// 6. Create a function that will take in a string and return the first 3 letters of the string
// Eg. Takes in "CodeClan" and returns "Cod"

function first3Letters(string){
    return string.slice(0, 3)
}
// console.log(first3Letters("CodeClan"));

// 7. Create a function that will take in 2 strings, one for a name and one for a height, and return them in a sentence saying for example "Hi John, you are 5'11".
function nameAndHeight(name, height){
    return "Hi " + name + ", you are " + height
}
// console.log(nameAndHeight("John", "5'11"))


// Extension Questions (Might need google)

// 8. Create a function that takes in a string and returns it as an array 
// for example it takes in "CodeClan" and returns ["C", "o", "d", "e", "C", "l", "a", "n"]

function turnStringToArray(string){
    return string.split("")
}
// console.log(turnStringToArray("CodeClan"))

// 9. Create a function that takes a string as an argument, and returns it in reverse
function reverseString(string){
    return string.split("").reverse().join("")
}
// console.log(reverseString("CodeClan"))

// 10. Create a function that will return the longest of 3 given strings
function longestString(string1, string2, string3){
    var longest = string1
    if(string2.length > longest.length){
        longest = string2
    }
    if(string3.length > longest.length){
        longest = string3
    }
    return longest
}
// console.log(longestString("I", "enjoy", "code"))