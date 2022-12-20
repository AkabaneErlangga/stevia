import React from 'react'
import { io } from 'socket.io-client';

export const socket = () => {
  const socket = io.connect('http://localhost:3001');
  socket.connect();
  return {
    socket
  }
}
