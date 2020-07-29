import React, { useState } from 'react'

const BikeForm = props => {
  const [newBike, setNewBike] = useState({
    make: "",
    model: "",
    year: ""
  })

  const handleChange = (event) => {
    setNewBike({...newBike,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let payload = {
      make: newBike.make,
      model: newBike.model,
      year: newBike.year
    }
    props.addBike(payload)
    clearForm()
  }

    const clearForm = () => {
      setNewBike({
        make: "",
        model: "",
        year: ""
      })
    }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="make">
            Make:
          <input
            name="make"
            id="make"
            type="text"
            value={newBike.make}
            onChange={handleChange}
          />
        </label>
        </div>
        <div>
        <label htmlFor="model">
          Model:
          <input
            name="model"
            id="model"
            type="text"
            value={newBike.model}
            onChange={handleChange}
          />
        </label>
        </div>
        <div>
        <label htmlFor="year">
          Year:
          <input
            name="year"
            id="year"
            type="text"
            value={newBike.year}
            onChange={handleChange}
          />
        </label>
        </div>
        <input type="submit" value="Add a bike"></input>
        <input type="button"  value="Clear"></input>
      </form>
    </div>
  )
}

export default BikeForm