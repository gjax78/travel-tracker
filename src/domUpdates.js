const welcomeMessage = document.querySelector('.welcome-text')
const displayTrips = document.querySelector('.trips')
const cardImage = document.querySelector('.card-image')
const cardSection = document.querySelector('.card-grid')
const totalSpent = document.querySelector('.total-spent')
const destinationDropdown = document.querySelector('#destination')
const tripCost = document.querySelector('#quote')



let domUpdates = {
  updateWelcomeMessage(firstName) {
    welcomeMessage.innerText = `Welcome, ${firstName}!`
  },

  updateTrips(trips) {
    // console.log(trips)
    //empty out the all-cards div (assign innerHTML to ' ')
    cardSection.innerHTML = ' '
    trips.forEach(trip => {
      // console.log(trip)
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
      //you're going to have a different number of trips each time
      // displayTrips.innerText = `${trip.destination.name}`
      // displayTripDate.innerText = `${trip.date}`
      // cardImage.src = `${trip.destination.image}`
    })
  },

  updateTotalSpent(currentTraveler) {
    totalSpent.innerText = `This year's total spend: $${currentTraveler.totalSpentThisYear()} (including agent fee of 10%)`
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
   tripCost.innerHTML = `Estimated Cost: $${costEstimate}`
 },
}



export default domUpdates;
