const welcomeMessage = document.querySelector('.welcome-text')
const displayTrips = document.querySelector('.trips')
const cardImage = document.querySelector('.card-image')
const cardSectionUpcoming = document.querySelector('.card-grid-upcoming')
const cardSectionPast = document.querySelector('.card-grid-past')
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
    cardSectionPast.innerHTML = ' '
    cardSectionUpcoming.innerHTML = ' '

    trips.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
    trips.forEach(trip => {
      if ((trip.date.includes('2022')) || (trip.date.includes('2023')) || (trip.date.includes('2024'))) {
      cardSectionUpcoming.innerHTML +=
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
      cardSectionPast.innerHTML +=
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
    if (currentTraveler.getTotalSpentThisYear() > 500) {
      totalSpent.innerText = `This year's total travel investment:
      $${currentTraveler.getTotalSpentThisYear()} (including agent fee of 10%)

      Congrats ~ you're busy creating a lifetime of memories.`
    } else {
      totalSpent.innerText = `This year's total travel investment:
      $${currentTraveler.getTotalSpentThisYear()} (including agent fee of 10%)

      It appears you need to book more travel.`
    }
    if (currentTraveler.getTotalSpentThisYear() === 0) {
      totalSpent.innerText = `This year's total travel investment:
      $${currentTraveler.getTotalSpentThisYear()}

      You are in serious need of a vacation.
      Book the trip.`
    }
  },

  updateDestinationsDropDown(destination) {
    const newElement = document.createElement('option')
    newElement.innerText = destination.destination
    newElement.value = destination.destination
    destinationDropdown.appendChild(newElement)
  },

  updateTripQuote(costEstimate) {
   totalSpent.innerHTML = `Estimated Cost: $${costEstimate} (including 10% agent fee)`
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
