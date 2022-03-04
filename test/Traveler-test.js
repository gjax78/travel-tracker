import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import testData from './Data-test';


describe('Traveler', () => {
  let traveler1;
  let traveler2;
  let traveler3;
  let traveler4;
  let traveler5;
  let travelerData;

  function generateTravelerTrips(traveler) {
    travelerData.forEach(trip => {
      let newTrip = new Trip(trip)
      traveler.travelerAllTrips(newTrip)
    })
  }

  beforeEach(() => {
    travelerData = testData.travelers;
    traveler1 = new Traveler(travelerData[0]);
    traveler2 = new Traveler(travelerData[1]);
    traveler3 = new Traveler(travelerData[2]);
    traveler4 = new Traveler(travelerData[3]);
    traveler5 = new Traveler(travelerData[4]);
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('should be an instance of Traveler', () => {
    expect(traveler1).to.be.an.instanceof(Traveler);
  })

  it('should have an id', () => {
    expect(traveler1.id).to.equal(1);
  })

  it('should have a name', () => {
    expect(traveler2.name).to.equal('Rachael Vaughten');
  })

  it('should have a type', () => {
    expect(traveler3.type).to.equal('shopper');
  })

  it('should hold all past, present, upcoming, and pending trips', () => {
    expect(traveler2.trips).to.eql([]);
  })

  it ('should return all trips', () => {
    generateTravelerTrips(traveler1)
    console.log(traveler1)
    expect(traveler1.trips[0]).to.deep.equal({
      "id": 117,
      "userId": 1,
      "destinationId": 28,
      "travelers": 3,
      "date": "2021/01/09",
      "duration": 15,
      "status": "approved",
      "suggestedActivities": []
    })

  })
});
