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
let pastText = document.querySelector('#Past-Text');
let presentText = document.querySelector('#Present-Text');
let upcomingText = document.querySelector('#Upcoming-Text');
let pendingText = document.querySelector('#Pending-Text');

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
    .then(fetches => {
        console.log(fetches[0].firstName);
        domInfo();
    })
}

function createClasses() {
    traveler = new Traveler(1);
    console.log(traveler);
}

function domInfo() {
    console.log(traveler.futureTrips[0]);
    greeting.innerHTML = `Welcome back, ${traveler.firstName}!`;
    userFullName.innerHTML = `${traveler.fullName}`;
    expenses.innerHTML = `YTD Travel Expenses: `;
    //
    // pastText.innerHTML = `${traveler.pastTrips.join(',')}`
    // presentText.innerHTML = `${traveler.currentTrips.join(', ')}`
    // upcomingText.innerHTML = `${traveler.futureTrips.join(', ')}`
    // pendingText.innerHTML = `${traveler.pendingTrips.join(', ')}`
}

// function filterThroughTripData(trips) {
//     traveler.pastTrips.reduce((acc, i) => {
        
//         return acc;
//     }, ``)
// }