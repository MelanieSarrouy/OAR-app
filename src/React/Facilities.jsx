import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/facilities.css'

const Facilities = () => {
  const facilities = useSelector((state) => state.getFacilities.facilitiesFiltered)

  if (facilities.length === 0) {
    return (
      <div className="facilitiesList">
        <p className="facilities__item__link__title">
          Aucune installation à afficher <br></br>Veuillez effectuer une nouvelle recherche
        </p>
      </div>
    )
  } 
  else {
    return (
      <ul className="facilitiesList">
        {facilities.map((el, index) => {
          const { idOAR, name, country, adresse } = el
          return (
            <li key={index} className="facilities__item" id={`li-${idOAR}`}>
              <Link
                id={`link-${idOAR}`}
                to={`/facilities/${idOAR}`}
                className="facilities__item__link"
              >
                <h3 className="facilities__item__link__title" id={`h3-${idOAR}`}>
                  {name} - {country}
                </h3>
                <p className="facilities__item__link__address" id={`p-${idOAR}`}>
                  {adresse} + {idOAR}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }

}

export default Facilities
