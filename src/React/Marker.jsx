import React from 'react'
import '../styles/marker.css'

const Marker = (props) => {
  const { text, tooltip } = props
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`)
  }
  return (
    <div className='circle' onClick={handleClick} >
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
  )
}

export default Marker
