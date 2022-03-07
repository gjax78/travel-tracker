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
const destinationInput = document.querySelector('.destination')
const durationInput = document.querySelector('.duration')
const travelersInput = document.querySelector('.total-travelers')
const quoteButton = document.querySelector('.quote-button')
const submitButton = document.querySelector('.submit-button')
const mainPage = document.querySelector('.main-page')
const loginPage = document.querySelector('.login')
const signInButton = document.querySelector('.login-button')
const username = document.querySelector('#username')
const password = document.querySelector('#password')

//-----------------------global variables ---------------//
let currentTraveler;
let allDestinations = [];
let travelers;
let currentUserID;

//-----------------------functions ---------------//

//------- login ---------//
const hide = (section) => {
  section.classList.toggle('hidden')
}

const show = (section) => {
  section.classList.toggle('hidden')
}

const hideLoginPage = () => {
  hide(login)
  show(mainPage)
  renderPage()
}

const findUserID = (event) => {
  if (username.value && password.value) {
    event.preventDefault()
    currentUserID = username.value.slice(8)
    verifyUser()
  }
}

const verifyUser = () => {
  let userLogin = username.value.slice(0, 8)
  console.log(userLogin)

  if ((userLogin === 'traveler') && (0 < currentUserID && currentUserID < 51) && (password.value === 'traveler')) {
    hideLoginPage(currentUserID)
  // }
  } else {
    domUpdates.displayLoginError()
  }
}

//----------------------//


// const getRandomTraveler = array => {
//   return array[Math.floor(Math.random() * array.length)];
// };


//generating the destinations by bringing in the traveler from the api
//the travelerRawData is the entire API information
const generateNewTraveler = (travelerRawData) => {
  // console.log(travelerRawData)
  // const randomTraveler = getRandomTraveler(travelerRawData.travelers);
  // console.log(travelerRawData.travelers)

  travelers = travelerRawData.travelers.map(traveler => new Traveler(traveler));
  currentTraveler = travelers[currentUserID - 1]

  // currentTraveler = new Traveler(randomTraveler)
  // console.log(currentTraveler)
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
    // console.log(tripRawData)
    currentTraveler.travelerAllTrips(tripRawData.trips)
  // })
  // console.log(currentTraveler)
  // console.log(currentTraveler.trips)
}

//generating the destinations by bringing in the destinations from the api
//the destinationRawData is the entire API information
const generateTripDestinations = (destinationRawData) => {
  destinationRawData.destinations.forEach(destination => {
    let newDestination = new Destination(destination)
    allDestinations.push(newDestination)
    // console.log(destination)
    currentTraveler.getDestinations(destination)
    domUpdates.updateTrips(currentTraveler.trips)
    domUpdates.updateDestinationsDropDown(destination)
  })
  // console.log(currentTraveler.trips)
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
    // console.log(currentTraveler)
    // console.log(values[0].travelers[0])
  })
}


//----------------------------scripts -----------------
// window.onload = (event) => (event, renderPage());
window.addEventListener("load", renderPage)

//the next function in the add eveent listener

//---------------------------- POSTS -----------------
const requestTrip = () => {
  const getDestination = findDestination()
  const tripRequest = {
    id: Date.now(),
    userID: currentTraveler.id,
    destinationID: getDestination.id,
    travelers: parseInt(travelersInput.value),
    date: dateInput.value.split("-").join("/"),
    duration: parseInt(durationInput.value),
    status: 'pending',
    suggestedActivities: []
  }
  // domUpdates.checkFormInputs()
  fetchAPI.postData(tripRequest)
    .then(() => {
      domUpdates.clearForm()
    })
  renderPage()
}

const submitRequest = (e) => {
  if (dateInput.value && durationInput.value && travelersInput.value && destinationInput.value) {
    e.preventDefault();
    requestTrip()
  }
}


const findDestination = () => {
  return allDestinations.find(location => {
    return location.name === destinationInput.value
  })
}

const submitQuote = (e) => {
  if (dateInput.value && durationInput.value && travelersInput.value && destinationInput.value) {
    e.preventDefault();
    getQuote()
  }
}

const getQuote = () => {
  // event.preventDefault()
  let tripEstimate = 0
  let totalEstimate = 0
  const getDestination = findDestination()
  tripEstimate += durationInput.value * getDestination.lodging
  tripEstimate += travelersInput.value * getDestination.flights
  totalEstimate = tripEstimate + (tripEstimate * .10)
  domUpdates.updateTripQuote(totalEstimate)
}


//----------------------- addEventListeners ---------------//

submitButton.addEventListener('click', submitRequest)
quoteButton.addEventListener('click', submitQuote)
signInButton.addEventListener("click", findUserID)

//-----------------------------notes----------------------
// do fetch
// do promise.all
//create domUpdates folder
//display user's trips
//separate function that calls travelers to do my fetch (based on user id)
///end of scripts should call fetch so it continually loops
