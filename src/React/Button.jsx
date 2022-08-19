import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/button.css'

const Button = (props) => {
  return (
    <Link to={props.path} onClick={props.onClick}>
      <div className="button inputButton" type="button">
        {props.content}
      </div>
    </Link>
  )
}

export default Button
