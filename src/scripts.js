import './css/styles.css';
import './images/turing-logo.png';
import fetchData from './apiCalls'
import domUpdates from './domUpdates';
import Traveler from './Traveler';
import Destination from './Destination';
import Trip from './Trip';

//-----------------------global variables ---------------//
let currentTraveler;
// let allTrips = [];

//-----------------------functions ---------------//

const getRandomTraveler = array => {
  return array[Math.floor(Math.random() * array.length)];
};


//generating the destinations by bringing in the traveler from the api
//the travelerRawData is the entire API information
const generateNewTraveler = (travelerRawData) => {
  const randomTraveler = getRandomTraveler(travelerRawData.travelers);
  // console.log(travelerRawData.travelers)
  currentTraveler = new Traveler(randomTraveler)
  console.log(currentTraveler)
  // return currentTraveler
  let firstName = currentTraveler.name.split(' ')[0]
  domUpdates.updateWelcomeMessage(firstName)
}

//generating the destinations by bringing in the trips from the api
//the tripRawData is the entire API information
const generateTravelerTrips = (tripRawData) => {
  // tripRawData.trips.forEach(trip => {
    // console.log(trip)
    // let tripObject = new Trip(trip)
    // allTrips.push(trip)
    console.log(tripRawData)
    currentTraveler.travelerAllTrips(tripRawData.trips)
  // })
  console.log(currentTraveler)
  console.log(currentTraveler.trips)
}

//generating the destinations by bringing in the destinations from the api
//the destinationRawData is the entire API information
const generateTripDestinations = (destinationRawData) => {
  destinationRawData.destinations.forEach(destination => {
    // let newDestination = new Destination(destination)
    console.log(destination)
    currentTraveler.getDestinations(destination)
    domUpdates.updateTrips(currentTraveler.trips)
    domUpdates.updateDestinationsDropDown(destination)
  })
  console.log(currentTraveler.trips)
  domUpdates.updateTotalSpent(currentTraveler)
  // console.log(newDestination)
  // domUpdates.update something
}

const renderPage = () => {
  let travelerPromise = fetchData('travelers')
  let tripPromise = fetchData('trips')
  let destinationPromise = fetchData('destinations')
  Promise.all([travelerPromise, tripPromise, destinationPromise])
  .then(values => {
    generateNewTraveler(values[0])
    generateTravelerTrips(values[1])
    generateTripDestinations(values[2])
    console.log(currentTraveler)
    // console.log(values[0].travelers[0])
  })
}






//----------------------------scripts -----------------
window.onload = (event) => (event, renderPage());











//-----------------------------notes----------------------
// do fetch
// do promise.all
//create domUpdates folder
//display user's trips
//separate function that calls travelers to do my fetch (based on user id)
