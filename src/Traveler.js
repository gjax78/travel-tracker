import Trip from './Trip'; //bringing this in instead of line 36 in scripts


class Traveler {
  constructor(travelerRawData) {
    this.id = travelerRawData.id
    this.name = travelerRawData.name
    this.type = travelerRawData.travelerType
    this.trips = []
  }

  travelerAllTrips(trip) {
    // let newTrip = new Trip(trip)
    if (trip.userID === this.id) {
         this.trips.push(new Trip(trip))
       }
       // console.log(this.trips)
     }
    // let tripLog = newTrip.forEach(trip => {
    //   if (trip.userId === this.id) {
    //     this.trips.push(newTrip)
    //   }
    // })
    // console.log(this.trips)
    // if (newTrip.userId === this.id) {
    //   this.trips.push(newTrip)
    //   console.log(this.trips)
    // }
  // }

  // getDestinations() {
  //   if (trip.destinationId === this.id)
  // }
}

export default Traveler;
