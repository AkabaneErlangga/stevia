import React from 'react'
import Time from '../Time/Time'
import "./Legend.css"

const Legend = () => {
  return (
    <div className='legend'>
      <Time />
      <div className='legend-item'>
        <svg height="40" width="40">
          <circle cx="20" cy="20" r="15" fill="#72161C" />
          <circle cx="20" cy="20" r="10" stroke-width="2" stroke="#cc3300" fill='transparent'/>
          <circle cx="20" cy="20" r="5" fill="#cc3300" />
        </svg>
        <h3>High</h3>
      </div>
      <div className='legend-item'>
        <svg height="40" width="40">
          <circle cx="20" cy="20" r="15" fill="#571774" />
          <circle cx="20" cy="20" r="10" stroke-width="2" stroke="#B81FFF" fill='transparent'/>
          <circle cx="20" cy="20" r="5" fill="#B81FFF" />
        </svg>
        <h3>Medium</h3>
      </div>
      <div className='legend-item'>
        <svg height="40" width="40">
          <circle cx="20" cy="20" r="15" fill="#735420" />
          <circle cx="20" cy="20" r="10" stroke-width="2" stroke="#FFB72D" fill='transparent'/>
          <circle cx="20" cy="20" r="5" fill="#FFB72D" />
        </svg>
        <h3>Low</h3>
      </div>
    </div>
  )
}

export default Legend