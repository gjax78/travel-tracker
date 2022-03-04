const welcomeMessage = document.querySelector('.welcome-text')
const displayTrips = document.querySelector('.trips')


let domUpdates = {
  updateWelcomeMessage(firstName) {
    welcomeMessage.innerText = `Welcome, ${firstName}!`
  },

  updateTrips(trips) {
    console.log(trips)
    displayTrips.innerText = `${trips[0].date}`
  }


}



export default domUpdates;
