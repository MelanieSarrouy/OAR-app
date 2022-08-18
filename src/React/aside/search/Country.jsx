import React, { useState } from 'react'
import Button from '../../Layout/Button'

const Country = () => {
  const [country, setCountry] = useState('')

  return (
    <div className="inputContainer">
      <label className="inputContainer__label" htmlFor="country">
        Pays
      </label>
      <div className="inputContainer__input">
        <input
          className="inputContainer__input__field"
          id="country"
          type="text"
          value={country}
          placeholder="Select..."
          onChange={(e) => setCountry(e.target.value)}
        />
        <Button content='Go' />
      </div>
    </div>
  )
}

export default Country
