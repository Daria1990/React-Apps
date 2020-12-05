import React from "react";
import RangeSlider from "../../range-slider";
import { MIN_KID_AGE, MAX_KID_AGE } from "../../../constants"; 

const FilterAge = ({ onMouseUp }) => {

    return (
        <RangeSlider label="Возраст от:" onMouseUp={ onMouseUp } 
                    min={ MIN_KID_AGE } max={ MAX_KID_AGE }/>
    );
};

export default FilterAge;