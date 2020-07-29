import React, { useState, useEffect } from 'react';
import BikeList from './BikeList'
import BikeForm from './BikeForm';

const BikesContainer = props => {
  const [bikes, setBikes] = useState([])

  const addBike = (bikePayload) => {
    fetch('/api/v1/bikes.json', {
      method: 'POST',
      body: JSON.stringify(bikePayload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setBikes([...bikes, body.bike])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  useEffect(() => {
    fetch("/api/v1/bikes.json")
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `It failed with ${response.status}`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      setBikes(body.bikes)
    })
    .catch(error => console.error(errorMessage))
  }, [])

    return(
      <div className="container">
        <h1>These be the bikes yo</h1>
        <BikeList bikes={bikes} />
        <BikeForm addBike={addBike} />
      </div>
    )
  }



export default BikesContainer;