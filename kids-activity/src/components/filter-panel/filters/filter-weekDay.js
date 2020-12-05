import React, { useState, Component } from "react";
import MultiSelect from "react-multi-select-component";

import { weekDayNames } from "../../../constants";
 
class FilterWeekDay extends Component {
    
    state = {   
        selected: [],  
    }

    setSelected = (selected) => {
        this.setState({ selected });
        this.props.onChange(selected);
    };
 
    render() {
        const { selected } = this.state;

        return (
            <div className="mb-4">
                <h5>Выбрать дни недели</h5>
                <MultiSelect options={ weekDayNames } value={ selected }
                        onChange={ this.setSelected  }
                        overrideStrings={ {
                                "selectAll": "Выбрать все",
                                "selectSomeItems": "Выбрать",
                                "allItemsAreSelected": "Выбраны все элементы.",
                                "search": "Поиск",
                                "clearSearch": "Очистить поиск"
                            } 
                        }
                />
            </div>
        );
    }
};
 
export default FilterWeekDay;