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
        .then(data => {
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
            return this;
        })
    }

    getTripData() {
        var today = new Date();
        var todayWithoutTime = today.getFullYear()+'/'+`0${(today.getMonth()+1)}`+'/'+today.getDate();
        this.getPersonalInfo();
        let theFetch =  fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
        .then(data => {
            return data.json()
        })
        .then(allTripData => {
            let userTripData = allTripData['trips'].filter(index => {
                return index.userID == this.id;
            })
            this.pastTrips = userTripData.filter(i => {
                return i.date < todayWithoutTime;
            })
            this.currentTrips = userTripData.filter(i => {
                return i.date == todayWithoutTime;
            })
            this.futureTrips = userTripData.filter(i => {
                if (i.status != 'pending') {
                    return i.date > todayWithoutTime;
                }
            })
            this.pendingTrips = userTripData.filter(i => {
                return i.status == 'pending';
            })
            return this;
        }).then(tripData => {
            return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations`)
            .then(data => {
                return data.json()
            })
            .then(allDestinationData => {
                allDestinationData.destinations.forEach(i => {
                    if (this.pastTrips.length > 0) {
                        this.reformatTripData(`pastTrips`, i)
                    }
                    if (this.currentTrips.length > 0) {
                        this.reformatTripData(`currentTrips`, i)
                    }
                    if (this.pendingTrips.length > 0) {
                        this.reformatTripData(`pendingTrips`, i)
                    }
                    if (this.futureTrips.length > 0) {
                        this.reformatTripData(`futureTrips`, i)
                    }
                })
                return this;
            })
        }
        )
        return theFetch;
    }

    reformatTripData(tripKey, i) {
        this[tripKey].forEach(index => {
            if (index.destinationID == i.id) {
                index[`alt`] = i.alt;
                index[`destination`] = i.destination;
                index[`estimatedFlightCostPerPerson`] = i.estimatedFlightCostPerPerson;
                index[`estimatedLodgingCostPerDay`] = i.estimatedLodgingCostPerDay;
                index[`image`] = i.image;
            }
        })
    }
}

export default Traveler;