import React from 'react'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import Map from '../component/Map/Map'
import Table from '../component/TableH/Table'
import Trail from '../component/TrailH/Trail'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const HistoryPage = () => {
  const location = useLocation();
  const socket = io('http://103.24.56.242:3001');
  socket.connect();
  socket.emit("getByQuery",
    { "startDate": location.state.startDate, "endDate": location.state.endDate }
  );
  // console.log(location.state);
  // useEffect(() => {
  //   axios.post('http://localhost:3001/history', {
  //     startDate: location.state.startDate,
  //     endDate: location.state.endDate
  //   }).then(res => {
  //     console.log(res.data);
  //   })
  // })

  return (
    <>
      <h1 className='title'>STEVIA | History</h1>
      <Map>
        <Trail socket={socket} />
      </Map>
      <Table socket={socket} />
    </>
  )
}

export default HistoryPage