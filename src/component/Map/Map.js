import React, { useEffect, useState } from 'react'
import { ComposableMap, Geographies, Geography, Graticule, Marker } from 'react-simple-maps'
import Trail from '../Trail/Trail';
import { ref_country_codes } from '../../country_coor';
import Table from '../Table/Table';
import Time from '../Time/Time';
import './Map.css'
import RealtimePage from '../../pages/RealtimePage';

const Map = ({ children }) => {
  return (
    <div className='map' style={{ marginTop: "-120px", position: "relative" }}>
      <ComposableMap width={1280} height={720}
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 200,
        }}>
        {/* <Graticule stroke="#DDD" strokeWidth={0.5}/> */}
        <Geographies geography="world.topojson">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo}
                // fill="#111"
                fill="#171010"
                stroke="#888" />
            ))
          }
        </Geographies>
        {children}
      </ComposableMap>
      <Time />
      <p className='credit'>Powered by Mata Elang</p>
    </div>
  )
}

export default Map