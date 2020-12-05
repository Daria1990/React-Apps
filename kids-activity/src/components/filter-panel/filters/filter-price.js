import React from "react";
import RangeSlider from "../../range-slider";
import { MIN_ACTIVITY_PRICE, MAX_ACTIVITY_PRICE } from "../../../constants"; 

const FilterPrice = ({ onMouseUp }) => {

    return (
        <RangeSlider label="Цена до:" onMouseUp={ onMouseUp }
                    min={ MIN_ACTIVITY_PRICE } max={ MAX_ACTIVITY_PRICE }/>
    );
};

export default FilterPrice;