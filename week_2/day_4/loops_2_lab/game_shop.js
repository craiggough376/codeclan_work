var shop = {
    name: "Tigers Game Shop",
    location: "Glasgow",
    inventory: [
        {
        title: "Elden Ring",
        genre: "RPG",
        developer: "FromSoftware",
        ratings: {
            critics: 100,
            players: 100
        },
        platforms: ["PS", "XBOX", "PC"]
    },
        {
        title: "Fifa 22",
        genre: "Sport",
        developer: "EA",
        ratings: {
            critics: 19,
            players: 10
        },
        platforms: ["PS", "XBOX", "PC"]
    },
        {
        title: "Horizon Forbidden West",
        genre: "RPG",
        developer: "Guerrilla Games",
        ratings: {
            critics: 94,
            players: 89
        },
        platforms: ["PS", "PC"]
    },
        {
        title: "Halo Infinite",
        developer: "343 Industries",
        genre: "FPS",
        ratings: {
            critics: 95,
            players: 100
        },
        platforms: ["XBOX", "PC"]
    },
        {
        title: "Forza 5",
        developer: "Playground Games",
        genre: "Sport",
        ratings: {
            critics: 80,
            players: 75
        },
        platforms: ["XBOX", "PC"]
    },
        {
        title: "CyberPunk 2077",
        developer: "CD Projekt",
        genre: "RPG",
        ratings: {
            critics: 50,
            players: 40
        },
        platforms: ["XBOX", "PC"]
    },
        {
        title: "Call of Duty: Warzone",
        developer: "Raven Software",
        genre: "FPS",
        ratings: {
            critics: 25,
            players: 65
        },
        platforms: ["PS", "XBOX", "PC"]
    }
    ]
}


// 1. Console log the name and location of the shop
// console.log(shop.name, shop.location);
// 2. Console log the entire inventory
// console.log(shop.inventory);
// 3. Loop through the inventory and console log every game title
// for(var game of shop.inventory){
//     console.log(game.title);
// }
// 4. Loop through the inventory and console log the game title with its player rating
// for(var game of shop.inventory){
//     console.log(game.title, game.ratings.players);
// }
// 5. CyberPunk 2077 critic rating is too low. Find “CyberPunk 2077” in the inventory and change its critic rating to 75.
// for(var game of shop.inventory){
//     if(game.title === “CyberPunk 2077"){
//         game.ratings.critics = 75
//     }
// }
// console.log(shop.inventory);
// 6. We want a new array of only the game developers. Create a new array, loop through the inventory and add each developer to the new array
// var devs = []
// for(var game of shop.inventory){
//     var dev = game.developer
//     devs.push(dev)
// }
// console.log(devs);
// 7. We want a new array of only top tier games. Create a new array and only add games whos critic rating is over 90
// var topTierGames = []
// for(var game of shop.inventory){
//     if(game.ratings.critics > 90){
//         topTierGames.push(game)
//     }
// }
// console.log(topTierGames);
// 8. Create a new array that holds games that are only available on “PS” (Tricky!)
// var psGames = []
// for(var game of shop.inventory){
//     for(var platform of game.platforms){
//         if(platform === “PS”){
//             psGames.push(game)
//         }
//     }
// }
// console.log(psGames);

