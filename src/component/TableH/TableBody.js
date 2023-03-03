import React from 'react'

const TableBody = ({ data }) => {
  console.log(data);
  return (
    <tbody>
      <tr>
        <td style={{'border-right': 'none'}}><span className={`fi fi-${(data.src_country_code).toLowerCase()}`} /></td>
        <td style={{'border-left': 'none'}}>{data.src_country_code}</td>
        <td style={{'border-right': 'none'}}><span className={`fi fi-${(data.dst_country_code).toLowerCase()}`} /></td>
        <td style={{'border-left': 'none'}}>{data.dst_country_code} </td>
        <td id="msg-col">{data.msg}</td>
      </tr>
    </tbody>
  )
}

export default TableBody