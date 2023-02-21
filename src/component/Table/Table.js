import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Table.css'
import TableBody from './TableBody';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Table = ({ socket }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    socket.on('batch', (x) => {
      // if (data.length >= 5) {
        // const newArr = [...data.slice(1)]
        // setData([...newArr, x])
      // } else {
        setData(x)
      //   }
      console.log(x);

    })
  }, [socket])
  return (
    <table>
      <thead>
        <tr>
          <th colspan="2">Source</th>
          <th colspan="2">Destination</th>
          <th>Msg</th>
        </tr>
      </thead>
      {data && data.map(datum => (
        <TableBody data={datum} />
      ))
      }
    </table>
  )
}

export default Table