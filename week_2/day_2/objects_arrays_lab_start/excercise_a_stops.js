var stops = [ "Croy", "Cumbernauld", "Falkirk High", "Linlithgow", "Livingston", "Haymarket", "Dunfermline" ]


// 1. Remove "Dunfermline" from the end of the array
stops.pop()

// 2. Add "Edinburgh Waverley" to the end of the array
stops.push("Edinburgh Waverly")

// 3. Add "Glasgow Queen St" to the start of the array
stops.unshift("Glasgow Queen Street")

// 4. Print out the index position of "Linlithgow"
console.log(stops.indexOf("Linlithgow"))

// 5. Remove "Livingston" from the array using its index
stops.splice(5, 1)

// 6. Add "Polmont" at the appropriate point (between "Falkirk High" and "Linlithgow")
stops.splice(4, 0, "Polmont")

// 7. Print the number of stops there are in the array
console.log(stops.length);

// 8. Sort the array alphabetically
stops.sort()

// 9. Reverse the positions of the stops in the array
stops.reverse()

console.log(stops);