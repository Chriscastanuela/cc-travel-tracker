import Traveler from './classes/Traveler';




import './css/base.scss';
import './css/welcome.scss';
import './css/header.scss';




import './images/user.png';




let login = document.querySelector('.Login');
let userName = document.querySelector('.UserName');
let password = document.querySelector('.Password');
let credsButton = document.querySelector('.Check-Credentials');
let loginResult = document.querySelector('.Login-Button-Result')

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

let traveler;




credsButton.addEventListener('click', checkCredsFunction);
checkDetails.addEventListener('click', checkDetailsFunction);
bookButton.addEventListener('click', bookTrip);




function checkCredsFunction() {
    let name = userName.value.slice(0, 8)
    let theID = userName.value.slice(8);
    if (theID <= 50 && userName.value.length == 10 && name == 'traveler' && password.value == 'travel2020') {
        createClasses();
        getDataAndShowDom();
        login.style.display = 'none';
    } else {
        loginResult.innerHTML = "Sorry, invalid username or password"
    }
}
function createClasses() {
    traveler = new Traveler(userName.value.slice(-2));
}
function getDataAndShowDom() {
    Promise.all([
        traveler.getPersonalInfo(),
        traveler.getTripData(),
    ])
    .then(promiseDotAllIndex => {
        domInfo();
    })
}
function domInfo() {
    greeting.innerHTML = `Welcome back, ${traveler.firstName} the ${traveler.travelerType}!`;
    userFullName.innerHTML = `${traveler.fullName}`;
    let pastExpenses = [];
    let currentExpenses = [];
    let futureExpenses = [];
    let pendingExpenses = [];
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
        }
    )
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
function getTripTotal(durationValue, destinationValue, travelersValue) {
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
        let flightCost = myDestination.estimatedFlightCostPerPerson * travelersValue;
        let costPerDay = myDestination.estimatedLodgingCostPerDay * durationValue;
        let rawTotalCost = flightCost + costPerDay;
        let totalCost = rawTotalCost + (rawTotalCost * .10);
        tripTotal.innerHTML = `Total for this trip: $${totalCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    })
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
        let thePost = {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(thePostContent)
        }
        fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips`, thePost)
        .then(response => {
            getDataAndShowDom();
            location.reload();
            return false;
        }
        );
    };
    if (dateField.value == '' || durationField.value == '' || destinationField.value == '' || travelersField.value == '') {
        bookButton.hidden = true;
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
function fixDateFormat(date) {
    let year = date.slice(0, 4)
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    let newDate = year + '/' + month + '/' + day;
    return newDate;
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