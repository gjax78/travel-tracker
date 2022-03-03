import fetchData from './apiCalls'
import './css/styles.css';
import './images/turing-logo.png';
import Traveler from './Traveler';
import Destination from './Destination';
import Trip from './Trip';

//-----------------------global variables ---------------//
let currentTraveler;

//-----------------------functions ---------------//

//generating the destinations by bringing in the traveler from the api
//the travelerRawData is the entire API information
const generateNewTraveler = (travelerRawData) => {
  currentTraveler = new Traveler(travelerRawData)
  // return currentTraveler
}

//generating the destinations by bringing in the trips from the api
//the tripRawData is the entire API information
const generateTravelerTrips = (tripRawData) => {
  // console.log(tripTrawData)
  tripRawData.trips.forEach(trip => {
    let newTrip = new Trip(trip)
    currentTraveler.travelerAllTrips(newTrip)
    console.log(newTrip)
  })
}

//generating the destinations by bringing in the destinations from the api
//the destinationRawData is the entire API information
const generateTripDestinations = (destinationRawData) => {
  let newDestination = new Destination(destinationRawData)
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
