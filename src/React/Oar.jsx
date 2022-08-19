import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editFacilitiesList } from '../Redux/actions/actionGetFacilities'
import Button from './Button'


const Oar = ({ facilities }) => {
  const [oarId, setOarId] = useState('')
  const dispatch = useDispatch()

  const handleClick = () => {

    if (oarId) {
      let found = facilities.find((facility) => facility.idOAR === oarId)
      dispatch(editFacilitiesList(found))
      setOarId('')
    }
  }

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
          onChange={(e) => setOarId(e.target.value.toUpperCase())}
        />
        <Button path={`/facilities/:${oarId}`} content="Go" onClick={handleClick} />
      </div>
    </div>
  )
}

export default Oar
