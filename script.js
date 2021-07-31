
let tripInfo = [];

function pickDestination() {

    let places = ['Rome, Italy', 'Santorini, Greece', 'London, England', 'Paris, France', 'Lisbon, Portugal'];
    let userInput = prompt(`For random destination, pick a number 0 to ${places.length}`)

    for (let i = 0; i < places.length; i++) {
        if (userInput == i) {
            tripInfo.push(places[i])
            console.log(places[i])
        }
    }
    // prompt(`For random destination, pick a number 0 to ${places.length}`)
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

pickDestination();
