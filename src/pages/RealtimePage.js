import React from 'react'
import { useState } from 'react';
import { io } from 'socket.io-client';
import Map from '../component/Map/Map';
import Popup from '../component/Popup/Popup';
import Table from '../component/Table/Table';
import Trail from '../component/Trail/Trail';

const RealtimePage = () => {
  const socket = io.connect('http://103.24.56.242:3001');
  socket.connect();
  const [open, setOpen] = useState(false);
  return (
    <>
      <h1 className='title'>STEVIA</h1>
      <div style={{ position: "absolute", zIndex: "1" }}>
        <button onClick={() => setOpen(true)}>History</button>
      </div>
      {open ? <Popup closePopup={() => setOpen(false)} /> : null}
      <Map>
        <Trail socket={socket} />
      </Map>
      <Table socket={socket} />
      {/* <table>
        <thead>
          <tr>
            <th>Source</th>
            <th>Destination</th>
            <th>Msg</th>
          </tr>
        </thead>
        {data && data.map(datum =>
          <Table data={datum} />
        )}
      </table> */}
    </>
  )
}

export default RealtimePage