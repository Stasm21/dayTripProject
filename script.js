
let tripInfo = [];

function destination() {

    let places = ['Mt. Hood for a breathtaking adventure', 'Portland Art Museum', 'Oregon Zoo', 'Pittock Mansion for an incredible view of the City', 'Trout fishing at Trillium lake'];
    let userInput = prompt(`For destination, pick a number 0 to ${places.length}`)

    for (let i = 0; i < places.length; i++) {
        if (userInput == i) {
            tripInfo.push(places[i])
            console.log(places[i])
        }
    }
    // prompt(`For random destination, pick a number 0 to ${places.length}`)
}



function restaurant() {
    let food = ['Steakhouse', 'Foodtruck', 'Vegan House', 'Old Country kitchen', 'Seafood Restaurant'];
    let userInput = prompt(`For a place to eat, pick a number 0 to ${food.length}`)

    for (let i = 0; i < food.length; i++) {
        if (userInput == i) {
            tripInfo.push(food[i])
            console.log(food[i])
        }
    }
}



function transportation() {
    let transport = ['Moped', 'taxi', 'Local bus', 'bicycle', 'car rental'];
    let userInput = prompt(`For a means of transportation, pick a number 0 to ${transport.length}`)

    for (let i = 0; i < transport.length; i++) {
        if (userInput == i) {
            tripInfo.push(transport[i])
            console.log(transport[i])
        }
    }
}


function entertainment() {
    let things = ['on a historic tour of the City', 'wine and cheese tasting from the local vineyard', 'horseback riding', 'to a viewpoint of the city', 'to the Museum'];
    let userInput = prompt(`For things to do, pick a number 0 to ${things.length}`)

    for (let i = 0; i < things.length; i++) {
        if (userInput == i) {
            tripInfo.push(things[i])
            console.log(things[i])
        }
    }
}


function


// function doStuff(){
//     let colors = ["red", "blue", "green"]
//     let userInput = prompt("What color are you looking for?")
//      let isFound = false;
//     for (let i = 0; i < colors.length; i++) {
//         if(colors[i] == userInput){
//             console.log(`We found the color ${userInput}`)
//              isFound = true;
//         }
//     }
//     if(isFound == false){
//         console.log("We dont have that color in the array")
//     }
//  }

// doStuff();

destination();
restaurant();
transportation()
entertainment()
console.log(tripInfo)
