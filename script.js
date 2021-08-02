

let placesArr = [];
let foodArr = [];
let transArr = [];
let entertainmentArr = [];

function destination() {

    let places = ['Rome, Italy', 'Santorini, Greece', 'London, England', 'Paris, France', 'Lisbon, Portugal'];
    let userInput = prompt(`For destination, pick a number 0 to ${places.length - 1}`)

    for (let i = 0; i < places.length; i++) {
        if (userInput == i) {
            placesArr.push(places[i])

        }
    }
    if (userInput > places.length - 1) {
        console.log('Please enter number 0 to 4')
        destination();
    }
}


function restaurant() {
    let food = ['Steakhouse', 'Foodtruck', 'Noodle House', 'Old Country kitchen', 'Seafood Restaurant'];
    let userInput = prompt(`For a place to eat, pick a number 0 to ${food.length - 1}`)

    for (let i = 0; i < food.length; i++) {
        if (userInput == i) {
            foodArr.push(food[i])

        }
    }
    if (userInput > food.length - 1) {
        console.log('Please enter number 0 to 4')
        restaurant();
    }
}



function transportation() {
    let transport = ['moped', 'taxi', 'local bus', 'Jeep', 'car rental'];
    let userInput = prompt(`For means of transportation, pick a number 0 to ${transport.length - 1}`)

    for (let i = 0; i < transport.length; i++) {
        if (userInput == i) {
            transArr.push(transport[i])

        }
    }
    if (userInput > transport.length - 1) {
        console.log('Please enter number 0 to 4')
        transportation();
    }
}


function entertainment() {
    let things = ['on an adventurous tour of the City', 'wine and cheese tasting from the local vineyard', 'horseback riding', 'to a panoramic viewpoint of the city', 'to the Historic Museum'];
    let userInput = prompt(`For things to do, pick a number 0 to ${things.length - 1}`)

    for (let i = 0; i < things.length; i++) {
        if (userInput == i) {
            entertainmentArr.push(things[i])

        }
    }
    if (userInput > things.length - 1) {
        console.log('Please enter number 0 to 4')
        entertainment();
    }
}

function itinerary() {
    let userInput = prompt(`Tomorrow morning you you be flying out to ${placesArr[0]}. You will be taking a ${transArr[0]} to get around town. Your activity of the day will be going ${entertainmentArr[0]}, followed by dinner at the local ${foodArr[0]}. Please confirm if this sounds like a trip you would love to take? please type 'yes' or 'no'`);

    if (userInput === 'yes') {
        console.log('Your Trip has been Booked!!!!!!!, please check email for details!')
    } else if (userInput === 'no') {
        let changeOption = prompt("Which part of the trip didn't you like? For destination Press 1, Restaurant Press 2, Transportation Press 3, Entertainment Press 4");
        if (changeOption == 1) {
            destination();
            placesArr.shift();
            itinerary();
        } else if (changeOption == 2) {
            restaurant();
            foodArr.shift();
            itinerary();
        } else if (changeOption == 3) {
            transportation();
            transArr.shift();
            itinerary();
        } else if (changeOption == 4) {
            entertainment();
            entertainmentArr.shift();
            itinerary();
        }
    } else {
        itinerary();
    }

}


destination();
restaurant();
transportation()
entertainment()
itinerary()
