import './css/styles.css';
import './images/turing-logo.png';
// import fetchData from './apiCalls'
import fetchAPI from './apiCalls'
import domUpdates from './domUpdates';
import Traveler from './Traveler';
import Destination from './Destination';
import Trip from './Trip';

//-----------------------querySelectors ---------------//

const bookTravelForm = document.querySelector('.form')
const dateInput = document.querySelector('.departure-date')
const durationInput = document.querySelector('.duration')
const travelersInput = document.querySelector('.total-travelers')
const quoteButton = document.querySelector('.quote-button')




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
  let travelerPromise = fetchAPI.fetchData('travelers')
  let tripPromise = fetchAPI.fetchData('trips')
  let destinationPromise = fetchAPI.fetchData('destinations')
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





//---------------------------- POSTS -----------------
bookTravelForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const tripRequest = {
    id: ,
    userID: currentTraveler.id,
    destinationID: destinationId.value,
    travelers: travelers.value,
    date: date.value,
    duration: duration.value,
    status: 'pending',
    suggestedActivities: []
  }
  fetchAPI.postHydrationData(newHydro)
  e.target.reset()
});






//-----------------------------notes----------------------
// do fetch
// do promise.all
//create domUpdates folder
//display user's trips
//separate function that calls travelers to do my fetch (based on user id)
