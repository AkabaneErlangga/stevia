import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import List from '../List/List';
import './Table.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";

const Table = ({ socket, mode }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    socket.on(mode, (x) => {
      setData(x)
      console.log(x);
    })
  }, [socket])
  return (
    <div className='list'>
      {data && data.length === 0 && <p>Waiting for data...</p>}
      {data && data.map(datum => (
        // <TableBody data={datum} />
        <List data={datum} />
      ))
      }
    </div>
  )
}

export default Table