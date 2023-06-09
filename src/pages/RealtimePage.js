import React from 'react'
import { useState } from 'react';
import { io } from 'socket.io-client';
import Map from '../component/Map/Map';
import Popup from '../component/Popup/Popup';
import Table from '../component/Table/Table';
import Trail from '../component/Trail/Trail';

const socket = io.connect('http://103.24.56.242:3001');
// const socket = io.connect('http://localhost:3001');
// const socket = io.connect('http://10.10.10.63:3001');
socket.connect();
const RealtimePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <h1 className='title'>STEVIA</h1>
      <div style={{ position: "absolute", zIndex: "1" }}>
        <button onClick={() => setOpen(true)}>Spatio Temporal</button>
      </div>
      {open ? <Popup closePopup={() => setOpen(false)} /> : null}
      <Map>
        <Trail socket={socket} mode="batch" />
      </Map>
      <Table socket={socket} mode="batch" />
    </>
  )
}

export default RealtimePage