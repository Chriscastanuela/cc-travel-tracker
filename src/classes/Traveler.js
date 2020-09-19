class Traveler {
    constructor(identifier) {
        this.identifier = identifier;
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
    async getPersonalInfo() {
        let res = await fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers');
        // let res = await fetch('../mock-data/travelers.js');
        let data = await res.json();
        let userData = Object.values(data).find(index => {
            return index.name == this.identifier || index.id == this.identifier
        })
        this.id = userData.id;
        this.fullName = userData.name;
        this.firstName = userData.name.split(' ')[0];
        this.lastName = userData.name.split(' ')[1];
        this.travelerType = userData.travelerType;
    }

    async getTripData() {
        var today = new Date();
        var todayWithoutTime = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
        getPersonalInfo();
        let res = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips');
        // let res = await fetch('../mock-data/trips.js');
        let data = await res.json();
        let userTripData = Object.values(data).filter(index => {
            return index.userID == this.id;
        })
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
    }
}

export default Traveler;
// if (typeof module !== "undefined") {
//     module.exports = Traveler;
// };