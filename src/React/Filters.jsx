import React, { useState } from 'react'
import './filters.css'

const Filters = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <ul className="filters__list">
      <li
        className={toggle ? 'filters__list__item open' : 'filters__list__item close'}
        onClick={() => setToggle(!toggle)}
      >
        <h2 className="filters__list__item__title">Recherche</h2>
      </li>
      <li
        className={!toggle ? 'filters__list__item open' : 'filters__list__item close'}
        onClick={() => setToggle(!toggle)}
      >
        <h2 className="filters__list__item__title">Installations</h2>
      </li>
    </ul>
  )
}

export default Filters
