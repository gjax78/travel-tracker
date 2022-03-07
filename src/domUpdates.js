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
const postSubmitted = document.querySelector('#submit-post')


let domUpdates = {
  updateWelcomeMessage(firstName) {
    welcomeMessage.innerText = `Welcome, ${firstName}.`
  },

  updateTrips(trips) {
    cardSection.innerHTML = ' '
    trips.sort((a, b) => a.date - b.date)
    trips.forEach(trip => {
      if (trip.date > "2022/01/01" && trip.date < "2022/12/31") {
      cardSection.innerHTML +=
      `
      <article class="card">
        <h4 class="card-destination">${trip.destination.name}</h4>
        <p class="card-status">Your trip is currently ${trip.status}.</p>
        <img class="card-image" src="${trip.destination.image}" alt="alt-text">
        <p class="card-date">Departure date requested: ${trip.date}</p>
        <p class="card-duration">Number of nights requested: ${trip.duration}</p>
        <p class="card-lodging">Nightly cost: $${trip.destination.lodging}</p>
        <p class="card-flights">Estimated flight cost per person: $${trip.destination.flights}</p>
      </article>
      `
    } else {
      cardSection.innerHTML +=
      `
      <article class="card">
        <h4 class="card-destination">${trip.destination.name}</h4>
        <p class="card-status">This trip has passed.</p>
        <img class="card-image" src="${trip.destination.image}" alt="alt-text">
        <p class="card-date">Departure date: ${trip.date}</p>
        <p class="card-duration">Number of nights: ${trip.duration}</p>
        <p class="card-lodging">Nightly cost was: $${trip.destination.lodging}</p>
        <p class="card-flights">Your flight cost per person was: $${trip.destination.flights}</p>
      </article>
      `
      }
    })
  },

  updateTotalSpent(currentTraveler) {
    totalSpent.innerText = `This year's total spend: $${currentTraveler.totalSpentThisYear()}
     (including agent fee of 10%)`
  },

  updateDestinationsDropDown(destination) {
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

  submitPost() {
    postSubmitted.innerText = "Thank you for submitting a trip. An agent will reach out to approve or deny."
  }
}

export default domUpdates;
