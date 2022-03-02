class Destination {
  constructor(locationRawData) {
    this.id = locationRawData.id
    this.name = locationRawData.destination
    this.lodging = locationRawData.estimatedLodgingCostPerDay
    this.flights = locationRawData.estimatedFlightCostPerPerson
    this.image = locationRawData.image
    this.alt = locationRawData.alt || 'beautiful travel destination'
  }
}

export default Destination;
