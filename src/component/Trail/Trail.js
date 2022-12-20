import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Marker } from 'react-simple-maps'
import Line from '../Line/Line'

const Trail = ({ socket }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    socket.on('batch', (x) => {
      setData(data =>
        [...data, x]
      )
    })
  }, [socket])
  if (data.length >= 5) {
    data.splice(0, 1)
  }
  return (
    <>
      {data && data.map(datum => (
        <>
          <Line data={datum} />
          <Marker coordinates={[datum.src_location.lon, datum.src_location.lat]}>
            <circle r={3} fill="#F53" />
          </Marker>
          <Marker coordinates={[datum.dst_location.lon, datum.dst_location.lat]}>
            <circle r={3} fill="#F53" />
            <circle fill="none" r="5" stroke="#F53" stroke-width="2">
              <animate attributeName="r" from="8" to="20" dur="1.5s" begin="0s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
            </circle>
          </Marker>
        </>
      ))
      }
    </>
  )
}

export default Trail