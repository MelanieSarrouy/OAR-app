import React, { useEffect } from 'react'
import Brand from './Brand'
import Country from './Country'
import Oar from './Oar'
import '../styles/search.css'
import { useSelector, useDispatch } from 'react-redux'
import { editFacilitiesList } from '../Redux/actions/actionGetFacilities'

const Search = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(editFacilitiesList([]))
  }, [dispatch])
  let brands = useSelector((state) => state.getBrands.brands)
  let facilities = useSelector((state) => state.getFacilities.facilities)

  return (
    <section className="section">
      <Oar facilities={facilities} />
      <hr></hr>
      <Brand brands={brands} />
      <Country />
      <button className="button searchButton" type="button">
        Rechercher
      </button>
    </section>
  )
  // }
}

export default Search
