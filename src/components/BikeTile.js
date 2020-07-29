import React from 'react'

const BikeTile = props => {
  return(
    <div>
      <li>{props.bike.make} {props.bike.model} {props.bike.year}</li>
    </div>
  )
}

export default BikeTile