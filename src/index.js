// <-------------------------------------------->Class Imports
import Traveler from './classes/Traveler';

// <-------------------------------------------->CSS Imports
// CSS or SCSS example:

import './css/base.scss';
// import './css/footer.scss';
// import './css/queries.scss';

// <-------------------------------------------->Images
// image example --- also need to link to it in the index.html

// import './images/Beach.jpg'
import './images/user.png';

// <-------------------------------------------->QuerySelectors
let greeting = document.querySelector('.Greeting');
let expenses = document.querySelector('.YTD-Expenses');
let userFullName = document.querySelector('.User-Full-Name');

let dateField = document.querySelector('#Date');
let durationField = document.querySelector('#Duration');
let destinationField = document.querySelector('#Destination');
let travelersField = document.querySelector('#Num-Of-Travelers');
let checkDetails = document.querySelector('.Check-Details');
let readyStatus = document.querySelector(`.Ready-Status`);
let tripTotal = document.querySelector(`.Trip-Total`);
let bookButton = document.querySelector(`.Book-Button`);


let pastHeader = document.querySelector('.Past-Header');
let presentHeader = document.querySelector('.Present-Header');
let upcomingHeader = document.querySelector('.Upcoming-Header');
let pendingHeader = document.querySelector('.Pending-Header');

// <-------------------------------------------->Class Declarations
let traveler;

// <-------------------------------------------->Event Listeners
window.onload = () => {
    createClasses();
    getDataAndShowDom();
};

checkDetails.addEventListener('click', checkDetailsFunction);

// <-------------------------------------------->Functions
function getDataAndShowDom() {
    // console.log(traveler.getTripData());
    Promise.all([
        traveler.getPersonalInfo(),
        traveler.getTripData(),
        // traveler.getDestinationData()
    ])
    .then(promiseDotAllIndex => {
        console.log(promiseDotAllIndex[1]);
        domInfo();
    })
}

function createClasses() {
    traveler = new Traveler(7);
    console.log(traveler);
}

function domInfo() {
    // console.log(traveler.futureTrips[0]);
    greeting.innerHTML = `Welcome back, ${traveler.firstName} the ${traveler.travelerType}!`;
    userFullName.innerHTML = `${traveler.fullName}`;
    //
    let pastExpenses = [];
    let currentExpenses = [];
    let futureExpenses = [];
    let pendingExpenses = [];
    //
    if (traveler.pastTrips.length == 0) {
        pastHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Past-Div">
        <p class="Trip-Div-Text" id="Past-Text">
        You don't have any trips in this section</p>
      </div>`)
    } else {
        traveler.pastTrips.forEach(element => {
            let flightCost = element.estimatedFlightCostPerPerson * element.travelers;
            console.log("flightCost", flightCost);
            let lodgingCost = element.duration * element.estimatedLodgingCostPerDay;
            console.log("lodgingCost", lodgingCost);
            let totalCost = flightCost + lodgingCost;
            pastExpenses.push(totalCost);
            console.log("pastExpenses", pastExpenses);
            pastHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Past-Div">
            <p class="Trip-Div-Text" id="Past-Text">
            Destination: ${element.destination}<br>
            Date: ${element.date}<br>
            Status: ${element.status}<br>
            Duration: ${element.duration} days<br>
            Travelers on board: ${element.travelers}<br>
            </p>
            </div>`)
        });
    }
    if (traveler.currentTrips.length == 0) {
        presentHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Present-Div">
        <p class="Trip-Div-Text" id="Present-Text">
        You don't have any trips in this section</p>
      </div>`)
    } else {
        traveler.currentTrips.forEach(element => {
            let flightCost = element.estimatedFlightCostPerPerson * element.travelers;
            let lodgingCost = element.duration * element.estimatedLodgingCostPerDay;
            let totalCost = flightCost + lodgingCost;
            currentExpenses.push(totalCost);
            presentHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Present-Div">
            <p class="Trip-Div-Text" id="Present-Text">
            Destination: ${element.destination}<br>
            Date: ${element.date}<br>
            Status: ${element.status}<br>
            Duration: ${element.duration} days<br>
            Travelers on board: ${element.travelers}<br>
            </p>
            </div>`)
        });
    }
    if (traveler.futureTrips.length == 0) {
        upcomingHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Upcoming-Div">
        <p class="Trip-Div-Text" id="Upcoming-Text">
        You don't have any trips in this section</p>
      </div>`)
    } else {
        traveler.futureTrips.forEach(element => {
            let flightCost = element.estimatedFlightCostPerPerson * element.travelers;
            let lodgingCost = element.duration * element.estimatedLodgingCostPerDay;
            let totalCost = flightCost + lodgingCost;
            futureExpenses.push(totalCost);
            upcomingHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Upcoming-Div">
            <p class="Trip-Div-Text" id="Upcoming-Text">
            Destination: ${element.destination}<br>
            Date: ${element.date}<br>
            Status: ${element.status}<br>
            Duration: ${element.duration} days<br>
            Travelers on board: ${element.travelers}<br>
            </p>
            </div>`)
        });
    }
    if (traveler.pendingTrips.length == 0) {
        pendingHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Pending-Div">
        <p class="Trip-Div-Text" id="Pending-Text">
        You don't have any trips in this section</p>
      </div>`)
    } else {
        traveler.pendingTrips.forEach(element => {
            let flightCost = element.estimatedFlightCostPerPerson * element.travelers;
            let lodgingCost = element.duration * element.estimatedLodgingCostPerDay;
            let totalCost = flightCost + lodgingCost;
            pendingExpenses.push(totalCost);
            pendingHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Pending-Div">
            <p class="Trip-Div-Text" id="Pending-Text">
            Destination: ${element.destination}<br>
            Date: ${element.date}<br>
            Status: ${element.status}<br>
            Duration: ${element.duration} days<br>
            Travelers on board: ${element.travelers}<br>
            </p>
            </div>`)
        });
    }
    let past = findSum(pastExpenses);
    let current = findSum(currentExpenses);
    let future = findSum(futureExpenses);
    let pending = findSum(pendingExpenses);
    let rawTravelExpenses =  past + current + future + pending;
    let totalTravelExpenses = (rawTravelExpenses * .10) + rawTravelExpenses;
    expenses.innerHTML = `YTD Travel Expenses: $${totalTravelExpenses.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`)
        .then(data => {
            return data.json()
        })
        .then(allDestinationData => {
            allDestinationData.destinations.forEach(i => {
                destinationField.insertAdjacentHTML(`afterbegin`, `<option value=${i.destination}>${i.destination}</option>`)
            })
        })
}

// let dateField = document.querySelector('#Date');
// let durationField = document.querySelector('#Duration');
// let destinationField = document.querySelector('#Destination');
// let travelersField = document.querySelector('#Num-Of-Travelers');
// let checkDetails = document.querySelector('.Check-Details');
// let readyStatus = document.querySelector(`.Ready-Status`);
// let tripTotal = document.querySelector(`.Trip-Total`);

function checkDetailsFunction() {
    if (dateField.value != '' && durationField.value != '' && destinationField.value != '' && travelersField.value != '') {
        readyStatus.innerHTML = 'You are ready to book';
        tripTotal.innerHTML = `Total for this trip: ${getTripTotal()}`
        bookButton.hidden = false;
    };
    if (dateField.value == '' || durationField.value == '' || destinationField.value == '' || travelersField.value == '') {
        readyStatus.innerHTML = 'We need more details'
    }
}

function findSum(array) {
    let theReduce = array.reduce((acc, i) => {
        acc += i
        return acc;
    }, 0)
    return theReduce;
}

function getTripTotal() {
    /*
    duration
    destination
    travelers
    */
    return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`)
        .then(data => {
            return data.json()
        })
        .then(allDestinationData => {
            allDestinationData.destinations.forEach(i => {
                destinationField.insertAdjacentHTML(`afterbegin`, `<option value=${i.destination}>${i.destination}</option>`)
            })
        })
}

// 
/*

1 - get value of inputs
2 - create `thePostContent` object;
3 - post
4 - .then(
    invoke methods to get data again
).then(
    domInfo()
)

*/

// function bookTrip() {
//     let thePostContent = {
//         id: 1,
//         userID: 1, 
//         destinationID: 1, 
//         travelers: 1, 
//         date: `YYYY/MM/DD`,
//         duration: 1, 
//         status: 'pending',
//         suggestedActivities: [`swimming`, `eating`]
//     };
//     let thePost = {
//         method: `POST`,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify()
//     }
//     fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips`, thePost)
// }