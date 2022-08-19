import React, { useState } from 'react'
import Button from './Button'

const Brand = ({ brands }) => {
  const [brand, setBrand] = useState('')

  let brandsToDisplay = []
  for (const brand of brands) {
    brandsToDisplay.push(brand.name)
  }
  console.log(brandsToDisplay)

  const handleClick = () => {
    console.log('test')
  }

  return (
    <div className="inputContainer">
      <label className="inputContainer__label" htmlFor="brand">
        Marque
      </label>
      <div className="inputContainer__input">
        <div>
          <input
            className="inputContainer__input__field"
            id="brand"
            type="text"
            value={brand}
            placeholder="Select..."
            onChange={(e) => setBrand(e.target.value)}
          />
          <div>{brandsToDisplay.map((el, index) => (
            <p key={index} >{el}</p>
          ))}</div>
        </div>
        <Button path="/facilites" content="Go" onClick={handleClick} />
      </div>
    </div>
  )
}

export default Brand
