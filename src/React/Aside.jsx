import React from 'react'
import Filters from './Filters'
import Header from './Header'
import './aside.css'

const Aside = () => {
  return (
    <aside className="aside">
      <Header />
      <Filters />
    </aside>
  )
}

export default Aside
