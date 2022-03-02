import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/Destination';
import testData from './Data-test';


describe('Destination', () => {
  let destination1;
  let destination2;
  let destination3;
  let destination4;
  let destination5;
  let destinationData;

  beforeEach(() => {
    destinationData = testData.destinations;
    destination1 = new Destination(destinationData[0]);
    destination2 = new Destination(destinationData[1]);
    destination3 = new Destination(destinationData[2]);
    destination4 = new Destination(destinationData[3]);
    destination5 = new Destination(destinationData[4]);
  })

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  })

  it('should be an instance of Destination', () => {
    expect(destination4).to.be.an.instanceof(Destination);
  })


});
