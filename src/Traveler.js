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

  getThisYearsApprovedTrips() {
    const today = Date.now()
    const currentYear = new Date(today).getFullYear()
    return this.trips.filter(trip => {
      return trip.date.includes(currentYear) && (trip.status === 'approved')
    })
  }

  getTotalSpentThisYear() {
    let eachTripSpend = 0
    let totalYearSpend = 0
    const tripsThisYear = this.getThisYearsApprovedTrips()
    tripsThisYear.forEach(trip => {
      eachTripSpend += trip.duration * trip.destination.lodging
      eachTripSpend += trip.travelers * (trip.destination.flights * 2)
    })
    totalYearSpend = eachTripSpend + (eachTripSpend * .10)
    return totalYearSpend
  }
}

export default Traveler;
