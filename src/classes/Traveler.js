class Traveler {
    constructor(identifier) {
        this.identifier = identifier;
        this.tripData;
        this.id;
        this.fullName;
        this.firstName;
        this.lastName;
        this.travelerType;
        this.pastTrips;
        this.currentTrips;
        this.pendingTrips;
        this.futureTrips;
    }

    getPersonalInfo() {
        return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers')
        // let res = await fetch('../mock-data/travelers.js');
        .then(data => {
            console.log(data);
            return data.json();
        })
        .then(userData => {
            let currentTraveler = userData.travelers.find(index => {
                return this.identifier == index.id
            })
            this.id = currentTraveler.id;
            this.fullName = currentTraveler.name;
            this.firstName = currentTraveler.name.split(' ')[0];
            this.lastName = currentTraveler.name.split(' ')[1];
            this.travelerType = currentTraveler.travelerType;
            console.log(this);
            return this;
        })
    }

    getTripData() {
        //.getTime()
        var today = new Date();
        var todayWithoutTime = today.getFullYear()+'/'+`0${(today.getMonth()+1)}`+'/'+today.getDate();
        this.getPersonalInfo();
        return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
        // let res = await fetch('../mock-data/trips.js');
        .then(data => {
            return data.json()
        })
        .then(allTripData => {
            // console.log(allTripData);
            console.log("Traveler -> getTripData -> todayWithoutTime", todayWithoutTime)
            let userTripData = allTripData['trips'].filter(index => {
                return index.userID == this.id;
            })
            console.log("userTripData", userTripData);
            this.pastTrips = userTripData.filter(i => {
                return i.date < todayWithoutTime;
            })
            this.currentTrips = userTripData.filter(i => {
                return i.date == todayWithoutTime;
            })
            this.futureTrips = userTripData.filter(i => {
                return i.date > todayWithoutTime;
            })
            this.pendingTrips = userTripData.filter(i => {
                return i.status == 'pending';
            })
            console.log('this', this);
            return this;
        })
    }
}

export default Traveler;
// if (typeof module !== "undefined") {
//     module.exports = Traveler;
// };