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

let pastSection = document.querySelector('.Past');
let presentSection = document.querySelector('.Present');
let upcomingSection = document.querySelector('.Upcoming');
let pendingSection = document.querySelector('.Pending');

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
bookButton.addEventListener('click', bookTrip);

// <-------------------------------------------->Functions
function getDataAndShowDom() {
    Promise.all([
        traveler.getPersonalInfo(),
        traveler.getTripData(),
    ])
    .then(promiseDotAllIndex => {
        domInfo();
    })
}

function createClasses() {
    traveler = new Traveler(7);
    console.log(traveler);
}

function domInfo() {
    greeting.innerHTML = `Welcome back, ${traveler.firstName} the ${traveler.travelerType}!`;
    userFullName.innerHTML = `${traveler.fullName}`;
    let pastExpenses = [];
    let currentExpenses = [];
    let futureExpenses = [];
    let pendingExpenses = [];
    // pastHeader
    // presentHeader
    // upcomingHeader
    // pendingHeader
    analyzeTripAmounts(pastHeader, `pastTrips`, pastExpenses);
    analyzeTripAmounts(presentHeader, `currentTrips`, currentExpenses);
    analyzeTripAmounts(upcomingHeader, `futureTrips`, futureExpenses);
    analyzeTripAmounts(pendingHeader, `pendingTrips`, pendingExpenses);
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
                destinationField.insertAdjacentHTML(`afterbegin`, `<option value=${i.id}>${i.destination}</option>`)
            })
        })
}

function checkDetailsFunction() {
    let dest = destinationField.value;
    let duration = durationField.value;
    let travelers = travelersField.value;
    if (dateField.value != '' && duration != '' && dest != '' && travelers != '') {
        bookButton.hidden = false;
        readyStatus.innerHTML = 'You are ready to book';
        getTripTotal(duration, dest, travelers);
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

function getTripTotal(durationValue, destinationValue, travelersValue) {
    // let totalCost;
    fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`)
    .then(data => {
        return data.json()
    })
    .then(allDestinationData => {
        let destination;
        allDestinationData.destinations.forEach(a => {
            if (a.id == destinationValue) {
                destination = a;
            } else {
                return false;
            }
        });
        return destination;
    })
    .then(myDestination => {
            console.log("getTripTotal -> myDestination", myDestination);
        let flightCost = myDestination.estimatedFlightCostPerPerson * travelersValue;
            console.log("getTripTotal -> flightCost", flightCost);
        let costPerDay = myDestination.estimatedLodgingCostPerDay * durationValue;
            console.log("getTripTotal -> costPerDay", costPerDay);
        let rawTotalCost = flightCost + costPerDay;
            console.log("getTripTotal -> rawTotalCost", rawTotalCost);
        let totalCost = rawTotalCost + (rawTotalCost * .10);
            console.log("getTripTotal -> totalCost", totalCost);
        console.log("getTripTotal -> totalCost", totalCost)
        tripTotal.innerHTML = `Total for this trip: $${totalCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    })
}

function fixDateFormat(date) {
    let year = date.slice(0, 4)
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    let newDate = year + '/' + month + '/' + day;
    return newDate;
}

function bookTrip() {
    let dest = parseInt(destinationField.value);
    let duration = parseInt(durationField.value);
    let travelers = parseInt(travelersField.value);
    let theDate = fixDateFormat(dateField.value);
    if (dateField.value != '' && duration != '' && dest != '' && travelers != '') {
        getTripTotal(duration, dest, travelers);
        let thePostContent = {
            id: Date.now(),
            userID: traveler.id,
            destinationID: dest,
            travelers: travelers,
            date: theDate,
            duration: duration,
            status: 'pending',
            suggestedActivities: []
        };
        console.log("bookTrip -> thePostContent", thePostContent);
        let thePost = {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(thePostContent)
        }
        fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips`, thePost)
        .then(response => {
            getDataAndShowDom()
        }
        );
    };
    if (dateField.value == '' || durationField.value == '' || destinationField.value == '' || travelersField.value == '') {
        bookButton.hidden = true;
        console.log("Hello");
        readyStatus.innerHTML = 'We need more details'
    }
}


function analyzeTripAmounts(header, trips, expenses) {
    if (traveler[trips].length == 0) {
        header.insertAdjacentHTML(`afterend`, emptyDiv());
    } else {
        traveler[trips].forEach(element => {
            expenses.push(calculateTripCost(element));
            header.insertAdjacentHTML(`afterend`, newDiv(element))
        });
    }
}

function emptyDiv() {
    return `<div class="Trip-Div" id="Past-Div">
    <p class="Trip-Div-Text" id="Past-Text">You don't have any trips in this section</p>
    </div>`
}

function calculateTripCost(element) {
    let flightCost = element.estimatedFlightCostPerPerson * element.travelers;
    let lodgingCost = element.duration * element.estimatedLodgingCostPerDay;
    let totalCost = flightCost + lodgingCost;
    return totalCost;
}

function newDiv(element) {
    return `<div class="Trip-Div">
    <p class="Trip-Div-Text">
    Destination: ${element.destination}<br>
    Date: ${element.date}<br>
    Status: ${element.status}<br>
    Duration: ${element.duration} days<br>
    Travelers on board: ${element.travelers}<br>
    </p>
    </div>`
}

// ----------------------------------------------------------------------------------

// let pastSection = document.querySelector('.Past');
// let presentSection = document.querySelector('.Present');
// let upcomingSection = document.querySelector('.Upcoming');
// let pendingSection = document.querySelector('.Pending');

// ----------------------------------------------------------------------------------