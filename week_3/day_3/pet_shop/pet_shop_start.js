var myPetShop = {
    admin: {
        total_cash: 1000,
        pets_sold: 0,
    },
    name: "Camelot of Pets",
    pets: [
        {
            name: "Sir Percy",
            pet_type: "cat",
            breed: "British Shorthair",
            price: 500
        },
        {
            name: "King Bagdemagus",
            pet_type: "cat",
            breed: "British Shorthair",
            price: 500
        },
        {
            name: "Sir Lancelot",
            pet_type: "dog",
            breed: "Pomsky",
            price: 1000,
        },
        {
            name: "Arthur",
            pet_type: "dog",
            breed: "Husky",
            price: 900,
        },
        {
            name: "Tristan",
            pet_type: "cat",
            breed: "Basset Hound",
            price: 800,
        },
        {
            name: "Merlin",
            pet_type: "cat",
            breed: "Egyptian Mau",
            price: 1500,
        }
    ]
}



var pet1 = {
    name: "Norman",
    pet_type: "dog",
    breed: "Husky",
    price: 4000,
}


// 1. Create a function to return a pet shops name

function getPetShopName(petShop){
    return petShop.name
}

// console.log(getPetShopName(myPetShop))

// 2. Create a function that will return a pet shops total cash

function getTotalCash(petShop){
    return petShop.admin.total_cash
}

// console.log(getTotalCash(myPetShop))

// 3. Create a function that can take in an amount of money and add it to a pet shops total cash

function addCash(petShop, amount){
    petShop.admin.total_cash += amount
}

// addCash(myPetShop, 10)
// console.log(getTotalCash(myPetShop))

// 4. Create a function that can take in an amount of money and remove it from a pet shops total cash

function removeCash(petShop, amount){
    petShop.admin.total_cash -= amount
}

// removeCash(myPetShop, 10)
// console.log(getTotalCash(myPetShop))

// 5. Create a function that can add 1 to a pet shops amount of pets sold

function addToAmountSold(petShop){
     petShop.admin.pets_sold += 1
}

// console.log(myPetShop.admin.pets_sold)

// 6. Create a function that can return how many pets a pet shop has in its stock

function stockCount(petShop){
    return petShop.pets.length
}

// console.log(stockCount(myPetShop))

// 7. Create a function that can return a pet from a pet shop, by its name

function getPetByName(petShop, searchName){
    for(var pet of petShop.pets){
        if(pet.name === searchName){
            return pet
        }
    }
    return "Not Found"
}

// console.log(getPetByName(myPetShop, "Tristan"))

// 8. Create a function that can return the total cost of all pets in a pet shop

function getAllPetsCost(petShop){
    var total = 0
    for(var pet of petShop.pets){
        total += pet.price
    }
    return total
}

// console.log(getAllPetsCost(myPetShop))

// 9. Create a function that can return all the pets for a given breed

function getPetsByBreed(petShop, searchBreed){
    var foundPets = []
    for(var pet of petShop.pets){
        if(pet.breed === searchBreed){
            foundPets.push(pet)
        }
    }
    return foundPets
}

// console.log(getPetsByBreed(myPetShop, "British Shorthair"))

// 10. Create a function that can add a pet to stock (You can use pet1 above to add)

function addPetToStock(petShop, pet){
    petShop.pets.push(pet)
}


addPetToStock(myPetShop, pet1)
// console.log(myPetShop.pets)

// 11. Create a function that can remove a pet from stock
//. Hint: Use pet1, find its index and remove with splice

function removePet(petShop, pet){
    var index = petShop.pets.indexOf(pet)
    petShop.pets.splice(index, 1)
}

// removePet(myPetShop, pet1)
// console.log(myPetShop.pets)


// 12. Sell a pet: Create a function that can remove a pet from stock, and also add the cost of the pet to the total cash of the shop, and also add 1 to the amount of pets sold.

function sellPet(petShop, pet1){
    removePet(petShop, pet1)
    addCash(petShop, pet1.price)
    addToAmountSold(petShop)
}

// sellPet(myPetShop, pet1)

// console.log(myPetShop)