import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Marker } from 'react-simple-maps'
import Line from '../Line/Line'

const Trail = ({ socket, mode }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    socket.on(mode, (x) => {
      console.log(x);
      // if (data.length >= 5) {
      //   const newArr = [...data.slice(1)]
      //   setData([...newArr, x])
      // } else {
      //   setData(data =>
      //     [...data, x]
      //     )
      //   }
      setData(x)
    })
  }, [socket])
  // if (data.length >= 5) {
  //   data.splice(0, 1)
  // }
  //create function getColor use switcch case
  const getColor = (x) => {
    switch (x) {
      case 1:
        return "#cc3300"
      case 2:
        return "#B81FFF"
      case 3:
        return "#FFB72D"
      default:
        return "#aaa"
    }
  }

  return (
    <>
      {data && data.map(datum => (
        <>
          <Line data={datum} color={getColor(datum.priority)} />
          <Marker coordinates={[datum.src_location.lon, datum.src_location.lat]}>
            <circle r={3} fill={getColor(datum.priority)} />
            <text textAnchor="middle" fill="#Fff" fontSize={10}>{datum.src_country_code}</text>
          </Marker>
          <Marker coordinates={[datum.dst_location.lon, datum.dst_location.lat]}>
            <circle r={3} fill={getColor(datum.priority)} />
            <circle fill="none" r="5" stroke={getColor(datum.priority)} stroke-width="2">
              <animate attributeName="r" from="8" to="20" dur="1.5s" begin="0s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
            </circle>
            <text textAnchor="middle" fill="#Fff" fontSize={10}>
              {datum.dst_country_code}
            </text>
          </Marker>
        </>
      ))
      }
    </>
  )
}

export default Trail