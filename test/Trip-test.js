import chai from 'chai';
const expect = chai.expect;
import Trip from '../src/Trip';
import testData from './Data-test';

describe('Trip', () => {
  let trip1;
  let trip2;
  let trip3;
  let trip4;
  let trip5;
  let tripData;

  beforeEach(() => {
    tripData = testData.trips;
    trip1 = new Trip(tripData[0]);
    trip2 = new Trip(tripData[1]);
    trip3 = new Trip(tripData[2]);
    trip4 = new Trip(tripData[3]);
    trip5 = new Trip(tripData[4]);
  })

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  })

  it('should be an instance of Trip', () => {
    expect(trip3).to.be.an.instanceof(Trip);
  })

  it('should have an id', () => {
    expect(trip3.id).to.equal(83);
  })

  it('should have a user that booked the trip', () => {
    expect(trip3.userId).to.equal(1);
  })

  it('should have a destination id', () => {
    expect(trip1.destinationId).to.equal(49);
  })

  it('should state how many travelers there are', () => {
    expect(trip4.travelers).to.equal(2);
  })

  it('should have a starting date', () => {
    expect(trip4.date).to.equal("2022/02/25");
  })

  it('should have a duration', () => {
    expect(trip3.duration).to.equal(11);
  })

  it('should have a status', () => {
    expect(trip3.status).to.equal("pending");
    expect(trip4.status).to.equal("approved");
  })

  it('should have a list of suggested activities', () => {
    expect(trip3.suggestedActivities).to.eql([]);
  })

});
