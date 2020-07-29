import React from 'react'
import BikeTile from './BikeTile'

const BikeList = props => {

  const bikeList = props.bikes.map(bike => {
    return(
      <BikeTile 
        key={bike.id}
        bike={bike} 
      />
    )
  })

  return(
    <div>
      <h2>The Bikes</h2>
      <ul>
        {bikeList}
      </ul>
    </div>
  )
}

export default BikeList