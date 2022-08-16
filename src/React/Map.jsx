import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'

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
          bootstrapURLKeys={{ key: 'AIzaSyB_Y9_gkv8T-JmDuZcvZmCGlRKlfRCeL0Q', language: 'fr' }}
          defaultCenter={location.center}
          defaultZoom={location.zoom}
          center={location.center}
          onChange={({ center, zoom }) => {
            setLocation({ center: center, zoom: zoom })
          }}
        ></GoogleMapReact>
      </div>
    </section>
  )
}

export default Map
