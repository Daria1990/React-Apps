import React, { useState } from "react";

import "./range-slider.css";

const RangeSlider = ({label, onMouseUp, ...sliderProps }) => {
    const [rangeval, setRangeval] = useState(0);

    return (
        <div className="mb-4">
            <h5>{ label } { rangeval }</h5>
            <input id="customRange" type="range" className="custom-range "
                { ...sliderProps } value={ rangeval }
                onChange={ (event) => setRangeval(event.target.value) } onMouseUp={ onMouseUp } />
        </div>
      );
  };

  export default RangeSlider;