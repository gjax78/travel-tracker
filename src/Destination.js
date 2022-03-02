class Destination {
  constructor(location) {
    this.id = location.id
    this.name = location.destination
    this.lodging = location.estimatedLodgingCostPerDay
    this.flights = location.estimatedFlightCostPerPerson
    this.image = location.image
    this.alt = location.alt || 'beautiful travel destination'
  }
}

export default Destination;
