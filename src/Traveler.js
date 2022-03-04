import Trip from './Trip'; //bringing this in instead of line 36 in scripts
import Destination from './Destination';


class Traveler {
  constructor(travelerRawData) {
    this.id = travelerRawData.id
    this.name = travelerRawData.name
    this.type = travelerRawData.travelerType
    this.trips = []
  }

  travelerAllTrips(trips) {
    console.log(trips)
    trips.forEach(trip => {
      if (trip.userID === this.id) {
        this.trips.push(new Trip(trip))
      }
    })
  }

  getDestinations(destination) {
    this.trips.forEach(trip => {
      if (trip.destinationId === destination.id) {
        trip.destination = new Destination(destination)
      }
    })
  }
}

export default Traveler;
