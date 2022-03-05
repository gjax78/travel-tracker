const fetchAPI = {
  fetchData(extension) {
    console.log(extension)
    return fetch(`http://localhost:3001/api/v1/${extension}`)
      .then(response => response.json())
      .catch(err => console.log(err))
  },

  // const postBooking = (booking) => {
  //   return fetch('http://localhost:3001/api/v1/bookings', {
  //     method: 'POST',
  //     body: JSON.stringify(booking),
  //     headers: {'Content-Type': 'application/json'}
  //   })
  //     .then(response => handleError(response))
  // }


  postData(tripRequest) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      body: JSON.stringify(tripRequest),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if(!response.ok) {
        throw new Error('Check your internet connection. Please try again.')
      } else {
        alert('Thanks for your submission. Please wait for the agent to approve.')
        return response.json()
      }
    })
  }
}




//
// const fetchData = (extension) => {
//   return fetch(`http://localhost:3001/api/v1/${extension}`)
//     .then(response => response.json())
//     .catch(err => console.log(err))
// };
//
//
// const postData = (extension) => {
//   return fetch(`http://localhost:3001/api/v1/${extension}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(newHydro)}
//   })
//   .then(response => {
//     if(!response.ok) {
//       throw new Error('Please fill out all input fields!')
//     } else {
//       alert("Your trip has been submitted. Please await the agent's approval or denial.")
//       return response.json()
//     }
//   })
// }

export default fetchAPI;
