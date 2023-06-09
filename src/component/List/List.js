import React from 'react'
import './List.css'

const List = ({ data }) => {
  const getColorPrimary = (x) => {
    switch (x) {
      case 1:
        return "#cc3300"
      case 2:
        return "#B81FFF"
      case 3:
        return "#FFB72D"
      default:
        return "#aaa"
    }
  }
  const getColorSecondary = (x) => {
    switch (x) {
      case 1:
        return "#72161C"
      case 2:
        return "#571774"
      case 3:
        return "#735420"
      default:
        return "#aaa"
    }
  }
  return (
    <div className="list-item">
      <div className='list-mark'>
        <svg className="circle" height="30" width="30">
          <circle cx="15" cy="15" r="15" fill={getColorSecondary(data.priority)} />
          <circle cx="15" cy="15" r="10" stroke-width="2" stroke={getColorPrimary(data.priority)} fill='transparent' />
          <circle cx="15" cy="15" r="5" fill={getColorPrimary(data.priority)} />
        </svg>
      </div>
      <div className='list-detail'>
        <div className='country'>
          <span className={`fi fi-${(data.src_country_code).toLowerCase()}`} />
          <p className='country-code'>{data.src_country_code}</p>
          &nbsp;
          <svg className='arrow' stroke="white" fill="white" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em">
            <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z">
            </path>
          </svg>
          &nbsp;
          <span className={`fi fi-${(data.dst_country_code).toLowerCase()}`} />
          <p className='country-code'>{data.dst_country_code}</p>&nbsp;
        </div>
        <p>{data.msg}</p>
      </div>
    </div>

  )
}

export default List