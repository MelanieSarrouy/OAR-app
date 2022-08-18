import React from 'react'
import Brand from './Brand'
import Country from './Country'
import Oar from './Oar'
import './search.css'

const Search = () => {
  return (
    <section className="section">
      <Oar />
      <hr></hr>
      <Brand />
      <Country />
      <button className="button searchButton" type="button">
        Rechercher
      </button>
    </section>
  )
}

export default Search
