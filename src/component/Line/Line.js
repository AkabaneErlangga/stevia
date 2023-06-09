import React from 'react'
import { forwardRef } from 'react'
import { useMapContext } from "react-simple-maps"

const Line = ({ data, color }) => {
  const CustomLine = forwardRef(
    ({ coordinates = [[0, 0], [0, 0]], ...restProps }, ref) => {
      // convert LonLat to XY coordinat
      const { projection } = useMapContext()

      // https://stackoverflow.com/a/49286885
      const [x1, y1] = projection(coordinates[0])
      const [x2, y2] = projection(coordinates[1])
      // define middle point
      var mpx = (x1 + x2) * 0.5;
      var mpy = (y1 + y2) * 0.5;
      var curve
      // define control point
      if (x1 === x2 && y1 === y2) {
        var c1x = x1 - 75;
        var c1y = y1 - 75;
        var c2x = x1 + 75;
        var c2y = y1 - 75;
        curve = "M " + x1 + " " + y1 +
          " C " + c1x + " " + c1y + ", " + c2x + " " + c2y + ", " + 
          x2 + " " + y2;
      } else {
        var theta = Math.atan2(y2 - y1, x2 - x1);
        var offset = -50;
        var cx = mpx;
        var cy = mpy + offset * Math.cos(theta);
        // https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#b%C3%A9zier_curves
        curve = "M " + x1 + " " + y1 + " Q " + cx + " " + cy + " " + x2 + " " + y2;
      }

      return <path d={curve} {...restProps} />
    }
  )
  return (
    // <></>
    // <Line
    //   to={[to.longitude, to.latitude]}
    //   from={[from.longitude, from.latitude]}
    //   stroke="#FF5533"
    //   strokeWidth={2}
    // />
    // <Line
    //   to={[to.dst_location.lon, to.dst_location.lat]}
    //   from={[from.src_location.lon, from.src_location.lat]}
    //   stroke="#FF5533"
    //   strokeWidth={2}
    // />
    <CustomLine
      id="trail"
      coordinates={[[data.src_location.lon, data.src_location.lat], [data.dst_location.lon, data.dst_location.lat]]}
      strokeWidth={2}
      stroke={color}
      fill='transparent'
    />
  )
}

export default Line