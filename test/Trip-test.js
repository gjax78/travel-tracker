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


});
