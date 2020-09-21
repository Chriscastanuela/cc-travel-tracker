// <-------------------------------------------->Class Imports
import Traveler from './classes/Traveler';

// <-------------------------------------------->CSS Imports
// CSS or SCSS example:

import './css/base.scss';

// <-------------------------------------------->Images
// image example --- also need to link to it in the index.html

// import './images/Beach.jpg'
import './images/user.png';

// <-------------------------------------------->QuerySelectors
let greeting = document.querySelector('.Greeting');
let expenses = document.querySelector('.YTD-Expenses');
let userFullName = document.querySelector('.User-Full-Name');

let pastHeader = document.querySelector('.Past-Header');
let presentHeader = document.querySelector('.Present-Header');
let upcomingHeader = document.querySelector('.Upcoming-Header');
let pendingHeader = document.querySelector('.Pending-Header');

// let pastText = document.querySelector('#Past-Text');
// let presentText = document.querySelector('#Present-Text');
// let upcomingText = document.querySelector('#Upcoming-Text');
// let pendingText = document.querySelector('#Pending-Text');

// <-------------------------------------------->Class Declarations
let traveler;

// <-------------------------------------------->Event Listeners
window.onload = () => {
    createClasses();
    getDataAndShowDom();
};

// <-------------------------------------------->Functions
function getDataAndShowDom() {
    Promise.all([
        traveler.getPersonalInfo(),
        traveler.getTripData()
    ])
    .then(promiseDotAllIndex => {
        console.log(promiseDotAllIndex[0].firstName);
        domInfo();
    })
}

function createClasses() {
    traveler = new Traveler(9);
    console.log(traveler);
}

function domInfo() {
    console.log(traveler.futureTrips[0]);
    greeting.innerHTML = `Welcome back, ${traveler.firstName} the ${traveler.travelerType}!`;
    userFullName.innerHTML = `${traveler.fullName}`;
    expenses.innerHTML = `YTD Travel Expenses: `;
    if (traveler.pastTrips.length == 0) {
        pastHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Past-Div">
        <p class="Trip-Div-Text" id="Past-Text">
        You don't have any trips in this section</p>
      </div>`)
    } else {
        traveler.pastTrips.forEach(element => {
            pastHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Past-Div">
            <p class="Trip-Div-Text" id="Past-Text">
            Destination: ${element.destinationID}<br>
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
            presentHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Present-Div">
            <p class="Trip-Div-Text" id="Present-Text">
            Destination: ${element.destinationID}<br>
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
            upcomingHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Upcoming-Div">
            <p class="Trip-Div-Text" id="Upcoming-Text">
            Destination: ${element.destinationID}<br>
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
            pendingHeader.insertAdjacentHTML(`afterend`, `<div class="Trip-Div" id="Pending-Div">
            <p class="Trip-Div-Text" id="Pending-Text">
            Destination: ${element.destinationID}<br>
            Date: ${element.date}<br>
            Status: ${element.status}<br>
            Duration: ${element.duration} days<br>
            Travelers on board: ${element.travelers}<br>
            </p>
            </div>`)
        });
    }
}

// 

// this.pendingTrips;