import fetchData from './apiCalls'
import './css/styles.css';
import './images/turing-logo.png';
import Traveler from './Traveler';
import Destination from './Destination';
import Trip from './Trip';



//-----------------------functions ---------------//

const generateNewTraveler = (travelerRawData) => {
  let currentTraveler = new Traveler(travelerRawData)
  return currentTraveler
}

const findTravelerTrips = (tripRawData) => {
  let newTrip = new Trip(tripRawData)
}

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
    findTravelerTrips(values[1])
    generateTripDestinations(values[2])
    // console.log(values[0].travelers[0])
  })
}

renderPage()
// do fetch
// do promise.all
//create domUpdates folder
//display user's trips
//separate function that calls travelers to do my fetch (based on user id)

//
// const generateNewTraveler = (travelerRawData) => {
//   let currentTraveler = new Traveler(travelerRawData)
//   console.log(travelerRawData)
// }
//
// const findTravelerTrips = (tripRawData) => {
//   let newTrip = new Trip(tripRawData)
// }
//
// const generateTripDestinations = (destinationRawData) => {
//   let newDestination = new Destination(destinationRawData)
// }
