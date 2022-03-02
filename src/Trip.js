class Trip {
  constructor(trip) {
    this.id = trip.id
    this.userId = trip.userID
    this.destinationId = trip.destinationID
    this.travelers = trip.travelers
    this.date = trip.date
    this.duration = trip.duration
    this.status = trip.status
    this.suggestedActivities = trip.suggestedActivities
  }
}

module.exports = Trip;
