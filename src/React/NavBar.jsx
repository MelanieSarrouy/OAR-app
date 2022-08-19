import React from 'react'
import '../styles/navBar.css'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  const pathName = location.pathname
  return (
    <nav>
      <ul className="filters__list">
        <li className={pathName === '/' ? 'filters__list__item open' : 'filters__list__item close'}>
          <Link to="/" className="nav">
            <h2 className="filters__list__item__title">Recherche</h2>
          </Link>
        </li>
        <li className={pathName !== '/' ? 'filters__list__item open' : 'filters__list__item close'}>
          <Link to="/facilities" className="nav">
            <h2 className="filters__list__item__title">Installations</h2>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
