import React, { useState } from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <nav>
      <ul className="filters__list">
        <li
          className={toggle ? 'filters__list__item open' : 'filters__list__item close'}
          onClick={() => setToggle(!toggle)}
        >
          <Link to="/" className="nav">
            <h2 className="filters__list__item__title">Recherche</h2>
          </Link>
        </li>
        <li
          className={!toggle ? 'filters__list__item open' : 'filters__list__item close'}
          onClick={() => setToggle(!toggle)}
        >
          <Link to="/facilities" className="nav">
            <h2 className="filters__list__item__title">Installations</h2>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
