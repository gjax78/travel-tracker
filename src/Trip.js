class Trip {
  constructor(tripRawData) {
    this.id = tripRawData.id
    this.userId = tripRawData.userID
    this.destinationId = tripRawData.destinationID
    this.travelers = tripRawData.travelers
    this.date = tripRawData.date
    this.duration = tripRawData.duration
    this.status = tripRawData.status
    this.suggestedActivities = tripRawData.suggestedActivities
    this.destination = {}
  }
}

export default Trip;
