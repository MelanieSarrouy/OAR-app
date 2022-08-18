import React, { useState } from 'react';
import Button from '../../Layout/Button';

const Brand = () => {
    const [brand, setBrand] = useState('')

  return (
    <div className="inputContainer">
      <label className="inputContainer__label" htmlFor="brand">
        Marque
      </label>
      <div className="inputContainer__input">
        <input
          className="inputContainer__input__field"
          id="brand"
          type="text"
          value={brand}
          placeholder="Select..."
          onChange={(e) => setBrand(e.target.value)}
        />
        <Button content='Go' />
      </div>
    </div>
  )
};

export default Brand;