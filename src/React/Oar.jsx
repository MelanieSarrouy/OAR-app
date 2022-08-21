import React, { useState } from 'react'
import Button from './Button'
import '../styles/oar.css'

const Oar = () => {
  const [oarId, setOarId] = useState('')

  const handleClick = () => {
    if (oarId) {
      setOarId('')
    }
  }

  return (
    <div className="category">
      <form method="" className="form">
        <label className="form__label" htmlFor="oarId">
          OAR ID
        </label>
        <div className="form__input__container">
          <div>
            <div className="form__input__container__field">
              <input
                className="input"
                id="oarId"
                type="text"
                value={oarId}
                placeholder="IN2021079TDH72D"
                onChange={(e) => setOarId(e.target.value.toUpperCase())}
              />
            </div>
          </div>
          <Button path={`/facilities/${oarId}`} content="Go" onClick={handleClick} />
        </div>
      </form>
    </div>
  )
}

export default Oar
