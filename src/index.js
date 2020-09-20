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
// let expenses = document.querySelector('.Expenses');
let userFullName = document.querySelector('.User-Full-Name');

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
        console.log(fetches[0].firstName)
        domInfo()
    })
}

function createClasses() {
    traveler = new Traveler(1);
    console.log(traveler);
}

function domInfo() {
    // greeting.insertAdjacentHTML("afterbegin", `Welcome back, ${traveler.firstName}!<br>`);
    greeting.innerHTML = `Welcome back, ${traveler.firstName}!`;
    // <p>Future Trip: ${traveler.futureTrips[0].date}</p>`
    userFullName.innerHTML = `${traveler.fullName}`
    console.log(traveler.futureTrips[0]);
}