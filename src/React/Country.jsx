import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'
import arrowDown from '../assets/chevron-down-solid.svg'
import arrowUp from '../assets/chevron-up-solid.svg'
import { normalizeAndLowerCase } from '../helpers/normalize'
import { editFacilitiesList } from '../Redux/actions/actionGetFacilities'

const Country = ({ facilities }) => {
  let facilitiesFiltered = useSelector((state) => state.getFacilities.facilitiesFiltered)

  const [country, setCountry] = useState('')
  const [toggle, setToggle] = useState(false)
  const [countriesFiltered, setCountriesFiltered] = useState([])

  const dispatch = useDispatch()

  let allCountries = []

  let facilitiesUsed
  if (facilitiesFiltered.length > 0) {
    facilitiesUsed = facilitiesFiltered
  } else {
    facilitiesUsed = facilities
  }

  const selectCountries = () => {
    for (const facility of facilitiesUsed) {
      allCountries.push(facility.country)
    }
    let countries = [...new Set(allCountries)]
    setCountriesFiltered(countries)
  }

  useEffect(() => {
    selectCountries()
  }, [])
  console.log(allCountries)

  console.log(countriesFiltered)

  const handleClick = () => {
    console.log('test')
    let array = []
    console.log(country)
    for (const facility of facilitiesUsed) {
      if (country === facility.country) {
        console.log(facility)
        array.push(facility)
      }
    }
    dispatch(editFacilitiesList(array))
  }

  const handleChange = (e) => {
    setToggle(true)
    const entry = e.target.value
    setCountry(entry)
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
      selectCountries()
      console.log('test')
    }
  }

  const handleChoice = (el) => {
    let countries = [...new Set(allCountries)]
    setCountriesFiltered(countries)
    console.log(el)
    setCountry(el)
  }

  return (
    <div className="category">
      <form method="" className="form">
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
                onFocus={() => setToggle(!toggle)}
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
          <Button path="/facilities" content="Go" onClick={handleClick} />
        </div>
      </form>
    </div>
  )
}

export default Country
