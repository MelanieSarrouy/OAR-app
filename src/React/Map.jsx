import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import '../styles/map.css'
import Marker from './Marker'
import { useSelector } from 'react-redux'

const Map = () => {
  const facilities = useSelector((state) => state.getFacilities.facilitiesFiltered)
  const [location, setLocation] = useState({})
  const [points, setPoints] = useState([])

  const defaultCoord = {
    center: {
      lat: 48.866667,
      lng: 2.333333,
    },
    zoom: 0,
  }
  const calcMiddleLat = (points) => {
    if (points.length > 1) {
      let allLat = []
      for (const point of points) {
        allLat.push(point.lat)
      }
      let lengthLat = allLat.length
      let reduce = allLat.reduce((acc, value) => acc + value)
      return reduce / lengthLat
    } else if (points.length === 1) {
      return points[0].lat
    } else {
      return 48.866667
    }
  }
  const calcMiddleLnt = (points) => {
    if (points.length > 1) {
      let allLng = []
      for (const point of points) {
        allLng.push(point.lng)
      }
      let lengthLng = allLng.length
      let reduce = allLng.reduce((acc, value) => acc + value)
      return reduce / lengthLng
    } else if (points.length === 1) {
      return points[0].lng
    } else {
      return 2.333333
    }
  }

  useEffect(() => {
    let array = []
    for (const facility of facilities) {
      array.push(facility.gps)
    }
    setPoints(array)
  }, [facilities])

  useEffect(() => {
    setLocation({
      center: {
        lat: calcMiddleLat(points),
        lng: calcMiddleLnt(points),
      },
      zoom: 5,
    })
  }, [points])

  return (
    <section className="map" id="map">
      <div>
        <GoogleMapReact
          className="react-map"
          bootstrapURLKeys={{ key: 'AIzaSyB_Y9_gkv8T-JmDuZcvZmCGlRKlfRCeL0Q', language: 'fr' }}
          defaultCenter={defaultCoord.center}
          defaultZoom={defaultCoord.zoom}
          center={location.center}
          zoom={location.zoom}
          onChange={({ center, zoom }) => {
            setLocation({ center: center, zoom: zoom })
          }}
        >
          {points.map((el, index) => {
            return <Marker key={index} lat={el.lat} lng={el.lng} text={index + 1} />
          })}
        </GoogleMapReact>
      </div>
    </section>
  )
}

export default Map
