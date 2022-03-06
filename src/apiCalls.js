const fetchAPI = {
  fetchData(extension) {
    console.log(extension)
    return fetch(`http://localhost:3001/api/v1/${extension}`)
      .then(response => response.json())
      .catch(err => console.log(err))
  },

  postData(tripRequest) {
    return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      body: JSON.stringify(tripRequest),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if(!response.ok) {
        throw new Error('Please fill out all fields in the form.')
      } else {
        alert('Thanks for your submission. Please wait for the agent to approve.')
        return response.json()
      }
    })
  }
}

export default fetchAPI;
