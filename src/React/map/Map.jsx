import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import Marker from './Marker'

const points = [
  { id: 1, title: 'Round Pond', lat: 51.506, lng: -0.184 },
  { id: 2, title: 'The Long Water', lat: 51.508, lng: -0.175 },
  { id: 3, title: 'The Serpentine', lat: 51.505, lng: -0.164 },
]

const Map = () => {
  const [location, setLocation] = useState({
    center: {
      lat: 48.866667,
      lng: 2.333333,
    },
    zoom: 5,
  })

  return (
    <section className="map" id="map">
      <div>
        <GoogleMapReact
          className="react-map"
          // bootstrapURLKeys={{ key: 'AIzaSyB_Y9_gkv8T-JmDuZcvZmCGlRKlfRCeL0Q', language: 'fr' }}
          defaultCenter={{ lat: 48.866667, lng: 2.333333 }}
          defaultZoom={0}
          center={location.center}
          onChange={({ center, zoom }) => {
            setLocation({ center: center, zoom: zoom })
          }}
        >
          {points.map(({ lat, lng, id }) => {
            return (
              <Marker
                key={id}
                lat={lat}
                lng={lng}
                text={id}
              />
            )
          })}
        </GoogleMapReact>
      </div>
    </section>
  )
}

export default Map
