import React, { useState } from 'react'
import Button from '../../Layout/Button'

const Oar = () => {
  const [oarId, setOarId] = useState('')

  return (
    <div className="inputContainer">
      <label className="inputContainer__label" htmlFor="oarId">
        OAR ID
      </label>
      <div className="inputContainer__input">
        <input
          className="inputContainer__input__field"
          id="oarId"
          type="text"
          value={oarId}
          placeholder="IN2021079TDH72D"
          onChange={(e) => setOarId(e.target.value)}
        />
        <Button content='Go' />
      </div>
    </div>
  )
}

export default Oar
