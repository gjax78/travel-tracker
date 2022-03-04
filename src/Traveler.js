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

  getThisYearsApprovedTrips() {
    const today = Date.now()
    const currentYear = new Date(today).getFullYear()
    console.log(this.trips)
    return this.trips.filter(trip => {
      console.log(trip)
      return trip.date.includes(currentYear) && (trip.status === 'approved')
    })
  }

  totalSpentThisYear() {
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
