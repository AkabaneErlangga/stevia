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
      setData(data =>
        [...data, x]
      )
    })
  }, [socket])
  if (data.length >= 5) {
    data.splice(0, 1)
  }
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