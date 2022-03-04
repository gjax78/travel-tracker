const welcomeMessage = document.querySelector('.welcome-text')
const displayTrips = document.querySelector('.trips')
const cardImage = document.querySelector('.card-image')
const cardSection = document.querySelector('.card-grid')



let domUpdates = {
  updateWelcomeMessage(firstName) {
    welcomeMessage.innerText = `Welcome, ${firstName}!`
  },

  updateTrips(trips) {
    // console.log(trips)
    //empty out the all-cards div (assign innerHTML to ' ')
    cardSection.innerHTML = ' '
    trips.forEach(trip => {
      cardSection.innerHTML +=
      `
      <article class="card">
        <h3 class="card-destination">${trip.destination.name}</h3>
        <img class="card-image" src="${trip.destination.image}" alt="alt-text">
        <p class="card-travelers"></p>
        <p class="card-date"></p>
        <p class="card-duration"></p>
        <p class="card-lodging"></p>
        <p class="card-flights"></p>
        <p class="card-status"></p>
      </article>
      `
      //you're going to have a different number of trips each time
      // displayTrips.innerText = `${trip.destination.name}`
      // displayTripDate.innerText = `${trip.date}`
      // cardImage.src = `${trip.destination.image}`
    })
  }


}



export default domUpdates;
