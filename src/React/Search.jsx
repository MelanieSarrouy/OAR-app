import React, { useEffect } from 'react'
import Brand from './Brand'
import Country from './Country'
import Oar from './Oar'
import '../styles/search.css'
import { useSelector, useDispatch } from 'react-redux'
import { editBrandsList } from '../Redux/actions/actionGetBrands'
import { editFacilitiesList } from '../Redux/actions/actionGetFacilities'

const Search = () => {
  let brands = useSelector((state) => state.getBrands.brands)
  let facilities = useSelector((state) => state.getFacilities.facilities)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(editBrandsList([]))
  }, [dispatch])

  useEffect(() => {
    dispatch(editFacilitiesList([]))
  }, [dispatch])

  return (
    <section className="section">
      <Oar />
      <hr></hr>
      <Brand brands={brands} facilities={facilities} />
      <Country facilities={facilities} />
      <button className="button searchButton" type="button">
        Rechercher
      </button>
    </section>
  )
  // }
}

export default Search
