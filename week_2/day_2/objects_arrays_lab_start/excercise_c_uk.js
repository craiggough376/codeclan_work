united_kingdom = [
    {
      name: "Scotland",
      population: 5295000,
      capital: "Edinburgh"
    },
    {
      name: "Wales",
      population: 3063000,
      capital: "Swansea"
    },
    {
      name: "England",
      population: 53010000,
      capital: "London"
    }
  ]
  
//  1. Change the capital of Wales from `"Swansea"` to `"Cardiff"`.
united_kingdom[1].capital = "Cardiff"

//  2. Create an object for Northern Ireland and add it to the `united_kingdom` list (The capital is Belfast, and the population is 1,811,000).
var northernIreland = {
  name: "Nothern Ireland",
  population: 1811000,
  capital: "Belfast"
}
united_kingdom.push(northernIreland)

console.log(united_kingdom)