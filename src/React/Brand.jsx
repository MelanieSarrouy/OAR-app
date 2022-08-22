import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from './Button'
import arrowDown from '../assets/chevron-down-solid.svg'
import arrowUp from '../assets/chevron-up-solid.svg'
import { normalizeAndLowerCase } from '../helpers/normalize'
import { editBrandsList } from '../Redux/actions/actionGetBrands'
import { editFacilitiesList } from '../Redux/actions/actionGetFacilities'

const Brand = ({ brands, facilities }) => {

  const [brand, setBrand] = useState('')
  const [toggle, setToggle] = useState(false)
  const [updateBrands, setUpdateBrands] = useState([])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(editBrandsList([]))
  }, [dispatch])

  useEffect(() => {
    setUpdateBrands([...brands])
  }, [brands])

  const handleChange = (e) => {
    setToggle(true)
    const entry = e.target.value
    setBrand(entry)
    let newEntry = normalizeAndLowerCase(entry)
    let array = []
    for (const brand of brands) {
      let newBrand = normalizeAndLowerCase(brand.name)
      if (newBrand.indexOf(newEntry) !== -1) {
        array.push(brand)
      }
    }
    setUpdateBrands(array)
    if (entry === '') {
      dispatch(editBrandsList([]))
      dispatch(editFacilitiesList([]))
    }
  }
  const handleClick = () => {
    dispatch(editBrandsList(updateBrands))
  }
  const handleChoice = (el) => {
    setBrand(el.name)
    setUpdateBrands([el])
    dispatch(editBrandsList([el]))
    upDateFacilitiesFiltered(el)
  }

  const upDateFacilitiesFiltered = (el) => {
    let facilitiesFiltered = []
    const brandSelected = el
    let brandFacilities = brandSelected.contributors
    for (const iterator of brandFacilities) {
      for (const facility of facilities) {
        if (facility.name === iterator) {
          facilitiesFiltered.push(facility)
        }
      }
    }
    dispatch(editFacilitiesList(facilitiesFiltered))
  }

  return (
    <div className="category">
      <div className="form">
        <label className="form__label" htmlFor="brand">
          Marque
        </label>
        <div className="form__input__container">
          <div>
            <div className="form__input__container__field">
              <input
                className="input"
                id="brand"
                type="text"
                value={brand}
                placeholder="Select..."
                onChange={(e) => handleChange(e)}
                onFocus={() => setToggle(!toggle)}
                onBlur={(e) => handleChange(e)}
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
                {updateBrands.map((el, index) => (
                  <li key={index} onClick={() => handleChoice(el)}>
                    {el.name}
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

export default Brand
