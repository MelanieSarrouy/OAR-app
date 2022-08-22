import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'
import arrowDown from '../assets/chevron-down-solid.svg'
import arrowUp from '../assets/chevron-up-solid.svg'
import { normalizeAndLowerCase } from '../helpers/normalize'
import { editFacilitiesList } from '../Redux/actions/actionGetFacilities'
import { countrySelected } from '../Redux/actions/actionResults'

const Country = ({ facilities }) => {
  let facilitiesFiltered = useSelector((state) => state.getFacilities.facilitiesFiltered)
  let brandsFiltered = useSelector((state) => state.getBrands.brandsFiltered)

  const [country, setCountry] = useState('')
  const [toggle, setToggle] = useState(false)
  const [countriesFiltered, setCountriesFiltered] = useState([])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(countrySelected(''))
  }, [dispatch])

  let facilitiesUsed = facilitiesFiltered.length > 0 ? facilitiesFiltered : facilities
  let allCountries = []
  for (const facility of facilitiesUsed) {
    allCountries.push(facility.country)
  }
  allCountries = [...new Set(allCountries)]

  const handleClick = () => {
    setCountry('')
  }
  const handleFocus = () => {
    setCountriesFiltered(allCountries)
    setToggle(!toggle)
  }

  const handleChange = (e) => {
    setToggle(true)
    const entry = e.target.value
    setCountry(entry)
    setCountriesFiltered(allCountries)
    let newEntry = normalizeAndLowerCase(entry)
    let array = []
    for (const iterator of countriesFiltered) {
      let newCountry = normalizeAndLowerCase(iterator)
      if (newCountry.indexOf(newEntry) !== -1) {
        array.push(iterator)
      }
    }
    setCountriesFiltered(array)
    if (entry === '') {
      setCountriesFiltered(allCountries)
      if (brandsFiltered.length < 1) {
        dispatch(editFacilitiesList([]))
      }
    }
  }

  const handleChoice = (el) => {
    let array = []
    for (const facility of facilitiesUsed) {
      if (el === facility.country) {
        array.push(facility)
      }
    }
    dispatch(editFacilitiesList(array))
    dispatch(countrySelected(el))
    setCountriesFiltered(allCountries)
    setCountry(el)
  }

  return (
    <div className="category">
      <div className="form">
        <label className="form__label" htmlFor="brand">
          Pays
        </label>
        <div className="form__input__container">
          <div>
            <div className="form__input__container__field">
              <input
                className="input"
                id="brand"
                type="text"
                value={country}
                placeholder="Select..."
                onChange={(e) => handleChange(e)}
                onFocus={handleFocus}
                onBlur={() => dispatch(countrySelected(country))}
              />
              <img
                src={!toggle ? arrowDown : arrowUp}
                alt=""
                width={20}
                onClick={() => setToggle(!toggle)}
                className="chevron"
              />
            </div>
            {toggle && (
              <ul className="inputContainer__dropdown">
                {countriesFiltered.map((el, index) => (
                  <li key={index} onClick={() => handleChoice(el)}>
                    {el}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Button path="/facilities" className="button" content="Go" onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}

export default Country
