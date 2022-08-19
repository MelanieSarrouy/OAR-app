import React, { useState } from 'react'
import Button from '../../layout/Button'

const Country = () => {
  const [country, setCountry] = useState('')
  const handleClick = () => {
    console.log('test')
  }

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
        <Button path="/facilites" content="Go" onClick={handleClick} />
      </div>
    </div>
  )
}

export default Country
