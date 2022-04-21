var chickens = [
    {name: "Margaret", age: 2, eggs: 0},
      {name: "Hetty", age: 1, eggs: 2},
      {name: "Henrietta", age: 3, eggs: 1},
      {name: "Audrey", age: 2, eggs: 0},
      {name: "Mabel", age: 5, eggs: 1}
    ]

var chickenNames = []

for(var chicken of chickens){
    var name = chicken.name
    chickenNames.push(name)
}

// console.log(chickenNames)

var chickensWithEggs = []

for(var chicken of chickens){
    if(chicken.eggs > 0){
        chickensWithEggs.push(chicken)
    }
}

// console.log(chickensWithEggs)


var chickensOver2 = []

for(var chicken of chickens){
    if(chicken.age > 2){
        chickensOver2.push(chicken)
    }
}

console.log(chickensOver2);
