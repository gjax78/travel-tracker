const welcomeMessage = document.querySelector('.welcome-text')
const displayTrips = document.querySelector('.trips')
const cardImage = document.querySelector('.card-image')
const cardSection = document.querySelector('.card-grid')
const totalSpent = document.querySelector('.total-spent')
const destinationDropdown = document.querySelector('#destination')
const tripCost = document.querySelector('#quote')
const dateInput = document.querySelector('.departure-date')
const destinationInput = document.querySelector('.destination')
const durationInput = document.querySelector('.duration')
const travelersInput = document.querySelector('.total-travelers')
const requiredDate = document.querySelector('.date-input-field-required')
const loginError = document.querySelector('.login-error')

let domUpdates = {
  updateWelcomeMessage(firstName) {
    welcomeMessage.innerText = `Welcome, ${firstName}.`
  },

  updateTrips(trips) {
    cardSection.innerHTML = ' '
    trips.forEach(trip => {
      cardSection.innerHTML +=
      `
      <article class="card">
        <h3 class="card-destination">${trip.destination.name}</h3>
        <img class="card-image" src="${trip.destination.image}" alt="alt-text">
        <p class="card-travelers">Number of travelers: ${trip.travelers}</p>
        <p class="card-date">Starting date: ${trip.date}</p>
        <p class="card-duration">Number of nights: ${trip.duration}</p>
        <p class="card-lodging">Nightly cost: $${trip.destination.lodging}</p>
        <p class="card-flights">Estimated flight cost: $${trip.destination.flights}</p>
        <p class="card-status">${trip.status}</p>
      </article>
      `
    })
  },

  updateTotalSpent(currentTraveler) {
    totalSpent.innerText = `This year's total spend: $${currentTraveler.totalSpentThisYear()}
     (including agent fee of 10%)`
  },

  updateDestinationsDropDown(destination) {
    // console.log(destination)
    const newElement = document.createElement('option')
    newElement.innerText = destination.destination
    newElement.value = destination.destination
    destinationDropdown.appendChild(newElement)
  },

  updateTripQuote(costEstimate) {
   tripCost.classList.remove('hidden')
   tripCost.innerHTML = `Estimated Cost: $${costEstimate} (including 10% agent fee)`
 },

  clearForm() {
    tripCost.classList.add('hidden')
    dateInput.value = ''
    durationInput.value = ''
    travelersInput.value = ''
    destinationDropdown.value = ''
  },

  displayLoginError() {
    loginError.innerText = "Incorrect username or password. Please try again."
  },

}



export default domUpdates;
