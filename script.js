
let tripInfo = [];

function destination() {

    let places = ['Rome, Italy', 'Santorini, Greece', 'London, England', 'Paris, France', 'Lisbon, Portugal'];
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
    let food = ['Steakhouse', 'Foodtruck', 'Vegan House', 'Old Country kitchen', 'Seafood'];
    let userInput = prompt(`For a place to eat, pick a number 0 to ${food.length}`)

    for (let i = 0; i < food.length; i++) {
        if (userInput == i) {
            tripInfo.push(food[i])
            console.log(food[i])
        }
    }

}


function restaurant() {
    let food = ['Steakhouse', 'Foodtruck', 'Vegan House', 'Old Country kitchen', 'Seafood'];
    let userInput = prompt(`For a place to eat, pick a number 0 to ${food.length}`)

    for (let i = 0; i < food.length; i++) {
        if (userInput == i) {
            tripInfo.push(food[i])
            console.log(food[i])
        }
    }

}


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
