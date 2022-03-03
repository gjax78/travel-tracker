class Traveler {
  constructor(travelerRawData) {
    this.id = travelerRawData.id
    this.name = travelerRawData.name
    this.type = travelerRawData.travelerType
    this.trips = []
  }

  travelerAllTrips(newTrip) {
    if (newTrip.userId === this.id) {
      this.trips.push(newTrip)
    }
  }
}

export default Traveler;
