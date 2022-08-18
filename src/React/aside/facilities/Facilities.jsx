import React from 'react'
import { useLocation } from 'react-router-dom'

const Facilities = () => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div>
      <h3>composant Facilities</h3>
    </div>
  )
}

export default Facilities
