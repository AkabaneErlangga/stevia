import React from 'react'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import Map from '../component/Map/Map'
import Table from '../component/Table/Table'
import Trail from '../component/Trail/Trail'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const HistoryPage = () => {
  const location = useLocation();
  
  const socket = io.connect('http://103.24.56.242:3001');
  // const socket = io('http://localhost:3001');
  socket.connect();
  socket.emit("getByQuery",
    { "startDate": location.state.startDate, "endDate": location.state.endDate }
    // { "startDate": "2023-02-24T07:20:10.000Z", "endDate": "2023-02-24T08:20:30.000Z" }
  );
  console.log(location.state);
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
        <Trail socket={socket} mode="history"/>
      </Map>
      <Table socket={socket} mode="history"/>
    </>
  )
}

export default HistoryPage