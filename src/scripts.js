import './css/styles.css';
import './images/turing-logo.png';
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
const totalSpent = document.querySelector('.total-spent')
const postSubmitted = document.querySelector('#submit-post')


//-----------------------global variables ---------------//
let currentTraveler;
let allDestinations = [];
let travelers;
let currentUserID;

//-----------------------functions ---------------//
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

  if ((userLogin === 'traveler') && (0 < currentUserID && currentUserID < 51) && (password.value === 'traveler')) {
    hideLoginPage(currentUserID)
  } else {
    domUpdates.displayLoginError()
  }
}

const generateNewTraveler = (travelerRawData) => {
  travelers = travelerRawData.travelers.map(traveler => new Traveler(traveler));
  currentTraveler = travelers[currentUserID - 1]
  let firstName = currentTraveler.name.split(' ')[0]
  domUpdates.updateWelcomeMessage(firstName)
}

const generateTravelerTrips = (tripRawData) => {
  currentTraveler.getAllTravelerTrips(tripRawData.trips)
}

const generateTripDestinations = (destinationRawData) => {
  destinationRawData.destinations.forEach(destination => {
    let newDestination = new Destination(destination)
    allDestinations.push(newDestination)
    currentTraveler.getDestinations(destination)
    domUpdates.updateTrips(currentTraveler.trips)
    domUpdates.updateDestinationsDropDown(destination)
  })
  domUpdates.updateTotalSpent(currentTraveler)
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
  })
}

//----------------------------scripts -----------------
window.addEventListener("load", renderPage)

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
  fetchAPI.postData(tripRequest)
    .then(() => {
      domUpdates.clearForm()
      renderPage()
    })
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
