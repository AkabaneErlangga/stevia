import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './Time.css'

const Time = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }

  });

  return (
    <div className='time'>
      <h1 >{date.toLocaleTimeString("en-GB")}</h1>
    </div>
  )
}

export default Time