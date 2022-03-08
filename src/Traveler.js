import Trip from './Trip';
import Destination from './Destination';

class Traveler {
  constructor(travelerRawData) {
    this.id = travelerRawData.id
    this.name = travelerRawData.name
    this.type = travelerRawData.travelerType
    this.trips = []
  }

  getAllTravelerTrips(trips) {
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

  getAnnualApprovedTrips() {
    const today = Date.now()
    const currentYear = new Date(today).getFullYear()
    return this.trips.filter(trip => {
      return trip.date.includes(currentYear) && (trip.status === 'approved')
    })
  }

  getTotalAnnualSpend() {
    let singleTripSpend = 0
    let totalAnnualSpend = 0
    const tripsThisYear = this.getAnnualApprovedTrips()
    tripsThisYear.forEach(trip => {
      singleTripSpend += trip.duration * trip.destination.lodging
      singleTripSpend += trip.travelers * (trip.destination.flights * 2)
    })
    totalAnnualSpend = singleTripSpend + (singleTripSpend * .10)
    return totalAnnualSpend
  }
}

export default Traveler;
