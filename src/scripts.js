import fetchData from './apiCalls'
import './css/styles.css';
import './images/turing-logo.png';
import Traveler from './Traveler';
import Destination from './Destination';
import Trip from './Trip';



//-----------------------functions ---------------//

const renderPage = () => {
  Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
  .then(values => {
    //invoke a function that does the instantiations (initialized user data)
  })
}

// do fetch
// do promise.all
//create domUpdates folder
//display user's trips


//separate function that calls travelers to do my fetch (based on user id)
