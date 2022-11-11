import {useMemo} from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import "../styles/Contact.css"

function Location() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(() => ({lat:19.927, lng: -99.1453216}), [])
  const mark = useMemo(() => ({lat:19.9248379, lng: -99.1453216}), [])
  if (!isLoaded) return <div>Loading...</div>

  return (
    <div className='location-container'>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName='map-container'>
        <Marker position={mark}></Marker>
      </GoogleMap>
    </div>
  )

}

export default Location
