import React from 'react'
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import "./Popup.css"
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
const Popup = ({ closePopup }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndStartDate] = useState(new Date());
  const navigate = useNavigate();
  return (
    <div className="popup-container">
      <div className="popup-body">
        <h2>Insert date and time</h2>
        <ReactDatePicker showTimeInput selected={startDate} onChange={(date) => setStartDate(date)} />
        <ReactDatePicker showTimeInput selected={endDate} onChange={(date) => setEndStartDate(date)} />
        <button onClick={closePopup}>Close X</button>
        <button onClick={() => navigate('/history', {state: {
          startDate: startDate,
          endDate: endDate
        }})}>Show</button>

      </div>
    </div>
  )
}

export default Popup