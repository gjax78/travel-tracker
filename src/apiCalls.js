const fetchAPI = {
  fetchData(extension) {
    return fetch(`http://localhost:3001/api/v1/${extension}`)
      .then(response => response.json())
      .catch(err => console.log(err))
  },

  postData(extension, tripRequest) {
    return fetch(`http://localhost:3001/api/v1/${extension}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tripRequest)}
    })
    .then(response => {
      if(!response.ok) {
        throw new Error('Please fill out all input fields!')
      } else {
        alert("Your trip has been submitted. Please await the agent's approval or denial.")
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
