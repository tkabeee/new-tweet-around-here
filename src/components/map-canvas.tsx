import { createRef, useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Map = styled.div`
  width: 100vw;
  height: 100vh;
`

export const MapCanvas = () => {
  const mapRef = useRef<HTMLInputElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>

  // 岡山後楽園
  const defaultCenter = {
    lat: 34.666624,
    lng: 133.935692,
  }

  useEffect(() => {
    if (mapRef && mapRef.current) {
      const map = new google.maps.Map(mapRef.current, {
        center: defaultCenter,
        zoom: 10,
      })
    }
  }, [])

  return (
    <>
      <Map id="googleMap" ref={mapRef} />
    </>
  )
}
