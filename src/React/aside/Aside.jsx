import React from 'react'
import Header from './header/Header'
import './aside.css'
import { Routes, Route } from 'react-router-dom'
import Search from './search/Search'
import Facilities from './facilities/Facilities'
import Contributor from './contributors/Contributor'


const Aside = () => {
  return (
    <aside className="aside">
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/facilities/:id" element={<Contributor />} />
        <Route path="/facilities/*" element={<Search />} />
        <Route path="/*" element={<Search />} />
      </Routes>
    </aside>
  )
}

export default Aside
