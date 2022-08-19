import React from 'react'
import { useSelector } from 'react-redux'
import './details.css'

const Details = () => {
  let facility = useSelector((state) => state.getFacilities.facilitiesFiltered)
  const { name, idOAR, adresse, country, gps } = facility
  return (
    <div className="details-container">
      <p className="details-container__label">OAR ID :</p>
      <h3 className="details-container__content">{idOAR}</h3>
      <hr></hr>
      <p className="details-container__label">Installation :</p>
      <h4 className="details-container__content">{name}</h4>
      <hr></hr>
      <p className="details-container__label">Adresse :</p>
      <p className="details-container__content">{adresse}</p>
      <hr></hr>
      <p className="details-container__label">Pays :</p>
      <p className="details-container__content">{country}</p>
      <hr></hr>
      <p className="details-container__label">Coordonnées GPS :</p>
      <div className="details-container__gps">
      <div>

        <p className="details-container__label">latitude :</p>
        <p className="details-container__content">{gps.lat}</p>
      </div>
      <div>

        <p className="details-container__label">longitude :</p>
        <p className="details-container__content">{gps.lng}</p>
      </div>
      </div>
    </div>
  )
}

export default Details
