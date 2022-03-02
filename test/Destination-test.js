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
    expect(destination1).to.be.an.instanceof(Destination);
  })

  it('should have an id', () => {
     expect(destination1.id).to.equal(1);
   })

   it('should have a location', () => {
     expect(destination1.name).to.equal("Lima, Peru");
   })

   it('should have an estimated lodging cost per day', () => {
     expect(destination1.lodging).to.equal(70);
   })

   it('should have an estimated flight cost per person', () => {
     expect(destination4.flights).to.equal(350);
   })

   it('should have an image', () => {
     expect(destination3.image).to.equal("https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
   })

   it('should have an alt', () => {
     expect(destination3.alt).to.equal("opera house and city buildings on the water with boats");
   })

});
