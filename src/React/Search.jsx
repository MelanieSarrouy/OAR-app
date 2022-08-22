import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
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
  let oarSelected = useSelector((state) => state.getResults.oar)
  const dispatch = useDispatch()

  let navigate = useNavigate()

  useEffect(() => {
    dispatch(editBrandsList([]))
  }, [dispatch])

  useEffect(() => {
    dispatch(editFacilitiesList([]))
  }, [dispatch])

  const handleClick = (e) => {
    e.preventDefault()
    if (oarSelected !== '') {
      return navigate(`/facilities/${oarSelected}`)
    } else {
      return navigate(`/facilities`)
    }
  }

  return (
    <section className="section">
      <Oar facilities={facilities} />
      <hr></hr>
      <form method="" className="form">
        <Brand brands={brands} facilities={facilities} />
        <Country facilities={facilities} />
        <button type="submit" className="button searchButton" onClick={(e) => handleClick(e)}>
          Rechercher
        </button>
      </form>
    </section>
  )
  // }
}

export default Search
