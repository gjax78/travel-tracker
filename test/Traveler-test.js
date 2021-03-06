import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/Traveler';
import Trip from '../src/Trip';
import Destination from '../src/Destination';
import testData from './Data-test';


describe('Traveler', () => {
  let traveler1;
  let traveler2;
  let traveler3;
  let traveler4;
  let traveler5;
  let destination1;
  let travelerData;
  let tripsData;
  let trip1;
  let destinationData;

  beforeEach(() => {
    travelerData = testData.travelers
    tripsData = testData.trips
    destinationData = testData.destinations
    traveler1 = new Traveler(travelerData[0]);
    traveler2 = new Traveler(travelerData[1]);
    traveler3 = new Traveler(travelerData[2]);
    traveler4 = new Traveler(travelerData[3]);
    traveler5 = new Traveler(travelerData[4]);
    trip1 = new Trip(tripsData[0])
    destination1 = new Destination(destinationData[0])
  })

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  })

  it('should be an instance of Traveler', () => {
    expect(traveler1).to.be.an.instanceof(Traveler);
  })

  it('should have an id', () => {
    expect(traveler1.id).to.equal(1);
    expect(traveler4.id).to.equal(4);
    expect(traveler5.id).to.equal(44);
    expect(traveler2.id).to.equal(2);
  })

  it('should have a name', () => {
    expect(traveler1.name).to.equal('Ham Leadbeater');
    expect(traveler2.name).to.equal('Rachael Vaughten');
    expect(traveler3.name).to.equal('Sibby Dawidowitsch');
    expect(traveler4.name).to.equal('Leila Thebeaud');
  })

  it('should have a type', () => {
    expect(traveler1.type).to.equal('relaxer');
    expect(traveler3.type).to.equal('shopper');
    expect(traveler2.type).to.equal('thrill-seeker');
    expect(traveler5.type).to.equal('thrill-seeker');
  })

  it('should hold all the travelers trips', () => {
    expect(traveler1.trips).to.eql([]);
    expect(traveler2.trips).to.eql([]);
  })

  it ('should return all trips for one traveler', () => {
    traveler1.getAllTravelerTrips(tripsData)
    expect(traveler1.trips).to.have.lengthOf(3)
    traveler2.getAllTravelerTrips(tripsData)
    expect(traveler4.trips).to.have.lengthOf(0)
    traveler3.getAllTravelerTrips(tripsData)
    expect(traveler3.trips).to.have.lengthOf(0)
  })

  it ('should add a destinations property to their trip', () => {
    traveler1.getAllTravelerTrips(tripsData)
    traveler1.getDestinations(destinationData)

    expect(traveler1.trips[0]).to.deep.equal({
    date: "2022/09/16",
    destination: {},
    destinationId: 49,
    duration: 8,
    id: 1,
    status: "approved",
    suggestedActivities: [],
    travelers: 1,
    userId: 1
    })
  })

  it ('should get this years approved trips', () => {
    traveler1.getAnnualApprovedTrips()
    traveler1.getAllTravelerTrips(tripsData)
    expect(traveler1.getAnnualApprovedTrips()).to.deep.equal([{
      date: "2022/09/16",
      destination: {},
      destinationId: 49,
      duration: 8,
      id: 1,
      status: "approved",
      suggestedActivities: [],
      travelers: 1,
      userId: 1
    },
      {
      date: "2022/10/04",
      destination: {},
      destinationId: 25,
      duration: 18,
      id: 2,
      status: "approved",
      suggestedActivities: [],
      travelers: 5,
      userId: 1,
    },
    ])
  })

  it ('should return total amount spent this year', () => {
    traveler2.getAnnualApprovedTrips()
    traveler2.getAllTravelerTrips(tripsData)
    expect(traveler2.getTotalAnnualSpend(traveler2)).to.deep.equal(0)
  })
});
