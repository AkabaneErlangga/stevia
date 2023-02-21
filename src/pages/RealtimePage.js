import React from 'react'
import { io } from 'socket.io-client';
import Map from '../component/Map/Map';
import Table from '../component/Table/Table';
import Trail from '../component/Trail/Trail';

const socket = io.connect('http://103.24.56.242:3001');
socket.connect();
const RealtimePage = () => {
  return (
    <>
      <Map>
        <Trail socket={socket}/>
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