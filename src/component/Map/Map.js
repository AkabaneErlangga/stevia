import React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import './Map.css'
import Legend from '../Legend/Legend';
import { Tooltip } from 'react-tooltip'

const Map = ({ children }) => {
  return (
    <div className='map' style={{ marginTop: "-5%", position: "relative" }}>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 155,
        }}
        width={1000}
        height={500}
        style={{ width: "100%", height: "auto" }} >
        <Geographies geography="world copy.topojson">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo}
                // fill="#111"
                style={{
                  hover: {
                    fill: "#FF6F61",
                    stroke: "#9E1030",
                    strokeWidth: 0.75,
                    outline: "none",
                    transition: "all 250ms"
                  },
                  pressed: {
                    fill: "#DD4132",
                    stroke: "#9E1030",
                    strokeWidth: 0.75,
                    outline: "none",
                    transition: "all 250ms"
                  }
                }}
                fill="#101010"
                stroke="#888"
                strokeWidth="0.4"
                data-tooltip-id='map'
                data-tooltip-content={geo.properties.name}
                data-tooltip-place='top'
                />
            ))
          }
        </Geographies>
        {children}
      </ComposableMap>
      <Legend />
      <Tooltip id="map" />
      <p className='credit'>Powered by Mata Elang</p>
    </div>
  )
}

export default Map